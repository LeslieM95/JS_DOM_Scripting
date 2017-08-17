function prepareSlideshow() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.createElement) return false;

  var olist = document.getElementById("linklist");
  if (!olist) return false;
  var div = document.createElement("div");
  div.setAttribute("id", "slideshow");
  var preview = document.createElement("img");
  preview.setAttribute("id", "preview");
  preview.setAttribute("src", "images/topics.jpg");
  preview.setAttribute("alt", "building blocks of web design");
  div.appendChild(preview);
  insertAfter(div, olist);

  var links = olist.getElementsByTagName("a");
  if (links.length < 1) return false;
  links[0].onmouseover = function () {
    moveElement("preview", -100, 0, 10);
  }
  links[1].onmouseover = function () {
    moveElement("preview", -200, 0, 10);
  }
  links[2].onmouseover = function () {
    moveElement("preview", -300, 0, 10);
  }
}

addLoadEvent(prepareSlideshow);