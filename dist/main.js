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

  return e;
}

window.a = createElement("div", {
  id: "a",
  "class": "c"
}, createElement("div", null), createElement("div", null), createElement("div", null));
/******/ })()
;