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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpeg */ "./src/images/background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* Victor Verion */\n  --darker-color: #ff0000;\n  --dark-color: #11cbd7;\n  --light-color: #c6f1e7;\n  --lighter-color: #f0fff3;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 5rem auto 4rem 1rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\nbody::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.3);\n  filter: grayscale(50%);\n}\n\nh1 {\n  /* color: red; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  font-size: 3rem;\n  text-shadow: 4px 4px 8px rgba(255, 255, 255, 0.7);\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 17fr 33fr 33fr 17fr;\n}\n\n.computer-fleet {\n  border: 1px solid red;\n}\n\n.computer-board-container, .human-board-container {\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  position: relative;\n}\n\n.territory {\n  position: absolute;\n  top: 2rem;\n  font-size: 2em;\n  font-weight: bold;\n  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);\n}\n\n.enemy {\n  color: red;\n}\n\n.my {\n  color: green;\n}\n\n\n\n.human-fleet {\n  border: 1px solid red;\n}\n\n.board {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n  background: lightblue;\n}\n\n.cell {\n  position: relative;\n  background-color: darkblue;\n  width: 3vw;\n  height: 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  /* border: 1px blue solid; */\n  overflow: hidden;\n}\n\n.image {\n  position: absolute;\n}\n\n.show {\n  opacity: 50;\n  background-color: steelblue;\n}\n\n.bomb {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  z-index: 10;\n}\n\n.missed {\n  background-color: white;\n}\n\n.hit {\n  background-color: red;\n}\n\n.draggedOver {\n  background-color: green;\n}\n.draggedOver-red {\n  background-color: red;\n}\n\n.computer-fleet-container, .human-fleet-container {\n  display: grid;\n  grid-template-rows: 2fr 3fr 1fr 1fr;\n  background-color: lightgrey;\n  opacity: 0.8;\n  border-radius: 5px;\n  z-index: 10;\n  margin: 5rem 1rem 5rem 1rem;\n}\n\n.deploy-heading, .ship-container,  .rotate-container, .rotate-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.deploy-heading {\n  font-size: 1.2rem;\n  font-weight: bold;\n  padding: 2rem;\n  text-align: center;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n}\n\n.ship-image {\n  cursor: pointer;\n}\n\n.rotate-btn {\n  padding: 0.5rem;\n  cursor: pointer;\n  font-size: 1.2rem;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n  background-color: gray;\n  border-radius: 5px;\n}\n\n.deploy-failed {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: red;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n}\n\n.turn, .total-hits {\n  display: flex;\n  justify-content: center;\n  align-items: top;\n  font-size: 2rem;\n  position: relative;\n  text-shadow: 1px 1px 2px gray;\n}\n\n.total-misses {\n  display: flex;\n  justify-content: center;\n  align-items: top;\n  font-size: 1.5rem;\n  position: relative;\n  text-shadow: 1px 1px 2px gray; \n}\n\n#random-deploy {\n  position: absolute;\n  right: 1vw;\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n  width: 15vw;\n  background-color: gray;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: gray;\n}\n\n/* Toggle switch to show/hide enemy ships */\n.cheat-container {\n  position: absolute;\n  bottom: 2rem;\n  display: flex;\n  gap: 5px;\n}\n\n.cheat-container>p {\n  color: darkblue;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);\n}\n\n/* The size of the toggle switch */\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 20px;\n}\n\n/* Hide the default checkbox */\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider that the circle can move */\n/* same size as the toggle switch */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: black;\n  transition: 0.4s;\n}\n\n/* The circle that moves in the slider */\n/* Before it is checked, the indicator (square) is on the left */\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\n/* Change toggle switch background color when it is clicked */\n/* Thethe + is used to select the .slider immidiately follow the input:checked */\n/* The styling applies to the .slider */\ninput:checked + .slider {\n  background-color: var(--darker-color);\n}\n\n/* When checked, move indicator to the right by 16px */\ninput:checked + .slider:before {\n  transform: translateX(16px);\n}\n\n/* Make slider have round corners */\n.slider.round {\n  border-radius: 10px;\n}\n\n/* Make the indicator round */\n.slider.round:before {\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* Victor Verion */\n  --darker-color: #ff0000;\n  --dark-color: #11cbd7;\n  --light-color: #c6f1e7;\n  --lighter-color: #f0fff3;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 5rem auto 4rem 1rem;\n  background-image: url(./images/background.jpeg);\n  background-size: cover;\n}\n\nbody::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.3);\n  filter: grayscale(50%);\n}\n\nh1 {\n  /* color: red; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  font-size: 3rem;\n  text-shadow: 4px 4px 8px rgba(255, 255, 255, 0.7);\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 17fr 33fr 33fr 17fr;\n}\n\n.computer-fleet {\n  border: 1px solid red;\n}\n\n.computer-board-container, .human-board-container {\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  position: relative;\n}\n\n.territory {\n  position: absolute;\n  top: 2rem;\n  font-size: 2em;\n  font-weight: bold;\n  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);\n}\n\n.enemy {\n  color: red;\n}\n\n.my {\n  color: green;\n}\n\n\n\n.human-fleet {\n  border: 1px solid red;\n}\n\n.board {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n  background: lightblue;\n}\n\n.cell {\n  position: relative;\n  background-color: darkblue;\n  width: 3vw;\n  height: 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  /* border: 1px blue solid; */\n  overflow: hidden;\n}\n\n.image {\n  position: absolute;\n}\n\n.show {\n  opacity: 50;\n  background-color: steelblue;\n}\n\n.bomb {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  z-index: 10;\n}\n\n.missed {\n  background-color: white;\n}\n\n.hit {\n  background-color: red;\n}\n\n.draggedOver {\n  background-color: green;\n}\n.draggedOver-red {\n  background-color: red;\n}\n\n.computer-fleet-container, .human-fleet-container {\n  display: grid;\n  grid-template-rows: 2fr 3fr 1fr 1fr;\n  background-color: lightgrey;\n  opacity: 0.8;\n  border-radius: 5px;\n  z-index: 10;\n  margin: 5rem 1rem 5rem 1rem;\n}\n\n.deploy-heading, .ship-container,  .rotate-container, .rotate-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.deploy-heading {\n  font-size: 1.2rem;\n  font-weight: bold;\n  padding: 2rem;\n  text-align: center;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n}\n\n.ship-image {\n  cursor: pointer;\n}\n\n.rotate-btn {\n  padding: 0.5rem;\n  cursor: pointer;\n  font-size: 1.2rem;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n  background-color: gray;\n  border-radius: 5px;\n}\n\n.deploy-failed {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: red;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n}\n\n.turn, .total-hits {\n  display: flex;\n  justify-content: center;\n  align-items: top;\n  font-size: 2rem;\n  position: relative;\n  text-shadow: 1px 1px 2px gray;\n}\n\n.total-misses {\n  display: flex;\n  justify-content: center;\n  align-items: top;\n  font-size: 1.5rem;\n  position: relative;\n  text-shadow: 1px 1px 2px gray; \n}\n\n#random-deploy {\n  position: absolute;\n  right: 1vw;\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);\n  width: 15vw;\n  background-color: gray;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: gray;\n}\n\n/* Toggle switch to show/hide enemy ships */\n.cheat-container {\n  position: absolute;\n  bottom: 2rem;\n  display: flex;\n  gap: 5px;\n}\n\n.cheat-container>p {\n  color: darkblue;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);\n}\n\n/* The size of the toggle switch */\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 20px;\n}\n\n/* Hide the default checkbox */\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider that the circle can move */\n/* same size as the toggle switch */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: black;\n  transition: 0.4s;\n}\n\n/* The circle that moves in the slider */\n/* Before it is checked, the indicator (square) is on the left */\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\n/* Change toggle switch background color when it is clicked */\n/* Thethe + is used to select the .slider immidiately follow the input:checked */\n/* The styling applies to the .slider */\ninput:checked + .slider {\n  background-color: var(--darker-color);\n}\n\n/* When checked, move indicator to the right by 16px */\ninput:checked + .slider:before {\n  transform: translateX(16px);\n}\n\n/* Make slider have round corners */\n.slider.round {\n  border-radius: 10px;\n}\n\n/* Make the indicator round */\n.slider.round:before {\n  border-radius: 50%;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "IMAGES": () => (/* binding */ IMAGES)
/* harmony export */ });
/* harmony import */ var _images_carrier_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/carrier.svg */ "./src/images/carrier.svg");
/* harmony import */ var _images_battleship_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/battleship.svg */ "./src/images/battleship.svg");
/* harmony import */ var _images_cruiser_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cruiser.svg */ "./src/images/cruiser.svg");
/* harmony import */ var _images_submarine_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/submarine.svg */ "./src/images/submarine.svg");
/* harmony import */ var _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/destroyer.svg */ "./src/images/destroyer.svg");






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
const FLEET = {
  carrier: { size: 5 },
  battleship: { size: 4 },
  cruiser: { size: 3 },
  submarine: { size: 3 },
  destroyer: { size: 2 },
};

