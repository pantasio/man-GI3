var fileTypes=[];
var attached = false;
var requests = [];
var videoHosts = [];
var blockedlists = [];
var videoExt = ["MP4"];

function removeRequest(requestId)
{
	for( var i=0;i<requests.length;i++)
	{
		if(requests[i].requestId==requestId)
		{
			requests.splice(i, 1);
		}
	}
}


function sendToXDM(url,requestInfo,responseInfo,download)
{
	console.log("send: "+url);
        
	var data="url: "+url+"\n";
	requestInfo.requestHeaders.forEach
	( 	
		function(header, i) 
		{
			if(header.name.toLowerCase()== 'user-agent')
			{	
				data+="ua: "+header.value+"\n";
			}
			if(header.name.toLowerCase()== 'referer')
			{	
				data+="referer: "+header.value+"\n";
			}
			if(header.name.toLowerCase()== 'cookie')
			{	
				data+="cookie: "+header.value+"\n";
			}
		}
	);
	responseInfo.responseHeaders.forEach
	( 	
		function(header, i) 
		{
			if(header.name.toLowerCase()== 'content-length')
			{	
				data+="size: "+header.value+"\n";
			}
			if(header.name.toLowerCase()== 'content-type')
			{	
				data+="type: "+header.value+"\n";
			}
			if(header.name.toLowerCase()== 'content-disposition')
			{	
				data+="attachment: "+header.value+"\n";
			}
		}
	);
	data+="\n";
	if(!download)
	{
		if(requestInfo.tabId!=-1)
		{
			chrome.tabs.get
			(
					requestInfo.tabId, 
					function(tab)
					{
						var title=tab.title;
						data="title: "+title+"\n"+data;	
						fireXHR("http://127.0.0.1:9614/video","POST",data);
					}
			);
		}
		else
		{
			fireXHR("http://127.0.0.1:9614/video","POST",data);
		}
	}
	else
	{
		fireXHR("http://127.0.0.1:9614/download","POST",data);
	}
}


function getFileExtension(file)
{
	var index=file.lastIndexOf(".");
	if(index>0)
	{
		return file.substr(index+1);
	}
}

function isMatchedFile(file,attachment)
{
	if(attachment)
	{
		var searchkey="filename=\"";
		var index=file.indexOf(searchkey);
		if(index>0)
		{	var index2=file.indexOf("\"",index+searchkey.length+1);
			if(index2>0)
			{
				file=file.substring(index+searchkey.length,index2);
				file=getFileExtension(file);
			}
		}
	}
	for(var i=0;i<fileTypes.length;i++)
	{
		if(fileTypes[i]==file.toUpperCase())
		{
			return true;
		}
	}
	return false;
}


function interceptDownload(info)
{
	var url=info.url;
	var file=getFileName(url);
	var intercept=false;
	if(file&&file.length>0)
	{
		var ext=getFileExtension(file);	
		if(ext&&ext.length>0)
		{
			intercept=isMatchedFile(ext,false);
		}
	}
	if(!intercept)
	{
		info.responseHeaders.forEach
		( 	
			function(header, i) 
			{
				if(header.name.toLowerCase()== 'content-disposition')
				{		
					intercept=isMatchedFile(header.value,true);
					return;
				}
			}
		);
	}
	if(intercept)
	{
		var requestInfo=findRequest(info.requestId);
		var responseInfo = info;
		if(!requestInfo) return false;
		if(!responseInfo) return false;
		sendToXDM(url,requestInfo,responseInfo,true);
		return true;
	}		
	return false;
}

