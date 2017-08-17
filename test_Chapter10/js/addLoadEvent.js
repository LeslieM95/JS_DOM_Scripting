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