function addClass(element, value) {
  var old_value = element.className;
  if (!old_value) {
    element.className = value;
  } else {
    element.className = old_value + " " + value;
  }
}