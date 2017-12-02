var target = "<all_urls>";
var httpTextResponse="";
			
function logResponse(response) {
				
	//calculate time from UNIX epoch timeStamp in milliseconds
	var responseTimeStamp = new Date();
	responseTimeStamp.setTime(response.timeStamp);
				
	//for parameter :response.fromCache
	var responseCache="NOT ";
	if(response.fromCache){
		responseCache="";
	}
	
	//fetch Array objects of responseHeaders
	function objToString (obj) {
		var str = '';
		var str2 = '';
		for (var p in obj) {
			if (obj.hasOwnProperty(p)){
				var q = obj[p];
				var tempstr = '';
				for(var r in q){
					if (q.hasOwnProperty(r)){
						if (tempstr== ''){
							tempstr = q[r]	+ ": ";
							str = tempstr;
						}
						else
							str +=q[r]+ "\n";			
					}
				}
			}
			str2 +=str;
		}
		return str2;
	}
			
	httpTextResponse = "You entered :" + response.originUrl + "\n\nRequest Method: " + response.method + "\nStatus: " + response.statusCode + "\nStatus line:" + response.statusLine + "\nIP Address: " + response.ip  +"\nDate: "+ responseTimeStamp + "\nTarget Url:" + response.url + "\nResponse type: "+ response.type + "\nRequest ID: " + response.requestId + "\nResponse was "+ responseCache +"fetched from disk cache.\n" + objToString(response.responseHeaders) + "\n\n";
		  
	console.log(httpTextResponse);
}

browser.webRequest.onCompleted.addListener(
	logResponse,
	{urls: [target]},
	["responseHeaders"]
);  