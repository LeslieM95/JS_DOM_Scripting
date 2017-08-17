function highlightPage() {
  if (!document.getElementsByTagName) return false;
  var headers = document.getElementsByTagName("header");
  if (headers.length < 1) return false;
  var navs = headers[0].getElementsByTagName("nav");
  if (navs.length < 1) return false;
  var links = navs[0].getElementsByTagName("a");
  if (links.length < 1) return false;

  for (var i = 0; i < links.length; i++) {
    var current_link = links[i];
    var link_url = current_link.getAttribute("href");
    if (!link_url) continue;
    var current_url = window.location.href;
    if (current_url.indexOf(link_url) != -1) {
      addClass(current_link, "here");
      var link_text = current_link.firstChild.nodeValue.toLowerCase();
      var body_elem = document.getElementsByTagName("body")[0];
      body_elem.setAttribute("id", link_text);
    }
  }
}

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

function prepareSlideshow() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.createElement) return false;
  var div = document.createElement("div");
  div.setAttribute("id", "slideshow");
  var preview = document.createElement("img");
  preview.setAttribute("id", "preview");
  preview.setAttribute("src", "images/slideshow.jpg");
  preview.setAttribute("alt", "Preview for 523 family");
  preview.setAttribute("title", "Preview for 523 family");
  div.appendChild(preview);
  var introduction = document.getElementById("intro");
  if (!introduction) return false;
  insertAfter(div, introduction);
  var links = document.getElementsByTagName("a");
  if (links.length < 1) return false;
  for (var i = 0; i < links.length; i++) {
    var current_link = links[i];
    current_link.onmouseover = function() {
      var destination = this.getAttribute("href");
      if (destination.indexOf("index.html") != -1) {
        moveElement("preview", 0, 0, 5);
      }
      if (destination.indexOf("about.html") != -1) {
        moveElement("preview", -100, 0, 5);
      }
      if (destination.indexOf("photos.html") != -1) {
        moveElement("preview", -200, 0, 5);
      }
      if (destination.indexOf("live.html") != -1) {
        moveElement("preview", -300, 0, 5);
      }
      if (destination.indexOf("contact.html") != -1) {
        moveElement("preview", -400, 0, 5);
      }
    }
    current_link.onmouseout = function() {
      moveElement("preview", 0, 0, 5);
    }
  }
}

addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);