(function() {
    // Context Menu
    //////////////////
    function createPageContextMenu() {
        chrome.contextMenus.create({
            type: "normal",
            title: "Create Gist",
            contexts: ["page"],
            onclick: function(info, tab) {
                chrome.tabs.sendMessage(tab.id, {
                    id: "contextMenu:createGist",
                    data: {
                        url: info.pageUrl,
                        content: ""
                    }
                });
            }
        });
    }

    function createSelectionContextMenu() {
        chrome.contextMenus.create({
            type: "normal",
            title: "Save as Gist",
            contexts: ["selection"],
            onclick: function(info, tab) {
                chrome.tabs.sendMessage(tab.id, {
                    id: "contextMenu:saveAsGist",
                    data: {
                        url: info.pageUrl,
                        content: info.selectionText
                    }
                });
            }
        });
    }

    createPageContextMenu();
    createSelectionContextMenu();

    // Browser Action
    //////////////////
    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.sendMessage(tab.id, {
            id: "contextMenu:saveAsGist",
            data: {
                url: tab.url,
                content: ""
            }
        });
    });

    // Message Passing
    //////////////////
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            // load storage
            if (request.action === "storage:load") {
                chrome.storage.sync.get(request.key, function() {
                });
            }

            // save storage
            if (request.action === "storage:save") {
                chrome.storage.sync.set({
                    "value": request.value
                }, function() {
                    sendResponse(true);
                });
            }

            // watch for iframe commands
            if (request.action === "inject:commandWatcher") {
                chrome.tabs.executeScript(sender.tab.id, {
                    file: "javascript/watcher.js",
                    allFrames: true
                });
            }

            // pass to iframe's parent
            if (request.action === "newGist:close") {
                chrome.tabs.sendMessage(sender.tab.id, {
                    id: request.action
                });
            }

            // open GistBox if not already open, refresh otherwise
            if (request.action === "gistBox:openAndRefresh") {
                chrome.tabs.query({
                    url: "*://app.gistboxapp.com/*"
                }, function(tabs) {
                    if (tabs.length === 0) {
                        chrome.tabs.create({
                            url: "https://app.gistboxapp.com"
                        });
                    } else {
                        var gistBoxTab = tabs[0];
                        chrome.tabs.update(gistBoxTab.id, {
                            active: true
                        });

                        // just pick the first tab and trigger the refresh
                        var script = 'var evt = document.createEvent("HTMLEvents");' +
                            'evt.initEvent("click", true, true );' +
                            'document.getElementsByClassName("refresh-gists")[0].dispatchEvent(evt);';

                        chrome.tabs.executeScript(gistBoxTab.id, {
                            code: script
                        });
                    }
                });
            }
        }
    );

    // Tutorial
    //////////////////
    function startClipperTutorial() {
        // only happens once per install
        if (!localStorage["clipperTutorialStarted"]) {
            localStorage["clipperTutorialStarted"] = true;
            chrome.tabs.create({
                url: "http://www.gistboxapp.com/clipper-tutorial"
            });
        }
    }

    startClipperTutorial();
})();
