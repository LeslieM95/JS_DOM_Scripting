function preparePlaceHolder() {
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElementById) return false;
  var placeholder = document.createElement("img");
  placeholder.setAttribute("id", "placeholder");
  placeholder.setAttribute("src", "images/placeholder.jpg");
  placeholder.setAttribute("alt", "my image gallery");
  placeholder.setAttribute("title", "图片占位符");
  var description = document.createElement("p");
  description.setAttribute("id", "description");
  description.setAttribute("title", "文本占位符");
  var text = document.createTextNode("Choose an image.");
  description.appendChild(text);
  var gallery = document.getElementById("imageGallery");
  if (!gallery) return false;
  insertAfter(description, gallery);
  insertAfter(placeholder, description);

}

function showPic(whichPic) {
  var source = whichPic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  if (!placeholder) return false;
  if (placeholder.nodeName != "IMG") return false;
  placeholder.setAttribute("src", source);
  var title_value = whichPic.title ? whichPic.getAttribute("title"): "";
  placeholder.setAttribute("title", title_value);
  var description = document.getElementById("description");
  if (description && description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = title_value;
  }
  return true;
}

function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  var gallery = document.getElementById("imageGallery");
  if (!gallery) return false;
  var links = gallery.getElementsByTagName("a");
  if (links.length > 0) {
    for (var i = 0; i < links.length; i++) {

      links[i].onclick = function() {
        return !showPic(this);
      }
    }
  }
}




addLoadEvent(preparePlaceHolder);
addLoadEvent(prepareGallery);
