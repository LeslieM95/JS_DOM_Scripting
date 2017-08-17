function highlightRows() {
  if (!document.getElementsByTagName) return false;
  var trows = document.getElementsByTagName("tr");
  if (trows.length < 1) return false;
  //alert(trows.length);
  for (var i = 0; i < trows.length; i++) {
    var current_row = trows[i];
    //alert(trows[i])
    current_row.onmouseover = function() {
      this.style.fontWeight = "bold";
    }
    current_row.onmouseout = function() {
      this.style.fontWeight = "normal";
    }
  }
}

addLoadEvent(highlightRows);