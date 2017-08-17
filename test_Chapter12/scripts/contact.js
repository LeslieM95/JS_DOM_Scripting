function focusLabels() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  var labels = document.getElementsByTagName("label");
  if (labels.length < 1) return false;
  for (var i = 0; i < labels.length; i++) {
    var current_label = labels[i];
    var label_for = current_label.getAttribute("for");
    if (!label_for) continue;
    current_label.for_value = label_for;
    current_label.onclick = function() {
      var dest_field = document.getElementById(this.for_value);
      if (!dest_field) return false;
      dest_field.focus();
    }
  }
}

function resetFields(whichForm) {
  if (Modernizr.input.placeholder) return false;
  for (var i = 0; i < whichForm.elements.length; i++) {
    var current_elem = whichForm.elements[i];
    current_elem.placeholder_value = current_elem.placeholder || current_elem.getAttribute("placeholder");
    if (!current_elem.placeholder_value) continue;
    if (current_elem.type == "submit") continue;
    current_elem.old_classname = current_elem.className;
    current_elem.onfocus = function() {
      var elem_text = this.value;
      //如果current_elem获得焦点时，字段值与placeholder值相同
      if (elem_text == this.placeholder_value) {
        this.value = "";
        this.className = this.old_classname; //如果没有这句，每次onblur该字段的class都会增加一个"placeholder"
      }
    }
    current_elem.onblur = function() {
      var elem_text = this.value;
      //如果current_elem失去焦点时，字段值为空
      if (elem_text == "") {
        this.value = this.placeholder_value;
        addClass(this, "placeholder");
      }
    }
    current_elem.onblur();
  }
}


function isFilled(field) {
  if (field.value.replace(" ", "").length == 0) return false;
  var placeholder_value = field.placeholder || field.getAttribute("placeholder");
  return (field.value != placeholder_value);
}

function isEmail(field) {
  return (field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
}

function validateForm(whichForm) {
  for (var i = 0; i < whichForm.elements.length; i++) {
    var current_elem = whichForm.elements[i];
    if (current_elem.required == "required") {
      if (!isFilled(current_elem)) {
        alert("Please fill in the " + current_elem.name + " field.");
        return false;
      }
    }
    if (current_elem.type == "email") {
      if (!isEmail(current_elem)) {
        alert("The " + current_elem.name + " field must be a valid email address.");
        return false;
      }
    }
  }
  return true;
}

function submitFormWithAjax(whichForm, targetElem) {
  var request = getHTTPObject();
  if (!request) return false;
  displayAjaxLoader(targetElem);
  var data_parts = new Array();
  for (var i = 0; i < whichForm.elements.length; i++) {
    var current_elem = whichForm.elements[i];
    data_parts[i] = current_elem.name + "=" + encodeURIComponent(current_elem.value);
  }
  var data = data_parts.join("&");
  request.open("POST", whichForm.getAttribute("action"), true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if (request.status == 200 || request.status == 0) {
        var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
        if (matches.length > 1) {
          targetElem.innerHTML = matches[1];
        } else {
          targetElem.innerHTML = "<p>Oops, there was an error. Sorry!</p>";
        }
      } else {
        targetElem.innerHTML = "<p>" + request.statusText + "</p>";
      }
    }
  }
  request.send(data);
  return true;
}

function prepareForms() {
  if (!document.getElementsByTagName) return false;
  for (var i = 0; i < document.forms.length; i++) {
    var current_form = document.forms[i];
    resetFields(current_form);
    current_form.onsubmit = function() {
      if (!validateForm(this)) return false;
      var articles = document.getElementsByTagName("article");
      if (articles.length < 1) return false;
      if (submitFormWithAjax(this, articles[0])) return false;
      return true;
    }
  }
}

addLoadEvent(focusLabels);
addLoadEvent(prepareForms);