const createShip = (type) => {
  const size = FLEET[type].size;
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
  const deployMsg = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', ['deploy-failed'])
  humanFleetContainerEl.appendChild(deployMsg)

  // Button to toggle rotating of the ship
  rotateBtn.addEventListener('click', () => {
    if (!rotated) {
      shipImage.style.transform = 'rotate(90deg)';
    } else {
      shipImage.style.transform = 'rotate(0deg)';
    }
    rotated = !rotated;
  });

  return new Promise((resolve) => {
    let rowOffset = 0;
    let colOffset = 0;
    let startRow, startCol;

    const onDragStart = (event) => {
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
      // Get the location and size of the board
      const rect = humanBoardEl.getBoundingClientRect();
      // The Grid is 10 x 10
      const cellWidth = rect.width / _constants__WEBPACK_IMPORTED_MODULE_1__.BOARDSIZE;
      const cellHeight = rect.width / _constants__WEBPACK_IMPORTED_MODULE_1__.BOARDSIZE;
      const col = Math.floor((event.clientX - rect.left) / cellWidth);
      const row = Math.floor((event.clientY - rect.top) / cellHeight);

      if (!rotated) {
        startCol = col - colOffset;
        startRow = row < 0 ? 0 : row;
        if (startCol < 0) startCol = 0;
        if (startCol > 9 - _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size)
          startCol = 9 - _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size + 1;
        for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size; i++) {
          if (startCol + i < 10) {
            human.gameBoard.board[startRow][startCol + i].draggedOver = true;
          }
        }
        (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)(human);
        for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size; i++) {
          if (startCol + i < 10) {
            human.gameBoard.board[startRow][startCol + i].draggedOver = false;
          }
        }
      } else {
        startCol = col < 0 ? 0 : col;
        startRow = row - rowOffset < 0 ? 0 : row - rowOffset;
        if (startRow < 0) startRow = 0;
        if (startRow > 9 - _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size)
          startRow = 9 - _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size + 1;
        for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size; i++) {
          if (startRow + i < 10) {
            human.gameBoard.board[startRow + i][startCol].draggedOver = true;
          }
        }
        (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)(human);
        for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size; i++) {
          if (startRow + i < 10) {
            human.gameBoard.board[startRow + i][startCol].draggedOver = false;
          }
        }
      }
    };

    const onDragEnd = () => {
      // Todo: This does not seem to work
      // The intention is so that the ship does not zoom back once it is placed

      const direction = rotated ? 'vertical' : 'horizontal';
      // Check if a ship is successfully deployed
      if (human.gameBoard.placeShip(ship, startRow, startCol, direction)) {
        shipImage.remove();
        (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)(human);
        resolve();
      } else {
        deployMsg.innerText = 'Failed to deploy!  Try again.'
        for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__.FLEET[ship].size; i++) {
          if (startRow + i < 10) {
            human.gameBoard.board[startRow + i][startCol].draggedOver = false;
          }
          (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)(human);
        } 
      }
    };

    shipImage.addEventListener('dragstart', onDragStart);
    humanBoardEl.addEventListener('dragover', onDragOver);
    shipImage.addEventListener('dragend', onDragEnd);
  });
};

const deployFleet = (human) => {
  return new Promise((resolve) => {

    const startGameMsg =() => {
      const turnEl = document.querySelector('.turn');
      turnEl.innerHTML = '';
      turnEl.innerText = 'Attack the enemy waters, now!';
    }

    const deployRandomBtn = document.querySelector('#random-deploy');
    deployRandomBtn.addEventListener('click', () => {
      humanFleetContainerEl.innerHTML = '';
      (0,_deployRandomly__WEBPACK_IMPORTED_MODULE_3__.placeFleet)(human.gameBoard);
      startGameMsg();
      resolve();
    });

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
  // Todo: This does not seem to work
  const humanBoardEl = document.querySelector('#human-board');
  humanBoardEl.style.pointerEvents = 'none';
  document.addEventListener('click', (e) => e.preventDefault());
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
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.stopPlaying)();
        await (0,_delay__WEBPACK_IMPORTED_MODULE_1__["default"])(500);
        alert('Game Over, you lost!');
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

/***/ "./src/images/background.jpeg":
/*!************************************!*\
  !*** ./src/images/background.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3e9b0357135e08d11bd.jpeg";

/***/ }),

/***/ "./src/images/battleship.svg":
/*!***********************************!*\
  !*** ./src/images/battleship.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3e87b67a091a7b85628.svg";

/***/ }),

/***/ "./src/images/carrier.svg":
/*!********************************!*\
  !*** ./src/images/carrier.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69be4df16a9a79625ec9.svg";

/***/ }),

/***/ "./src/images/cruiser.svg":
/*!********************************!*\
  !*** ./src/images/cruiser.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3e87b67a091a7b85628.svg";

/***/ }),

