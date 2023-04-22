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
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.stopPlaying)();
      await (0,_delay__WEBPACK_IMPORTED_MODULE_1__["default"])(500);
      alert('Game Over, you won!');
    } else {
      // This is a bit unfair. In case of a tie game, 
      // the human wins as he/she is the first to move.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGlDQUFpQyxtREFBbUQsMEJBQTBCLDJCQUEyQiw2QkFBNkIsR0FBRyxPQUFPLGNBQWMsZUFBZSwyQkFBMkIsOEJBQThCLDZFQUE2RSxHQUFHLFVBQVUsa0JBQWtCLGtCQUFrQiw0Q0FBNEMsb0RBQW9ELDJCQUEyQixHQUFHLGtCQUFrQixrQkFBa0IsdUJBQXVCLFdBQVcsWUFBWSxnQkFBZ0IsaUJBQWlCLCtDQUErQywyQkFBMkIsR0FBRyxRQUFRLG1CQUFtQixvQkFBb0IsNEJBQTRCLHdCQUF3QixnQkFBZ0Isb0JBQW9CLHNEQUFzRCxHQUFHLFVBQVUsa0JBQWtCLCtDQUErQyxHQUFHLHFCQUFxQiwwQkFBMEIsR0FBRyx1REFBdUQsa0JBQWtCLDRCQUE0Qix5QkFBeUIsdUJBQXVCLEdBQUcsZ0JBQWdCLHVCQUF1QixjQUFjLG1CQUFtQixzQkFBc0Isc0RBQXNELEdBQUcsWUFBWSxlQUFlLEdBQUcsU0FBUyxpQkFBaUIsR0FBRyxzQkFBc0IsMEJBQTBCLEdBQUcsWUFBWSxrQkFBa0Isd0NBQXdDLDJDQUEyQyxhQUFhLDBCQUEwQixHQUFHLFdBQVcsdUJBQXVCLCtCQUErQixlQUFlLGdCQUFnQixrQkFBa0IsNEJBQTRCLHlCQUF5QiwrQkFBK0IsdUJBQXVCLEdBQUcsWUFBWSx1QkFBdUIsR0FBRyxXQUFXLGdCQUFnQixnQ0FBZ0MsR0FBRyxXQUFXLGVBQWUsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsR0FBRyxhQUFhLDRCQUE0QixHQUFHLFVBQVUsMEJBQTBCLEdBQUcsa0JBQWtCLDRCQUE0QixHQUFHLG9CQUFvQiwwQkFBMEIsR0FBRyx1REFBdUQsa0JBQWtCLHdDQUF3QyxnQ0FBZ0MsaUJBQWlCLHVCQUF1QixnQkFBZ0IsZ0NBQWdDLEdBQUcsdUVBQXVFLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLHNCQUFzQixzQkFBc0Isa0JBQWtCLHVCQUF1QixzREFBc0QsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsaUJBQWlCLG9CQUFvQixvQkFBb0Isc0JBQXNCLHNEQUFzRCwyQkFBMkIsdUJBQXVCLEdBQUcsb0JBQW9CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGVBQWUsc0JBQXNCLHNEQUFzRCxHQUFHLHdCQUF3QixrQkFBa0IsNEJBQTRCLHFCQUFxQixvQkFBb0IsdUJBQXVCLGtDQUFrQyxHQUFHLG1CQUFtQixrQkFBa0IsNEJBQTRCLHFCQUFxQixzQkFBc0IsdUJBQXVCLG1DQUFtQyxHQUFHLG9CQUFvQix1QkFBdUIsZUFBZSxvQkFBb0Isc0JBQXNCLHNEQUFzRCxnQkFBZ0IsMkJBQTJCLEdBQUcsWUFBWSxrQkFBa0IsNEJBQTRCLHdCQUF3QiwyQkFBMkIsR0FBRyxvRUFBb0UsdUJBQXVCLGlCQUFpQixrQkFBa0IsYUFBYSxHQUFHLHdCQUF3QixvQkFBb0Isc0JBQXNCLHNEQUFzRCxHQUFHLHlEQUF5RCx1QkFBdUIsMEJBQTBCLGdCQUFnQixpQkFBaUIsR0FBRywyREFBMkQsZUFBZSxhQUFhLGNBQWMsR0FBRyw4RkFBOEYsdUJBQXVCLG9CQUFvQixXQUFXLFlBQVksYUFBYSxjQUFjLDRCQUE0QixxQkFBcUIsR0FBRyxrSUFBa0ksdUJBQXVCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLGNBQWMsZ0JBQWdCLDRCQUE0QixxQkFBcUIsR0FBRywwTkFBME4sMENBQTBDLEdBQUcsNkZBQTZGLGdDQUFnQyxHQUFHLHlEQUF5RCx3QkFBd0IsR0FBRywwREFBMEQsdUJBQXVCLEdBQUcsbUJBQW1CO0FBQzloYTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmdEO0FBQ007QUFDTjtBQUNJO0FBQ0E7O0FBRXBEOztBQUVBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGdCQUFnQixTQUFTO0FBQ3pCLGFBQWEsU0FBUztBQUN0QixlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCOztBQUVBO0FBQ0EsV0FBVyxnREFBWTtBQUN2QixjQUFjLG1EQUFlO0FBQzdCLFdBQVcsZ0RBQVk7QUFDdkIsYUFBYSxrREFBYztBQUMzQixhQUFhLGtEQUFjO0FBQzNCOzs7QUFHaUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q2U7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBLGFBQWEsU0FBUztBQUN0QixnQkFBZ0IsU0FBUztBQUN6QixhQUFhLFNBQVM7QUFDdEIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4Qjs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHVCO0FBQ1c7QUFDakI7QUFDUTs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMERBQWE7QUFDakM7QUFDQTtBQUNBLE1BQU07QUFDTixvQ0FBb0MsS0FBSztBQUN6QztBQUNBO0FBQ0EsMEJBQTBCLDBEQUFhO0FBQ3ZDLG9CQUFvQiwwREFBYSwwQkFBMEIsbUJBQW1CO0FBQzlFLGtCQUFrQiw4Q0FBTTtBQUN4QjtBQUNBLDBCQUEwQiw2Q0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMERBQWE7QUFDdkMsb0JBQW9CLDBEQUFhO0FBQ2pDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMERBQWE7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkNBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsaUNBQWlDLDZDQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGlEQUFTO0FBQzlDLHNDQUFzQyxpREFBUztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZDQUFLO0FBQ2hDLHlCQUF5Qiw2Q0FBSztBQUM5Qix3QkFBd0IsSUFBSSw2Q0FBSyxhQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBYTtBQUNyQix3QkFBd0IsSUFBSSw2Q0FBSyxhQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2Q0FBSztBQUNoQyx5QkFBeUIsNkNBQUs7QUFDOUIsd0JBQXdCLElBQUksNkNBQUssYUFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQWE7QUFDckIsd0JBQXdCLElBQUksNkNBQUssYUFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBYTtBQUNyQjtBQUNBLFFBQVE7QUFDUjtBQUNBLHdCQUF3QixJQUFJLDZDQUFLLGFBQWE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtREFBYTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJEQUFVO0FBQ2hCO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDbExBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmdEO0FBQ0o7O0FBRTVDO0FBQ0Esa0JBQWtCLElBQUksaURBQVMsRUFBRTtBQUNqQyxvQkFBb0IsSUFBSSxpREFBUyxFQUFFO0FBQ25DO0FBQ0EscUJBQXFCLDBEQUFhO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLHdEQUF3RDtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMERBQWE7QUFDbkMsb0JBQW9CLDhDQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwREFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBEQUFhO0FBQzVCO0FBQ0EseUJBQXlCLDBEQUFhO0FBQ3RDLHNDQUFzQyw2QkFBNkI7QUFDbkU7QUFDQSwyQkFBMkIsMERBQWE7QUFDeEMsMENBQTBDLCtCQUErQjtBQUN6RTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSwwREFBYTtBQUM1QjtBQUNBLHNCQUFzQiwwREFBYTtBQUNuQyxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0Esd0JBQXdCLDBEQUFhO0FBQ3JDLHVDQUF1Qyw0QkFBNEI7QUFDbkU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhhO0FBQ2pEO0FBQ2tCOztBQUV2QztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDJEQUFVO0FBQ1o7QUFDQTtBQUNBLEVBQUUsbURBQWE7QUFDZixFQUFFLGtEQUFZOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGdEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBYTtBQUNqQixJQUFJLGtEQUFZOztBQUVoQjtBQUNBO0FBQ0EsTUFBTSxpREFBVztBQUNqQixZQUFZLGtEQUFLO0FBQ2pCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBYTtBQUNuQjtBQUNBO0FBQ0EsUUFBUSxpREFBVztBQUNuQixjQUFjLGtEQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBYTtBQUNqQixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFb0M7QUFDSTtBQUNFOztBQUVuQztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksaURBQVMsRUFBRTtBQUNuQztBQUNBLHNCQUFzQixJQUFJLGlEQUFTLEVBQUU7QUFDckMsc0JBQXNCLGlEQUFJO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksaURBQVMsRUFBRTtBQUNuQyxzQkFBc0IsSUFBSSxpREFBUyxFQUFFO0FBQ3JDO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsdURBQVU7QUFDM0I7O0FBRUEsbURBQW1ELGlEQUFTO0FBQzVELGlEQUFpRCxpREFBUzs7QUFFMUQ7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIcUI7QUFDYztBQUNTO0FBQ047QUFDUjs7QUFFOUI7QUFDQSxjQUFjLGdEQUFNO0FBQ3BCLGlCQUFpQixnREFBTTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0EsbURBQWE7O0FBRWI7QUFDQSx5REFBVztBQUNYLEVBQUUsMkNBQUk7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEI0Qzs7QUFFdEM7QUFDUCxvQkFBb0IseURBQVM7QUFDN0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NyZWF0ZUNlbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3JlYXRlU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RlbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGVwbG95RmxlZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kZXBsb3lSYW5kb21seS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JhY2tncm91bmQuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qIFZpY3RvciBWZXJpb24gKi9cXG4gIC0tZGFya2VyLWNvbG9yOiAjZmYwMDAwO1xcbiAgLS1kYXJrLWNvbG9yOiAjMTFjYmQ3O1xcbiAgLS1saWdodC1jb2xvcjogI2M2ZjFlNztcXG4gIC0tbGlnaHRlci1jb2xvcjogI2YwZmZmMztcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gYXV0byA0cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoNTAlKTtcXG59XFxuXFxuaDEge1xcbiAgLyogY29sb3I6IHJlZDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTdmciAzM2ZyIDMzZnIgMTdmcjtcXG59XFxuXFxuLmNvbXB1dGVyLWZsZWV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmNvbXB1dGVyLWJvYXJkLWNvbnRhaW5lciwgLmh1bWFuLWJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRlcnJpdG9yeSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJyZW07XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLmVuZW15IHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5teSB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcblxcblxcbi5odW1hbi1mbGVldCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMXB4O1xcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIHdpZHRoOiAzdnc7XFxuICBoZWlnaHQ6IDN2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgLyogYm9yZGVyOiAxcHggYmx1ZSBzb2xpZDsgKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbWFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zaG93IHtcXG4gIG9wYWNpdHk6IDUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbn1cXG5cXG4uYm9tYiB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5kcmFnZ2VkT3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuLmRyYWdnZWRPdmVyLXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jb21wdXRlci1mbGVldC1jb250YWluZXIsIC5odW1hbi1mbGVldC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDNmciAxZnIgMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgb3BhY2l0eTogMC44O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgei1pbmRleDogMTA7XFxuICBtYXJnaW46IDVyZW0gMXJlbSA1cmVtIDFyZW07XFxufVxcblxcbi5kZXBsb3ktaGVhZGluZywgLnNoaXAtY29udGFpbmVyLCAgLnJvdGF0ZS1jb250YWluZXIsIC5yb3RhdGUtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZXBsb3ktaGVhZGluZyB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxufVxcblxcbi5zaGlwLWltYWdlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZS1idG4ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRlcGxveS1mYWlsZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxufVxcblxcbi50dXJuLCAudG90YWwtaGl0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogdG9wO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGdyYXk7XFxufVxcblxcbi50b3RhbC1taXNzZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHRvcDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGdyYXk7IFxcbn1cXG5cXG4jcmFuZG9tLWRlcGxveSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMXZ3O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgd2lkdGg6IDE1dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi8qIFRvZ2dsZSBzd2l0Y2ggdG8gc2hvdy9oaWRlIGVuZW15IHNoaXBzICovXFxuLmNoZWF0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVhdC1jb250YWluZXI+cCB7XFxuICBjb2xvcjogZGFya2JsdWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi8qIFRoZSBzaXplIG9mIHRoZSB0b2dnbGUgc3dpdGNoICovXFxuLnRvZ2dsZS1zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIEhpZGUgdGhlIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4udG9nZ2xlLXN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgdGhhdCB0aGUgY2lyY2xlIGNhbiBtb3ZlICovXFxuLyogc2FtZSBzaXplIGFzIHRoZSB0b2dnbGUgc3dpdGNoICovXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi8qIFRoZSBjaXJjbGUgdGhhdCBtb3ZlcyBpbiB0aGUgc2xpZGVyICovXFxuLyogQmVmb3JlIGl0IGlzIGNoZWNrZWQsIHRoZSBpbmRpY2F0b3IgKHNxdWFyZSkgaXMgb24gdGhlIGxlZnQgKi9cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi8qIENoYW5nZSB0b2dnbGUgc3dpdGNoIGJhY2tncm91bmQgY29sb3Igd2hlbiBpdCBpcyBjbGlja2VkICovXFxuLyogVGhldGhlICsgaXMgdXNlZCB0byBzZWxlY3QgdGhlIC5zbGlkZXIgaW1taWRpYXRlbHkgZm9sbG93IHRoZSBpbnB1dDpjaGVja2VkICovXFxuLyogVGhlIHN0eWxpbmcgYXBwbGllcyB0byB0aGUgLnNsaWRlciAqL1xcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1jb2xvcik7XFxufVxcblxcbi8qIFdoZW4gY2hlY2tlZCwgbW92ZSBpbmRpY2F0b3IgdG8gdGhlIHJpZ2h0IGJ5IDE2cHggKi9cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xcbn1cXG5cXG4vKiBNYWtlIHNsaWRlciBoYXZlIHJvdW5kIGNvcm5lcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIE1ha2UgdGhlIGluZGljYXRvciByb3VuZCAqL1xcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscUJBQXFCO0VB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QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaURBQWlEO0FBQ25EOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQSx3Q0FBd0M7QUFDeEMsbUNBQW1DO0FBQ25DO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQSx3Q0FBd0M7QUFDeEMsZ0VBQWdFO0FBQ2hFO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQSw2REFBNkQ7QUFDN0QsZ0ZBQWdGO0FBQ2hGLHVDQUF1QztBQUN2QztFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQSxzREFBc0Q7QUFDdEQ7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBWaWN0b3IgVmVyaW9uICovXFxuICAtLWRhcmtlci1jb2xvcjogI2ZmMDAwMDtcXG4gIC0tZGFyay1jb2xvcjogIzExY2JkNztcXG4gIC0tbGlnaHQtY29sb3I6ICNjNmYxZTc7XFxuICAtLWxpZ2h0ZXItY29sb3I6ICNmMGZmZjM7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIGF1dG8gNHJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2JhY2tncm91bmQuanBlZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5ib2R5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSg1MCUpO1xcbn1cXG5cXG5oMSB7XFxuICAvKiBjb2xvcjogcmVkOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxN2ZyIDMzZnIgMzNmciAxN2ZyO1xcbn1cXG5cXG4uY29tcHV0ZXItZmxlZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uY29tcHV0ZXItYm9hcmQtY29udGFpbmVyLCAuaHVtYW4tYm9hcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGVycml0b3J5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG4uZW5lbXkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm15IHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuXFxuXFxuLmh1bWFuLWZsZWV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XFxufVxcblxcbi5jZWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgd2lkdGg6IDN2dztcXG4gIGhlaWdodDogM3Z3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICAvKiBib3JkZXI6IDFweCBibHVlIHNvbGlkOyAqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmltYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnNob3cge1xcbiAgb3BhY2l0eTogNTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxufVxcblxcbi5ib21iIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmRyYWdnZWRPdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4uZHJhZ2dlZE92ZXItcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNvbXB1dGVyLWZsZWV0LWNvbnRhaW5lciwgLmh1bWFuLWZsZWV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgM2ZyIDFmciAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB6LWluZGV4OiAxMDtcXG4gIG1hcmdpbjogNXJlbSAxcmVtIDVyZW0gMXJlbTtcXG59XFxuXFxuLmRlcGxveS1oZWFkaW5nLCAuc2hpcC1jb250YWluZXIsICAucm90YXRlLWNvbnRhaW5lciwgLnJvdGF0ZS1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlcGxveS1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuLnNoaXAtaW1hZ2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucm90YXRlLWJ0biB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZGVwbG95LWZhaWxlZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuLnR1cm4sIC50b3RhbC1oaXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiB0b3A7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggZ3JheTtcXG59XFxuXFxuLnRvdGFsLW1pc3NlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogdG9wO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggZ3JheTsgXFxufVxcblxcbiNyYW5kb20tZGVwbG95IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxdnc7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICB3aWR0aDogMTV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLyogVG9nZ2xlIHN3aXRjaCB0byBzaG93L2hpZGUgZW5lbXkgc2hpcHMgKi9cXG4uY2hlYXQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmNoZWF0LWNvbnRhaW5lcj5wIHtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLyogVGhlIHNpemUgb2YgdGhlIHRvZ2dsZSBzd2l0Y2ggKi9cXG4udG9nZ2xlLXN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLyogSGlkZSB0aGUgZGVmYXVsdCBjaGVja2JveCAqL1xcbi50b2dnbGUtc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyogVGhlIHNsaWRlciB0aGF0IHRoZSBjaXJjbGUgY2FuIG1vdmUgKi9cXG4vKiBzYW1lIHNpemUgYXMgdGhlIHRvZ2dsZSBzd2l0Y2ggKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLyogVGhlIGNpcmNsZSB0aGF0IG1vdmVzIGluIHRoZSBzbGlkZXIgKi9cXG4vKiBCZWZvcmUgaXQgaXMgY2hlY2tlZCwgdGhlIGluZGljYXRvciAoc3F1YXJlKSBpcyBvbiB0aGUgbGVmdCAqL1xcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgd2lkdGg6IDEycHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLyogQ2hhbmdlIHRvZ2dsZSBzd2l0Y2ggYmFja2dyb3VuZCBjb2xvciB3aGVuIGl0IGlzIGNsaWNrZWQgKi9cXG4vKiBUaGV0aGUgKyBpcyB1c2VkIHRvIHNlbGVjdCB0aGUgLnNsaWRlciBpbW1pZGlhdGVseSBmb2xsb3cgdGhlIGlucHV0OmNoZWNrZWQgKi9cXG4vKiBUaGUgc3R5bGluZyBhcHBsaWVzIHRvIHRoZSAuc2xpZGVyICovXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyLWNvbG9yKTtcXG59XFxuXFxuLyogV2hlbiBjaGVja2VkLCBtb3ZlIGluZGljYXRvciB0byB0aGUgcmlnaHQgYnkgMTZweCAqL1xcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XFxufVxcblxcbi8qIE1ha2Ugc2xpZGVyIGhhdmUgcm91bmQgY29ybmVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogTWFrZSB0aGUgaW5kaWNhdG9yIHJvdW5kICovXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjYXJyaWVySW1hZ2UgZnJvbSAnLi9pbWFnZXMvY2Fycmllci5zdmcnO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWFnZSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwLnN2Zyc7XG5pbXBvcnQgY3J1aXNlckltYWdlIGZyb20gJy4vaW1hZ2VzL2NydWlzZXIuc3ZnJztcbmltcG9ydCBzdWJtYXJpbmVJbWFnZSBmcm9tICcuL2ltYWdlcy9zdWJtYXJpbmUuc3ZnJztcbmltcG9ydCBkZXN0cm95ZXJJbWFnZSBmcm9tICcuL2ltYWdlcy9kZXN0cm95ZXIuc3ZnJztcblxuY29uc3QgQk9BUkRTSVpFID0gMTA7XG5cbmNvbnN0IEZMRUVUID0ge1xuICBjYXJyaWVyOiB7IHNpemU6IDUgfSxcbiAgYmF0dGxlc2hpcDogeyBzaXplOiA0IH0sXG4gIGNydWlzZXI6IHsgc2l6ZTogMyB9LFxuICBzdWJtYXJpbmU6IHsgc2l6ZTogMyB9LFxuICBkZXN0cm95ZXI6IHsgc2l6ZTogMiB9LFxufTtcblxuY29uc3QgSU1BR0VTID0ge1xuICBjYXJyaWVyOiBjYXJyaWVySW1hZ2UsXG4gIGJhdHRsZXNoaXA6IGJhdHRsZXNoaXBJbWFnZSxcbiAgY3J1aXNlcjogY3J1aXNlckltYWdlLFxuICBzdWJtYXJpbmU6IHN1Ym1hcmluZUltYWdlLFxuICBkZXN0cm95ZXI6IGRlc3Ryb3llckltYWdlLFxufTtcblxuXG5leHBvcnQge0JPQVJEU0laRSwgRkxFRVQsIElNQUdFU31cbiIsImV4cG9ydCBjb25zdCBDZWxsID0gKHJvdywgY29sKSA9PiB7XG4gIGxldCBzaGlwID0gbnVsbDtcbiAgbGV0IGhhc1NoaXAgPSBmYWxzZTtcbiAgbGV0IGlzQm9tYmVkID0gZmFsc2U7XG4gIGxldCBzZWN0aW9uO1xuICBsZXQgZGlyZWN0aW9uO1xuICBsZXQgZHJhZ2dlZE92ZXIgPSBmYWxzZTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAob2JqLCBpbmRleCwgZGlyKSA9PiB7XG4gICAgaGFzU2hpcCA9IHRydWU7XG4gICAgc2hpcCA9IG9iajtcbiAgICBzZWN0aW9uID0gaW5kZXg7XG4gICAgZGlyZWN0aW9uID0gZGlyO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFjayA9ICgpID0+IHtcbiAgICBpc0JvbWJlZCA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByb3csXG4gICAgY29sLFxuICAgIGdldCBzZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfSxcbiAgICBnZXQgZGlyZWN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgfSxcbiAgICBnZXQgc2hpcCgpIHtcbiAgICAgIHJldHVybiBzaGlwO1xuICAgIH0sXG4gICAgZ2V0IGhhc1NoaXAoKSB7XG4gICAgICByZXR1cm4gaGFzU2hpcDtcbiAgICB9LFxuICAgIGdldCBpc0JvbWJlZCgpIHtcbiAgICAgIHJldHVybiBpc0JvbWJlZDtcbiAgICB9LFxuICAgIHNldCBkcmFnZ2VkT3ZlciAodmFsdWUpIHtcbiAgICAgIGRyYWdnZWRPdmVyID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgZHJhZ2dlZE92ZXIoKSB7XG4gICAgICByZXR1cm4gZHJhZ2dlZE92ZXI7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAsXG4gICAgYXR0YWNrLFxuICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NBcnJheSwgYXR0ck9iaiwgdGV4dCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYgKGNsYXNzQXJyYXkpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0FycmF5KTtcblxuICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0ck9iaikge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJPYmpbYXR0cl0pO1xuICB9XG5cbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJjb25zdCBGTEVFVCA9IHtcbiAgY2FycmllcjogeyBzaXplOiA1IH0sXG4gIGJhdHRsZXNoaXA6IHsgc2l6ZTogNCB9LFxuICBjcnVpc2VyOiB7IHNpemU6IDMgfSxcbiAgc3VibWFyaW5lOiB7IHNpemU6IDMgfSxcbiAgZGVzdHJveWVyOiB7IHNpemU6IDIgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTaGlwID0gKHR5cGUpID0+IHtcbiAgY29uc3Qgc2l6ZSA9IEZMRUVUW3R5cGVdLnNpemU7XG4gIGxldCBoaXRzID0gMDtcbiAgbGV0IGlzU3VuayA9IGZhbHNlO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzKys7XG4gICAgaWYgKGhpdHMgPj0gc2l6ZSkgaXNTdW5rID0gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHR5cGUsXG4gICAgc2l6ZTogc2l6ZSxcbiAgICBnZXQgaGl0cygpIHtcbiAgICAgIHJldHVybiBoaXRzO1xuICAgIH0sXG4gICAgZ2V0IGlzU3VuaygpIHtcbiAgICAgIHJldHVybiBpc1N1bms7XG4gICAgfSxcbiAgICBoaXQsXG4gIH07XG59O1xuIiwiLy8gR2xvYmFsIGZ1bmN0aW9uXG5mdW5jdGlvbiBkZWxheSh0aW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGF5O1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCB7IEJPQVJEU0laRSwgRkxFRVQsIElNQUdFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IHVwZGF0ZURpc3BsYXkgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBwbGFjZUZsZWV0IH0gZnJvbSAnLi9kZXBsb3lSYW5kb21seSc7XG5cbmNvbnN0IGh1bWFuRmxlZXRDb250YWluZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1hbi1mbGVldC1jb250YWluZXInKTtcbmNvbnN0IGh1bWFuQm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1hbi1ib2FyZCcpO1xuXG5jb25zdCBkZXBsb3lTaGlwID0gKHNoaXAsIGh1bWFuKSA9PiB7XG4gIC8vIFNldCB1cCBkZXBsb3kgc2hpcCBzaWRlIGJhclxuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGhlYWRpbmdFbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgWydkZXBsb3ktaGVhZGluZyddLFxuICAgIHt9LFxuICAgIGBEcmFnIGFuZCBkcm9wIHRvIGRlcGxveSB5b3VyICR7c2hpcH1gXG4gICk7XG4gIGh1bWFuRmxlZXRDb250YWluZXJFbC5hcHBlbmRDaGlsZChoZWFkaW5nRWwpO1xuICBjb25zdCBzaGlwQ29udGFpbmVyRWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3NoaXAtY29udGFpbmVyJ10pO1xuICBjb25zdCBzaGlwSW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBbJ3NoaXAtaW1hZ2UnXSwgeyBkcmFnZ2FibGU6ICd0cnVlJyB9KTtcbiAgc2hpcEltYWdlLnNyYyA9IElNQUdFU1tzaGlwXTtcbiAgLy8gRWFjaCBjZWxsIGluIHRoZSBnYW1lIGJvYXJkIGlzIDN2d1xuICBzaGlwSW1hZ2Uuc3R5bGUud2lkdGggPSBGTEVFVFtzaGlwXS5zaXplICogMyArICd2dyc7XG4gIGxldCByb3RhdGVkID0gZmFsc2U7XG4gIHNoaXBDb250YWluZXJFbC5hcHBlbmRDaGlsZChzaGlwSW1hZ2UpO1xuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoc2hpcENvbnRhaW5lckVsKTtcbiAgY29uc3Qgcm90YXRlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydyb3RhdGUtY29udGFpbmVyJ10pO1xuICBjb25zdCByb3RhdGVCdG4gPSBjcmVhdGVFbGVtZW50KFxuICAgICdidXR0b24nLFxuICAgIFsncm90YXRlLWJ0biddLFxuICAgIHt9LFxuICAgICdSb3RhdGUgc2hpcCDwn5SEJ1xuICApO1xuICByb3RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQocm90YXRlQnRuKTtcbiAgaHVtYW5GbGVldENvbnRhaW5lckVsLmFwcGVuZENoaWxkKHJvdGF0ZUNvbnRhaW5lcik7XG4gIGNvbnN0IGRlcGxveU1zZyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnZGVwbG95LWZhaWxlZCddKVxuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoZGVwbG95TXNnKVxuXG4gIC8vIEJ1dHRvbiB0byB0b2dnbGUgcm90YXRpbmcgb2YgdGhlIHNoaXBcbiAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICghcm90YXRlZCkge1xuICAgICAgc2hpcEltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcEltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgIH1cbiAgICByb3RhdGVkID0gIXJvdGF0ZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGxldCByb3dPZmZzZXQgPSAwO1xuICAgIGxldCBjb2xPZmZzZXQgPSAwO1xuICAgIGxldCBzdGFydFJvdywgc3RhcnRDb2w7XG5cbiAgICBjb25zdCBvbkRyYWdTdGFydCA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFyb3RhdGVkKSB7XG4gICAgICAgIC8vIFRoZSBzaGlwIGlzIGhvcml6b250YWxcbiAgICAgICAgc2hpcEltYWdlLnN0eWxlLndpZHRoID0gRkxFRVRbc2hpcF0uc2l6ZSAqIDMgKyAndncnO1xuICAgICAgICAvLyBzaGlwSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gJzN2dydcbiAgICAgICAgLy8gR2V0IHRoZSBsb2NhdGlvbiBvZiB0aGUgbW91c2UgcmVsYXRpdmUgdG8gdGhlIGltYWdlXG4gICAgICAgIGNvbnN0IHJlY3QgPSBzaGlwSW1hZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHhPZmZzZXQgPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICBjb2xPZmZzZXQgPSBNYXRoLmZsb29yKHhPZmZzZXQgLyAoKDMgLyAxMDApICogd2luZG93LmlubmVyV2lkdGgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRvZG86IHNoaXBJbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSdcbiAgICAgICAgLy8gSG93IHRvIG1ha2UgdGhlIGRyYWdnZWQgc2hpcCBpbWFnZSByb3RhdGUgYnkgOTAgZGVnIHRvbz9cbiAgICAgICAgc2hpcEltYWdlLnN0eWxlLmhlaWdodCA9IEZMRUVUW3NoaXBdLnNpemUgKiAzICsgJ3Z3JztcbiAgICAgICAgLy8gc2hpcEltYWdlLnN0eWxlLmhlaWdodCA9ICczdncnXG4gICAgICAgIC8vIEdldCB0aGUgbG9jYXRpb24gb2YgdGhlIG1vdXNlIHJlbGF0aXZlIHRvIHRoZSBpbWFnZVxuICAgICAgICBjb25zdCByZWN0ID0gc2hpcEltYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB5T2Zmc2V0ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICByb3dPZmZzZXQgPSBNYXRoLmZsb29yKHlPZmZzZXQgLyAoKDMgLyAxMDApICogd2luZG93LmlubmVyV2lkdGgpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb25EcmFnT3ZlciA9IChldmVudCkgPT4ge1xuICAgICAgLy8gR2V0IHRoZSBsb2NhdGlvbiBhbmQgc2l6ZSBvZiB0aGUgYm9hcmRcbiAgICAgIGNvbnN0IHJlY3QgPSBodW1hbkJvYXJkRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAvLyBUaGUgR3JpZCBpcyAxMCB4IDEwXG4gICAgICBjb25zdCBjZWxsV2lkdGggPSByZWN0LndpZHRoIC8gQk9BUkRTSVpFO1xuICAgICAgY29uc3QgY2VsbEhlaWdodCA9IHJlY3Qud2lkdGggLyBCT0FSRFNJWkU7XG4gICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKChldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIGNlbGxXaWR0aCk7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKChldmVudC5jbGllbnRZIC0gcmVjdC50b3ApIC8gY2VsbEhlaWdodCk7XG5cbiAgICAgIGlmICghcm90YXRlZCkge1xuICAgICAgICBzdGFydENvbCA9IGNvbCAtIGNvbE9mZnNldDtcbiAgICAgICAgc3RhcnRSb3cgPSByb3cgPCAwID8gMCA6IHJvdztcbiAgICAgICAgaWYgKHN0YXJ0Q29sIDwgMCkgc3RhcnRDb2wgPSAwO1xuICAgICAgICBpZiAoc3RhcnRDb2wgPiA5IC0gRkxFRVRbc2hpcF0uc2l6ZSlcbiAgICAgICAgICBzdGFydENvbCA9IDkgLSBGTEVFVFtzaGlwXS5zaXplICsgMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBGTEVFVFtzaGlwXS5zaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAoc3RhcnRDb2wgKyBpIDwgMTApIHtcbiAgICAgICAgICAgIGh1bWFuLmdhbWVCb2FyZC5ib2FyZFtzdGFydFJvd11bc3RhcnRDb2wgKyBpXS5kcmFnZ2VkT3ZlciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoaHVtYW4pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEZMRUVUW3NoaXBdLnNpemU7IGkrKykge1xuICAgICAgICAgIGlmIChzdGFydENvbCArIGkgPCAxMCkge1xuICAgICAgICAgICAgaHVtYW4uZ2FtZUJvYXJkLmJvYXJkW3N0YXJ0Um93XVtzdGFydENvbCArIGldLmRyYWdnZWRPdmVyID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydENvbCA9IGNvbCA8IDAgPyAwIDogY29sO1xuICAgICAgICBzdGFydFJvdyA9IHJvdyAtIHJvd09mZnNldCA8IDAgPyAwIDogcm93IC0gcm93T2Zmc2V0O1xuICAgICAgICBpZiAoc3RhcnRSb3cgPCAwKSBzdGFydFJvdyA9IDA7XG4gICAgICAgIGlmIChzdGFydFJvdyA+IDkgLSBGTEVFVFtzaGlwXS5zaXplKVxuICAgICAgICAgIHN0YXJ0Um93ID0gOSAtIEZMRUVUW3NoaXBdLnNpemUgKyAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEZMRUVUW3NoaXBdLnNpemU7IGkrKykge1xuICAgICAgICAgIGlmIChzdGFydFJvdyArIGkgPCAxMCkge1xuICAgICAgICAgICAgaHVtYW4uZ2FtZUJvYXJkLmJvYXJkW3N0YXJ0Um93ICsgaV1bc3RhcnRDb2xdLmRyYWdnZWRPdmVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlRGlzcGxheShodW1hbik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRkxFRVRbc2hpcF0uc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKHN0YXJ0Um93ICsgaSA8IDEwKSB7XG4gICAgICAgICAgICBodW1hbi5nYW1lQm9hcmQuYm9hcmRbc3RhcnRSb3cgKyBpXVtzdGFydENvbF0uZHJhZ2dlZE92ZXIgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb25EcmFnRW5kID0gKCkgPT4ge1xuICAgICAgLy8gVG9kbzogVGhpcyBkb2VzIG5vdCBzZWVtIHRvIHdvcmtcbiAgICAgIC8vIFRoZSBpbnRlbnRpb24gaXMgc28gdGhhdCB0aGUgc2hpcCBkb2VzIG5vdCB6b29tIGJhY2sgb25jZSBpdCBpcyBwbGFjZWRcblxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gcm90YXRlZCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgICAvLyBDaGVjayBpZiBhIHNoaXAgaXMgc3VjY2Vzc2Z1bGx5IGRlcGxveWVkXG4gICAgICBpZiAoaHVtYW4uZ2FtZUJvYXJkLnBsYWNlU2hpcChzaGlwLCBzdGFydFJvdywgc3RhcnRDb2wsIGRpcmVjdGlvbikpIHtcbiAgICAgICAgc2hpcEltYWdlLnJlbW92ZSgpO1xuICAgICAgICB1cGRhdGVEaXNwbGF5KGh1bWFuKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwbG95TXNnLmlubmVyVGV4dCA9ICdGYWlsZWQgdG8gZGVwbG95ISAgVHJ5IGFnYWluLidcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBGTEVFVFtzaGlwXS5zaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAoc3RhcnRSb3cgKyBpIDwgMTApIHtcbiAgICAgICAgICAgIGh1bWFuLmdhbWVCb2FyZC5ib2FyZFtzdGFydFJvdyArIGldW3N0YXJ0Q29sXS5kcmFnZ2VkT3ZlciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVEaXNwbGF5KGh1bWFuKTtcbiAgICAgICAgfSBcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2hpcEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIG9uRHJhZ1N0YXJ0KTtcbiAgICBodW1hbkJvYXJkRWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWdPdmVyKTtcbiAgICBzaGlwSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIG9uRHJhZ0VuZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlcGxveUZsZWV0ID0gKGh1bWFuKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXG4gICAgY29uc3Qgc3RhcnRHYW1lTXNnID0oKSA9PiB7XG4gICAgICBjb25zdCB0dXJuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybicpO1xuICAgICAgdHVybkVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgdHVybkVsLmlubmVyVGV4dCA9ICdBdHRhY2sgdGhlIGVuZW15IHdhdGVycywgbm93ISc7XG4gICAgfVxuXG4gICAgY29uc3QgZGVwbG95UmFuZG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbS1kZXBsb3knKTtcbiAgICBkZXBsb3lSYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBodW1hbkZsZWV0Q29udGFpbmVyRWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICBwbGFjZUZsZWV0KGh1bWFuLmdhbWVCb2FyZCk7XG4gICAgICBzdGFydEdhbWVNc2coKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcblxuICAgIGRlcGxveVNoaXAoJ2NhcnJpZXInLCBodW1hbikudGhlbigoKSA9PiB7XG4gICAgICBkZXBsb3lTaGlwKCdiYXR0bGVzaGlwJywgaHVtYW4pLnRoZW4oKCkgPT4ge1xuICAgICAgICBkZXBsb3lTaGlwKCdjcnVpc2VyJywgaHVtYW4pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGRlcGxveVNoaXAoJ3N1Ym1hcmluZScsIGh1bWFuKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGRlcGxveVNoaXAoJ2Rlc3Ryb3llcicsIGh1bWFuKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgaHVtYW5GbGVldENvbnRhaW5lckVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICBzdGFydEdhbWVNc2coKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsIi8vIEdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgMC05XG5mdW5jdGlvbiBnZXRSYW5kb21OdW0oKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG59XG5cbi8vIFBsYWNlIGEgc2hpcCBhdCBhIHJhbmRvbSBsb2NhdGlvbiB3aXRoIGEgcmFuZG9tIGRpcmVjdGlvblxuZnVuY3Rpb24gcGxhY2VTaGlwUmFuZG9tKGdhbWVCb2FyZCwgdHlwZSkge1xuICBsZXQgcm93LCBjb2wsIGRpcmVjdGlvbjtcbiAgZG8ge1xuICAgIHJvdyA9IGdldFJhbmRvbU51bSgpO1xuICAgIGNvbCA9IGdldFJhbmRvbU51bSgpO1xuICAgIGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICB9IHdoaWxlICghZ2FtZUJvYXJkLnBsYWNlU2hpcCh0eXBlLCByb3csIGNvbCwgZGlyZWN0aW9uKSk7XG59XG5cbi8vIFBsYWNlIGFsbCA1IHNoaXBzIG9uIGFuIGVtcHR5IGJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VGbGVldChnYW1lQm9hcmQpIHtcbiAgZ2FtZUJvYXJkLmluaXRCb2FyZCgpO1xuICBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCAnY2FycmllcicpO1xuICBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCAnYmF0dGxlc2hpcCcpO1xuICBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCAnY3J1aXNlcicpO1xuICBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCAnc3VibWFyaW5lJyk7XG4gIHBsYWNlU2hpcFJhbmRvbShnYW1lQm9hcmQsICdkZXN0cm95ZXInKTtcbn1cbiIsImltcG9ydCB7IEJPQVJEU0laRSwgSU1BR0VTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcblxuZnVuY3Rpb24gdXBkYXRlQm9hcmQoYm9hcmRFbCwgYm9hcmQsIHNob3cpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBCT0FSRFNJWkU7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgQk9BUkRTSVpFOyBqKyspIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBib2FyZFtpXVtqXTtcbiAgICAgIGNvbnN0IGNlbGxFbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBbJ2NlbGwnXSxcbiAgICAgICAgeyAnZGF0YS1yb3cnOiBpLCAnZGF0YS1jb2wnOiBqLCBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcicgfSxcbiAgICAgICAgJydcbiAgICAgICk7XG4gICAgICBib2FyZEVsLmFwcGVuZENoaWxkKGNlbGxFbCk7XG5cbiAgICAgIC8vIFNob3cgaWYgYSBjZWxsIGlzIGJlaW5nIGRyYWdnZWQgb3ZlciB3aGVuIGRlcGxveWluZyBzaGlwc1xuICAgICAgaWYgKGNlbGwuZHJhZ2dlZE92ZXIpIHtcbiAgICAgICAgY2VsbEVsLmNsYXNzTGlzdC5hZGQoJ2RyYWdnZWRPdmVyJyk7XG4gICAgICAgIGlmIChjZWxsLmhhc1NoaXApIHtcbiAgICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dlZE92ZXInKTtcbiAgICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnZHJhZ2dlZE92ZXItcmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRm9yIGh1bWFuIHBsYXllciwgc2hvdyB0aGUgc2hpcCBkZXBsb3ltZW50XG4gICAgICAvLyBBbHNvIHVzZWQgd2hlbiBjaGVhdGluZywgdG8gc2hvdyB0aGUgZW5lbXkgZGVwbG95bWVudFxuICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgaWYgKGNlbGwuaGFzU2hpcCkge1xuICAgICAgICAgIGNlbGxFbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgLy8gY2VsbEVsLmlubmVyVGV4dCA9IGJvYXJkW2ldW2pdLnNoaXAudHlwZVswXTtcbiAgICAgICAgICBjb25zdCBpbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBbJ2ltYWdlJ10pO1xuICAgICAgICAgIGltZy5zcmMgPSBJTUFHRVNbY2VsbC5zaGlwLnR5cGVdO1xuICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSAnNHZ3JztcbiAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSAzICogY2VsbC5zaGlwLnNpemUgKyAndncnO1xuICAgICAgICAgIGlmIChjZWxsLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgaW1nLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpYDtcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPVxuICAgICAgICAgICAgICAoY2VsbC5zaGlwLnNpemUgLyAyIC0gY2VsbC5zZWN0aW9uIC0gMC41KSAqIDMgKyAndncnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IC1jZWxsLnNlY3Rpb24gKiAzICsgJ3Z3JztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2VsbEVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2hvdyBpZiBhIGxvY2F0aW9uIGhhcyBiZWVuIGJvbWJlZCwgYW5kIGlmIGhpdCBvciBtaXNzXG4gICAgICBpZiAoY2VsbC5pc0JvbWJlZCkge1xuICAgICAgICBjZWxsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgY29uc3QgYm9tYkVsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydib21iJ10pO1xuICAgICAgICBjZWxsRWwuYXBwZW5kQ2hpbGQoYm9tYkVsKTtcbiAgICAgICAgaWYgKGNlbGwuaGFzU2hpcCkge1xuICAgICAgICAgIGJvbWJFbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib21iRWwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgdXBkYXRlRGlzcGxheSA9IChodW1hbiwgY29tcHV0ZXIsIGNoZWF0KSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wdXRlci1ib2FyZCcpO1xuICBjb25zdCBodW1hbkJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtYW4tYm9hcmQnKTtcblxuICAvLyBBbHdheXMgc2hvdyBodW1hbiBwbGF5ZXIgZmxlZXRcbiAgaHVtYW5Cb2FyZEVsLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBzaG93ID0gdHJ1ZTtcbiAgdXBkYXRlQm9hcmQoaHVtYW5Cb2FyZEVsLCBodW1hbi5nYW1lQm9hcmQuYm9hcmQsIHNob3cpO1xuXG4gIC8vIER1cmluZyBkZXBsb3ltZW50IHN0YWdlLCBubyBuZWVkIHRvIHJlZnJlc2ggY29tcHV0ZXIgYm9hcmRcbiAgaWYgKGNvbXB1dGVyKSB7XG4gICAgY29tcHV0ZXJCb2FyZEVsLmlubmVySFRNTCA9ICcnO1xuICAgIC8vIFNob3cgY29tcHV0ZXIgZGVwbG95bWVudCBpZiBjaGVhdGluZ1xuICAgIHVwZGF0ZUJvYXJkKGNvbXB1dGVyQm9hcmRFbCwgY29tcHV0ZXIuZ2FtZUJvYXJkLmJvYXJkLCBjaGVhdCk7XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZVR1cm4gPSAodHVybikgPT4ge1xuICBjb25zdCB0dXJuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybicpO1xuICB0dXJuRWwuaW5uZXJIVE1MID0gJyc7XG4gIHR1cm5FbC5pbm5lclRleHQgPSBgVHVybjogJHt0dXJufWA7XG59XG5cbmNvbnN0IHVwZGF0ZVNjb3JlcyA9IChodW1hbiwgY29tcHV0ZXIpID0+IHtcbiAgY29uc3QgY29tcHV0ZXJGbGVldENvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWZsZWV0LWNvbnRhaW5lcicpXG4gIGNvbXB1dGVyRmxlZXRDb250YWluZXJFbC5pbm5lckhUTUwgPSAnJ1xuICBjb25zdCBkaXYxID0gY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29tcHV0ZXJGbGVldENvbnRhaW5lckVsLmFwcGVuZENoaWxkKGRpdjEpXG4gIGNvbnN0IGNvbXB1dGVySGl0c0VsID0gY3JlYXRlRWxlbWVudCgnZGl2JyxbJ3RvdGFsLWhpdHMnXSlcbiAgY29tcHV0ZXJIaXRzRWwuaW5uZXJUZXh0ID0gYEhpdHM6ICR7Y29tcHV0ZXIuZ2FtZUJvYXJkLnRvdGFsSGl0c31gXG4gIGNvbXB1dGVyRmxlZXRDb250YWluZXJFbC5hcHBlbmRDaGlsZChjb21wdXRlckhpdHNFbClcbiAgY29uc3QgY29tcHV0ZXJNaXNzZXNFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsndG90YWwtbWlzc2VzJ10pXG4gIGNvbXB1dGVyTWlzc2VzRWwuaW5uZXJUZXh0ID0gYE1pc3NlczogJHtjb21wdXRlci5nYW1lQm9hcmQudG90YWxNaXNzZXN9YFxuICBjb21wdXRlckZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoY29tcHV0ZXJNaXNzZXNFbClcblxuICBjb25zdCBodW1hbkZsZWV0Q29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtYW4tZmxlZXQtY29udGFpbmVyJylcbiAgaHVtYW5GbGVldENvbnRhaW5lckVsLmlubmVySFRNTCA9ICcnXG4gIGNvbnN0IGRpdjIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKVxuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoZGl2MilcbiAgY29uc3QgaHVtYW5IaXRzRWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLFsndG90YWwtaGl0cyddKVxuICBodW1hbkhpdHNFbC5pbm5lclRleHQgPSBgSGl0czogJHtodW1hbi5nYW1lQm9hcmQudG90YWxIaXRzfWBcbiAgaHVtYW5GbGVldENvbnRhaW5lckVsLmFwcGVuZENoaWxkKGh1bWFuSGl0c0VsKVxuICBjb25zdCBodW1hbk1pc3Nlc0VsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWyd0b3RhbC1taXNzZXMnXSlcbiAgaHVtYW5NaXNzZXNFbC5pbm5lclRleHQgPSBgTWlzc2VzOiAke2h1bWFuLmdhbWVCb2FyZC50b3RhbE1pc3Nlc31gXG4gIGh1bWFuRmxlZXRDb250YWluZXJFbC5hcHBlbmRDaGlsZChodW1hbk1pc3Nlc0VsKSBcblxufVxuXG5jb25zdCBzdG9wUGxheWluZyA9ICgpID0+IHtcbiAgLy8gVG9kbzogVGhpcyBkb2VzIG5vdCBzZWVtIHRvIHdvcmtcbiAgY29uc3QgaHVtYW5Cb2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWFuLWJvYXJkJyk7XG4gIGh1bWFuQm9hcmRFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xufTtcblxuZXhwb3J0IHsgdXBkYXRlRGlzcGxheSwgdXBkYXRlVHVybiwgdXBkYXRlU2NvcmVzLCBzdG9wUGxheWluZyB9O1xuIiwiaW1wb3J0IHsgdXBkYXRlRGlzcGxheSwgdXBkYXRlVHVybiwgdXBkYXRlU2NvcmVzLCBzdG9wUGxheWluZyB9IGZyb20gJy4vZG9tJztcbmltcG9ydCBkZWxheSBmcm9tICcuL2RlbGF5JztcbmltcG9ydCB7IHBsYWNlRmxlZXQgfSBmcm9tICcuL2RlcGxveVJhbmRvbWx5JztcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSAoaHVtYW4sIGNvbXB1dGVyKSA9PiB7XG4gIGxldCBjaGVhdCA9IGZhbHNlO1xuICBsZXQgdHVybiA9IDA7XG5cbiAgLy8gUmFuZG9tbHkgcGxhY2VzIHNoaXBzIG9uIHRoZSBjb21wdXRlciBib2FyZFxuICBwbGFjZUZsZWV0KGNvbXB1dGVyLmdhbWVCb2FyZCk7XG4gIFxuICAvLyBJbml0aWFsaXplIGdhbWUgc2NyZWVuXG4gIHVwZGF0ZURpc3BsYXkoaHVtYW4sIGNvbXB1dGVyLCBjaGVhdCk7XG4gIHVwZGF0ZVNjb3JlcyhodW1hbiwgY29tcHV0ZXIpO1xuXG4gIC8vIFdhaXQgZm9yIGh1bWFuIHBsYXllciB0byBnbyBmaXJzdFxuICAvLyBIdW1hbiBwbGF5ZXIgcGxhY2VzIGJvbWJzIG9udG8gY29tcHV0ZXIncyBib2FyZFxuICBjb25zdCBjb21wdXRlckJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcHV0ZXItYm9hcmQnKTtcbiAgY29tcHV0ZXJCb2FyZEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAvLyBDaGVjayBpZiBhIGNlbGwgaXMgY2xpY2tlZCBvblxuICAgIC8vIENlbGxzIHRoYXQgaGF2ZSBiZWVuIGNsaWNrZWQgb24gaGF2ZSBgcG9pbnRlckV2ZW50cyA9IG5vbmVgXG4gICAgLy8gV2hlbiB0aG9zZSBjZWxscyBhcmUgY2xpY2ssIHRoZSBjbGFzcyBvZiB0aGUgdGFyZ2V0IGlzIHRoZSBib2FyZCwgbm90IGNlbGxcbiAgICBsZXQgcm93LCBjb2w7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAvLyBSZXRyaWV2ZSB0aGUgcm93IGFuZCBjb2wgZnJvbSB0aGUgZWxlbWVudCdzIGRhdGFzZXRcbiAgICAgIC8vIFRoZXNlIHdlcmUgc2V0IHdoZW4gdGhlc2UgY2VsbHMgYXJlIGNyZWF0ZWQgaW4gZG9tLmpzXG4gICAgICByb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvdztcbiAgICAgIGNvbCA9IGUudGFyZ2V0LmRhdGFzZXQuY29sO1xuICAgIH1cbiAgICAvLyBJZiBjaGVhdGluZywgdGhlIHRhcmdldCBvZiB0aGUgY2xpY2sgaXMgaW1hZ2UsIHdob3NlIHBhcmVudCBpcyBjZWxsXG4gICAgZWxzZSBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xuICAgICAgcm93ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnJvdztcbiAgICAgIGNvbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5jb2w7XG4gICAgfVxuXG4gICAgdHVybisrO1xuICAgIC8vIFVwZGF0ZSB0dXJucyBvbiBVSVxuICAgIHVwZGF0ZVR1cm4odHVybik7XG4gICAgXG4gICAgLy8gQXR0YWNrIHRoZSBjb21wdXRlcidzIGdhbWVCb2FyZFxuICAgIGNvbXB1dGVyLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICB1cGRhdGVEaXNwbGF5KGh1bWFuLCBjb21wdXRlciwgY2hlYXQpO1xuICAgIHVwZGF0ZVNjb3JlcyhodW1hbiwgY29tcHV0ZXIpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgdGhlIHdpbm5pbmcgbW92ZVxuICAgIGlmIChjb21wdXRlci5nYW1lQm9hcmQuaXNHYW1lT3ZlcigpKSB7XG4gICAgICBzdG9wUGxheWluZygpO1xuICAgICAgYXdhaXQgZGVsYXkoNTAwKTtcbiAgICAgIGFsZXJ0KCdHYW1lIE92ZXIsIHlvdSB3b24hJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgaXMgYSBiaXQgdW5mYWlyLiBJbiBjYXNlIG9mIGEgdGllIGdhbWUsIFxuICAgICAgLy8gdGhlIGh1bWFuIHdpbnMgYXMgaGUvc2hlIGlzIHRoZSBmaXJzdCB0byBtb3ZlLlxuICAgICAgLy8gQ29tcHV0ZXIgYm9tYnMgdGhlIGh1bWFuIHBsYXllciBib2FyZFxuICAgICAgaHVtYW4uZ2V0Qm9tYmVkKCk7XG4gICAgICB1cGRhdGVEaXNwbGF5KGh1bWFuLCBjb21wdXRlciwgY2hlYXQpO1xuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgdGhlIHdpbm5pbmcgbW92ZVxuICAgICAgaWYgKGh1bWFuLmdhbWVCb2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgc3RvcFBsYXlpbmcoKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoNTAwKTtcbiAgICAgICAgYWxlcnQoJ0dhbWUgT3ZlciwgeW91IGxvc3QhJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjaGVhdENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWF0Jyk7XG4gIGNoZWF0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNoZWF0ID0gY2hlYXRDaGVja2JveC5jaGVja2VkO1xuICAgIHVwZGF0ZURpc3BsYXkoaHVtYW4sIGNvbXB1dGVyLCBjaGVhdCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IENlbGwgfSBmcm9tICcuL2NyZWF0ZUNlbGwnO1xuaW1wb3J0IHsgQk9BUkRTSVpFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gJy4vY3JlYXRlU2hpcCc7XG5cbmV4cG9ydCBjb25zdCBHYW1lQm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZDtcbiAgbGV0IHRvdGFsSGl0cyA9IDA7XG4gIGxldCB0b3RhbE1pc3NlcyA9IDA7XG5cbiAgY29uc3QgaW5pdEJvYXJkID0gKCkgPT4ge1xuICAgIGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCT0FSRFNJWkU7IGkrKykge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQk9BUkRTSVpFOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV0ucHVzaChDZWxsKGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJpbnRCb2FyZCA9ICgpID0+IHtcbiAgICBsZXQgZGlzcGxheSA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQk9BUkRTSVpFOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQk9BUkRTSVpFOyBqKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdLmlzQm9tYmVkKSB7XG4gICAgICAgICAgZGlzcGxheSA9ICd4JztcbiAgICAgICAgfSBlbHNlIGRpc3BsYXkgKz0gJy4nO1xuXG4gICAgICAgIGlmIChib2FyZFtpXVtqXS5oYXNTaGlwKSB7XG4gICAgICAgICAgZGlzcGxheSArPSAnUyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGxheSArPSAnICc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRpc3BsYXkgKz0gJ1xcbic7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRpc3BsYXkpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh0eXBlLCByb3csIGNvbCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAodHlwZSk7XG4gICAgY29uc3Qgc2l6ZSA9IHNoaXAuc2l6ZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiBjb2wgKyBzaXplID4gQk9BUkRTSVpFKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiByb3cgKyBzaXplID4gQk9BUkRTSVpFKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbcm93ICsgaV1bY29sXS5oYXNTaGlwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBib2FyZFtyb3cgKyBpXVtjb2xdLnBsYWNlU2hpcChzaGlwLCBpLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2wgKyBpXS5oYXNTaGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbcm93XVtjb2wgKyBpXS5wbGFjZVNoaXAoc2hpcCwgaSwgZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBpc0dhbWVPdmVyKCkge1xuICAgIGNvbnN0IGNvdW50ID0gYm9hcmQucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhY2N1bXVsYXRvciArXG4gICAgICAgIGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGNlbGwpID0+IGNlbGwuaXNCb21iZWQgJiYgY2VsbC5oYXNTaGlwKS5sZW5ndGhcbiAgICAgICk7XG4gICAgfSwgMCk7XG4gICAgaWYgKGNvdW50ID49IDE3KSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHJvdywgY29sKSA9PiB7XG4gICAgaWYgKGJvYXJkW3Jvd11bY29sXS5pc0JvbWJlZCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYXJrIHRoZSBjZWxsIGlzQm9tYmVkID0gdHJ1ZVxuICAgICAgYm9hcmRbcm93XVtjb2xdLmF0dGFjaygpO1xuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBoaXRcbiAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0uaGFzU2hpcCkge1xuICAgICAgICBjb25zdCBzaGlwID0gYm9hcmRbcm93XVtjb2xdLnNoaXA7XG4gICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIHRvdGFsSGl0cysrO1xuICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICB9XG4gICAgICB0b3RhbE1pc3NlcysrO1xuICAgICAgcmV0dXJuICdtaXNzJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBnZXQgdG90YWxIaXRzKCkge1xuICAgICAgcmV0dXJuIHRvdGFsSGl0cztcbiAgICB9LFxuICAgIGdldCB0b3RhbE1pc3NlcygpIHtcbiAgICAgIHJldHVybiB0b3RhbE1pc3NlcztcbiAgICB9LFxuICAgIGluaXRCb2FyZCxcbiAgICBwcmludEJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzR2FtZU92ZXIsXG4gIH07XG59O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcnMnO1xuaW1wb3J0IHsgZGVwbG95RmxlZXQgfSBmcm9tICcuL2RlcGxveUZsZWV0JztcbmltcG9ydCB7IHVwZGF0ZURpc3BsYXkgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9nYW1lJztcblxuLy8gSW5pdGlhbGl6ZSBwbGF5ZXJzXG5jb25zdCBodW1hbiA9IFBsYXllcignVG9tJywgJ2h1bWFuJyk7XG5jb25zdCBjb21wdXRlciA9IFBsYXllcignSmVycnknLCAnY29tcHV0ZXInKTtcblxuLy8gSW5pdGlhbGl6ZSBkaXNwbGF5XG5odW1hbi5nYW1lQm9hcmQuaW5pdEJvYXJkKCk7XG5jb21wdXRlci5nYW1lQm9hcmQuaW5pdEJvYXJkKCk7XG51cGRhdGVEaXNwbGF5KGh1bWFuLCBjb21wdXRlcik7XG5cbi8vIERlcGxveSBmbGVldCB0aGVuIHN0YXJ0IHRoZSBnYW1lXG5kZXBsb3lGbGVldChodW1hbikudGhlbigoKSA9PiB7XG4gIGdhbWUoaHVtYW4sIGNvbXB1dGVyKTtcbn0pO1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSAnLi4vc3JjL2dhbWVCb2FyZCc7XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAobmFtZSwgdHlwZSkgPT4ge1xuICBjb25zdCBnYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgY29uc3QgcXVldWUgPSBbXTtcblxuICBmdW5jdGlvbiBnZXRSYW5kb21OdW0oKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJvbWJlZFJhbmRvbmx5KCkge1xuICAgIGxldCByb3csIGNvbCwgcmVzdWx0O1xuICAgIGRvIHtcbiAgICAgIHJvdyA9IGdldFJhbmRvbU51bSgpO1xuICAgICAgY29sID0gZ2V0UmFuZG9tTnVtKCk7XG4gICAgICByZXN1bHQgPSBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAnJyk7XG4gICAgcmV0dXJuIHsgcm93LCBjb2wsIHJlc3VsdCB9O1xuICB9XG5cbiAgY29uc3QgZ2V0Qm9tYmVkID0gKCkgPT4ge1xuICAgIGxldCBmZWVkYmFjaztcbiAgICBsZXQgcm93LCBjb2wsIHJlc3VsdDtcblxuICAgIC8vIElmIHRoZSBxdWV1ZSBpcyBlbXB0eSwgZ2V0IGJvbWJlZCBhdCBhIHJhbmRvbWUgcGxhY2VcbiAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgZmVlZGJhY2sgPSBnZXRCb21iZWRSYW5kb25seSgpO1xuICAgICAgcm93ID0gZmVlZGJhY2sucm93O1xuICAgICAgY29sID0gZmVlZGJhY2suY29sO1xuICAgICAgcmVzdWx0ID0gZmVlZGJhY2sucmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBHbyB0aHJvdWdoIHRoZSBxdWV1ZSB0byBnZXQgYm9tYmVkIGF0IHRoZSBmaXJzdCBjZWxsIHRoYXQncyBub3QgYWxyZWFkeSBib21iZWRcbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgcm93ID0gdGFyZ2V0LnJvdztcbiAgICAgICAgY29sID0gdGFyZ2V0LmNvbDtcbiAgICAgICAgcmVzdWx0ID0gZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgICAgfSB3aGlsZSAocmVzdWx0ID09PSAnJyk7XG4gICAgfVxuXG4gICAgLy8gSWYgaGl0LCBwdXNoIHRoaXMgY2VsbCdzIDQgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgbmVpZ2hib3VycyBcbiAgICAvLyB0aGF0IGFyZSBub3QgYWxyZWFkeSBib21iZWQgaW50byB0aGUgcXVldWVcbiAgICBpZiAocmVzdWx0ID09PSAnaGl0Jykge1xuICAgICAgZm9yIChsZXQgaSA9IC0xOyBpIDw9IDE7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gLTE7IGogPD0gMTsgaisrKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaSAhPT0gaiAmJiAvLyByZW1vdmUgZGlhZ29uYWxcbiAgICAgICAgICAgIGkgKyBqICE9PSAwICYmIC8vIHJlbW92ZSBkaWFnb25hbCBcbiAgICAgICAgICAgIHJvdyArIGkgPj0gMCAmJiAvLyBtYWtlIHN1cmUgY2VsbCBpcyB3aXRoaW4gdGhlIGdhbWVib2FyZFxuICAgICAgICAgICAgcm93ICsgaSA8IDEwICYmXG4gICAgICAgICAgICBjb2wgKyBqID49IDAgJiZcbiAgICAgICAgICAgIGNvbCArIGogPCAxMCAmJlxuICAgICAgICAgICAgIWdhbWVCb2FyZC5ib2FyZFtyb3cgKyBpXVtjb2wgKyBqXS5pc0JvbWJlZCAvLyBub3QgYm9tYmVkXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGdhbWVCb2FyZC5ib2FyZFtyb3cgKyBpXVtjb2wgKyBqXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBcbiAgICByZXR1cm47XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgbmFtZSA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIHNldCB0eXBlKHZhbHVlKSB7XG4gICAgICB0eXBlID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgdHlwZSgpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0sXG4gICAgZ2V0IGdhbWVCb2FyZCgpIHtcbiAgICAgIHJldHVybiBnYW1lQm9hcmQ7XG4gICAgfSxcbiAgICBnZXRCb21iZWQsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9