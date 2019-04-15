chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html',
        {
            'innerBounds': {
                'width': 1062,
                'height': 768,
                'minWidth': 600,
                'minHeight': 600
            }
        },
        function(win) {
            var APPURL = "https://" + chrome.i18n.getMessage("@@extension_id") + ".chromiumapp.org/";
            var FACEBOOK_LOGIN_SUCCESS_URL = encodeURIComponent("http://www.any.do/facebook_proxy/login_success?redirect=" + encodeURIComponent(APPURL));
            var FACEBOOK_APP_ID = "218307504870310";
            var FACEBOOK_PERMISSIONS = "public_profile,user_friends,email";
            var FACEBOOK_OAUTH_URL = "https://www.facebook.com/dialog/oauth?display=touch&scope=" + FACEBOOK_PERMISSIONS + "&client_id=" + FACEBOOK_APP_ID + "&redirect_uri=" + FACEBOOK_LOGIN_SUCCESS_URL;

            chrome.notifications.onButtonClicked.addListener( function (notificationId, buttonIndex) {
                if (buttonIndex === 0) { //Snooze button
                    chrome.notifications.getAll(function (notifications) {
                        for (notification in notifications) {
                            if (notification === notificationId)
                            {
                                setTimeout(function () {
                                    chrome.notifications.create(notificationId, {
                                        type: 'basic',
                                        iconUrl: 'reminder.png',
                                        title: 'Any.do Reminder',
                                        message: notificationId,
                                        buttons: [{title: "Remind me in 10 minutes", iconUrl:"snooze.png"}]
                                    }, function (){});
                                }, 10 * 60 * 1000);
                                chrome.notifications.clear(notificationId, function () {});
                            }
                        }
                    });
                }
            });

            chrome.notifications.onClicked.addListener(function (notification) {
                chrome.notifications.getAll(function (notifications) {
                    for (notification in notifications) {
                        if (notification === notificationId)
                        {
                            chrome.notifications.clear(notificationId, function () {});
                        }
                    }
                });

                if(chrome.app.window.getAll().length === 0) {
                    chrome.app.runtime.onLaunched.dispatch();
                } else {
                    chrome.app.window.getAll()[0].show();
                }
            });

            chrome.alarms.onAlarm.addListener(function( alarm ) {
                chrome.notifications.create(alarm.name, {
                    type: 'basic',
                    iconUrl: 'reminder.png',
                    title: 'Any.do Reminder',
                    message: alarm.name,
                    buttons: [{title: "Remind me in 10 minutes", iconUrl:"snooze.png"}]
                }, function (){});
            });

            chrome.runtime.onMessageExternal.addListener(
                function(request, sender, sendResponse) {
                    if (request.message === "addNotification") {
                        var data = JSON.parse(request.data);
                        chrome.alarms.create(data.body, {when: data.when});
                    } else if (request.message === 'clearAllNotifications') {
                        chrome.alarms.clearAll();
                    }
                });

            win.contentWindow.onload = function () {
                var webview = win.contentWindow.document.querySelector('#main');

                webview.addEventListener('newwindow', function (e) {
                      e.preventDefault();
                      // e.targetUrl contains the target URL of the original link click
                      // or window.open() call: use it to open your own window to it.
                      // Something to keep in mind: window.open() called from the
                      // app's event page is currently (Nov 2013) handicapped and buggy
                      // (e.g. it doesn't have access to local storage, including cookie
                      // store). You can try to use it here and below, but be prepare that
                      // it may sometimes produce bad results.
                      // chrome.app.window.create('');

                      if(e.name === 'facebook') {
                          chrome.identity.launchWebAuthFlow(
                              {
                                  url: FACEBOOK_OAUTH_URL,
                                  interactive: true
                              },
                              function(redirect_url) {
                                  var accessToken = redirect_url.split("token=")[1];

                                  webview.contentWindow.postMessage(
                                      {
                                          name: "facebookLogin",
                                          token: accessToken
                                      }
                                      , '*'
                                  );
                              }
                          );
                      } else if ((e.name === 'google') ||
                        (e.name === 'googleAPI')) {
                          chrome.identity.getAuthToken(
                              {
                                  "interactive": true
                              },
                              function(token) {
                                  webview.contentWindow.postMessage(
                                      {
                                          name: e.name + "Login",
                                          token: token
                                      }
                                      , '*'
                                  );
                          });
                      } else if (e.name === 'mailto') {
                          window.open('mailto:feedback+chrome@any.do');
                      } else {
                          window.open(e.targetUrl);
                      }

                      e.window.discard();
                });
            };
        }
    );
});
