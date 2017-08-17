function insertAfter(newElement, targetElement) {
  var parentElement = targetElement.parentNode;
  if (targetElement == parentElement.lastChild) {
    parentElement.appendChild(newElement);
  } else {
    parentElement.insertBefore(newElement, targetElement.nextSibling);
  }
}