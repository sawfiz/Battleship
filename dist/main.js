"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/maxresdefault.jpg */ "./src/images/maxresdefault.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* Victor Verion */\n  --darker-color: #ff0000;\n  --dark-color: #11cbd7;\n  --light-color: #c6f1e7;\n  --lighter-color: #f0fff3;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 5rem auto 4rem 1rem;\n  /* background-image: url(./images/137273.jpg); */\n  /* background-image: url(./images/137298.jpg); */\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  /* background-image: url(./images/ccc.jpg); */\n  /* background-image: url(./images/ddd.jpg); */\n  background-size: cover;\n}\n\nbody::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0);\n  /* filter: grayscale(90%); */\n}\n\nh1 {\n  /* color: red; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  font-size: 3rem;\n  text-shadow: 4px 4px 8px rgba(255, 255, 255, 0.7);\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 17fr 33fr 33fr 17fr;\n}\n\n.computer-board-container, .human-board-container {\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  position: relative;\n}\n\n.territory {\n  position: absolute;\n  top: 2rem;\n  font-size: 2em;\n  font-weight: bold;\n  text-shadow: 0px 0px 9px rgba(255, 255, 255, 1);\n}\n\n.enemy {\n  color: red;\n}\n\n.my {\n  color: green;\n}\n\n.board {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n  background: lightblue;\n  opacity: 0.85;\n}\n\n.cell {\n  position: relative;\n  background-color: darkblue;\n  width: 3vw;\n  height: 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  /* border: 1px blue solid; */\n  overflow: hidden;\n}\n\n.image {\n  position: absolute;\n}\n\n.show {\n  opacity: 50;\n  background-color: steelblue;\n}\n\n.bomb {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  z-index: 10;\n}\n\n.missed {\n  background-color: white;\n}\n\n.hit {\n  background-color: red;\n}\n\n.draggedOver {\n  background-color: green;\n}\n.draggedOver-red {\n  background-color: red;\n}\n\n.computer-fleet-container, .human-fleet-container {\n  display: grid;\n  grid-template-rows: 2fr 3fr 1fr 1fr;\n  background-color: rgba(255, 255, 255, 0.6);\n  /* opacity: 0.7; */\n  border-radius: 5px;\n  z-index: 10;\n  margin: 5rem 1rem 5rem 1rem;\n}\n\n.deploy-heading, .ship-container,  .rotate-container, .rotate-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.deploy-heading {\n  font-size: 1.2rem;\n  font-weight: bold;\n  padding: 2rem;\n  text-align: center;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n}\n\n.ship-image {\n  cursor: pointer;\n}\n\n.rotate-btn {\n  padding: 0.5rem;\n  cursor: pointer;\n  font-size: 1.2rem;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n  background-color: gray;\n  border-radius: 5px;\n}\n\n.deploy-failed {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: red;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n}\n\n.turn, .total-hits {\n  display: flex;\n  justify-content: center;\n  align-items: top;\n  font-size: 2rem;\n  position: relative;\n  text-shadow: 0 0 4px white; \n}\n\n.total-misses {\n  display: flex;\n  justify-content: center;\n  align-items: top;\n  font-size: 1.5rem;\n  position: relative;\n  text-shadow: -1px -1px 2px white; \n}\n\n#random-deploy {\n  position: absolute;\n  right: 1vw;\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n  width: 15vw;\n  background-color: gray;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: gray;\n  font-family: 'Times New Roman', Times, serif;\n}\n\n/* Toggle switch to show/hide enemy ships */\n.cheat-container {\n  position: absolute;\n  bottom: 2rem;\n  display: flex;\n  gap: 5px;\n}\n\n.cheat-container>p {\n  color: darkblue;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 1);\n}\n\n/* The size of the toggle switch */\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 20px;\n}\n\n/* Hide the default checkbox */\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider that the circle can move */\n/* same size as the toggle switch */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: black;\n  transition: 0.4s;\n}\n\n/* The circle that moves in the slider */\n/* Before it is checked, the indicator (square) is on the left */\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\n/* Change toggle switch background color when it is clicked */\n/* Thethe + is used to select the .slider immidiately follow the input:checked */\n/* The styling applies to the .slider */\ninput:checked + .slider {\n  background-color: var(--darker-color);\n}\n\n/* When checked, move indicator to the right by 16px */\ninput:checked + .slider:before {\n  transform: translateX(16px);\n}\n\n/* Make slider have round corners */\n.slider.round {\n  border-radius: 10px;\n}\n\n/* Make the indicator round */\n.slider.round:before {\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* Victor Verion */\n  --darker-color: #ff0000;\n  --dark-color: #11cbd7;\n  --light-color: #c6f1e7;\n  --lighter-color: #f0fff3;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 5rem auto 4rem 1rem;\n  /* background-image: url(./images/137273.jpg); */\n  /* background-image: url(./images/137298.jpg); */\n  background-image: url(./images/maxresdefault.jpg);\n  /* background-image: url(./images/ccc.jpg); */\n  /* background-image: url(./images/ddd.jpg); */\n  background-size: cover;\n}\n\nbody::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0);\n  /* filter: grayscale(90%); */\n}\n\nh1 {\n  /* color: red; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  font-size: 3rem;\n  text-shadow: 4px 4px 8px rgba(255, 255, 255, 0.7);\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 17fr 33fr 33fr 17fr;\n}\n\n.computer-board-container, .human-board-container {\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  position: relative;\n}\n\n.territory {\n  position: absolute;\n  top: 2rem;\n  font-size: 2em;\n  font-weight: bold;\n  text-shadow: 0px 0px 9px rgba(255, 255, 255, 1);\n}\n\n.enemy {\n  color: red;\n}\n\n.my {\n  color: green;\n}\n\n.board {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n  background: lightblue;\n  opacity: 0.85;\n}\n\n.cell {\n  position: relative;\n  background-color: darkblue;\n  width: 3vw;\n  height: 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  /* border: 1px blue solid; */\n  overflow: hidden;\n}\n\n.image {\n  position: absolute;\n}\n\n.show {\n  opacity: 50;\n  background-color: steelblue;\n}\n\n.bomb {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  z-index: 10;\n}\n\n.missed {\n  background-color: white;\n}\n\n.hit {\n  background-color: red;\n}\n\n.draggedOver {\n  background-color: green;\n}\n.draggedOver-red {\n  background-color: red;\n}\n\n.computer-fleet-container, .human-fleet-container {\n  display: grid;\n  grid-template-rows: 2fr 3fr 1fr 1fr;\n  background-color: rgba(255, 255, 255, 0.6);\n  /* opacity: 0.7; */\n  border-radius: 5px;\n  z-index: 10;\n  margin: 5rem 1rem 5rem 1rem;\n}\n\n.deploy-heading, .ship-container,  .rotate-container, .rotate-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.deploy-heading {\n  font-size: 1.2rem;\n  font-weight: bold;\n  padding: 2rem;\n  text-align: center;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n}\n\n.ship-image {\n  cursor: pointer;\n}\n\n.rotate-btn {\n  padding: 0.5rem;\n  cursor: pointer;\n  font-size: 1.2rem;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n  background-color: gray;\n  border-radius: 5px;\n}\n\n.deploy-failed {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: red;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n}\n\n.turn, .total-hits {\n  display: flex;\n  justify-content: center;\n  align-items: top;\n  font-size: 2rem;\n  position: relative;\n  text-shadow: 0 0 4px white; \n}\n\n.total-misses {\n  display: flex;\n  justify-content: center;\n  align-items: top;\n  font-size: 1.5rem;\n  position: relative;\n  text-shadow: -1px -1px 2px white; \n}\n\n#random-deploy {\n  position: absolute;\n  right: 1vw;\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n  width: 15vw;\n  background-color: gray;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: gray;\n  font-family: 'Times New Roman', Times, serif;\n}\n\n/* Toggle switch to show/hide enemy ships */\n.cheat-container {\n  position: absolute;\n  bottom: 2rem;\n  display: flex;\n  gap: 5px;\n}\n\n.cheat-container>p {\n  color: darkblue;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 1);\n}\n\n/* The size of the toggle switch */\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 20px;\n}\n\n/* Hide the default checkbox */\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider that the circle can move */\n/* same size as the toggle switch */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: black;\n  transition: 0.4s;\n}\n\n/* The circle that moves in the slider */\n/* Before it is checked, the indicator (square) is on the left */\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\n/* Change toggle switch background color when it is clicked */\n/* Thethe + is used to select the .slider immidiately follow the input:checked */\n/* The styling applies to the .slider */\ninput:checked + .slider {\n  background-color: var(--darker-color);\n}\n\n/* When checked, move indicator to the right by 16px */\ninput:checked + .slider:before {\n  transform: translateX(16px);\n}\n\n/* Make slider have round corners */\n.slider.round {\n  border-radius: 10px;\n}\n\n/* Make the indicator round */\n.slider.round:before {\n  border-radius: 50%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOARDSIZE": () => (/* binding */ BOARDSIZE),
/* harmony export */   "FLEET": () => (/* binding */ FLEET),
/* harmony export */   "IMAGES": () => (/* binding */ IMAGES),
/* harmony export */   "ROTATEDIMAGES": () => (/* binding */ ROTATEDIMAGES)
/* harmony export */ });
/* harmony import */ var _images_carrier_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/carrier.svg */ "./src/images/carrier.svg");
/* harmony import */ var _images_battleship_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/battleship.svg */ "./src/images/battleship.svg");
/* harmony import */ var _images_cruiser_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cruiser.svg */ "./src/images/cruiser.svg");
/* harmony import */ var _images_submarine_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/submarine.svg */ "./src/images/submarine.svg");
/* harmony import */ var _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/destroyer.svg */ "./src/images/destroyer.svg");
/* harmony import */ var _images_carrier_rotated_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/carrier-rotated.svg */ "./src/images/carrier-rotated.svg");
/* harmony import */ var _images_battleship_rotated_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/battleship-rotated.svg */ "./src/images/battleship-rotated.svg");
/* harmony import */ var _images_cruiser_rotated_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/cruiser-rotated.svg */ "./src/images/cruiser-rotated.svg");
/* harmony import */ var _images_submarine_rotated_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/submarine-rotated.svg */ "./src/images/submarine-rotated.svg");
/* harmony import */ var _images_destroyer_rotated_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/destroyer-rotated.svg */ "./src/images/destroyer-rotated.svg");












const BOARDSIZE = 10;

const FLEET = {
  carrier: { size: 5 },
  battleship: { size: 4 },
  cruiser: { size: 3 },
  submarine: { size: 3 },
  destroyer: { size: 2 },
};

const IMAGES = {
  carrier: _images_carrier_svg__WEBPACK_IMPORTED_MODULE_0__,
  battleship: _images_battleship_svg__WEBPACK_IMPORTED_MODULE_1__,
  cruiser: _images_cruiser_svg__WEBPACK_IMPORTED_MODULE_2__,
  submarine: _images_submarine_svg__WEBPACK_IMPORTED_MODULE_3__,
  destroyer: _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_4__,
};

const ROTATEDIMAGES = {
  carrier: _images_carrier_rotated_svg__WEBPACK_IMPORTED_MODULE_5__,
  battleship: _images_battleship_rotated_svg__WEBPACK_IMPORTED_MODULE_6__,
  cruiser: _images_cruiser_rotated_svg__WEBPACK_IMPORTED_MODULE_7__,
  submarine: _images_submarine_rotated_svg__WEBPACK_IMPORTED_MODULE_8__,
  destroyer: _images_destroyer_rotated_svg__WEBPACK_IMPORTED_MODULE_9__,
};





/***/ }),

/***/ "./src/createCell.js":
/*!***************************!*\
  !*** ./src/createCell.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cell": () => (/* binding */ Cell)
