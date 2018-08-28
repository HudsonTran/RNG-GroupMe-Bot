//A simple GroupMe Bot that returns a random number between 1-1000
// put your botID from https://dev.groupme.com/bots after you've created it
var botId = " "; 

function sendText(text){
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '"}'});
}

function doPost(e){
  var post = JSON.parse(e.postData.getDataAsString());
  var text = post.text;
  var name = post.name;
  
  if(text.toLowerCase().substring(0,7) == "!random"){
      sendText(name + ", here's a random number: " + genNum(1000).toString());
  }
}

function genNum(val){
  return Math.floor(Math.random() * val + 1);
}
