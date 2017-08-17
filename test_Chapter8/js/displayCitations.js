function displayCitations() {
  if (!document.getElementsByTagName) return false;
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;

  var quotes = document.getElementsByTagName("blockquote");
  if (quotes.length < 1) return false;
  for (var i = 0; i < quotes.length; i++) {

    var current_quote = quotes[i];
    if (!current_quote.getAttribute("cite")) continue;
    var cite_url = current_quote.getAttribute("cite");
    var quote_children = current_quote.childNodes;
    if (quote_children.length < 1) continue;
    for (var i = 0; i < quote_children.length; i++) {
      var current_child = quote_children[i];
      if (current_child.nodeType == 1) {
        var last_element = current_child;
      }
    }
    var link = document.createElement("a");
    var link_text = document.createTextNode("[source]");
    var superscript = document.createElement("sup");
    link.appendChild(link_text);
    link.setAttribute("href", cite_url);
    superscript.appendChild(link);
    last_element.appendChild(superscript);
  }


}

addLoadEvent(displayCitations);