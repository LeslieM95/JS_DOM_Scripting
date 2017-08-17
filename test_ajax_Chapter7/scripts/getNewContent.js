function getNewContent() {
  var request = getHTTPObject();
  if (request) {
    request.open("GET", "example.txt", true);
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        alert("Response received!")
        var para = document.createElement("p");
        var text = document.createTextNode(request.responseText);
        var newdiv = document.getElementById("new");
        para.appendChild(text);
        newdiv.appendChild(para);
      }
    };
    request.send(null);
  } else {
    alert("Sorry, your browser doesn't support XMLHttpRequest");
  }
  alert("Function done!")
}

addLoadEvent(getNewContent);