/* harmony export */ });
const Cell = (row, col) => {
  let ship = null;
  let hasShip = false;
  let isBombed = false;
  let section;
  let direction;
  let draggedOver = false;

  const placeShip = (obj, index, dir) => {
    hasShip = true;
    ship = obj;
    section = index;
    direction = dir;
  };

  const attack = () => {
    isBombed = true;
  };

  return {
    row,
    col,
    get section() {
      return section;
    },
    get direction () {
      return direction;
    },
    get ship() {
      return ship;
    },
    get hasShip() {
      return hasShip;
    },
    get isBombed() {
      return isBombed;
    },
    set draggedOver (value) {
      draggedOver = value;
    },
    get draggedOver() {
      return draggedOver;
    },
    placeShip,
    attack,
  };
};


/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(type, classArray, attrObj, text) {
  const element = document.createElement(type);
  if (classArray) element.classList.add(...classArray);

  for (const attr in attrObj) {
    element.setAttribute(attr, attrObj[attr]);
  }

  element.textContent = text;

  return element;
}


/***/ }),

/***/ "./src/createShip.js":
/*!***************************!*\
  !*** ./src/createShip.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShip": () => (/* binding */ createShip)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


const createShip = (type) => {
  const size = _constants__WEBPACK_IMPORTED_MODULE_0__.FLEET[type].size;
  let hits = 0;
  let isSunk = false;

  const hit = () => {
    hits++;
    if (hits >= size) isSunk = true;
  };

  return {
    type,
    size: size,
    get hits() {
      return hits;
    },
    get isSunk() {
      return isSunk;
    },
    hit,
  };
};


/***/ }),

/***/ "./src/delay.js":
/*!**********************!*\
  !*** ./src/delay.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Global function
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delay);


/***/ }),

/***/ "./src/deployFleet.js":
/*!****************************!*\
  !*** ./src/deployFleet.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deployFleet": () => (/* binding */ deployFleet)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _deployRandomly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deployRandomly */ "./src/deployRandomly.js");





const humanFleetContainerEl = document.querySelector('.human-fleet-container');
const humanBoardEl = document.querySelector('#human-board');

const deployShip = (ship, human) => {
  // Set up deploy ship side bar
  humanFleetContainerEl.innerHTML = '';
  const headingEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
    'div',
    ['deploy-heading'],
    {},
    `Drag and drop to deploy your ${ship}`
  );
  humanFleetContainerEl.appendChild(headingEl);
  const shipContainerEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', ['ship-container']);
  const shipImage = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', ['ship-image'], { draggable: 'true' });
  shipImage.src = _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGES[ship];
  // Each cell in the game board is 3vw
  shipImage.style.width = _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size * 3 + 'vw';
  let rotated = false;
  shipContainerEl.appendChild(shipImage);
  humanFleetContainerEl.appendChild(shipContainerEl);
  const rotateContainer = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', ['rotate-container']);
  const rotateBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
    'button',
    ['rotate-btn'],
    {},
    'Rotate ship 🔄'
  );
  rotateContainer.appendChild(rotateBtn);
  humanFleetContainerEl.appendChild(rotateContainer);
  const deployMsg = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', ['deploy-failed']);
  humanFleetContainerEl.appendChild(deployMsg);

  // Button to toggle rotating of the ship
  rotateBtn.addEventListener('click', () => {
    if (!rotated) {
      // shipImage.style.transform = 'rotate(90deg)';
      shipImage.src = _constants__WEBPACK_IMPORTED_MODULE_1__.ROTATEDIMAGES[ship];
    } else {
      // shipImage.style.transform = 'rotate(0deg)';
      shipImage.src = _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGES[ship];
    }
    rotated = !rotated;
  });

  return new Promise((resolve) => {
    let rowOffset = 0;
    let colOffset = 0;
    let startRow, startCol;
    let prevRow, prevCol;

    const onDragStart = () => {
      if (!rotated) {
        // The ship is horizontal
        shipImage.style.width = _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size * 3 + 'vw';
        // shipImage.style.height = '3vw'
        // Get the location of the mouse relative to the image
        const rect = shipImage.getBoundingClientRect();
        const xOffset = event.clientX - rect.left;
        colOffset = Math.floor(xOffset / ((3 / 100) * window.innerWidth));
      } else {
        // Todo: shipImage.style.transform = 'rotate(90deg)'
        // How to make the dragged ship image rotate by 90 deg too?
        shipImage.style.height = _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size * 3 + 'vw';
        // shipImage.style.height = '3vw'
        // Get the location of the mouse relative to the image
        const rect = shipImage.getBoundingClientRect();
        const yOffset = event.clientY - rect.top;
        rowOffset = Math.floor(yOffset / ((3 / 100) * window.innerWidth));
      }
    };

    const onDragOver = (event) => {
      // Need the following line to prevent the ship to zoom back to it's
      // original location after dragEnd
      event.preventDefault();

      // Get the location and size of the board
      const rect = humanBoardEl.getBoundingClientRect();
      // The Grid is 10 x 10
      const cellWidth = rect.width / _constants__WEBPACK_IMPORTED_MODULE_1__.BOARDSIZE;
      const cellHeight = rect.width / _constants__WEBPACK_IMPORTED_MODULE_1__.BOARDSIZE;
      const col = Math.floor((event.clientX - rect.left) / cellWidth);
      const row = Math.floor((event.clientY - rect.top) / cellHeight);
      if (row !== prevRow || col !== prevCol) {
        // Only refresh the screen if the ship is dragged to a different cell
        prevRow = row;
        prevCol = col;

        if (!rotated) {
          // The dragged ship is horizontal
          startCol = col - colOffset;
          startRow = row < 0 ? 0 : row;

          // Confine the ship inside the board
          if (startCol < 0) startCol = 0;
          if (startCol > 9 - _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size)
            startCol = 9 - _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size + 1;

          // Set draggedOver to true, so the cell is green when updateDisplay  
          for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size; i++) {
            if (startCol + i < 10) {
              human.gameBoard.board[startRow][startCol + i].draggedOver = true;
            }
          }
          (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)(human);

          // Reset draggedOver so there is not a trial of green cells when the ship moves
          for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size; i++) {
            if (startCol + i < 10) {
              human.gameBoard.board[startRow][startCol + i].draggedOver = false;
            }
          }
        } else {
          // The ship dragged is vertical
          startCol = col < 0 ? 0 : col;
          startRow = row - rowOffset < 0 ? 0 : row - rowOffset;

          // Confine the ship inside the board
          if (startRow < 0) startRow = 0;
          if (startRow > 9 - _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size)
            startRow = 9 - _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size + 1;

          // Set draggedOver to true, so the cell is green when updateDisplay  
          for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size; i++) {
            if (startRow + i < 10) {
              human.gameBoard.board[startRow + i][startCol].draggedOver = true;
            }
          }
          (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)(human);

          // Reset draggedOver so there is not a trial of green cells when the ship moves
          for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size; i++) {
            if (startRow + i < 10) {
              human.gameBoard.board[startRow + i][startCol].draggedOver = false;
            }
          }
        }
      }
    };

    const onDragEnd = () => {
      const direction = rotated ? 'vertical' : 'horizontal';
      // Check if a ship is successfully deployed
      if (human.gameBoard.placeShip(ship, startRow, startCol, direction)) {
        // If yes, we are done here
        (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)(human);
        resolve();
      } else {
        // If no, display error message and clear the dragged over cells
        deployMsg.innerText = 'Failed to deploy!  Try again.';
        for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size; i++) {
          if (startRow + i < 10) {
            human.gameBoard.board[startRow + i][startCol].draggedOver = false;
          }
        }
        (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)(human);
      }
    };

    // Drag and drop event listeners
    shipImage.addEventListener('dragstart', onDragStart);
    humanBoardEl.addEventListener('dragover', onDragOver);
    shipImage.addEventListener('dragend', onDragEnd);
  });
};

const deployFleet = (human) => {
  return new Promise((resolve) => {
    // Function called at the end of successful fleet deployment
    const startGameMsg = () => {
      const turnEl = document.querySelector('.turn');
      turnEl.innerHTML = '';
      turnEl.innerText = 'Attack the enemy waters, now!';
    };

    // Button to all fleet to be randomly deployed
    const deployRandomBtn = document.querySelector('#random-deploy');
    deployRandomBtn.addEventListener('click', () => {
      humanFleetContainerEl.innerHTML = '';
      (0,_deployRandomly__WEBPACK_IMPORTED_MODULE_3__.placeFleet)(human.gameBoard);
      startGameMsg();
      resolve();
    });

    // Manual deployment of fleet
    deployShip('carrier', human).then(() => {
      deployShip('battleship', human).then(() => {
        deployShip('cruiser', human).then(() => {
          deployShip('submarine', human).then(() => {
            deployShip('destroyer', human).then(() => {
              humanFleetContainerEl.innerHTML = '';
              startGameMsg();
              resolve();
            });
          });
        });
      });
    });
  });
};


/***/ }),

/***/ "./src/deployRandomly.js":
/*!*******************************!*\
  !*** ./src/deployRandomly.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeFleet": () => (/* binding */ placeFleet)
/* harmony export */ });
// Generates a random number 0-9
function getRandomNum() {
  return Math.floor(Math.random() * 10);
}

// Place a ship at a random location with a random direction
function placeShipRandom(gameBoard, type) {
  let row, col, direction;
  do {
    row = getRandomNum();
    col = getRandomNum();
    direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
  } while (!gameBoard.placeShip(type, row, col, direction));
}

// Place all 5 ships on an empty board
function placeFleet(gameBoard) {
  gameBoard.initBoard();
  placeShipRandom(gameBoard, 'carrier');
  placeShipRandom(gameBoard, 'battleship');
  placeShipRandom(gameBoard, 'cruiser');
  placeShipRandom(gameBoard, 'submarine');
  placeShipRandom(gameBoard, 'destroyer');
}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stopPlaying": () => (/* binding */ stopPlaying),
/* harmony export */   "updateDisplay": () => (/* binding */ updateDisplay),
/* harmony export */   "updateScores": () => (/* binding */ updateScores),
/* harmony export */   "updateTurn": () => (/* binding */ updateTurn)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");



function updateBoard(boardEl, board, show) {
  for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.BOARDSIZE; i++) {
    for (let j = 0; j < _constants__WEBPACK_IMPORTED_MODULE_0__.BOARDSIZE; j++) {
      const cell = board[i][j];
      const cellEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
        'div',
        ['cell'],
        { 'data-row': i, 'data-col': j, style: 'cursor: pointer' },
        ''
      );
      boardEl.appendChild(cellEl);

      // Show if a cell is being dragged over when deploying ships
      if (cell.draggedOver) {
        cellEl.classList.add('draggedOver');
        if (cell.hasShip) {
          cellEl.classList.remove('draggedOver');
          cellEl.classList.add('draggedOver-red');
        }
      }

      // For human player, show the ship deployment
      // Also used when cheating, to show the enemy deployment
      if (show) {
        if (cell.hasShip) {
          cellEl.classList.add('show');
          // cellEl.innerText = board[i][j].ship.type[0];
          const img = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('img', ['image']);
          img.src = _constants__WEBPACK_IMPORTED_MODULE_0__.IMAGES[cell.ship.type];
          img.style.height = '4vw';
          img.style.width = 3 * cell.ship.size + 'vw';
          if (cell.direction === 'vertical') {
            img.style.transform = `rotate(90deg)`;
            img.style.top =
              (cell.ship.size / 2 - cell.section - 0.5) * 3 + 'vw';
          } else {
            img.style.left = -cell.section * 3 + 'vw';
          }
          cellEl.appendChild(img);
        }
      }

      // Show if a location has been bombed, and if hit or miss
      if (cell.isBombed) {
        cellEl.style.pointerEvents = 'none';
        const bombEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', ['bomb']);
        cellEl.appendChild(bombEl);
        if (cell.hasShip) {
          bombEl.classList.add('hit');
        } else {
          bombEl.classList.add('missed');
        }
      }
    }
  }
}

