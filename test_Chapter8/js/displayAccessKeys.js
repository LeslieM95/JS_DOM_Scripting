function displayAccessKeys() {
  if (!document.getElementsByTagName) return false;
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  var navigation = document.getElementById("navigation");
  if (!navigation) return false;
  var links = navigation.getElementsByTagName("a");
  if (links.length < 1) return false;

  var accesskeys = new Array();
  for (var i =0; i < links.length; i++) {
    var current_link = links[i];
    var key = current_link.getAttribute("accesskey");
    if (!key) continue;
    var link_text = current_link.firstChild.nodeValue;
    accesskeys[key] = link_text;
  }

  var ulist = document.createElement("ul");
  for (var key in accesskeys) {
    var link_text = accesskeys[key];
    var li = document.createElement("li");

    var li_text = document.createTextNode(key + ": " + link_text);

    li.appendChild(li_text);
    ulist.appendChild(li);
  }
  if (ulist.childNodes.length < 1) return false;
  var header = document.createElement("h2");
  var header_text = document.createTextNode("Accesskeys");
  header.appendChild(header_text);
  var body_element = document.getElementsByTagName("body")[0];
  body_element.appendChild(header);
  body_element.appendChild(ulist);
}

addLoadEvent(displayAccessKeys);