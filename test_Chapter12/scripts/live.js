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
  var header = document.createElement("h3");
  var header_text = document.createTextNode("Abbreviation");
  //插入节点
  header.appendChild(header_text);
  var articles = document.getElementsByTagName("article");
  if (articles.length < 1) return false;
  articles[0].appendChild(header);
  articles[0].appendChild(dlist);
}

function stripeTables() {
  if (!document.getElementsByTagName) return false;
  var tables = document.getElementsByTagName("table");
  if (tables.length < 1) return false;
  for (var i = 0; i < tables.length; i++) {
    var current_table = tables[i];
    var trows = current_table.getElementsByTagName("tr");
    if (trows.length < 1) continue;
    var odd = false;
    for (var j = 0; j < trows.length; j++) {
      var current_row = trows[j];
      if (odd == true) {
        addClass(current_row, "odd");
        odd = false;
      } else {
        addClass(current_row, "even");
        odd = true;
      }
    }
  }
}

function highlightRows() {
  if (!document.getElementsByTagName) return false;
  var trows = document.getElementsByTagName("tr");
  if (trows.length < 1) return false;
  //alert(trows.length);
  for (var i = 0; i < trows.length; i++) {
    var current_row = trows[i];
    //alert(trows[i])
    current_row.old_classname = current_row.className;
    current_row.onmouseover = function() {
      addClass(this, "highlight");
    }
    current_row.onmouseout = function() {
      this.className = this.old_classname;
    }
  }
}

addLoadEvent(displayAbbreviations);
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);