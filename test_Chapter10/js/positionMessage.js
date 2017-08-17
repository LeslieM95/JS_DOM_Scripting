function positionMessage() {
  if (!document.getElementById) return false;
  var elem = document.getElementById("message");
  if (!elem) return false;
  elem.style.position = "absolute";
  elem.style.left = "50px";
  elem.style.top = "100px";
  var elem2 = document.getElementById("message2");
  if (!elem) return false;
  elem2.style.position = "absolute";
  elem2.style.left = "50px";
  elem2.style.top = "50px";
}

addLoadEvent(positionMessage);
addLoadEvent(
  function() {
    moveElement("message", 125, 25, 20);
    moveElement("message2", 125, 125, 20);
  }
);