/***/ "./src/images/destroyer.svg":
/*!**********************************!*\
  !*** ./src/images/destroyer.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5050c3ee4e2425de07ce.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUs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QUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQix5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3JlYXRlQ2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jcmVhdGVTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kZXBsb3lGbGVldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RlcGxveVJhbmRvbWx5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLyogVmljdG9yIFZlcmlvbiAqL1xcbiAgLS1kYXJrZXItY29sb3I6ICNmZjAwMDA7XFxuICAtLWRhcmstY29sb3I6ICMxMWNiZDc7XFxuICAtLWxpZ2h0LWNvbG9yOiAjYzZmMWU3O1xcbiAgLS1saWdodGVyLWNvbG9yOiAjZjBmZmYzO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSBhdXRvIDRyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5ib2R5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSg1MCUpO1xcbn1cXG5cXG5oMSB7XFxuICAvKiBjb2xvcjogcmVkOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxN2ZyIDMzZnIgMzNmciAxN2ZyO1xcbn1cXG5cXG4uY29tcHV0ZXItZmxlZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uY29tcHV0ZXItYm9hcmQtY29udGFpbmVyLCAuaHVtYW4tYm9hcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGVycml0b3J5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG4uZW5lbXkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm15IHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuXFxuXFxuLmh1bWFuLWZsZWV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XFxufVxcblxcbi5jZWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgd2lkdGg6IDN2dztcXG4gIGhlaWdodDogM3Z3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICAvKiBib3JkZXI6IDFweCBibHVlIHNvbGlkOyAqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmltYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnNob3cge1xcbiAgb3BhY2l0eTogNTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxufVxcblxcbi5ib21iIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmRyYWdnZWRPdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4uZHJhZ2dlZE92ZXItcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNvbXB1dGVyLWZsZWV0LWNvbnRhaW5lciwgLmh1bWFuLWZsZWV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgM2ZyIDFmciAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB6LWluZGV4OiAxMDtcXG4gIG1hcmdpbjogNXJlbSAxcmVtIDVyZW0gMXJlbTtcXG59XFxuXFxuLmRlcGxveS1oZWFkaW5nLCAuc2hpcC1jb250YWluZXIsICAucm90YXRlLWNvbnRhaW5lciwgLnJvdGF0ZS1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlcGxveS1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuLnNoaXAtaW1hZ2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucm90YXRlLWJ0biB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZGVwbG95LWZhaWxlZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuLnR1cm4sIC50b3RhbC1oaXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiB0b3A7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggZ3JheTtcXG59XFxuXFxuLnRvdGFsLW1pc3NlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogdG9wO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggZ3JheTsgXFxufVxcblxcbiNyYW5kb20tZGVwbG95IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxdnc7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICB3aWR0aDogMTV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLyogVG9nZ2xlIHN3aXRjaCB0byBzaG93L2hpZGUgZW5lbXkgc2hpcHMgKi9cXG4uY2hlYXQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmNoZWF0LWNvbnRhaW5lcj5wIHtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLyogVGhlIHNpemUgb2YgdGhlIHRvZ2dsZSBzd2l0Y2ggKi9cXG4udG9nZ2xlLXN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLyogSGlkZSB0aGUgZGVmYXVsdCBjaGVja2JveCAqL1xcbi50b2dnbGUtc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyogVGhlIHNsaWRlciB0aGF0IHRoZSBjaXJjbGUgY2FuIG1vdmUgKi9cXG4vKiBzYW1lIHNpemUgYXMgdGhlIHRvZ2dsZSBzd2l0Y2ggKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLyogVGhlIGNpcmNsZSB0aGF0IG1vdmVzIGluIHRoZSBzbGlkZXIgKi9cXG4vKiBCZWZvcmUgaXQgaXMgY2hlY2tlZCwgdGhlIGluZGljYXRvciAoc3F1YXJlKSBpcyBvbiB0aGUgbGVmdCAqL1xcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgd2lkdGg6IDEycHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLyogQ2hhbmdlIHRvZ2dsZSBzd2l0Y2ggYmFja2dyb3VuZCBjb2xvciB3aGVuIGl0IGlzIGNsaWNrZWQgKi9cXG4vKiBUaGV0aGUgKyBpcyB1c2VkIHRvIHNlbGVjdCB0aGUgLnNsaWRlciBpbW1pZGlhdGVseSBmb2xsb3cgdGhlIGlucHV0OmNoZWNrZWQgKi9cXG4vKiBUaGUgc3R5bGluZyBhcHBsaWVzIHRvIHRoZSAuc2xpZGVyICovXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyLWNvbG9yKTtcXG59XFxuXFxuLyogV2hlbiBjaGVja2VkLCBtb3ZlIGluZGljYXRvciB0byB0aGUgcmlnaHQgYnkgMTZweCAqL1xcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XFxufVxcblxcbi8qIE1ha2Ugc2xpZGVyIGhhdmUgcm91bmQgY29ybmVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogTWFrZSB0aGUgaW5kaWNhdG9yIHJvdW5kICovXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6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QzNDO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpREFBaUQ7QUFDbkQ7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBLHdDQUF3QztBQUN4QyxtQ0FBbUM7QUFDbkM7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBLHdDQUF3QztBQUN4QyxnRUFBZ0U7QUFDaEU7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBLDZEQUE2RDtBQUM3RCxnRkFBZ0Y7QUFDaEYsdUNBQXVDO0FBQ3ZDO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBLHNEQUFzRDtBQUN0RDtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qIFZpY3RvciBWZXJpb24gKi9cXG4gIC0tZGFya2VyLWNvbG9yOiAjZmYwMDAwO1xcbiAgLS1kYXJrLWNvbG9yOiAjMTFjYmQ3O1xcbiAgLS1saWdodC1jb2xvcjogI2M2ZjFlNztcXG4gIC0tbGlnaHRlci1jb2xvcjogI2YwZmZmMztcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gYXV0byA0cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvYmFja2dyb3VuZC5qcGVnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJvZHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDUwJSk7XFxufVxcblxcbmgxIHtcXG4gIC8qIGNvbG9yOiByZWQ7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTA7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE3ZnIgMzNmciAzM2ZyIDE3ZnI7XFxufVxcblxcbi5jb21wdXRlci1mbGVldCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5jb21wdXRlci1ib2FyZC1jb250YWluZXIsIC5odW1hbi1ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZXJyaXRvcnkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycmVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblxcbi5lbmVteSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubXkge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG5cXG5cXG4uaHVtYW4tZmxlZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDFweDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmNlbGwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICB3aWR0aDogM3Z3O1xcbiAgaGVpZ2h0OiAzdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gIC8qIGJvcmRlcjogMXB4IGJsdWUgc29saWQ7ICovXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaW1hZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2hvdyB7XFxuICBvcGFjaXR5OiA1MDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG59XFxuXFxuLmJvbWIge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZHJhZ2dlZE92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcbi5kcmFnZ2VkT3Zlci1yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY29tcHV0ZXItZmxlZXQtY29udGFpbmVyLCAuaHVtYW4tZmxlZXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAzZnIgMWZyIDFmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbWFyZ2luOiA1cmVtIDFyZW0gNXJlbSAxcmVtO1xcbn1cXG5cXG4uZGVwbG95LWhlYWRpbmcsIC5zaGlwLWNvbnRhaW5lciwgIC5yb3RhdGUtY29udGFpbmVyLCAucm90YXRlLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVwbG95LWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbn1cXG5cXG4uc2hpcC1pbWFnZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yb3RhdGUtYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5kZXBsb3ktZmFpbGVkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbn1cXG5cXG4udHVybiwgLnRvdGFsLWhpdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHRvcDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBncmF5O1xcbn1cXG5cXG4udG90YWwtbWlzc2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiB0b3A7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBncmF5OyBcXG59XFxuXFxuI3JhbmRvbS1kZXBsb3kge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDF2dztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4vKiBUb2dnbGUgc3dpdGNoIHRvIHNob3cvaGlkZSBlbmVteSBzaGlwcyAqL1xcbi5jaGVhdC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlYXQtY29udGFpbmVyPnAge1xcbiAgY29sb3I6IGRhcmtibHVlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4vKiBUaGUgc2l6ZSBvZiB0aGUgdG9nZ2xlIHN3aXRjaCAqL1xcbi50b2dnbGUtc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKiBIaWRlIHRoZSBkZWZhdWx0IGNoZWNrYm94ICovXFxuLnRvZ2dsZS1zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyIHRoYXQgdGhlIGNpcmNsZSBjYW4gbW92ZSAqL1xcbi8qIHNhbWUgc2l6ZSBhcyB0aGUgdG9nZ2xlIHN3aXRjaCAqL1xcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4vKiBUaGUgY2lyY2xlIHRoYXQgbW92ZXMgaW4gdGhlIHNsaWRlciAqL1xcbi8qIEJlZm9yZSBpdCBpcyBjaGVja2VkLCB0aGUgaW5kaWNhdG9yIChzcXVhcmUpIGlzIG9uIHRoZSBsZWZ0ICovXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDEycHg7XFxuICB3aWR0aDogMTJweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4vKiBDaGFuZ2UgdG9nZ2xlIHN3aXRjaCBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gaXQgaXMgY2xpY2tlZCAqL1xcbi8qIFRoZXRoZSArIGlzIHVzZWQgdG8gc2VsZWN0IHRoZSAuc2xpZGVyIGltbWlkaWF0ZWx5IGZvbGxvdyB0aGUgaW5wdXQ6Y2hlY2tlZCAqL1xcbi8qIFRoZSBzdHlsaW5nIGFwcGxpZXMgdG8gdGhlIC5zbGlkZXIgKi9cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItY29sb3IpO1xcbn1cXG5cXG4vKiBXaGVuIGNoZWNrZWQsIG1vdmUgaW5kaWNhdG9yIHRvIHRoZSByaWdodCBieSAxNnB4ICovXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcXG59XFxuXFxuLyogTWFrZSBzbGlkZXIgaGF2ZSByb3VuZCBjb3JuZXJzICovXFxuLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBNYWtlIHRoZSBpbmRpY2F0b3Igcm91bmQgKi9cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNhcnJpZXJJbWFnZSBmcm9tICcuL2ltYWdlcy9jYXJyaWVyLnN2Zyc7XG5pbXBvcnQgYmF0dGxlc2hpcEltYWdlIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXAuc3ZnJztcbmltcG9ydCBjcnVpc2VySW1hZ2UgZnJvbSAnLi9pbWFnZXMvY3J1aXNlci5zdmcnO1xuaW1wb3J0IHN1Ym1hcmluZUltYWdlIGZyb20gJy4vaW1hZ2VzL3N1Ym1hcmluZS5zdmcnO1xuaW1wb3J0IGRlc3Ryb3llckltYWdlIGZyb20gJy4vaW1hZ2VzL2Rlc3Ryb3llci5zdmcnO1xuXG5jb25zdCBCT0FSRFNJWkUgPSAxMDtcblxuY29uc3QgRkxFRVQgPSB7XG4gIGNhcnJpZXI6IHsgc2l6ZTogNSB9LFxuICBiYXR0bGVzaGlwOiB7IHNpemU6IDQgfSxcbiAgY3J1aXNlcjogeyBzaXplOiAzIH0sXG4gIHN1Ym1hcmluZTogeyBzaXplOiAzIH0sXG4gIGRlc3Ryb3llcjogeyBzaXplOiAyIH0sXG59O1xuXG5jb25zdCBJTUFHRVMgPSB7XG4gIGNhcnJpZXI6IGNhcnJpZXJJbWFnZSxcbiAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcEltYWdlLFxuICBjcnVpc2VyOiBjcnVpc2VySW1hZ2UsXG4gIHN1Ym1hcmluZTogc3VibWFyaW5lSW1hZ2UsXG4gIGRlc3Ryb3llcjogZGVzdHJveWVySW1hZ2UsXG59O1xuXG5cbmV4cG9ydCB7Qk9BUkRTSVpFLCBGTEVFVCwgSU1BR0VTfVxuIiwiZXhwb3J0IGNvbnN0IENlbGwgPSAocm93LCBjb2wpID0+IHtcbiAgbGV0IHNoaXAgPSBudWxsO1xuICBsZXQgaGFzU2hpcCA9IGZhbHNlO1xuICBsZXQgaXNCb21iZWQgPSBmYWxzZTtcbiAgbGV0IHNlY3Rpb247XG4gIGxldCBkaXJlY3Rpb247XG4gIGxldCBkcmFnZ2VkT3ZlciA9IGZhbHNlO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChvYmosIGluZGV4LCBkaXIpID0+IHtcbiAgICBoYXNTaGlwID0gdHJ1ZTtcbiAgICBzaGlwID0gb2JqO1xuICAgIHNlY3Rpb24gPSBpbmRleDtcbiAgICBkaXJlY3Rpb24gPSBkaXI7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrID0gKCkgPT4ge1xuICAgIGlzQm9tYmVkID0gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJvdyxcbiAgICBjb2wsXG4gICAgZ2V0IHNlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICB9LFxuICAgIGdldCBkaXJlY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICB9LFxuICAgIGdldCBzaGlwKCkge1xuICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfSxcbiAgICBnZXQgaGFzU2hpcCgpIHtcbiAgICAgIHJldHVybiBoYXNTaGlwO1xuICAgIH0sXG4gICAgZ2V0IGlzQm9tYmVkKCkge1xuICAgICAgcmV0dXJuIGlzQm9tYmVkO1xuICAgIH0sXG4gICAgc2V0IGRyYWdnZWRPdmVyICh2YWx1ZSkge1xuICAgICAgZHJhZ2dlZE92ZXIgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldCBkcmFnZ2VkT3ZlcigpIHtcbiAgICAgIHJldHVybiBkcmFnZ2VkT3ZlcjtcbiAgICB9LFxuICAgIHBsYWNlU2hpcCxcbiAgICBhdHRhY2ssXG4gIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjbGFzc0FycmF5LCBhdHRyT2JqLCB0ZXh0KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBpZiAoY2xhc3NBcnJheSkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzQXJyYXkpO1xuXG4gIGZvciAoY29uc3QgYXR0ciBpbiBhdHRyT2JqKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0ck9ialthdHRyXSk7XG4gIH1cblxuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImNvbnN0IEZMRUVUID0ge1xuICBjYXJyaWVyOiB7IHNpemU6IDUgfSxcbiAgYmF0dGxlc2hpcDogeyBzaXplOiA0IH0sXG4gIGNydWlzZXI6IHsgc2l6ZTogMyB9LFxuICBzdWJtYXJpbmU6IHsgc2l6ZTogMyB9LFxuICBkZXN0cm95ZXI6IHsgc2l6ZTogMiB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNoaXAgPSAodHlwZSkgPT4ge1xuICBjb25zdCBzaXplID0gRkxFRVRbdHlwZV0uc2l6ZTtcbiAgbGV0IGhpdHMgPSAwO1xuICBsZXQgaXNTdW5rID0gZmFsc2U7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdHMrKztcbiAgICBpZiAoaGl0cyA+PSBzaXplKSBpc1N1bmsgPSB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdHlwZSxcbiAgICBzaXplOiBzaXplLFxuICAgIGdldCBoaXRzKCkge1xuICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfSxcbiAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgcmV0dXJuIGlzU3VuaztcbiAgICB9LFxuICAgIGhpdCxcbiAgfTtcbn07XG4iLCIvLyBHbG9iYWwgZnVuY3Rpb25cbmZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsYXk7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHsgQk9BUkRTSVpFLCBGTEVFVCwgSU1BR0VTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXBkYXRlRGlzcGxheSB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHBsYWNlRmxlZXQgfSBmcm9tICcuL2RlcGxveVJhbmRvbWx5JztcblxuY29uc3QgaHVtYW5GbGVldENvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWFuLWZsZWV0LWNvbnRhaW5lcicpO1xuY29uc3QgaHVtYW5Cb2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWFuLWJvYXJkJyk7XG5cbmNvbnN0IGRlcGxveVNoaXAgPSAoc2hpcCwgaHVtYW4pID0+IHtcbiAgLy8gU2V0IHVwIGRlcGxveSBzaGlwIHNpZGUgYmFyXG4gIGh1bWFuRmxlZXRDb250YWluZXJFbC5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgaGVhZGluZ0VsID0gY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBbJ2RlcGxveS1oZWFkaW5nJ10sXG4gICAge30sXG4gICAgYERyYWcgYW5kIGRyb3AgdG8gZGVwbG95IHlvdXIgJHtzaGlwfWBcbiAgKTtcbiAgaHVtYW5GbGVldENvbnRhaW5lckVsLmFwcGVuZENoaWxkKGhlYWRpbmdFbCk7XG4gIGNvbnN0IHNoaXBDb250YWluZXJFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnc2hpcC1jb250YWluZXInXSk7XG4gIGNvbnN0IHNoaXBJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIFsnc2hpcC1pbWFnZSddLCB7IGRyYWdnYWJsZTogJ3RydWUnIH0pO1xuICBzaGlwSW1hZ2Uuc3JjID0gSU1BR0VTW3NoaXBdO1xuICAvLyBFYWNoIGNlbGwgaW4gdGhlIGdhbWUgYm9hcmQgaXMgM3Z3XG4gIHNoaXBJbWFnZS5zdHlsZS53aWR0aCA9IEZMRUVUW3NoaXBdLnNpemUgKiAzICsgJ3Z3JztcbiAgbGV0IHJvdGF0ZWQgPSBmYWxzZTtcbiAgc2hpcENvbnRhaW5lckVsLmFwcGVuZENoaWxkKHNoaXBJbWFnZSk7XG4gIGh1bWFuRmxlZXRDb250YWluZXJFbC5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyRWwpO1xuICBjb25zdCByb3RhdGVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3JvdGF0ZS1jb250YWluZXInXSk7XG4gIGNvbnN0IHJvdGF0ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgJ2J1dHRvbicsXG4gICAgWydyb3RhdGUtYnRuJ10sXG4gICAge30sXG4gICAgJ1JvdGF0ZSBzaGlwIPCflIQnXG4gICk7XG4gIHJvdGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGVCdG4pO1xuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQocm90YXRlQ29udGFpbmVyKTtcbiAgY29uc3QgZGVwbG95TXNnID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydkZXBsb3ktZmFpbGVkJ10pXG4gIGh1bWFuRmxlZXRDb250YWluZXJFbC5hcHBlbmRDaGlsZChkZXBsb3lNc2cpXG5cbiAgLy8gQnV0dG9uIHRvIHRvZ2dsZSByb3RhdGluZyBvZiB0aGUgc2hpcFxuICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFyb3RhdGVkKSB7XG4gICAgICBzaGlwSW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwSW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgfVxuICAgIHJvdGF0ZWQgPSAhcm90YXRlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgbGV0IHJvd09mZnNldCA9IDA7XG4gICAgbGV0IGNvbE9mZnNldCA9IDA7XG4gICAgbGV0IHN0YXJ0Um93LCBzdGFydENvbDtcblxuICAgIGNvbnN0IG9uRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXJvdGF0ZWQpIHtcbiAgICAgICAgLy8gVGhlIHNoaXAgaXMgaG9yaXpvbnRhbFxuICAgICAgICBzaGlwSW1hZ2Uuc3R5bGUud2lkdGggPSBGTEVFVFtzaGlwXS5zaXplICogMyArICd2dyc7XG4gICAgICAgIC8vIHNoaXBJbWFnZS5zdHlsZS5oZWlnaHQgPSAnM3Z3J1xuICAgICAgICAvLyBHZXQgdGhlIGxvY2F0aW9uIG9mIHRoZSBtb3VzZSByZWxhdGl2ZSB0byB0aGUgaW1hZ2VcbiAgICAgICAgY29uc3QgcmVjdCA9IHNoaXBJbWFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeE9mZnNldCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbE9mZnNldCA9IE1hdGguZmxvb3IoeE9mZnNldCAvICgoMyAvIDEwMCkgKiB3aW5kb3cuaW5uZXJXaWR0aCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVG9kbzogc2hpcEltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJ1xuICAgICAgICAvLyBIb3cgdG8gbWFrZSB0aGUgZHJhZ2dlZCBzaGlwIGltYWdlIHJvdGF0ZSBieSA5MCBkZWcgdG9vP1xuICAgICAgICBzaGlwSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gRkxFRVRbc2hpcF0uc2l6ZSAqIDMgKyAndncnO1xuICAgICAgICAvLyBzaGlwSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gJzN2dydcbiAgICAgICAgLy8gR2V0IHRoZSBsb2NhdGlvbiBvZiB0aGUgbW91c2UgcmVsYXRpdmUgdG8gdGhlIGltYWdlXG4gICAgICAgIGNvbnN0IHJlY3QgPSBzaGlwSW1hZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHlPZmZzZXQgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgIHJvd09mZnNldCA9IE1hdGguZmxvb3IoeU9mZnNldCAvICgoMyAvIDEwMCkgKiB3aW5kb3cuaW5uZXJXaWR0aCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvbkRyYWdPdmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAvLyBHZXQgdGhlIGxvY2F0aW9uIGFuZCBzaXplIG9mIHRoZSBib2FyZFxuICAgICAgY29uc3QgcmVjdCA9IGh1bWFuQm9hcmRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIC8vIFRoZSBHcmlkIGlzIDEwIHggMTBcbiAgICAgIGNvbnN0IGNlbGxXaWR0aCA9IHJlY3Qud2lkdGggLyBCT0FSRFNJWkU7XG4gICAgICBjb25zdCBjZWxsSGVpZ2h0ID0gcmVjdC53aWR0aCAvIEJPQVJEU0laRTtcbiAgICAgIGNvbnN0IGNvbCA9IE1hdGguZmxvb3IoKGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQpIC8gY2VsbFdpZHRoKTtcbiAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoKGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCkgLyBjZWxsSGVpZ2h0KTtcblxuICAgICAgaWYgKCFyb3RhdGVkKSB7XG4gICAgICAgIHN0YXJ0Q29sID0gY29sIC0gY29sT2Zmc2V0O1xuICAgICAgICBzdGFydFJvdyA9IHJvdyA8IDAgPyAwIDogcm93O1xuICAgICAgICBpZiAoc3RhcnRDb2wgPCAwKSBzdGFydENvbCA9IDA7XG4gICAgICAgIGlmIChzdGFydENvbCA+IDkgLSBGTEVFVFtzaGlwXS5zaXplKVxuICAgICAgICAgIHN0YXJ0Q29sID0gOSAtIEZMRUVUW3NoaXBdLnNpemUgKyAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEZMRUVUW3NoaXBdLnNpemU7IGkrKykge1xuICAgICAgICAgIGlmIChzdGFydENvbCArIGkgPCAxMCkge1xuICAgICAgICAgICAgaHVtYW4uZ2FtZUJvYXJkLmJvYXJkW3N0YXJ0Um93XVtzdGFydENvbCArIGldLmRyYWdnZWRPdmVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlRGlzcGxheShodW1hbik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRkxFRVRbc2hpcF0uc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKHN0YXJ0Q29sICsgaSA8IDEwKSB7XG4gICAgICAgICAgICBodW1hbi5nYW1lQm9hcmQuYm9hcmRbc3RhcnRSb3ddW3N0YXJ0Q29sICsgaV0uZHJhZ2dlZE92ZXIgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJ0Q29sID0gY29sIDwgMCA/IDAgOiBjb2w7XG4gICAgICAgIHN0YXJ0Um93ID0gcm93IC0gcm93T2Zmc2V0IDwgMCA/IDAgOiByb3cgLSByb3dPZmZzZXQ7XG4gICAgICAgIGlmIChzdGFydFJvdyA8IDApIHN0YXJ0Um93ID0gMDtcbiAgICAgICAgaWYgKHN0YXJ0Um93ID4gOSAtIEZMRUVUW3NoaXBdLnNpemUpXG4gICAgICAgICAgc3RhcnRSb3cgPSA5IC0gRkxFRVRbc2hpcF0uc2l6ZSArIDE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRkxFRVRbc2hpcF0uc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKHN0YXJ0Um93ICsgaSA8IDEwKSB7XG4gICAgICAgICAgICBodW1hbi5nYW1lQm9hcmQuYm9hcmRbc3RhcnRSb3cgKyBpXVtzdGFydENvbF0uZHJhZ2dlZE92ZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVEaXNwbGF5KGh1bWFuKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBGTEVFVFtzaGlwXS5zaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAoc3RhcnRSb3cgKyBpIDwgMTApIHtcbiAgICAgICAgICAgIGh1bWFuLmdhbWVCb2FyZC5ib2FyZFtzdGFydFJvdyArIGldW3N0YXJ0Q29sXS5kcmFnZ2VkT3ZlciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvbkRyYWdFbmQgPSAoKSA9PiB7XG4gICAgICAvLyBUb2RvOiBUaGlzIGRvZXMgbm90IHNlZW0gdG8gd29ya1xuICAgICAgLy8gVGhlIGludGVudGlvbiBpcyBzbyB0aGF0IHRoZSBzaGlwIGRvZXMgbm90IHpvb20gYmFjayBvbmNlIGl0IGlzIHBsYWNlZFxuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSByb3RhdGVkID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgIC8vIENoZWNrIGlmIGEgc2hpcCBpcyBzdWNjZXNzZnVsbHkgZGVwbG95ZWRcbiAgICAgIGlmIChodW1hbi5nYW1lQm9hcmQucGxhY2VTaGlwKHNoaXAsIHN0YXJ0Um93LCBzdGFydENvbCwgZGlyZWN0aW9uKSkge1xuICAgICAgICBzaGlwSW1hZ2UucmVtb3ZlKCk7XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoaHVtYW4pO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXBsb3lNc2cuaW5uZXJUZXh0ID0gJ0ZhaWxlZCB0byBkZXBsb3khICBUcnkgYWdhaW4uJ1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEZMRUVUW3NoaXBdLnNpemU7IGkrKykge1xuICAgICAgICAgIGlmIChzdGFydFJvdyArIGkgPCAxMCkge1xuICAgICAgICAgICAgaHVtYW4uZ2FtZUJvYXJkLmJvYXJkW3N0YXJ0Um93ICsgaV1bc3RhcnRDb2xdLmRyYWdnZWRPdmVyID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVwZGF0ZURpc3BsYXkoaHVtYW4pO1xuICAgICAgICB9IFxuICAgICAgfVxuICAgIH07XG5cbiAgICBzaGlwSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0Jywgb25EcmFnU3RhcnQpO1xuICAgIGh1bWFuQm9hcmRFbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZ092ZXIpO1xuICAgIHNoaXBJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgb25EcmFnRW5kKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVwbG95RmxlZXQgPSAoaHVtYW4pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cbiAgICBjb25zdCBzdGFydEdhbWVNc2cgPSgpID0+IHtcbiAgICAgIGNvbnN0IHR1cm5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dXJuJyk7XG4gICAgICB0dXJuRWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0dXJuRWwuaW5uZXJUZXh0ID0gJ0F0dGFjayB0aGUgZW5lbXkgd2F0ZXJzLCBub3chJztcbiAgICB9XG5cbiAgICBjb25zdCBkZXBsb3lSYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZG9tLWRlcGxveScpO1xuICAgIGRlcGxveVJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGh1bWFuRmxlZXRDb250YWluZXJFbC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHBsYWNlRmxlZXQoaHVtYW4uZ2FtZUJvYXJkKTtcbiAgICAgIHN0YXJ0R2FtZU1zZygpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuXG4gICAgZGVwbG95U2hpcCgnY2FycmllcicsIGh1bWFuKS50aGVuKCgpID0+IHtcbiAgICAgIGRlcGxveVNoaXAoJ2JhdHRsZXNoaXAnLCBodW1hbikudGhlbigoKSA9PiB7XG4gICAgICAgIGRlcGxveVNoaXAoJ2NydWlzZXInLCBodW1hbikudGhlbigoKSA9PiB7XG4gICAgICAgICAgZGVwbG95U2hpcCgnc3VibWFyaW5lJywgaHVtYW4pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZGVwbG95U2hpcCgnZGVzdHJveWVyJywgaHVtYW4pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBodW1hbkZsZWV0Q29udGFpbmVyRWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgIHN0YXJ0R2FtZU1zZygpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiLy8gR2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciAwLTlcbmZ1bmN0aW9uIGdldFJhbmRvbU51bSgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbn1cblxuLy8gUGxhY2UgYSBzaGlwIGF0IGEgcmFuZG9tIGxvY2F0aW9uIHdpdGggYSByYW5kb20gZGlyZWN0aW9uXG5mdW5jdGlvbiBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCB0eXBlKSB7XG4gIGxldCByb3csIGNvbCwgZGlyZWN0aW9uO1xuICBkbyB7XG4gICAgcm93ID0gZ2V0UmFuZG9tTnVtKCk7XG4gICAgY29sID0gZ2V0UmFuZG9tTnVtKCk7XG4gICAgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gIH0gd2hpbGUgKCFnYW1lQm9hcmQucGxhY2VTaGlwKHR5cGUsIHJvdywgY29sLCBkaXJlY3Rpb24pKTtcbn1cblxuLy8gUGxhY2UgYWxsIDUgc2hpcHMgb24gYW4gZW1wdHkgYm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZUZsZWV0KGdhbWVCb2FyZCkge1xuICBnYW1lQm9hcmQuaW5pdEJvYXJkKCk7XG4gIHBsYWNlU2hpcFJhbmRvbShnYW1lQm9hcmQsICdjYXJyaWVyJyk7XG4gIHBsYWNlU2hpcFJhbmRvbShnYW1lQm9hcmQsICdiYXR0bGVzaGlwJyk7XG4gIHBsYWNlU2hpcFJhbmRvbShnYW1lQm9hcmQsICdjcnVpc2VyJyk7XG4gIHBsYWNlU2hpcFJhbmRvbShnYW1lQm9hcmQsICdzdWJtYXJpbmUnKTtcbiAgcGxhY2VTaGlwUmFuZG9tKGdhbWVCb2FyZCwgJ2Rlc3Ryb3llcicpO1xufVxuIiwiaW1wb3J0IHsgQk9BUkRTSVpFLCBJTUFHRVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuXG5mdW5jdGlvbiB1cGRhdGVCb2FyZChib2FyZEVsLCBib2FyZCwgc2hvdykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEJPQVJEU0laRTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBCT0FSRFNJWkU7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGJvYXJkW2ldW2pdO1xuICAgICAgY29uc3QgY2VsbEVsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIFsnY2VsbCddLFxuICAgICAgICB7ICdkYXRhLXJvdyc6IGksICdkYXRhLWNvbCc6IGosIHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyJyB9LFxuICAgICAgICAnJ1xuICAgICAgKTtcbiAgICAgIGJvYXJkRWwuYXBwZW5kQ2hpbGQoY2VsbEVsKTtcblxuICAgICAgLy8gU2hvdyBpZiBhIGNlbGwgaXMgYmVpbmcgZHJhZ2dlZCBvdmVyIHdoZW4gZGVwbG95aW5nIHNoaXBzXG4gICAgICBpZiAoY2VsbC5kcmFnZ2VkT3Zlcikge1xuICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnZHJhZ2dlZE92ZXInKTtcbiAgICAgICAgaWYgKGNlbGwuaGFzU2hpcCkge1xuICAgICAgICAgIGNlbGxFbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2VkT3ZlcicpO1xuICAgICAgICAgIGNlbGxFbC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2VkT3Zlci1yZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGb3IgaHVtYW4gcGxheWVyLCBzaG93IHRoZSBzaGlwIGRlcGxveW1lbnRcbiAgICAgIC8vIEFsc28gdXNlZCB3aGVuIGNoZWF0aW5nLCB0byBzaG93IHRoZSBlbmVteSBkZXBsb3ltZW50XG4gICAgICBpZiAoc2hvdykge1xuICAgICAgICBpZiAoY2VsbC5oYXNTaGlwKSB7XG4gICAgICAgICAgY2VsbEVsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgICAvLyBjZWxsRWwuaW5uZXJUZXh0ID0gYm9hcmRbaV1bal0uc2hpcC50eXBlWzBdO1xuICAgICAgICAgIGNvbnN0IGltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIFsnaW1hZ2UnXSk7XG4gICAgICAgICAgaW1nLnNyYyA9IElNQUdFU1tjZWxsLnNoaXAudHlwZV07XG4gICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9ICc0dncnO1xuICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IDMgKiBjZWxsLnNoaXAuc2l6ZSArICd2dyc7XG4gICAgICAgICAgaWYgKGNlbGwuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBpbWcuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSg5MGRlZylgO1xuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9XG4gICAgICAgICAgICAgIChjZWxsLnNoaXAuc2l6ZSAvIDIgLSBjZWxsLnNlY3Rpb24gLSAwLjUpICogMyArICd2dyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gLWNlbGwuc2VjdGlvbiAqIDMgKyAndncnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjZWxsRWwuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTaG93IGlmIGEgbG9jYXRpb24gaGFzIGJlZW4gYm9tYmVkLCBhbmQgaWYgaGl0IG9yIG1pc3NcbiAgICAgIGlmIChjZWxsLmlzQm9tYmVkKSB7XG4gICAgICAgIGNlbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICBjb25zdCBib21iRWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2JvbWInXSk7XG4gICAgICAgIGNlbGxFbC5hcHBlbmRDaGlsZChib21iRWwpO1xuICAgICAgICBpZiAoY2VsbC5oYXNTaGlwKSB7XG4gICAgICAgICAgYm9tYkVsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvbWJFbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCB1cGRhdGVEaXNwbGF5ID0gKGh1bWFuLCBjb21wdXRlciwgY2hlYXQpID0+IHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyLWJvYXJkJyk7XG4gIGNvbnN0IGh1bWFuQm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1hbi1ib2FyZCcpO1xuXG4gIC8vIEFsd2F5cyBzaG93IGh1bWFuIHBsYXllciBmbGVldFxuICBodW1hbkJvYXJkRWwuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IHNob3cgPSB0cnVlO1xuICB1cGRhdGVCb2FyZChodW1hbkJvYXJkRWwsIGh1bWFuLmdhbWVCb2FyZC5ib2FyZCwgc2hvdyk7XG5cbiAgLy8gRHVyaW5nIGRlcGxveW1lbnQgc3RhZ2UsIG5vIG5lZWQgdG8gcmVmcmVzaCBjb21wdXRlciBib2FyZFxuICBpZiAoY29tcHV0ZXIpIHtcbiAgICBjb21wdXRlckJvYXJkRWwuaW5uZXJIVE1MID0gJyc7XG4gICAgLy8gU2hvdyBjb21wdXRlciBkZXBsb3ltZW50IGlmIGNoZWF0aW5nXG4gICAgdXBkYXRlQm9hcmQoY29tcHV0ZXJCb2FyZEVsLCBjb21wdXRlci5nYW1lQm9hcmQuYm9hcmQsIGNoZWF0KTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlVHVybiA9ICh0dXJuKSA9PiB7XG4gIGNvbnN0IHR1cm5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dXJuJyk7XG4gIHR1cm5FbC5pbm5lckhUTUwgPSAnJztcbiAgdHVybkVsLmlubmVyVGV4dCA9IGBUdXJuOiAke3R1cm59YDtcbn1cblxuY29uc3QgdXBkYXRlU2NvcmVzID0gKGh1bWFuLCBjb21wdXRlcikgPT4ge1xuICBjb25zdCBjb21wdXRlckZsZWV0Q29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItZmxlZXQtY29udGFpbmVyJylcbiAgY29tcHV0ZXJGbGVldENvbnRhaW5lckVsLmlubmVySFRNTCA9ICcnXG4gIGNvbnN0IGRpdjEgPSBjcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb21wdXRlckZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoZGl2MSlcbiAgY29uc3QgY29tcHV0ZXJIaXRzRWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLFsndG90YWwtaGl0cyddKVxuICBjb21wdXRlckhpdHNFbC5pbm5lclRleHQgPSBgSGl0czogJHtjb21wdXRlci5nYW1lQm9hcmQudG90YWxIaXRzfWBcbiAgY29tcHV0ZXJGbGVldENvbnRhaW5lckVsLmFwcGVuZENoaWxkKGNvbXB1dGVySGl0c0VsKVxuICBjb25zdCBjb21wdXRlck1pc3Nlc0VsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWyd0b3RhbC1taXNzZXMnXSlcbiAgY29tcHV0ZXJNaXNzZXNFbC5pbm5lclRleHQgPSBgTWlzc2VzOiAke2NvbXB1dGVyLmdhbWVCb2FyZC50b3RhbE1pc3Nlc31gXG4gIGNvbXB1dGVyRmxlZXRDb250YWluZXJFbC5hcHBlbmRDaGlsZChjb21wdXRlck1pc3Nlc0VsKVxuXG4gIGNvbnN0IGh1bWFuRmxlZXRDb250YWluZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1hbi1mbGVldC1jb250YWluZXInKVxuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuaW5uZXJIVE1MID0gJydcbiAgY29uc3QgZGl2MiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGh1bWFuRmxlZXRDb250YWluZXJFbC5hcHBlbmRDaGlsZChkaXYyKVxuICBjb25zdCBodW1hbkhpdHNFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsWyd0b3RhbC1oaXRzJ10pXG4gIGh1bWFuSGl0c0VsLmlubmVyVGV4dCA9IGBIaXRzOiAke2h1bWFuLmdhbWVCb2FyZC50b3RhbEhpdHN9YFxuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoaHVtYW5IaXRzRWwpXG4gIGNvbnN0IGh1bWFuTWlzc2VzRWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3RvdGFsLW1pc3NlcyddKVxuICBodW1hbk1pc3Nlc0VsLmlubmVyVGV4dCA9IGBNaXNzZXM6ICR7aHVtYW4uZ2FtZUJvYXJkLnRvdGFsTWlzc2VzfWBcbiAgaHVtYW5GbGVldENvbnRhaW5lckVsLmFwcGVuZENoaWxkKGh1bWFuTWlzc2VzRWwpIFxuXG59XG5cbmNvbnN0IHN0b3BQbGF5aW5nID0gKCkgPT4ge1xuICAvLyBUb2RvOiBUaGlzIGRvZXMgbm90IHNlZW0gdG8gd29ya1xuICBjb25zdCBodW1hbkJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtYW4tYm9hcmQnKTtcbiAgaHVtYW5Cb2FyZEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XG59O1xuXG5leHBvcnQgeyB1cGRhdGVEaXNwbGF5LCB1cGRhdGVUdXJuLCB1cGRhdGVTY29yZXMsIHN0b3BQbGF5aW5nIH07XG4iLCJpbXBvcnQgeyB1cGRhdGVEaXNwbGF5LCB1cGRhdGVUdXJuLCB1cGRhdGVTY29yZXMsIHN0b3BQbGF5aW5nIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IGRlbGF5IGZyb20gJy4vZGVsYXknO1xuaW1wb3J0IHsgcGxhY2VGbGVldCB9IGZyb20gJy4vZGVwbG95UmFuZG9tbHknO1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IChodW1hbiwgY29tcHV0ZXIpID0+IHtcbiAgbGV0IGNoZWF0ID0gZmFsc2U7XG4gIGxldCB0dXJuID0gMDtcblxuICAvLyBSYW5kb21seSBwbGFjZXMgc2hpcHMgb24gdGhlIGNvbXB1dGVyIGJvYXJkXG4gIHBsYWNlRmxlZXQoY29tcHV0ZXIuZ2FtZUJvYXJkKTtcbiAgXG4gIC8vIEluaXRpYWxpemUgZ2FtZSBzY3JlZW5cbiAgdXBkYXRlRGlzcGxheShodW1hbiwgY29tcHV0ZXIsIGNoZWF0KTtcbiAgdXBkYXRlU2NvcmVzKGh1bWFuLCBjb21wdXRlcik7XG5cbiAgLy8gV2FpdCBmb3IgaHVtYW4gcGxheWVyIHRvIGdvIGZpcnN0XG4gIC8vIEh1bWFuIHBsYXllciBwbGFjZXMgYm9tYnMgb250byBjb21wdXRlcidzIGJvYXJkXG4gIGNvbnN0IGNvbXB1dGVyQm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wdXRlci1ib2FyZCcpO1xuICBjb21wdXRlckJvYXJkRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIC8vIENoZWNrIGlmIGEgY2VsbCBpcyBjbGlja2VkIG9uXG4gICAgLy8gQ2VsbHMgdGhhdCBoYXZlIGJlZW4gY2xpY2tlZCBvbiBoYXZlIGBwb2ludGVyRXZlbnRzID0gbm9uZWBcbiAgICAvLyBXaGVuIHRob3NlIGNlbGxzIGFyZSBjbGljaywgdGhlIGNsYXNzIG9mIHRoZSB0YXJnZXQgaXMgdGhlIGJvYXJkLCBub3QgY2VsbFxuICAgIGxldCByb3csIGNvbDtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgIC8vIFJldHJpZXZlIHRoZSByb3cgYW5kIGNvbCBmcm9tIHRoZSBlbGVtZW50J3MgZGF0YXNldFxuICAgICAgLy8gVGhlc2Ugd2VyZSBzZXQgd2hlbiB0aGVzZSBjZWxscyBhcmUgY3JlYXRlZCBpbiBkb20uanNcbiAgICAgIHJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93O1xuICAgICAgY29sID0gZS50YXJnZXQuZGF0YXNldC5jb2w7XG4gICAgfVxuICAgIC8vIElmIGNoZWF0aW5nLCB0aGUgdGFyZ2V0IG9mIHRoZSBjbGljayBpcyBpbWFnZSwgd2hvc2UgcGFyZW50IGlzIGNlbGxcbiAgICBlbHNlIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICByb3cgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucm93O1xuICAgICAgY29sID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmNvbDtcbiAgICB9XG5cbiAgICB0dXJuKys7XG4gICAgLy8gVXBkYXRlIHR1cm5zIG9uIFVJXG4gICAgdXBkYXRlVHVybih0dXJuKTtcbiAgICBcbiAgICAvLyBBdHRhY2sgdGhlIGNvbXB1dGVyJ3MgZ2FtZUJvYXJkXG4gICAgY29tcHV0ZXIuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgIHVwZGF0ZURpc3BsYXkoaHVtYW4sIGNvbXB1dGVyLCBjaGVhdCk7XG4gICAgdXBkYXRlU2NvcmVzKGh1bWFuLCBjb21wdXRlcik7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyB0aGUgd2lubmluZyBtb3ZlXG4gICAgaWYgKGNvbXB1dGVyLmdhbWVCb2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICAgIC8vIExldCBjb21wdXRlciBtYWtlcyBvbmUgbW9yZSBtb3ZlXG4gICAgICBodW1hbi5nZXRCb21iZWQoKTtcbiAgICAgIHVwZGF0ZURpc3BsYXkoaHVtYW4sIGNvbXB1dGVyLCBjaGVhdCk7XG4gICAgICBhd2FpdCBkZWxheSg1MDApO1xuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgdGhlIHdpbm5pbmcgbW92ZVxuICAgICAgaWYgKGh1bWFuLmdhbWVCb2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgYWxlcnQoJ0dhbWUgT3ZlciwgdGllIScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ0dhbWUgT3ZlciwgeW91IHdvbiEnKTtcbiAgICAgIH1cbiAgICAgIHN0b3BQbGF5aW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbXB1dGVyIGJvbWJzIHRoZSBodW1hbiBwbGF5ZXIgYm9hcmRcbiAgICAgIGh1bWFuLmdldEJvbWJlZCgpO1xuICAgICAgdXBkYXRlRGlzcGxheShodW1hbiwgY29tcHV0ZXIsIGNoZWF0KTtcbiAgICAgIC8vIENoZWNrIGlmIGl0IGlzIHRoZSB3aW5uaW5nIG1vdmVcbiAgICAgIGlmIChodW1hbi5nYW1lQm9hcmQuaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgIHN0b3BQbGF5aW5nKCk7XG4gICAgICAgIGF3YWl0IGRlbGF5KDUwMCk7XG4gICAgICAgIGFsZXJ0KCdHYW1lIE92ZXIsIHlvdSBsb3N0IScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY2hlYXRDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVhdCcpO1xuICBjaGVhdENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjaGVhdCA9IGNoZWF0Q2hlY2tib3guY2hlY2tlZDtcbiAgICB1cGRhdGVEaXNwbGF5KGh1bWFuLCBjb21wdXRlciwgY2hlYXQpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi9jcmVhdGVDZWxsJztcbmltcG9ydCB7IEJPQVJEU0laRSB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tICcuL2NyZWF0ZVNoaXAnO1xuXG5leHBvcnQgY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuICBsZXQgYm9hcmQ7XG4gIGxldCB0b3RhbEhpdHMgPSAwO1xuICBsZXQgdG90YWxNaXNzZXMgPSAwO1xuXG4gIGNvbnN0IGluaXRCb2FyZCA9ICgpID0+IHtcbiAgICBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQk9BUkRTSVpFOyBpKyspIHtcbiAgICAgIGJvYXJkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEJPQVJEU0laRTsgaisrKSB7XG4gICAgICAgIGJvYXJkW2ldLnB1c2goQ2VsbChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByaW50Qm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IGRpc3BsYXkgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJPQVJEU0laRTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEJPQVJEU0laRTsgaisrKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVtqXS5pc0JvbWJlZCkge1xuICAgICAgICAgIGRpc3BsYXkgPSAneCc7XG4gICAgICAgIH0gZWxzZSBkaXNwbGF5ICs9ICcuJztcblxuICAgICAgICBpZiAoYm9hcmRbaV1bal0uaGFzU2hpcCkge1xuICAgICAgICAgIGRpc3BsYXkgKz0gJ1MnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BsYXkgKz0gJyAnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaXNwbGF5ICs9ICdcXG4nO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkaXNwbGF5KTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAodHlwZSwgcm93LCBjb2wsIGRpcmVjdGlvbikgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKHR5cGUpO1xuICAgIGNvbnN0IHNpemUgPSBzaGlwLnNpemU7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgY29sICsgc2l6ZSA+IEJPQVJEU0laRSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcgJiYgcm93ICsgc2l6ZSA+IEJPQVJEU0laRSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3JvdyArIGldW2NvbF0uaGFzU2hpcCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgYm9hcmRbcm93ICsgaV1bY29sXS5wbGFjZVNoaXAoc2hpcCwgaSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sICsgaV0uaGFzU2hpcCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgIGJvYXJkW3Jvd11bY29sICsgaV0ucGxhY2VTaGlwKHNoaXAsIGksIGRpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgZnVuY3Rpb24gaXNHYW1lT3ZlcigpIHtcbiAgICBjb25zdCBjb3VudCA9IGJvYXJkLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYWNjdW11bGF0b3IgK1xuICAgICAgICBjdXJyZW50VmFsdWUuZmlsdGVyKChjZWxsKSA9PiBjZWxsLmlzQm9tYmVkICYmIGNlbGwuaGFzU2hpcCkubGVuZ3RoXG4gICAgICApO1xuICAgIH0sIDApO1xuICAgIGlmIChjb3VudCA+PSAxNykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChyb3csIGNvbCkgPT4ge1xuICAgIGlmIChib2FyZFtyb3ddW2NvbF0uaXNCb21iZWQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTWFyayB0aGUgY2VsbCBpc0JvbWJlZCA9IHRydWVcbiAgICAgIGJvYXJkW3Jvd11bY29sXS5hdHRhY2soKTtcbiAgICAgIC8vIENoZWNrIGlmIGl0IGlzIGEgaGl0XG4gICAgICBpZiAoYm9hcmRbcm93XVtjb2xdLmhhc1NoaXApIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkW3Jvd11bY29sXS5zaGlwO1xuICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICB0b3RhbEhpdHMrKztcbiAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgfVxuICAgICAgdG90YWxNaXNzZXMrKztcbiAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH0sXG4gICAgZ2V0IHRvdGFsSGl0cygpIHtcbiAgICAgIHJldHVybiB0b3RhbEhpdHM7XG4gICAgfSxcbiAgICBnZXQgdG90YWxNaXNzZXMoKSB7XG4gICAgICByZXR1cm4gdG90YWxNaXNzZXM7XG4gICAgfSxcbiAgICBpbml0Qm9hcmQsXG4gICAgcHJpbnRCb2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBpc0dhbWVPdmVyLFxuICB9O1xufTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXJzJztcbmltcG9ydCB7IGRlcGxveUZsZWV0IH0gZnJvbSAnLi9kZXBsb3lGbGVldCc7XG5pbXBvcnQgeyB1cGRhdGVEaXNwbGF5IH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5cbi8vIEluaXRpYWxpemUgcGxheWVyc1xuY29uc3QgaHVtYW4gPSBQbGF5ZXIoJ1RvbScsICdodW1hbicpO1xuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoJ0plcnJ5JywgJ2NvbXB1dGVyJyk7XG5cbi8vIEluaXRpYWxpemUgZGlzcGxheVxuaHVtYW4uZ2FtZUJvYXJkLmluaXRCb2FyZCgpO1xuY29tcHV0ZXIuZ2FtZUJvYXJkLmluaXRCb2FyZCgpO1xudXBkYXRlRGlzcGxheShodW1hbiwgY29tcHV0ZXIpO1xuXG4vLyBEZXBsb3kgZmxlZXQgdGhlbiBzdGFydCB0aGUgZ2FtZVxuZGVwbG95RmxlZXQoaHVtYW4pLnRoZW4oKCkgPT4ge1xuICBnYW1lKGh1bWFuLCBjb21wdXRlcik7XG59KTtcbiIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gJy4uL3NyYy9nYW1lQm9hcmQnO1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKG5hbWUsIHR5cGUpID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gR2FtZUJvYXJkKCk7XG4gIGNvbnN0IHF1ZXVlID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tTnVtKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRCb21iZWRSYW5kb25seSgpIHtcbiAgICBsZXQgcm93LCBjb2wsIHJlc3VsdDtcbiAgICBkbyB7XG4gICAgICByb3cgPSBnZXRSYW5kb21OdW0oKTtcbiAgICAgIGNvbCA9IGdldFJhbmRvbU51bSgpO1xuICAgICAgcmVzdWx0ID0gZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gJycpO1xuICAgIHJldHVybiB7IHJvdywgY29sLCByZXN1bHQgfTtcbiAgfVxuXG4gIGNvbnN0IGdldEJvbWJlZCA9ICgpID0+IHtcbiAgICBsZXQgZmVlZGJhY2s7XG4gICAgbGV0IHJvdywgY29sLCByZXN1bHQ7XG5cbiAgICAvLyBJZiB0aGUgcXVldWUgaXMgZW1wdHksIGdldCBib21iZWQgYXQgYSByYW5kb21lIHBsYWNlXG4gICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIGZlZWRiYWNrID0gZ2V0Qm9tYmVkUmFuZG9ubHkoKTtcbiAgICAgIHJvdyA9IGZlZWRiYWNrLnJvdztcbiAgICAgIGNvbCA9IGZlZWRiYWNrLmNvbDtcbiAgICAgIHJlc3VsdCA9IGZlZWRiYWNrLnJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gR28gdGhyb3VnaCB0aGUgcXVldWUgdG8gZ2V0IGJvbWJlZCBhdCB0aGUgZmlyc3QgY2VsbCB0aGF0J3Mgbm90IGFscmVhZHkgYm9tYmVkXG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIHJvdyA9IHRhcmdldC5yb3c7XG4gICAgICAgIGNvbCA9IHRhcmdldC5jb2w7XG4gICAgICAgIHJlc3VsdCA9IGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gJycpO1xuICAgIH1cblxuICAgIC8vIElmIGhpdCwgcHVzaCB0aGlzIGNlbGwncyA0IGhvcml6b250YWwgYW5kIHZlcnRpY2FsIG5laWdoYm91cnMgXG4gICAgLy8gdGhhdCBhcmUgbm90IGFscmVhZHkgYm9tYmVkIGludG8gdGhlIHF1ZXVlXG4gICAgaWYgKHJlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAtMTsgaSA8PSAxOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IC0xOyBqIDw9IDE7IGorKykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGkgIT09IGogJiYgLy8gcmVtb3ZlIGRpYWdvbmFsXG4gICAgICAgICAgICBpICsgaiAhPT0gMCAmJiAvLyByZW1vdmUgZGlhZ29uYWwgXG4gICAgICAgICAgICByb3cgKyBpID49IDAgJiYgLy8gbWFrZSBzdXJlIGNlbGwgaXMgd2l0aGluIHRoZSBnYW1lYm9hcmRcbiAgICAgICAgICAgIHJvdyArIGkgPCAxMCAmJlxuICAgICAgICAgICAgY29sICsgaiA+PSAwICYmXG4gICAgICAgICAgICBjb2wgKyBqIDwgMTAgJiZcbiAgICAgICAgICAgICFnYW1lQm9hcmQuYm9hcmRbcm93ICsgaV1bY29sICsgal0uaXNCb21iZWQgLy8gbm90IGJvbWJlZFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcXVldWUucHVzaChnYW1lQm9hcmQuYm9hcmRbcm93ICsgaV1bY29sICsgal0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0IG5hbWUodmFsdWUpIHtcbiAgICAgIG5hbWUgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBzZXQgdHlwZSh2YWx1ZSkge1xuICAgICAgdHlwZSA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IHR5cGUoKSB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9LFxuICAgIGdldCBnYW1lQm9hcmQoKSB7XG4gICAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICAgIH0sXG4gICAgZ2V0Qm9tYmVkLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==