function checkForVideo(info)
{
	var url=info.url;
	var file=getFileName(url);
	var video=false;
	var mime="";
	var responseInfo = info;
	if(!responseInfo) return false;

	if(file&&file.length>0)
	{
		info.responseHeaders.forEach
		( 	
			function(header, i) 
			{
				if(header.name.toLowerCase()== 'content-type')
				{	
					mime=header.value.toLowerCase();
				}
			}
		);
	}
	for( var i=0;i<videoHosts.length;i++)
	{
		if(url.indexOf(videoHosts[i])>-1)
		{
			video=true;
			break;
		}
	}
	try
	{
		if(!video)
		{
			if(file&&file.length>0)
			{
				var ext=getFileExtension(file);	
				if(ext&&ext.length>0)
				{
					if(ext.toUpperCase()=="M3U8"||ext.toUpperCase()=="F4M")
					{
						video=true;
					}
					else
					{
						for(var i=0;i<videoExt.length;i++)
						{
							if(videoExt[i]==ext.toUpperCase())
							{
								video=true;
							}
						}
					}
				}
			}
		}
	}
	catch(e){}
	if(mime.indexOf("video/")>-1||mime.indexOf("audio/")>-1||video)
	{
		var requestInfo=findRequest(info.requestId);
		if(!requestInfo) return false;
		sendToXDM(url,requestInfo,responseInfo,false);
		return true;
	}
	return false;
}

//Find the matching request
function findRequest(requestId)
{
	for( var i=0;i<requests.length;i++)
	{
		if(requests[i].requestId==requestId)
		{
				return requests[i];
		}
	}
	return null;
}

function getFileName(str)
{
	var index=str.indexOf("?");
	if(index>0)
	{
		str=str.substr(0,index);
	}
	index=str.lastIndexOf("/");
	if(index>0)
	{
		return str.substr(index+1);
	}
	return str;
}

//pings XDM to check if XDM is running and updates file types and blocked hosts
function pingXDM()
{
	fireXHR("http://127.0.0.1:9614/xdmhook","GET",null);
}

function _attached(data)
{
   	var arr=data.split("|"); //supposed to be in format: TRUE|EXE,MP3,MKV|facebook.com
   	//console.log(arr);
        var enabled=(arr[0]=="TRUE");
	fileTypes=arr[1].split(",");
	videoHosts=arr[2].split(",");
	blockedlists=arr[3].split(",");
	videoExt=arr[4].split(",");
	
	if(enabled)
	{
		attached=true;
	}
	else
	{
		attached=false;
	}
}

function _detached(data)
{
	attached=false;
}

function fireXHR(url,method,data)
{
	var xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
	xhr.onload = function (e) 
	{
  		if (xhr.readyState === 4) 
		{
    			if (xhr.status === 200) 
			{
      				_attached(xhr.responseText);
			}
  		}	
	};
	xhr.onerror = function (e) 
	{
  		_detached();
	};
	xhr.send(data);
}

try
{

setInterval( function() { pingXDM(); }, 1000 );

//This will add the request to request array for later use, 
//the object is removed from array when request completes or failes
chrome.webRequest.onSendHeaders.addListener 
( 
	function(info) {requests.push(info); },
	{urls:["http://*/*", "https://*/*"]},
 	["requestHeaders"] 
);



//This will monitor and intercept files download if criteria matches
//Use request array to get request headers
chrome.webRequest.onHeadersReceived.addListener
( 
	function(info) 
	{
		if(!attached)
		{
			return;
		}

		if(!(info.statusLine.indexOf("200")>0||info.statusLine.indexOf("206")>0))
		{
			return;
		}
		
		//intercept the download if file extension of url or attachment is matched
		//else if its a video send its url and headers to XDM
		try
		{
			for(var i=0;i<blockedlists.length;i++)
			{
				if(info.url.indexOf(blockedlists[i])>0) return;
			}
		}catch(x){console.debug(x+"");}
		if(interceptDownload(info))
		{
			removeRequest(info.requestId);
			return {redirectUrl: "https://clients1.google.com/generate_204"};//return {cancel: true};
		}
		else
		{
			checkForVideo(info);
		}
		
	},
 	{urls:["http://*/*", "https://*/*"]},
 	["blocking","responseHeaders"]
);

chrome.webRequest.onCompleted.addListener
( 
	function(info) 
	{
		removeRequest(info.requestId);
	},
 	{urls:["http://*/*", "https://*/*"]}
);

chrome.webRequest.onErrorOccurred.addListener
( 
	function(info) 
	{
		removeRequest(info.requestId);
	},
 	{urls:["http://*/*", "https://*/*"]}
);

console.log('loaded');

}
catch(e)
{
console.log(e);
}
