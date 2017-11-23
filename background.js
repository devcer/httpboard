var target = "<all_urls>";
var httpText="";
/*
e.g.
"https://developer.mozilla.org/en-US/"
200

or:

"https://developer.mozilla.org/en-US/xfgkdkjdfhs"
404
*/
function logResponse(response) {
  httpText = "Request Method: " + response.method + "\nStatus Code: " + response.statusCode + "\nStatus line:" + response.statusLine + 
  "\nIP Address: " + response.ip + "\nResponse Headers: " +
  response.responseHeaders + "\nTimeStamp: "+ response.timeStamp + "\nTarget Url:" + response.url + "\nResponse type: "+ response.type;  
  console.log(httpText);
}

browser.webRequest.onCompleted.addListener(
  logResponse,
  {urls: [target]}
);