const updateDisplay = (human, computer, cheat) => {
  const computerBoardEl = document.querySelector('#computer-board');
  const humanBoardEl = document.querySelector('#human-board');

  // Always show human player fleet
  humanBoardEl.innerHTML = '';
  const show = true;
  updateBoard(humanBoardEl, human.gameBoard.board, show);

  // During deployment stage, no need to refresh computer board
  if (computer) {
    computerBoardEl.innerHTML = '';
    // Show computer deployment if cheating
    updateBoard(computerBoardEl, computer.gameBoard.board, cheat);
  }
};

const updateTurn = (turn) => {
  const turnEl = document.querySelector('.turn');
  turnEl.innerHTML = '';
  turnEl.innerText = `Turn: ${turn}`;
}

const updateScores = (human, computer) => {
  const computerFleetContainerEl = document.querySelector('.computer-fleet-container')
  computerFleetContainerEl.innerHTML = ''
  const div1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div')
  computerFleetContainerEl.appendChild(div1)
  const computerHitsEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div',['total-hits'])
  computerHitsEl.innerText = `Hits: ${computer.gameBoard.totalHits}`
  computerFleetContainerEl.appendChild(computerHitsEl)
  const computerMissesEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', ['total-misses'])
  computerMissesEl.innerText = `Misses: ${computer.gameBoard.totalMisses}`
  computerFleetContainerEl.appendChild(computerMissesEl)

  const humanFleetContainerEl = document.querySelector('.human-fleet-container')
  humanFleetContainerEl.innerHTML = ''
  const div2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div')
  humanFleetContainerEl.appendChild(div2)
  const humanHitsEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div',['total-hits'])
  humanHitsEl.innerText = `Hits: ${human.gameBoard.totalHits}`
  humanFleetContainerEl.appendChild(humanHitsEl)
  const humanMissesEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', ['total-misses'])
  humanMissesEl.innerText = `Misses: ${human.gameBoard.totalMisses}`
  humanFleetContainerEl.appendChild(humanMissesEl) 
}

const stopPlaying = () => {
  // const humanBoardEl = document.querySelector('#human-board');
  // humanBoardEl.style.pointerEvents = 'none';
  // document.addEventListener('click', (e) => e.preventDefault());
  location.reload()
};




/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delay */ "./src/delay.js");
/* harmony import */ var _deployRandomly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deployRandomly */ "./src/deployRandomly.js");




const game = (human, computer) => {
  let cheat = false;
  let turn = 0;

  // Randomly places ships on the computer board
  (0,_deployRandomly__WEBPACK_IMPORTED_MODULE_2__.placeFleet)(computer.gameBoard);
  
  // Initialize game screen
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)(human, computer, cheat);
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateScores)(human, computer);

  // Wait for human player to go first
  // Human player places bombs onto computer's board
  const computerBoardEl = document.querySelector('#computer-board');
  computerBoardEl.addEventListener('click', async (e) => {
    // Check if a cell is clicked on
    // Cells that have been clicked on have `pointerEvents = none`
    // When those cells are click, the class of the target is the board, not cell
    let row, col;
    if (e.target.classList.contains('cell')) {
      // Retrieve the row and col from the element's dataset
      // These were set when these cells are created in dom.js
      row = e.target.dataset.row;
      col = e.target.dataset.col;
    }
    // If cheating, the target of the click is image, whose parent is cell
    else if (e.target.parentElement.classList.contains('cell')) {
      row = e.target.parentElement.dataset.row;
      col = e.target.parentElement.dataset.col;
    }

    turn++;
    // Update turns on UI
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateTurn)(turn);
    
    // Attack the computer's gameBoard
    computer.gameBoard.receiveAttack(row, col);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)(human, computer, cheat);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateScores)(human, computer);

    // Check if it is the winning move
    if (computer.gameBoard.isGameOver()) {
      // Let computer makes one more move
      human.getBombed();
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)(human, computer, cheat);
      await (0,_delay__WEBPACK_IMPORTED_MODULE_1__["default"])(500);
      // Check if it is the winning move
      if (human.gameBoard.isGameOver()) {
        alert('Game Over, tie!');
      } else {
        alert('Game Over, you won!');
      }
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.stopPlaying)();
    } else {
      // Computer bombs the human player board
      human.getBombed();
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)(human, computer, cheat);
      // Check if it is the winning move
      if (human.gameBoard.isGameOver()) {
        await (0,_delay__WEBPACK_IMPORTED_MODULE_1__["default"])(500);
        alert('Game Over, you lost!');
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.stopPlaying)();
      }
    }
  });

  const cheatCheckbox = document.querySelector('#cheat');
  cheatCheckbox.addEventListener('change', () => {
    cheat = cheatCheckbox.checked;
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)(human, computer, cheat);
  });
};


/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoard": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _createCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCell */ "./src/createCell.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _createShip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createShip */ "./src/createShip.js");




const GameBoard = () => {
  let board;
  let totalHits = 0;
  let totalMisses = 0;

  const initBoard = () => {
    board = [];
    for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__.BOARDSIZE; i++) {
      board[i] = [];
      for (let j = 0; j < _constants__WEBPACK_IMPORTED_MODULE_1__.BOARDSIZE; j++) {
        board[i].push((0,_createCell__WEBPACK_IMPORTED_MODULE_0__.Cell)(i, j));
      }
    }
  };

  const printBoard = () => {
    let display = '';
    for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__.BOARDSIZE; i++) {
      for (let j = 0; j < _constants__WEBPACK_IMPORTED_MODULE_1__.BOARDSIZE; j++) {
        if (board[i][j].isBombed) {
          display = 'x';
        } else display += '.';

        if (board[i][j].hasShip) {
          display += 'S';
        } else {
          display += ' ';
        }
      }
      display += '\n';
    }
    console.log(display);
  };

  const placeShip = (type, row, col, direction) => {
    const ship = (0,_createShip__WEBPACK_IMPORTED_MODULE_2__.createShip)(type);
    const size = ship.size;

    if (direction === 'horizontal' && col + size > _constants__WEBPACK_IMPORTED_MODULE_1__.BOARDSIZE) return false;
    if (direction === 'vertical' && row + size > _constants__WEBPACK_IMPORTED_MODULE_1__.BOARDSIZE) return false;

    if (direction === 'vertical') {
      for (let i = 0; i < size; i++) {
        if (board[row + i][col].hasShip) {
          return false;
        }
      }
      for (let i = 0; i < size; i++) {
        board[row + i][col].placeShip(ship, i, direction);
      }
    } else {
      if (direction === 'horizontal') {
        for (let i = 0; i < size; i++) {
          if (board[row][col + i].hasShip) {
            return false;
          }
        }
        for (let i = 0; i < size; i++) {
          board[row][col + i].placeShip(ship, i, direction);
        }
      }
    }
    return true;
  };

  function isGameOver() {
    const count = board.reduce((accumulator, currentValue) => {
      return (
        accumulator +
        currentValue.filter((cell) => cell.isBombed && cell.hasShip).length
      );
    }, 0);
    if (count >= 17) return true;
    return false;
  }

  const receiveAttack = (row, col) => {
    if (board[row][col].isBombed) {
      return '';
    } else {
      // Mark the cell isBombed = true
      board[row][col].attack();
      // Check if it is a hit
      if (board[row][col].hasShip) {
        const ship = board[row][col].ship;
        ship.hit();
        totalHits++;
        return 'hit';
      }
      totalMisses++;
      return 'miss';
    }
  };

  return {
    get board() {
      return board;
    },
    get totalHits() {
      return totalHits;
    },
    get totalMisses() {
      return totalMisses;
    },
    initBoard,
    printBoard,
    placeShip,
    receiveAttack,
    isGameOver,
  };
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _deployFleet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deployFleet */ "./src/deployFleet.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game */ "./src/game.js");






// Initialize players
const human = (0,_players__WEBPACK_IMPORTED_MODULE_1__.Player)('Tom', 'human');
const computer = (0,_players__WEBPACK_IMPORTED_MODULE_1__.Player)('Jerry', 'computer');

// Initialize display
human.gameBoard.initBoard();
computer.gameBoard.initBoard();
(0,_dom__WEBPACK_IMPORTED_MODULE_3__.updateDisplay)(human, computer);

// Deploy fleet then start the game
(0,_deployFleet__WEBPACK_IMPORTED_MODULE_2__.deployFleet)(human).then(() => {
  (0,_game__WEBPACK_IMPORTED_MODULE_4__.game)(human, computer);
});


/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _src_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/gameBoard */ "./src/gameBoard.js");


const Player = (name, type) => {
  const gameBoard = (0,_src_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
  const queue = [];

  function getRandomNum() {
    return Math.floor(Math.random() * 10);
  }

  function getBombedRandonly() {
    let row, col, result;
    do {
      row = getRandomNum();
      col = getRandomNum();
      result = gameBoard.receiveAttack(row, col);
    } while (result === '');
    return { row, col, result };
  }

  const getBombed = () => {
    let feedback;
    let row, col, result;

    // If the queue is empty, get bombed at a randome place
    if (!queue.length) {
      feedback = getBombedRandonly();
      row = feedback.row;
      col = feedback.col;
      result = feedback.result;
    } else {
      // Go through the queue to get bombed at the first cell that's not already bombed
      do {
        const target = queue.shift();
        row = target.row;
        col = target.col;
        result = gameBoard.receiveAttack(row, col);
      } while (result === '');
    }

    // If hit, push this cell's 4 horizontal and vertical neighbours 
    // that are not already bombed into the queue
    if (result === 'hit') {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (
            i !== j && // remove diagonal
            i + j !== 0 && // remove diagonal 
            row + i >= 0 && // make sure cell is within the gameboard
            row + i < 10 &&
            col + j >= 0 &&
            col + j < 10 &&
            !gameBoard.board[row + i][col + j].isBombed // not bombed
          ) {
            queue.push(gameBoard.board[row + i][col + j]);
          }
        }
      }
    } 
    return;
  };

  return {
    set name(value) {
      name = value;
    },
    get name() {
      return name;
    },
    set type(value) {
      type = value;
    },
    get type() {
      return type;
    },
    get gameBoard() {
      return gameBoard;
    },
    getBombed,
  };
};


/***/ }),

/***/ "./src/images/battleship-rotated.svg":
/*!*******************************************!*\
  !*** ./src/images/battleship-rotated.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8cd1a84b46f83f916ec5.svg";

/***/ }),

/***/ "./src/images/battleship.svg":
/*!***********************************!*\
  !*** ./src/images/battleship.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3e87b67a091a7b85628.svg";

/***/ }),

/***/ "./src/images/carrier-rotated.svg":
/*!****************************************!*\
  !*** ./src/images/carrier-rotated.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06fb7dd176d75a9f5e59.svg";

/***/ }),

/***/ "./src/images/carrier.svg":
/*!********************************!*\
  !*** ./src/images/carrier.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69be4df16a9a79625ec9.svg";

/***/ }),

/***/ "./src/images/cruiser-rotated.svg":
/*!****************************************!*\
  !*** ./src/images/cruiser-rotated.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8cd1a84b46f83f916ec5.svg";

/***/ }),

/***/ "./src/images/cruiser.svg":
/*!********************************!*\
  !*** ./src/images/cruiser.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3e87b67a091a7b85628.svg";

/***/ }),

/***/ "./src/images/destroyer-rotated.svg":
/*!******************************************!*\
  !*** ./src/images/destroyer-rotated.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5690fe3d2c0d337c2847.svg";

/***/ }),

/***/ "./src/images/destroyer.svg":
/*!**********************************!*\
  !*** ./src/images/destroyer.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5050c3ee4e2425de07ce.svg";

/***/ }),

/***/ "./src/images/maxresdefault.jpg":
/*!**************************************!*\
  !*** ./src/images/maxresdefault.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df82e0502e9eeba11b60.jpg";

/***/ }),

/***/ "./src/images/submarine-rotated.svg":
/*!******************************************!*\
  !*** ./src/images/submarine-rotated.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "452b7d83b7aaad2d1979.svg";

/***/ }),

