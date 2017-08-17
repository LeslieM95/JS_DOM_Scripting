function addLoadEvent(func) {
  var old_event = window.onload;
  if (typeof old_event != "function") {
    window.onload = func;
  } else {
    window.onload = function() {
      old_event();
      func();
    }
  }
}

function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (targetElement == parent.lastNode) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

function addClass(element, value) {
  var old_className = element.className;
  if (!old_className) {
    element.className = value;
  } else {
    element.className = old_className + " " + value;
  }
}

function getHTTPObject() {
  if (typeof XMLHttpRequest == "undefined") {
    XMLHttpRequest = function() {
      try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
        catch (error) {}
      try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
        catch (error) {}
      try {return new ActiveXObject("Msxml2.XMLHTTP");}
        catch (error) {}
      return false;
    }
  }
  return new XMLHttpRequest();
}

function displayAjaxLoader(elem) {
  if (!document.createElement) return false;
  while (elem.hasChildNodes()) {
    elem.removeChild(elem.lastChild);
  }
  var loader = document.createElement("img");
  loader.setAttribute("src", "images/ajax-loader.gif");
  loader.setAttribute("alt", "Loading...");
  elem.appendChild(loader);
}

