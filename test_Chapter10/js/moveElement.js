function moveElement(elementID, final_x, final_y, interval) {
  if (!document.getElementById) return false;
  var elem = document.getElementById(elementID);
  if (!elem) return false;
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.left) {
    elem.style.left = "0px";
  }
  if (!elem.style.top) {
    elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  var delta = 0;
  if (xpos == final_x && ypos == final_y) {
    return false;
  }
  if (xpos < final_x) {
    delta = Math.ceil((final_x - xpos)/10);
    xpos += delta;
  }
  if (xpos > final_x) {
    delta = Math.ceil((xpos - final_x)/10);
    xpos -= delta;
  }
  if (ypos < final_y) {
    delta = Math.ceil((final_y - ypos)/10);
    ypos += delta;
  }
  if (ypos > final_y) {
    delta = Math.ceil((ypos - final_y)/10);
    ypos -= delta;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('" + elementID + "', " + final_x + ", " + final_y + ", " + interval + ")"
  elem.movement = setTimeout(repeat, interval);
}