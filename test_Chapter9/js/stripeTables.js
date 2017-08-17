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

addLoadEvent(stripeTables);