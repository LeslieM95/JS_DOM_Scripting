function displayAbbreviations() {
  if (!document.getElementsByTagName) return false;
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  //取得所有缩略词
  var abbrs = document.getElementsByTagName("abbr");
  if (abbrs.length < 1) return false;
  var defs = new Array();
  //遍历这些缩略词，并保存为数组
  for (var i = 0; i < abbrs.length; i++) {
    var current_abbr = abbrs[i];
    if (current_abbr.childNodes.length < 1) continue;
    var key = current_abbr.lastChild.nodeValue;
    var definition = current_abbr.getAttribute("title");
    defs[key] = definition;
  }

  //创建<dl>
  var dlist = document.createElement("dl");
  //遍历defs数组
  for (var key in defs) {
    var definition = defs[key];
    //创建<dt><dd>及其文本节点
    var dtitle = document.createElement("dt");
    var ddescription = document.createElement("dd");
    var dtitle_text = document.createTextNode(key);
    var ddescription_text = document.createTextNode(definition);
    //插入节点
    dtitle.appendChild(dtitle_text);
    ddescription.appendChild(ddescription_text);
    dlist.appendChild(dtitle);
    dlist.appendChild(ddescription);
  }

  if (dlist.childNodes.length < 1) return false;
  //创建<h2>及其文本节点
  var header = document.createElement("h2");
  var header_text = document.createTextNode("Abbreviation");
  //插入节点
  header.appendChild(header_text);
  var body_element = document.getElementsByTagName("body")[0];
  body_element.appendChild(header);
  body_element.appendChild(dlist);
}



addLoadEvent(displayAbbreviations);