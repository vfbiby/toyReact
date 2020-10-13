/******/ (() => { // webpackBootstrap
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
for (var _i = 0, _arr = [1, 2, 3]; _i < _arr.length; _i++) {
  var i = _arr[_i];
  console.log(i);
}

function createElement(tagName, attributes) {
  var e = document.createElement(tagName);

  for (var p in attributes) {
    e.setAttribute(p, attributes[p]);
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  for (var _i2 = 0, _children = children; _i2 < _children.length; _i2++) {
    var child = _children[_i2];

    if (typeof child === "string") {
      child = document.createTextNode(child);
    }

    e.appendChild(child);
  }

  return e;
}

window.a = createElement("div", {
  id: "a",
  "class": "c"
}, createElement("div", null, "abc"), createElement("div", null), createElement("div", null));
/******/ })()
;