/***/ "./src/images/submarine.svg":
/*!**********************************!*\
  !*** ./src/images/submarine.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71ee6bde3829e4d27560.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxV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OztBQUViO0FBQ0EseURBQVc7QUFDWCxFQUFFLDJDQUFJO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCNEM7O0FBRXRDO0FBQ1Asb0JBQW9CLHlEQUFTO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jcmVhdGVDZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NyZWF0ZVNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kZWxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RlcGxveUZsZWV0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGVwbG95UmFuZG9tbHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9tYXhyZXNkZWZhdWx0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qIFZpY3RvciBWZXJpb24gKi9cXG4gIC0tZGFya2VyLWNvbG9yOiAjZmYwMDAwO1xcbiAgLS1kYXJrLWNvbG9yOiAjMTFjYmQ3O1xcbiAgLS1saWdodC1jb2xvcjogI2M2ZjFlNztcXG4gIC0tbGlnaHRlci1jb2xvcjogI2YwZmZmMztcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gYXV0byA0cmVtIDFyZW07XFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvMTM3MjczLmpwZyk7ICovXFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvMTM3Mjk4LmpwZyk7ICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2NjYy5qcGcpOyAqL1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2RkZC5qcGcpOyAqL1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIC8qIGZpbHRlcjogZ3JheXNjYWxlKDkwJSk7ICovXFxufVxcblxcbmgxIHtcXG4gIC8qIGNvbG9yOiByZWQ7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTA7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE3ZnIgMzNmciAzM2ZyIDE3ZnI7XFxufVxcblxcbi5jb21wdXRlci1ib2FyZC1jb250YWluZXIsIC5odW1hbi1ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZXJyaXRvcnkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycmVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn1cXG5cXG4uZW5lbXkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm15IHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XFxuICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIHdpZHRoOiAzdnc7XFxuICBoZWlnaHQ6IDN2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgLyogYm9yZGVyOiAxcHggYmx1ZSBzb2xpZDsgKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbWFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zaG93IHtcXG4gIG9wYWNpdHk6IDUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbn1cXG5cXG4uYm9tYiB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5kcmFnZ2VkT3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuLmRyYWdnZWRPdmVyLXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jb21wdXRlci1mbGVldC1jb250YWluZXIsIC5odW1hbi1mbGVldC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDNmciAxZnIgMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgLyogb3BhY2l0eTogMC43OyAqL1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgei1pbmRleDogMTA7XFxuICBtYXJnaW46IDVyZW0gMXJlbSA1cmVtIDFyZW07XFxufVxcblxcbi5kZXBsb3ktaGVhZGluZywgLnNoaXAtY29udGFpbmVyLCAgLnJvdGF0ZS1jb250YWluZXIsIC5yb3RhdGUtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZXBsb3ktaGVhZGluZyB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxufVxcblxcbi5zaGlwLWltYWdlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZS1idG4ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRlcGxveS1mYWlsZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxufVxcblxcbi50dXJuLCAudG90YWwtaGl0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogdG9wO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA0cHggd2hpdGU7IFxcbn1cXG5cXG4udG90YWwtbWlzc2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiB0b3A7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMnB4IHdoaXRlOyBcXG59XFxuXFxuI3JhbmRvbS1kZXBsb3kge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDF2dztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcblxcbi8qIFRvZ2dsZSBzd2l0Y2ggdG8gc2hvdy9oaWRlIGVuZW15IHNoaXBzICovXFxuLmNoZWF0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVhdC1jb250YWluZXI+cCB7XFxuICBjb2xvcjogZGFya2JsdWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn1cXG5cXG4vKiBUaGUgc2l6ZSBvZiB0aGUgdG9nZ2xlIHN3aXRjaCAqL1xcbi50b2dnbGUtc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKiBIaWRlIHRoZSBkZWZhdWx0IGNoZWNrYm94ICovXFxuLnRvZ2dsZS1zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyIHRoYXQgdGhlIGNpcmNsZSBjYW4gbW92ZSAqL1xcbi8qIHNhbWUgc2l6ZSBhcyB0aGUgdG9nZ2xlIHN3aXRjaCAqL1xcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4vKiBUaGUgY2lyY2xlIHRoYXQgbW92ZXMgaW4gdGhlIHNsaWRlciAqL1xcbi8qIEJlZm9yZSBpdCBpcyBjaGVja2VkLCB0aGUgaW5kaWNhdG9yIChzcXVhcmUpIGlzIG9uIHRoZSBsZWZ0ICovXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDEycHg7XFxuICB3aWR0aDogMTJweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4vKiBDaGFuZ2UgdG9nZ2xlIHN3aXRjaCBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gaXQgaXMgY2xpY2tlZCAqL1xcbi8qIFRoZXRoZSArIGlzIHVzZWQgdG8gc2VsZWN0IHRoZSAuc2xpZGVyIGltbWlkaWF0ZWx5IGZvbGxvdyB0aGUgaW5wdXQ6Y2hlY2tlZCAqL1xcbi8qIFRoZSBzdHlsaW5nIGFwcGxpZXMgdG8gdGhlIC5zbGlkZXIgKi9cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItY29sb3IpO1xcbn1cXG5cXG4vKiBXaGVuIGNoZWNrZWQsIG1vdmUgaW5kaWNhdG9yIHRvIHRoZSByaWdodCBieSAxNnB4ICovXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcXG59XFxuXFxuLyogTWFrZSBzbGlkZXIgaGF2ZSByb3VuZCBjb3JuZXJzICovXFxuLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBNYWtlIHRoZSBpbmRpY2F0b3Igcm91bmQgKi9cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLGdEQUFnRDtFQUNoRCxnREFBZ0Q7RUFDaEQseURBQWlEO0VBQ2pELDZDQUE2QztFQUM3Qyw2Q0FBNkM7RUFDN0Msc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQ0FBMEM7QUFDNUM7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O0FBQ2xCOztBQUVBLDZEQUE2RDtBQUM3RCxnRkFBZ0Y7QUFDaEYsdUNBQXVDO0FBQ3ZDO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBLHNEQUFzRDtBQUN0RDtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qIFZpY3RvciBWZXJpb24gKi9cXG4gIC0tZGFya2VyLWNvbG9yOiAjZmYwMDAwO1xcbiAgLS1kYXJrLWNvbG9yOiAjMTFjYmQ3O1xcbiAgLS1saWdodC1jb2xvcjogI2M2ZjFlNztcXG4gIC0tbGlnaHRlci1jb2xvcjogI2YwZmZmMztcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gYXV0byA0cmVtIDFyZW07XFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvMTM3MjczLmpwZyk7ICovXFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvMTM3Mjk4LmpwZyk7ICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvbWF4cmVzZGVmYXVsdC5qcGcpO1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2NjYy5qcGcpOyAqL1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2RkZC5qcGcpOyAqL1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIC8qIGZpbHRlcjogZ3JheXNjYWxlKDkwJSk7ICovXFxufVxcblxcbmgxIHtcXG4gIC8qIGNvbG9yOiByZWQ7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTA7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE3ZnIgMzNmciAzM2ZyIDE3ZnI7XFxufVxcblxcbi5jb21wdXRlci1ib2FyZC1jb250YWluZXIsIC5odW1hbi1ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZXJyaXRvcnkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycmVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn1cXG5cXG4uZW5lbXkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm15IHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XFxuICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIHdpZHRoOiAzdnc7XFxuICBoZWlnaHQ6IDN2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgLyogYm9yZGVyOiAxcHggYmx1ZSBzb2xpZDsgKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbWFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zaG93IHtcXG4gIG9wYWNpdHk6IDUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbn1cXG5cXG4uYm9tYiB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5kcmFnZ2VkT3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuLmRyYWdnZWRPdmVyLXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jb21wdXRlci1mbGVldC1jb250YWluZXIsIC5odW1hbi1mbGVldC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDNmciAxZnIgMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgLyogb3BhY2l0eTogMC43OyAqL1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgei1pbmRleDogMTA7XFxuICBtYXJnaW46IDVyZW0gMXJlbSA1cmVtIDFyZW07XFxufVxcblxcbi5kZXBsb3ktaGVhZGluZywgLnNoaXAtY29udGFpbmVyLCAgLnJvdGF0ZS1jb250YWluZXIsIC5yb3RhdGUtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZXBsb3ktaGVhZGluZyB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxufVxcblxcbi5zaGlwLWltYWdlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZS1idG4ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRlcGxveS1mYWlsZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxufVxcblxcbi50dXJuLCAudG90YWwtaGl0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogdG9wO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA0cHggd2hpdGU7IFxcbn1cXG5cXG4udG90YWwtbWlzc2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiB0b3A7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMnB4IHdoaXRlOyBcXG59XFxuXFxuI3JhbmRvbS1kZXBsb3kge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDF2dztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcblxcbi8qIFRvZ2dsZSBzd2l0Y2ggdG8gc2hvdy9oaWRlIGVuZW15IHNoaXBzICovXFxuLmNoZWF0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVhdC1jb250YWluZXI+cCB7XFxuICBjb2xvcjogZGFya2JsdWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn1cXG5cXG4vKiBUaGUgc2l6ZSBvZiB0aGUgdG9nZ2xlIHN3aXRjaCAqL1xcbi50b2dnbGUtc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKiBIaWRlIHRoZSBkZWZhdWx0IGNoZWNrYm94ICovXFxuLnRvZ2dsZS1zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyIHRoYXQgdGhlIGNpcmNsZSBjYW4gbW92ZSAqL1xcbi8qIHNhbWUgc2l6ZSBhcyB0aGUgdG9nZ2xlIHN3aXRjaCAqL1xcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4vKiBUaGUgY2lyY2xlIHRoYXQgbW92ZXMgaW4gdGhlIHNsaWRlciAqL1xcbi8qIEJlZm9yZSBpdCBpcyBjaGVja2VkLCB0aGUgaW5kaWNhdG9yIChzcXVhcmUpIGlzIG9uIHRoZSBsZWZ0ICovXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDEycHg7XFxuICB3aWR0aDogMTJweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4vKiBDaGFuZ2UgdG9nZ2xlIHN3aXRjaCBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gaXQgaXMgY2xpY2tlZCAqL1xcbi8qIFRoZXRoZSArIGlzIHVzZWQgdG8gc2VsZWN0IHRoZSAuc2xpZGVyIGltbWlkaWF0ZWx5IGZvbGxvdyB0aGUgaW5wdXQ6Y2hlY2tlZCAqL1xcbi8qIFRoZSBzdHlsaW5nIGFwcGxpZXMgdG8gdGhlIC5zbGlkZXIgKi9cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItY29sb3IpO1xcbn1cXG5cXG4vKiBXaGVuIGNoZWNrZWQsIG1vdmUgaW5kaWNhdG9yIHRvIHRoZSByaWdodCBieSAxNnB4ICovXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcXG59XFxuXFxuLyogTWFrZSBzbGlkZXIgaGF2ZSByb3VuZCBjb3JuZXJzICovXFxuLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBNYWtlIHRoZSBpbmRpY2F0b3Igcm91bmQgKi9cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNhcnJpZXJJbWFnZSBmcm9tICcuL2ltYWdlcy9jYXJyaWVyLnN2Zyc7XG5pbXBvcnQgYmF0dGxlc2hpcEltYWdlIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXAuc3ZnJztcbmltcG9ydCBjcnVpc2VySW1hZ2UgZnJvbSAnLi9pbWFnZXMvY3J1aXNlci5zdmcnO1xuaW1wb3J0IHN1Ym1hcmluZUltYWdlIGZyb20gJy4vaW1hZ2VzL3N1Ym1hcmluZS5zdmcnO1xuaW1wb3J0IGRlc3Ryb3llckltYWdlIGZyb20gJy4vaW1hZ2VzL2Rlc3Ryb3llci5zdmcnO1xuXG5pbXBvcnQgcm90YXRlZENhcnJpZXJJbWFnZSBmcm9tICcuL2ltYWdlcy9jYXJyaWVyLXJvdGF0ZWQuc3ZnJztcbmltcG9ydCByb3RhdGVkQmF0dGxlc2hpcEltYWdlIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXAtcm90YXRlZC5zdmcnO1xuaW1wb3J0IHJvdGF0ZWRDcnVpc2VySW1hZ2UgZnJvbSAnLi9pbWFnZXMvY3J1aXNlci1yb3RhdGVkLnN2Zyc7XG5pbXBvcnQgcm90YXRlZFN1Ym1hcmluZUltYWdlIGZyb20gJy4vaW1hZ2VzL3N1Ym1hcmluZS1yb3RhdGVkLnN2Zyc7XG5pbXBvcnQgcm90YXRlZERlc3Ryb3llckltYWdlIGZyb20gJy4vaW1hZ2VzL2Rlc3Ryb3llci1yb3RhdGVkLnN2Zyc7XG5cbmNvbnN0IEJPQVJEU0laRSA9IDEwO1xuXG5jb25zdCBGTEVFVCA9IHtcbiAgY2FycmllcjogeyBzaXplOiA1IH0sXG4gIGJhdHRsZXNoaXA6IHsgc2l6ZTogNCB9LFxuICBjcnVpc2VyOiB7IHNpemU6IDMgfSxcbiAgc3VibWFyaW5lOiB7IHNpemU6IDMgfSxcbiAgZGVzdHJveWVyOiB7IHNpemU6IDIgfSxcbn07XG5cbmNvbnN0IElNQUdFUyA9IHtcbiAgY2FycmllcjogY2FycmllckltYWdlLFxuICBiYXR0bGVzaGlwOiBiYXR0bGVzaGlwSW1hZ2UsXG4gIGNydWlzZXI6IGNydWlzZXJJbWFnZSxcbiAgc3VibWFyaW5lOiBzdWJtYXJpbmVJbWFnZSxcbiAgZGVzdHJveWVyOiBkZXN0cm95ZXJJbWFnZSxcbn07XG5cbmNvbnN0IFJPVEFURURJTUFHRVMgPSB7XG4gIGNhcnJpZXI6IHJvdGF0ZWRDYXJyaWVySW1hZ2UsXG4gIGJhdHRsZXNoaXA6IHJvdGF0ZWRCYXR0bGVzaGlwSW1hZ2UsXG4gIGNydWlzZXI6IHJvdGF0ZWRDcnVpc2VySW1hZ2UsXG4gIHN1Ym1hcmluZTogcm90YXRlZFN1Ym1hcmluZUltYWdlLFxuICBkZXN0cm95ZXI6IHJvdGF0ZWREZXN0cm95ZXJJbWFnZSxcbn07XG5cblxuZXhwb3J0IHtCT0FSRFNJWkUsIEZMRUVULCBJTUFHRVMsIFJPVEFURURJTUFHRVN9XG4iLCJleHBvcnQgY29uc3QgQ2VsbCA9IChyb3csIGNvbCkgPT4ge1xuICBsZXQgc2hpcCA9IG51bGw7XG4gIGxldCBoYXNTaGlwID0gZmFsc2U7XG4gIGxldCBpc0JvbWJlZCA9IGZhbHNlO1xuICBsZXQgc2VjdGlvbjtcbiAgbGV0IGRpcmVjdGlvbjtcbiAgbGV0IGRyYWdnZWRPdmVyID0gZmFsc2U7XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKG9iaiwgaW5kZXgsIGRpcikgPT4ge1xuICAgIGhhc1NoaXAgPSB0cnVlO1xuICAgIHNoaXAgPSBvYmo7XG4gICAgc2VjdGlvbiA9IGluZGV4O1xuICAgIGRpcmVjdGlvbiA9IGRpcjtcbiAgfTtcblxuICBjb25zdCBhdHRhY2sgPSAoKSA9PiB7XG4gICAgaXNCb21iZWQgPSB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcm93LFxuICAgIGNvbCxcbiAgICBnZXQgc2VjdGlvbigpIHtcbiAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH0sXG4gICAgZ2V0IGRpcmVjdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgIH0sXG4gICAgZ2V0IHNoaXAoKSB7XG4gICAgICByZXR1cm4gc2hpcDtcbiAgICB9LFxuICAgIGdldCBoYXNTaGlwKCkge1xuICAgICAgcmV0dXJuIGhhc1NoaXA7XG4gICAgfSxcbiAgICBnZXQgaXNCb21iZWQoKSB7XG4gICAgICByZXR1cm4gaXNCb21iZWQ7XG4gICAgfSxcbiAgICBzZXQgZHJhZ2dlZE92ZXIgKHZhbHVlKSB7XG4gICAgICBkcmFnZ2VkT3ZlciA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IGRyYWdnZWRPdmVyKCkge1xuICAgICAgcmV0dXJuIGRyYWdnZWRPdmVyO1xuICAgIH0sXG4gICAgcGxhY2VTaGlwLFxuICAgIGF0dGFjayxcbiAgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNsYXNzQXJyYXksIGF0dHJPYmosIHRleHQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGlmIChjbGFzc0FycmF5KSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NBcnJheSk7XG5cbiAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJPYmopIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyT2JqW2F0dHJdKTtcbiAgfVxuXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgRkxFRVQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNoaXAgPSAodHlwZSkgPT4ge1xuICBjb25zdCBzaXplID0gRkxFRVRbdHlwZV0uc2l6ZTtcbiAgbGV0IGhpdHMgPSAwO1xuICBsZXQgaXNTdW5rID0gZmFsc2U7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdHMrKztcbiAgICBpZiAoaGl0cyA+PSBzaXplKSBpc1N1bmsgPSB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdHlwZSxcbiAgICBzaXplOiBzaXplLFxuICAgIGdldCBoaXRzKCkge1xuICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfSxcbiAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgcmV0dXJuIGlzU3VuaztcbiAgICB9LFxuICAgIGhpdCxcbiAgfTtcbn07XG4iLCIvLyBHbG9iYWwgZnVuY3Rpb25cbmZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsYXk7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHsgQk9BUkRTSVpFLCBGTEVFVCwgSU1BR0VTLCBST1RBVEVESU1BR0VTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXBkYXRlRGlzcGxheSB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHBsYWNlRmxlZXQgfSBmcm9tICcuL2RlcGxveVJhbmRvbWx5JztcblxuY29uc3QgaHVtYW5GbGVldENvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWFuLWZsZWV0LWNvbnRhaW5lcicpO1xuY29uc3QgaHVtYW5Cb2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWFuLWJvYXJkJyk7XG5cbmNvbnN0IGRlcGxveVNoaXAgPSAoc2hpcCwgaHVtYW4pID0+IHtcbiAgLy8gU2V0IHVwIGRlcGxveSBzaGlwIHNpZGUgYmFyXG4gIGh1bWFuRmxlZXRDb250YWluZXJFbC5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgaGVhZGluZ0VsID0gY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBbJ2RlcGxveS1oZWFkaW5nJ10sXG4gICAge30sXG4gICAgYERyYWcgYW5kIGRyb3AgdG8gZGVwbG95IHlvdXIgJHtzaGlwfWBcbiAgKTtcbiAgaHVtYW5GbGVldENvbnRhaW5lckVsLmFwcGVuZENoaWxkKGhlYWRpbmdFbCk7XG4gIGNvbnN0IHNoaXBDb250YWluZXJFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnc2hpcC1jb250YWluZXInXSk7XG4gIGNvbnN0IHNoaXBJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIFsnc2hpcC1pbWFnZSddLCB7IGRyYWdnYWJsZTogJ3RydWUnIH0pO1xuICBzaGlwSW1hZ2Uuc3JjID0gSU1BR0VTW3NoaXBdO1xuICAvLyBFYWNoIGNlbGwgaW4gdGhlIGdhbWUgYm9hcmQgaXMgM3Z3XG4gIHNoaXBJbWFnZS5zdHlsZS53aWR0aCA9IEZMRUVUW3NoaXBdLnNpemUgKiAzICsgJ3Z3JztcbiAgbGV0IHJvdGF0ZWQgPSBmYWxzZTtcbiAgc2hpcENvbnRhaW5lckVsLmFwcGVuZENoaWxkKHNoaXBJbWFnZSk7XG4gIGh1bWFuRmxlZXRDb250YWluZXJFbC5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyRWwpO1xuICBjb25zdCByb3RhdGVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3JvdGF0ZS1jb250YWluZXInXSk7XG4gIGNvbnN0IHJvdGF0ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgJ2J1dHRvbicsXG4gICAgWydyb3RhdGUtYnRuJ10sXG4gICAge30sXG4gICAgJ1JvdGF0ZSBzaGlwIPCflIQnXG4gICk7XG4gIHJvdGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGVCdG4pO1xuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQocm90YXRlQ29udGFpbmVyKTtcbiAgY29uc3QgZGVwbG95TXNnID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydkZXBsb3ktZmFpbGVkJ10pO1xuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoZGVwbG95TXNnKTtcblxuICAvLyBCdXR0b24gdG8gdG9nZ2xlIHJvdGF0aW5nIG9mIHRoZSBzaGlwXG4gIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoIXJvdGF0ZWQpIHtcbiAgICAgIC8vIHNoaXBJbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICBzaGlwSW1hZ2Uuc3JjID0gUk9UQVRFRElNQUdFU1tzaGlwXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2hpcEltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgc2hpcEltYWdlLnNyYyA9IElNQUdFU1tzaGlwXTtcbiAgICB9XG4gICAgcm90YXRlZCA9ICFyb3RhdGVkO1xuICB9KTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBsZXQgcm93T2Zmc2V0ID0gMDtcbiAgICBsZXQgY29sT2Zmc2V0ID0gMDtcbiAgICBsZXQgc3RhcnRSb3csIHN0YXJ0Q29sO1xuICAgIGxldCBwcmV2Um93LCBwcmV2Q29sO1xuXG4gICAgY29uc3Qgb25EcmFnU3RhcnQgPSAoKSA9PiB7XG4gICAgICBpZiAoIXJvdGF0ZWQpIHtcbiAgICAgICAgLy8gVGhlIHNoaXAgaXMgaG9yaXpvbnRhbFxuICAgICAgICBzaGlwSW1hZ2Uuc3R5bGUud2lkdGggPSBGTEVFVFtzaGlwXS5zaXplICogMyArICd2dyc7XG4gICAgICAgIC8vIHNoaXBJbWFnZS5zdHlsZS5oZWlnaHQgPSAnM3Z3J1xuICAgICAgICAvLyBHZXQgdGhlIGxvY2F0aW9uIG9mIHRoZSBtb3VzZSByZWxhdGl2ZSB0byB0aGUgaW1hZ2VcbiAgICAgICAgY29uc3QgcmVjdCA9IHNoaXBJbWFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeE9mZnNldCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbE9mZnNldCA9IE1hdGguZmxvb3IoeE9mZnNldCAvICgoMyAvIDEwMCkgKiB3aW5kb3cuaW5uZXJXaWR0aCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVG9kbzogc2hpcEltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJ1xuICAgICAgICAvLyBIb3cgdG8gbWFrZSB0aGUgZHJhZ2dlZCBzaGlwIGltYWdlIHJvdGF0ZSBieSA5MCBkZWcgdG9vP1xuICAgICAgICBzaGlwSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gRkxFRVRbc2hpcF0uc2l6ZSAqIDMgKyAndncnO1xuICAgICAgICAvLyBzaGlwSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gJzN2dydcbiAgICAgICAgLy8gR2V0IHRoZSBsb2NhdGlvbiBvZiB0aGUgbW91c2UgcmVsYXRpdmUgdG8gdGhlIGltYWdlXG4gICAgICAgIGNvbnN0IHJlY3QgPSBzaGlwSW1hZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHlPZmZzZXQgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgIHJvd09mZnNldCA9IE1hdGguZmxvb3IoeU9mZnNldCAvICgoMyAvIDEwMCkgKiB3aW5kb3cuaW5uZXJXaWR0aCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvbkRyYWdPdmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAvLyBOZWVkIHRoZSBmb2xsb3dpbmcgbGluZSB0byBwcmV2ZW50IHRoZSBzaGlwIHRvIHpvb20gYmFjayB0byBpdCdzXG4gICAgICAvLyBvcmlnaW5hbCBsb2NhdGlvbiBhZnRlciBkcmFnRW5kXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBHZXQgdGhlIGxvY2F0aW9uIGFuZCBzaXplIG9mIHRoZSBib2FyZFxuICAgICAgY29uc3QgcmVjdCA9IGh1bWFuQm9hcmRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIC8vIFRoZSBHcmlkIGlzIDEwIHggMTBcbiAgICAgIGNvbnN0IGNlbGxXaWR0aCA9IHJlY3Qud2lkdGggLyBCT0FSRFNJWkU7XG4gICAgICBjb25zdCBjZWxsSGVpZ2h0ID0gcmVjdC53aWR0aCAvIEJPQVJEU0laRTtcbiAgICAgIGNvbnN0IGNvbCA9IE1hdGguZmxvb3IoKGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQpIC8gY2VsbFdpZHRoKTtcbiAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoKGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCkgLyBjZWxsSGVpZ2h0KTtcbiAgICAgIGlmIChyb3cgIT09IHByZXZSb3cgfHwgY29sICE9PSBwcmV2Q29sKSB7XG4gICAgICAgIC8vIE9ubHkgcmVmcmVzaCB0aGUgc2NyZWVuIGlmIHRoZSBzaGlwIGlzIGRyYWdnZWQgdG8gYSBkaWZmZXJlbnQgY2VsbFxuICAgICAgICBwcmV2Um93ID0gcm93O1xuICAgICAgICBwcmV2Q29sID0gY29sO1xuXG4gICAgICAgIGlmICghcm90YXRlZCkge1xuICAgICAgICAgIC8vIFRoZSBkcmFnZ2VkIHNoaXAgaXMgaG9yaXpvbnRhbFxuICAgICAgICAgIHN0YXJ0Q29sID0gY29sIC0gY29sT2Zmc2V0O1xuICAgICAgICAgIHN0YXJ0Um93ID0gcm93IDwgMCA/IDAgOiByb3c7XG5cbiAgICAgICAgICAvLyBDb25maW5lIHRoZSBzaGlwIGluc2lkZSB0aGUgYm9hcmRcbiAgICAgICAgICBpZiAoc3RhcnRDb2wgPCAwKSBzdGFydENvbCA9IDA7XG4gICAgICAgICAgaWYgKHN0YXJ0Q29sID4gOSAtIEZMRUVUW3NoaXBdLnNpemUpXG4gICAgICAgICAgICBzdGFydENvbCA9IDkgLSBGTEVFVFtzaGlwXS5zaXplICsgMTtcblxuICAgICAgICAgIC8vIFNldCBkcmFnZ2VkT3ZlciB0byB0cnVlLCBzbyB0aGUgY2VsbCBpcyBncmVlbiB3aGVuIHVwZGF0ZURpc3BsYXkgIFxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRkxFRVRbc2hpcF0uc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRDb2wgKyBpIDwgMTApIHtcbiAgICAgICAgICAgICAgaHVtYW4uZ2FtZUJvYXJkLmJvYXJkW3N0YXJ0Um93XVtzdGFydENvbCArIGldLmRyYWdnZWRPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdXBkYXRlRGlzcGxheShodW1hbik7XG5cbiAgICAgICAgICAvLyBSZXNldCBkcmFnZ2VkT3ZlciBzbyB0aGVyZSBpcyBub3QgYSB0cmlhbCBvZiBncmVlbiBjZWxscyB3aGVuIHRoZSBzaGlwIG1vdmVzXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBGTEVFVFtzaGlwXS5zaXplOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdGFydENvbCArIGkgPCAxMCkge1xuICAgICAgICAgICAgICBodW1hbi5nYW1lQm9hcmQuYm9hcmRbc3RhcnRSb3ddW3N0YXJ0Q29sICsgaV0uZHJhZ2dlZE92ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhlIHNoaXAgZHJhZ2dlZCBpcyB2ZXJ0aWNhbFxuICAgICAgICAgIHN0YXJ0Q29sID0gY29sIDwgMCA/IDAgOiBjb2w7XG4gICAgICAgICAgc3RhcnRSb3cgPSByb3cgLSByb3dPZmZzZXQgPCAwID8gMCA6IHJvdyAtIHJvd09mZnNldDtcblxuICAgICAgICAgIC8vIENvbmZpbmUgdGhlIHNoaXAgaW5zaWRlIHRoZSBib2FyZFxuICAgICAgICAgIGlmIChzdGFydFJvdyA8IDApIHN0YXJ0Um93ID0gMDtcbiAgICAgICAgICBpZiAoc3RhcnRSb3cgPiA5IC0gRkxFRVRbc2hpcF0uc2l6ZSlcbiAgICAgICAgICAgIHN0YXJ0Um93ID0gOSAtIEZMRUVUW3NoaXBdLnNpemUgKyAxO1xuXG4gICAgICAgICAgLy8gU2V0IGRyYWdnZWRPdmVyIHRvIHRydWUsIHNvIHRoZSBjZWxsIGlzIGdyZWVuIHdoZW4gdXBkYXRlRGlzcGxheSAgXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBGTEVFVFtzaGlwXS5zaXplOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdGFydFJvdyArIGkgPCAxMCkge1xuICAgICAgICAgICAgICBodW1hbi5nYW1lQm9hcmQuYm9hcmRbc3RhcnRSb3cgKyBpXVtzdGFydENvbF0uZHJhZ2dlZE92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVEaXNwbGF5KGh1bWFuKTtcblxuICAgICAgICAgIC8vIFJlc2V0IGRyYWdnZWRPdmVyIHNvIHRoZXJlIGlzIG5vdCBhIHRyaWFsIG9mIGdyZWVuIGNlbGxzIHdoZW4gdGhlIHNoaXAgbW92ZXNcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEZMRUVUW3NoaXBdLnNpemU7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN0YXJ0Um93ICsgaSA8IDEwKSB7XG4gICAgICAgICAgICAgIGh1bWFuLmdhbWVCb2FyZC5ib2FyZFtzdGFydFJvdyArIGldW3N0YXJ0Q29sXS5kcmFnZ2VkT3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvbkRyYWdFbmQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSByb3RhdGVkID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgIC8vIENoZWNrIGlmIGEgc2hpcCBpcyBzdWNjZXNzZnVsbHkgZGVwbG95ZWRcbiAgICAgIGlmIChodW1hbi5nYW1lQm9hcmQucGxhY2VTaGlwKHNoaXAsIHN0YXJ0Um93LCBzdGFydENvbCwgZGlyZWN0aW9uKSkge1xuICAgICAgICAvLyBJZiB5ZXMsIHdlIGFyZSBkb25lIGhlcmVcbiAgICAgICAgdXBkYXRlRGlzcGxheShodW1hbik7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIG5vLCBkaXNwbGF5IGVycm9yIG1lc3NhZ2UgYW5kIGNsZWFyIHRoZSBkcmFnZ2VkIG92ZXIgY2VsbHNcbiAgICAgICAgZGVwbG95TXNnLmlubmVyVGV4dCA9ICdGYWlsZWQgdG8gZGVwbG95ISAgVHJ5IGFnYWluLic7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRkxFRVRbc2hpcF0uc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKHN0YXJ0Um93ICsgaSA8IDEwKSB7XG4gICAgICAgICAgICBodW1hbi5nYW1lQm9hcmQuYm9hcmRbc3RhcnRSb3cgKyBpXVtzdGFydENvbF0uZHJhZ2dlZE92ZXIgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlRGlzcGxheShodW1hbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIERyYWcgYW5kIGRyb3AgZXZlbnQgbGlzdGVuZXJzXG4gICAgc2hpcEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIG9uRHJhZ1N0YXJ0KTtcbiAgICBodW1hbkJvYXJkRWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWdPdmVyKTtcbiAgICBzaGlwSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIG9uRHJhZ0VuZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlcGxveUZsZWV0ID0gKGh1bWFuKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIC8vIEZ1bmN0aW9uIGNhbGxlZCBhdCB0aGUgZW5kIG9mIHN1Y2Nlc3NmdWwgZmxlZXQgZGVwbG95bWVudFxuICAgIGNvbnN0IHN0YXJ0R2FtZU1zZyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHR1cm5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dXJuJyk7XG4gICAgICB0dXJuRWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0dXJuRWwuaW5uZXJUZXh0ID0gJ0F0dGFjayB0aGUgZW5lbXkgd2F0ZXJzLCBub3chJztcbiAgICB9O1xuXG4gICAgLy8gQnV0dG9uIHRvIGFsbCBmbGVldCB0byBiZSByYW5kb21seSBkZXBsb3llZFxuICAgIGNvbnN0IGRlcGxveVJhbmRvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5kb20tZGVwbG95Jyk7XG4gICAgZGVwbG95UmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaHVtYW5GbGVldENvbnRhaW5lckVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgcGxhY2VGbGVldChodW1hbi5nYW1lQm9hcmQpO1xuICAgICAgc3RhcnRHYW1lTXNnKCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBNYW51YWwgZGVwbG95bWVudCBvZiBmbGVldFxuICAgIGRlcGxveVNoaXAoJ2NhcnJpZXInLCBodW1hbikudGhlbigoKSA9PiB7XG4gICAgICBkZXBsb3lTaGlwKCdiYXR0bGVzaGlwJywgaHVtYW4pLnRoZW4oKCkgPT4ge1xuICAgICAgICBkZXBsb3lTaGlwKCdjcnVpc2VyJywgaHVtYW4pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGRlcGxveVNoaXAoJ3N1Ym1hcmluZScsIGh1bWFuKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGRlcGxveVNoaXAoJ2Rlc3Ryb3llcicsIGh1bWFuKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgaHVtYW5GbGVldENvbnRhaW5lckVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICBzdGFydEdhbWVNc2coKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsIi8vIEdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgMC05XG5mdW5jdGlvbiBnZXRSYW5kb21OdW0oKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG59XG5cbi8vIFBsYWNlIGEgc2hpcCBhdCBhIHJhbmRvbSBsb2NhdGlvbiB3aXRoIGEgcmFuZG9tIGRpcmVjdGlvblxuZnVuY3Rpb24gcGxhY2VTaGlwUmFuZG9tKGdhbWVCb2FyZCwgdHlwZSkge1xuICBsZXQgcm93LCBjb2wsIGRpcmVjdGlvbjtcbiAgZG8ge1xuICAgIHJvdyA9IGdldFJhbmRvbU51bSgpO1xuICAgIGNvbCA9IGdldFJhbmRvbU51bSgpO1xuICAgIGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICB9IHdoaWxlICghZ2FtZUJvYXJkLnBsYWNlU2hpcCh0eXBlLCByb3csIGNvbCwgZGlyZWN0aW9uKSk7XG59XG5cbi8vIFBsYWNlIGFsbCA1IHNoaXBzIG9uIGFuIGVtcHR5IGJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VGbGVldChnYW1lQm9hcmQpIHtcbiAgZ2FtZUJvYXJkLmluaXRCb2FyZCgpO1xuICBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCAnY2FycmllcicpO1xuICBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCAnYmF0dGxlc2hpcCcpO1xuICBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCAnY3J1aXNlcicpO1xuICBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCAnc3VibWFyaW5lJyk7XG4gIHBsYWNlU2hpcFJhbmRvbShnYW1lQm9hcmQsICdkZXN0cm95ZXInKTtcbn1cbiIsImltcG9ydCB7IEJPQVJEU0laRSwgSU1BR0VTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcblxuZnVuY3Rpb24gdXBkYXRlQm9hcmQoYm9hcmRFbCwgYm9hcmQsIHNob3cpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBCT0FSRFNJWkU7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgQk9BUkRTSVpFOyBqKyspIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBib2FyZFtpXVtqXTtcbiAgICAgIGNvbnN0IGNlbGxFbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBbJ2NlbGwnXSxcbiAgICAgICAgeyAnZGF0YS1yb3cnOiBpLCAnZGF0YS1jb2wnOiBqLCBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcicgfSxcbiAgICAgICAgJydcbiAgICAgICk7XG4gICAgICBib2FyZEVsLmFwcGVuZENoaWxkKGNlbGxFbCk7XG5cbiAgICAgIC8vIFNob3cgaWYgYSBjZWxsIGlzIGJlaW5nIGRyYWdnZWQgb3ZlciB3aGVuIGRlcGxveWluZyBzaGlwc1xuICAgICAgaWYgKGNlbGwuZHJhZ2dlZE92ZXIpIHtcbiAgICAgICAgY2VsbEVsLmNsYXNzTGlzdC5hZGQoJ2RyYWdnZWRPdmVyJyk7XG4gICAgICAgIGlmIChjZWxsLmhhc1NoaXApIHtcbiAgICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dlZE92ZXInKTtcbiAgICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnZHJhZ2dlZE92ZXItcmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRm9yIGh1bWFuIHBsYXllciwgc2hvdyB0aGUgc2hpcCBkZXBsb3ltZW50XG4gICAgICAvLyBBbHNvIHVzZWQgd2hlbiBjaGVhdGluZywgdG8gc2hvdyB0aGUgZW5lbXkgZGVwbG95bWVudFxuICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgaWYgKGNlbGwuaGFzU2hpcCkge1xuICAgICAgICAgIGNlbGxFbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgLy8gY2VsbEVsLmlubmVyVGV4dCA9IGJvYXJkW2ldW2pdLnNoaXAudHlwZVswXTtcbiAgICAgICAgICBjb25zdCBpbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBbJ2ltYWdlJ10pO1xuICAgICAgICAgIGltZy5zcmMgPSBJTUFHRVNbY2VsbC5zaGlwLnR5cGVdO1xuICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSAnNHZ3JztcbiAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSAzICogY2VsbC5zaGlwLnNpemUgKyAndncnO1xuICAgICAgICAgIGlmIChjZWxsLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgaW1nLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpYDtcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPVxuICAgICAgICAgICAgICAoY2VsbC5zaGlwLnNpemUgLyAyIC0gY2VsbC5zZWN0aW9uIC0gMC41KSAqIDMgKyAndncnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IC1jZWxsLnNlY3Rpb24gKiAzICsgJ3Z3JztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2VsbEVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2hvdyBpZiBhIGxvY2F0aW9uIGhhcyBiZWVuIGJvbWJlZCwgYW5kIGlmIGhpdCBvciBtaXNzXG4gICAgICBpZiAoY2VsbC5pc0JvbWJlZCkge1xuICAgICAgICBjZWxsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgY29uc3QgYm9tYkVsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydib21iJ10pO1xuICAgICAgICBjZWxsRWwuYXBwZW5kQ2hpbGQoYm9tYkVsKTtcbiAgICAgICAgaWYgKGNlbGwuaGFzU2hpcCkge1xuICAgICAgICAgIGJvbWJFbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib21iRWwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgdXBkYXRlRGlzcGxheSA9IChodW1hbiwgY29tcHV0ZXIsIGNoZWF0KSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wdXRlci1ib2FyZCcpO1xuICBjb25zdCBodW1hbkJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtYW4tYm9hcmQnKTtcblxuICAvLyBBbHdheXMgc2hvdyBodW1hbiBwbGF5ZXIgZmxlZXRcbiAgaHVtYW5Cb2FyZEVsLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBzaG93ID0gdHJ1ZTtcbiAgdXBkYXRlQm9hcmQoaHVtYW5Cb2FyZEVsLCBodW1hbi5nYW1lQm9hcmQuYm9hcmQsIHNob3cpO1xuXG4gIC8vIER1cmluZyBkZXBsb3ltZW50IHN0YWdlLCBubyBuZWVkIHRvIHJlZnJlc2ggY29tcHV0ZXIgYm9hcmRcbiAgaWYgKGNvbXB1dGVyKSB7XG4gICAgY29tcHV0ZXJCb2FyZEVsLmlubmVySFRNTCA9ICcnO1xuICAgIC8vIFNob3cgY29tcHV0ZXIgZGVwbG95bWVudCBpZiBjaGVhdGluZ1xuICAgIHVwZGF0ZUJvYXJkKGNvbXB1dGVyQm9hcmRFbCwgY29tcHV0ZXIuZ2FtZUJvYXJkLmJvYXJkLCBjaGVhdCk7XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZVR1cm4gPSAodHVybikgPT4ge1xuICBjb25zdCB0dXJuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybicpO1xuICB0dXJuRWwuaW5uZXJIVE1MID0gJyc7XG4gIHR1cm5FbC5pbm5lclRleHQgPSBgVHVybjogJHt0dXJufWA7XG59XG5cbmNvbnN0IHVwZGF0ZVNjb3JlcyA9IChodW1hbiwgY29tcHV0ZXIpID0+IHtcbiAgY29uc3QgY29tcHV0ZXJGbGVldENvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWZsZWV0LWNvbnRhaW5lcicpXG4gIGNvbXB1dGVyRmxlZXRDb250YWluZXJFbC5pbm5lckhUTUwgPSAnJ1xuICBjb25zdCBkaXYxID0gY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29tcHV0ZXJGbGVldENvbnRhaW5lckVsLmFwcGVuZENoaWxkKGRpdjEpXG4gIGNvbnN0IGNvbXB1dGVySGl0c0VsID0gY3JlYXRlRWxlbWVudCgnZGl2JyxbJ3RvdGFsLWhpdHMnXSlcbiAgY29tcHV0ZXJIaXRzRWwuaW5uZXJUZXh0ID0gYEhpdHM6ICR7Y29tcHV0ZXIuZ2FtZUJvYXJkLnRvdGFsSGl0c31gXG4gIGNvbXB1dGVyRmxlZXRDb250YWluZXJFbC5hcHBlbmRDaGlsZChjb21wdXRlckhpdHNFbClcbiAgY29uc3QgY29tcHV0ZXJNaXNzZXNFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsndG90YWwtbWlzc2VzJ10pXG4gIGNvbXB1dGVyTWlzc2VzRWwuaW5uZXJUZXh0ID0gYE1pc3NlczogJHtjb21wdXRlci5nYW1lQm9hcmQudG90YWxNaXNzZXN9YFxuICBjb21wdXRlckZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoY29tcHV0ZXJNaXNzZXNFbClcblxuICBjb25zdCBodW1hbkZsZWV0Q29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtYW4tZmxlZXQtY29udGFpbmVyJylcbiAgaHVtYW5GbGVldENvbnRhaW5lckVsLmlubmVySFRNTCA9ICcnXG4gIGNvbnN0IGRpdjIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKVxuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoZGl2MilcbiAgY29uc3QgaHVtYW5IaXRzRWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLFsndG90YWwtaGl0cyddKVxuICBodW1hbkhpdHNFbC5pbm5lclRleHQgPSBgSGl0czogJHtodW1hbi5nYW1lQm9hcmQudG90YWxIaXRzfWBcbiAgaHVtYW5GbGVldENvbnRhaW5lckVsLmFwcGVuZENoaWxkKGh1bWFuSGl0c0VsKVxuICBjb25zdCBodW1hbk1pc3Nlc0VsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWyd0b3RhbC1taXNzZXMnXSlcbiAgaHVtYW5NaXNzZXNFbC5pbm5lclRleHQgPSBgTWlzc2VzOiAke2h1bWFuLmdhbWVCb2FyZC50b3RhbE1pc3Nlc31gXG4gIGh1bWFuRmxlZXRDb250YWluZXJFbC5hcHBlbmRDaGlsZChodW1hbk1pc3Nlc0VsKSBcbn1cblxuY29uc3Qgc3RvcFBsYXlpbmcgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IGh1bWFuQm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1hbi1ib2FyZCcpO1xuICAvLyBodW1hbkJvYXJkRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgbG9jYXRpb24ucmVsb2FkKClcbn07XG5cbmV4cG9ydCB7IHVwZGF0ZURpc3BsYXksIHVwZGF0ZVR1cm4sIHVwZGF0ZVNjb3Jlcywgc3RvcFBsYXlpbmcgfTtcbiIsImltcG9ydCB7IHVwZGF0ZURpc3BsYXksIHVwZGF0ZVR1cm4sIHVwZGF0ZVNjb3Jlcywgc3RvcFBsYXlpbmcgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgZGVsYXkgZnJvbSAnLi9kZWxheSc7XG5pbXBvcnQgeyBwbGFjZUZsZWV0IH0gZnJvbSAnLi9kZXBsb3lSYW5kb21seSc7XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gKGh1bWFuLCBjb21wdXRlcikgPT4ge1xuICBsZXQgY2hlYXQgPSBmYWxzZTtcbiAgbGV0IHR1cm4gPSAwO1xuXG4gIC8vIFJhbmRvbWx5IHBsYWNlcyBzaGlwcyBvbiB0aGUgY29tcHV0ZXIgYm9hcmRcbiAgcGxhY2VGbGVldChjb21wdXRlci5nYW1lQm9hcmQpO1xuICBcbiAgLy8gSW5pdGlhbGl6ZSBnYW1lIHNjcmVlblxuICB1cGRhdGVEaXNwbGF5KGh1bWFuLCBjb21wdXRlciwgY2hlYXQpO1xuICB1cGRhdGVTY29yZXMoaHVtYW4sIGNvbXB1dGVyKTtcblxuICAvLyBXYWl0IGZvciBodW1hbiBwbGF5ZXIgdG8gZ28gZmlyc3RcbiAgLy8gSHVtYW4gcGxheWVyIHBsYWNlcyBib21icyBvbnRvIGNvbXB1dGVyJ3MgYm9hcmRcbiAgY29uc3QgY29tcHV0ZXJCb2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyLWJvYXJkJyk7XG4gIGNvbXB1dGVyQm9hcmRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgYSBjZWxsIGlzIGNsaWNrZWQgb25cbiAgICAvLyBDZWxscyB0aGF0IGhhdmUgYmVlbiBjbGlja2VkIG9uIGhhdmUgYHBvaW50ZXJFdmVudHMgPSBub25lYFxuICAgIC8vIFdoZW4gdGhvc2UgY2VsbHMgYXJlIGNsaWNrLCB0aGUgY2xhc3Mgb2YgdGhlIHRhcmdldCBpcyB0aGUgYm9hcmQsIG5vdCBjZWxsXG4gICAgbGV0IHJvdywgY29sO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xuICAgICAgLy8gUmV0cmlldmUgdGhlIHJvdyBhbmQgY29sIGZyb20gdGhlIGVsZW1lbnQncyBkYXRhc2V0XG4gICAgICAvLyBUaGVzZSB3ZXJlIHNldCB3aGVuIHRoZXNlIGNlbGxzIGFyZSBjcmVhdGVkIGluIGRvbS5qc1xuICAgICAgcm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3c7XG4gICAgICBjb2wgPSBlLnRhcmdldC5kYXRhc2V0LmNvbDtcbiAgICB9XG4gICAgLy8gSWYgY2hlYXRpbmcsIHRoZSB0YXJnZXQgb2YgdGhlIGNsaWNrIGlzIGltYWdlLCB3aG9zZSBwYXJlbnQgaXMgY2VsbFxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgIHJvdyA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5yb3c7XG4gICAgICBjb2wgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY29sO1xuICAgIH1cblxuICAgIHR1cm4rKztcbiAgICAvLyBVcGRhdGUgdHVybnMgb24gVUlcbiAgICB1cGRhdGVUdXJuKHR1cm4pO1xuICAgIFxuICAgIC8vIEF0dGFjayB0aGUgY29tcHV0ZXIncyBnYW1lQm9hcmRcbiAgICBjb21wdXRlci5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgdXBkYXRlRGlzcGxheShodW1hbiwgY29tcHV0ZXIsIGNoZWF0KTtcbiAgICB1cGRhdGVTY29yZXMoaHVtYW4sIGNvbXB1dGVyKTtcblxuICAgIC8vIENoZWNrIGlmIGl0IGlzIHRoZSB3aW5uaW5nIG1vdmVcbiAgICBpZiAoY29tcHV0ZXIuZ2FtZUJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgICAgLy8gTGV0IGNvbXB1dGVyIG1ha2VzIG9uZSBtb3JlIG1vdmVcbiAgICAgIGh1bWFuLmdldEJvbWJlZCgpO1xuICAgICAgdXBkYXRlRGlzcGxheShodW1hbiwgY29tcHV0ZXIsIGNoZWF0KTtcbiAgICAgIGF3YWl0IGRlbGF5KDUwMCk7XG4gICAgICAvLyBDaGVjayBpZiBpdCBpcyB0aGUgd2lubmluZyBtb3ZlXG4gICAgICBpZiAoaHVtYW4uZ2FtZUJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgICAgICBhbGVydCgnR2FtZSBPdmVyLCB0aWUhJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnR2FtZSBPdmVyLCB5b3Ugd29uIScpO1xuICAgICAgfVxuICAgICAgc3RvcFBsYXlpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29tcHV0ZXIgYm9tYnMgdGhlIGh1bWFuIHBsYXllciBib2FyZFxuICAgICAgaHVtYW4uZ2V0Qm9tYmVkKCk7XG4gICAgICB1cGRhdGVEaXNwbGF5KGh1bWFuLCBjb21wdXRlciwgY2hlYXQpO1xuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgdGhlIHdpbm5pbmcgbW92ZVxuICAgICAgaWYgKGh1bWFuLmdhbWVCb2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgYXdhaXQgZGVsYXkoNTAwKTtcbiAgICAgICAgYWxlcnQoJ0dhbWUgT3ZlciwgeW91IGxvc3QhJyk7XG4gICAgICAgIHN0b3BQbGF5aW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjaGVhdENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWF0Jyk7XG4gIGNoZWF0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNoZWF0ID0gY2hlYXRDaGVja2JveC5jaGVja2VkO1xuICAgIHVwZGF0ZURpc3BsYXkoaHVtYW4sIGNvbXB1dGVyLCBjaGVhdCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IENlbGwgfSBmcm9tICcuL2NyZWF0ZUNlbGwnO1xuaW1wb3J0IHsgQk9BUkRTSVpFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gJy4vY3JlYXRlU2hpcCc7XG5cbmV4cG9ydCBjb25zdCBHYW1lQm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZDtcbiAgbGV0IHRvdGFsSGl0cyA9IDA7XG4gIGxldCB0b3RhbE1pc3NlcyA9IDA7XG5cbiAgY29uc3QgaW5pdEJvYXJkID0gKCkgPT4ge1xuICAgIGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCT0FSRFNJWkU7IGkrKykge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQk9BUkRTSVpFOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV0ucHVzaChDZWxsKGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJpbnRCb2FyZCA9ICgpID0+IHtcbiAgICBsZXQgZGlzcGxheSA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQk9BUkRTSVpFOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQk9BUkRTSVpFOyBqKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdLmlzQm9tYmVkKSB7XG4gICAgICAgICAgZGlzcGxheSA9ICd4JztcbiAgICAgICAgfSBlbHNlIGRpc3BsYXkgKz0gJy4nO1xuXG4gICAgICAgIGlmIChib2FyZFtpXVtqXS5oYXNTaGlwKSB7XG4gICAgICAgICAgZGlzcGxheSArPSAnUyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGxheSArPSAnICc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRpc3BsYXkgKz0gJ1xcbic7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRpc3BsYXkpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh0eXBlLCByb3csIGNvbCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAodHlwZSk7XG4gICAgY29uc3Qgc2l6ZSA9IHNoaXAuc2l6ZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiBjb2wgKyBzaXplID4gQk9BUkRTSVpFKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiByb3cgKyBzaXplID4gQk9BUkRTSVpFKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbcm93ICsgaV1bY29sXS5oYXNTaGlwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBib2FyZFtyb3cgKyBpXVtjb2xdLnBsYWNlU2hpcChzaGlwLCBpLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2wgKyBpXS5oYXNTaGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbcm93XVtjb2wgKyBpXS5wbGFjZVNoaXAoc2hpcCwgaSwgZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBpc0dhbWVPdmVyKCkge1xuICAgIGNvbnN0IGNvdW50ID0gYm9hcmQucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhY2N1bXVsYXRvciArXG4gICAgICAgIGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGNlbGwpID0+IGNlbGwuaXNCb21iZWQgJiYgY2VsbC5oYXNTaGlwKS5sZW5ndGhcbiAgICAgICk7XG4gICAgfSwgMCk7XG4gICAgaWYgKGNvdW50ID49IDE3KSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHJvdywgY29sKSA9PiB7XG4gICAgaWYgKGJvYXJkW3Jvd11bY29sXS5pc0JvbWJlZCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYXJrIHRoZSBjZWxsIGlzQm9tYmVkID0gdHJ1ZVxuICAgICAgYm9hcmRbcm93XVtjb2xdLmF0dGFjaygpO1xuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBoaXRcbiAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0uaGFzU2hpcCkge1xuICAgICAgICBjb25zdCBzaGlwID0gYm9hcmRbcm93XVtjb2xdLnNoaXA7XG4gICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIHRvdGFsSGl0cysrO1xuICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICB9XG4gICAgICB0b3RhbE1pc3NlcysrO1xuICAgICAgcmV0dXJuICdtaXNzJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBnZXQgdG90YWxIaXRzKCkge1xuICAgICAgcmV0dXJuIHRvdGFsSGl0cztcbiAgICB9LFxuICAgIGdldCB0b3RhbE1pc3NlcygpIHtcbiAgICAgIHJldHVybiB0b3RhbE1pc3NlcztcbiAgICB9LFxuICAgIGluaXRCb2FyZCxcbiAgICBwcmludEJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzR2FtZU92ZXIsXG4gIH07XG59O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcnMnO1xuaW1wb3J0IHsgZGVwbG95RmxlZXQgfSBmcm9tICcuL2RlcGxveUZsZWV0JztcbmltcG9ydCB7IHVwZGF0ZURpc3BsYXkgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9nYW1lJztcblxuLy8gSW5pdGlhbGl6ZSBwbGF5ZXJzXG5jb25zdCBodW1hbiA9IFBsYXllcignVG9tJywgJ2h1bWFuJyk7XG5jb25zdCBjb21wdXRlciA9IFBsYXllcignSmVycnknLCAnY29tcHV0ZXInKTtcblxuLy8gSW5pdGlhbGl6ZSBkaXNwbGF5XG5odW1hbi5nYW1lQm9hcmQuaW5pdEJvYXJkKCk7XG5jb21wdXRlci5nYW1lQm9hcmQuaW5pdEJvYXJkKCk7XG51cGRhdGVEaXNwbGF5KGh1bWFuLCBjb21wdXRlcik7XG5cbi8vIERlcGxveSBmbGVldCB0aGVuIHN0YXJ0IHRoZSBnYW1lXG5kZXBsb3lGbGVldChodW1hbikudGhlbigoKSA9PiB7XG4gIGdhbWUoaHVtYW4sIGNvbXB1dGVyKTtcbn0pO1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSAnLi4vc3JjL2dhbWVCb2FyZCc7XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAobmFtZSwgdHlwZSkgPT4ge1xuICBjb25zdCBnYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgY29uc3QgcXVldWUgPSBbXTtcblxuICBmdW5jdGlvbiBnZXRSYW5kb21OdW0oKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJvbWJlZFJhbmRvbmx5KCkge1xuICAgIGxldCByb3csIGNvbCwgcmVzdWx0O1xuICAgIGRvIHtcbiAgICAgIHJvdyA9IGdldFJhbmRvbU51bSgpO1xuICAgICAgY29sID0gZ2V0UmFuZG9tTnVtKCk7XG4gICAgICByZXN1bHQgPSBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAnJyk7XG4gICAgcmV0dXJuIHsgcm93LCBjb2wsIHJlc3VsdCB9O1xuICB9XG5cbiAgY29uc3QgZ2V0Qm9tYmVkID0gKCkgPT4ge1xuICAgIGxldCBmZWVkYmFjaztcbiAgICBsZXQgcm93LCBjb2wsIHJlc3VsdDtcblxuICAgIC8vIElmIHRoZSBxdWV1ZSBpcyBlbXB0eSwgZ2V0IGJvbWJlZCBhdCBhIHJhbmRvbWUgcGxhY2VcbiAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgZmVlZGJhY2sgPSBnZXRCb21iZWRSYW5kb25seSgpO1xuICAgICAgcm93ID0gZmVlZGJhY2sucm93O1xuICAgICAgY29sID0gZmVlZGJhY2suY29sO1xuICAgICAgcmVzdWx0ID0gZmVlZGJhY2sucmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBHbyB0aHJvdWdoIHRoZSBxdWV1ZSB0byBnZXQgYm9tYmVkIGF0IHRoZSBmaXJzdCBjZWxsIHRoYXQncyBub3QgYWxyZWFkeSBib21iZWRcbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgcm93ID0gdGFyZ2V0LnJvdztcbiAgICAgICAgY29sID0gdGFyZ2V0LmNvbDtcbiAgICAgICAgcmVzdWx0ID0gZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgICAgfSB3aGlsZSAocmVzdWx0ID09PSAnJyk7XG4gICAgfVxuXG4gICAgLy8gSWYgaGl0LCBwdXNoIHRoaXMgY2VsbCdzIDQgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgbmVpZ2hib3VycyBcbiAgICAvLyB0aGF0IGFyZSBub3QgYWxyZWFkeSBib21iZWQgaW50byB0aGUgcXVldWVcbiAgICBpZiAocmVzdWx0ID09PSAnaGl0Jykge1xuICAgICAgZm9yIChsZXQgaSA9IC0xOyBpIDw9IDE7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gLTE7IGogPD0gMTsgaisrKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaSAhPT0gaiAmJiAvLyByZW1vdmUgZGlhZ29uYWxcbiAgICAgICAgICAgIGkgKyBqICE9PSAwICYmIC8vIHJlbW92ZSBkaWFnb25hbCBcbiAgICAgICAgICAgIHJvdyArIGkgPj0gMCAmJiAvLyBtYWtlIHN1cmUgY2VsbCBpcyB3aXRoaW4gdGhlIGdhbWVib2FyZFxuICAgICAgICAgICAgcm93ICsgaSA8IDEwICYmXG4gICAgICAgICAgICBjb2wgKyBqID49IDAgJiZcbiAgICAgICAgICAgIGNvbCArIGogPCAxMCAmJlxuICAgICAgICAgICAgIWdhbWVCb2FyZC5ib2FyZFtyb3cgKyBpXVtjb2wgKyBqXS5pc0JvbWJlZCAvLyBub3QgYm9tYmVkXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGdhbWVCb2FyZC5ib2FyZFtyb3cgKyBpXVtjb2wgKyBqXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBcbiAgICByZXR1cm47XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgbmFtZSA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIHNldCB0eXBlKHZhbHVlKSB7XG4gICAgICB0eXBlID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgdHlwZSgpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0sXG4gICAgZ2V0IGdhbWVCb2FyZCgpIHtcbiAgICAgIHJldHVybiBnYW1lQm9hcmQ7XG4gICAgfSxcbiAgICBnZXRCb21iZWQsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9