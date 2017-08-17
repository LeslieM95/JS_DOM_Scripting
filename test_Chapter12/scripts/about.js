function showSection(id) {
  if (!document.getElementsByTagName) return false;
  var sections = document.getElementsByTagName("section");
  if (sections.length < 1) return false;

  for (var i = 0; i < sections.length; i++) {
    var current_section = sections[i];
    var current_sec_id = current_section.getAttribute("id");
    if (!current_sec_id) continue;
    if (current_sec_id == id) {
      current_section.style.display = "block";
    } else {
      current_section.style.display = "none";
    }
  }
}

function prepareInternalNav() {

  var articles = document.getElementsByTagName("article");
  if (articles.length < 1) return false;
  var internal_navs = articles[0].getElementsByTagName("nav");
  if (internal_navs.length < 1) return false;
  var ulists = internal_navs[0].getElementsByTagName("ul");
  if (ulists.length < 1) return false;
  var links = ulists[0].getElementsByTagName("a");
  if (links.length < 1) return false;

  for (var i = 0; i < links.length; i++) {
    var current_link = links[i];
    var link_url = current_link.getAttribute("href");
    if (!link_url)  continue;
    var url_frag = link_url.split("#")[1];

    //判断是否存在"id=url_frag"的元素；
    var dest_section = document.getElementById(url_frag);
    if (!dest_section) continue;
    //初始状态为"none";
    dest_section.style.display = "none";
    current_link.dest_id = url_frag;
    current_link.onclick = function() {
      showSection(this.dest_id);
      return false; //若无"return false;"，则点击链接时，会自动滚动到相应<section>;
    }
  }
}

addLoadEvent(prepareInternalNav);