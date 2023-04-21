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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* Victor Verion */\n  --darker-color: #ff0000;\n  --dark-color: #11cbd7;\n  --light-color: #c6f1e7;\n  --lighter-color: #f0fff3;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  border: 1px solid red;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 100px auto 20px;\n}\n\nh1 {\n  /* color: red; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmain {\n  border: 1px solid red;\n  display: grid;\n  grid-template-columns: 17fr 33fr 33fr 17fr;\n}\n\n.computer-fleet {\n  border: 1px solid red;\n}\n\n.computer-board-container, .human-board-container {\n  border: 1px solid red;\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  position: relative;\n}\n\n.territory {\n  position: absolute;\n  top: 1rem;\n  font: 1.5em sans-serif;\n  font-weight: bold;\n}\n\n.enemy {\n  color: red;\n}\n\n.my {\n  color: green;\n}\n\n.cheat-container {\n  position: absolute;\n  bottom: 1rem;\n  display: flex;\n  gap: 5px;\n}\n\n.human-fleet {\n  border: 1px solid red;\n}\n\n.board {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n}\n\n.cell {\n  position: relative;\n  background-color: blue;\n  width: 3vw;\n  height: 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  /* border: 1px blue solid; */\n  overflow: hidden;\n}\n\n.image {\n  position: absolute;\n}\n\n.show {\n  opacity: 50;\n  background-color: lightblue;\n}\n\n.bomb {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  z-index: 100;\n}\n\n.missed {\n  background-color: white;\n}\n\n.hit {\n  background-color: red;\n}\n\n.draggedOver {\n  background-color: green;\n}\n\n.human-fleet-container {\n  display: grid;\n  grid-template-rows: 1fr 4fr 1fr 1fr;\n}\n\n.deploy-heading, .ship-container,  .rotate-container, .rotate-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.deploy-heading {\n  font: 1em sans-serif;\n  font-weight: bold;\n}\n\n.ship-image {\n  cursor: pointer;\n}\n\n.rotate-btn {\n  width: 50%;\n  height: 50%;\n  cursor: pointer;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Toggle switch to show/hide enemy ships */\n\n\n/* The size of the toggle switch */\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 20px;\n}\n\n/* Hide the default checkbox */\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider that the circle can move */\n/* same size as the toggle switch */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n/* The circle that moves in the slider */\n/* Before it is checked, the indicator (square) is on the left */\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\n/* Change toggle switch background color when it is clicked */\n/* Thethe + is used to select the .slider immidiately follow the input:checked */\n/* The styling applies to the .slider */\ninput:checked + .slider {\n  background-color: var(--darker-color);\n}\n\n/* When checked, move indicator to the right by 16px */\ninput:checked + .slider:before {\n  transform: translateX(16px);\n}\n\n/* Make slider have round corners */\n.slider.round {\n  border-radius: 10px;\n}\n\n/* Make the indicator round */\n.slider.round:before {\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;EACrB,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,0CAA0C;AAC5C;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,sCAAsC;EACtC,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,UAAU;EACV,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,2BAA2B;AAC7B;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,2CAA2C;;;AAG3C,kCAAkC;AAClC;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA,8BAA8B;AAC9B;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA,wCAAwC;AACxC,mCAAmC;AACnC;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA,wCAAwC;AACxC,gEAAgE;AAChE;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA,6DAA6D;AAC7D,gFAAgF;AAChF,uCAAuC;AACvC;EACE,qCAAqC;AACvC;;AAEA,sDAAsD;AACtD;EACE,2BAA2B;AAC7B;;AAEA,mCAAmC;AACnC;EACE,mBAAmB;AACrB;;AAEA,6BAA6B;AAC7B;EACE,kBAAkB;AACpB","sourcesContent":[":root {\n  /* Victor Verion */\n  --darker-color: #ff0000;\n  --dark-color: #11cbd7;\n  --light-color: #c6f1e7;\n  --lighter-color: #f0fff3;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  border: 1px solid red;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 100px auto 20px;\n}\n\nh1 {\n  /* color: red; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmain {\n  border: 1px solid red;\n  display: grid;\n  grid-template-columns: 17fr 33fr 33fr 17fr;\n}\n\n.computer-fleet {\n  border: 1px solid red;\n}\n\n.computer-board-container, .human-board-container {\n  border: 1px solid red;\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  position: relative;\n}\n\n.territory {\n  position: absolute;\n  top: 1rem;\n  font: 1.5em sans-serif;\n  font-weight: bold;\n}\n\n.enemy {\n  color: red;\n}\n\n.my {\n  color: green;\n}\n\n.cheat-container {\n  position: absolute;\n  bottom: 1rem;\n  display: flex;\n  gap: 5px;\n}\n\n.human-fleet {\n  border: 1px solid red;\n}\n\n.board {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n}\n\n.cell {\n  position: relative;\n  background-color: blue;\n  width: 3vw;\n  height: 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  /* border: 1px blue solid; */\n  overflow: hidden;\n}\n\n.image {\n  position: absolute;\n}\n\n.show {\n  opacity: 50;\n  background-color: lightblue;\n}\n\n.bomb {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  z-index: 100;\n}\n\n.missed {\n  background-color: white;\n}\n\n.hit {\n  background-color: red;\n}\n\n.draggedOver {\n  background-color: green;\n}\n\n.human-fleet-container {\n  display: grid;\n  grid-template-rows: 1fr 4fr 1fr 1fr;\n}\n\n.deploy-heading, .ship-container,  .rotate-container, .rotate-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.deploy-heading {\n  font: 1em sans-serif;\n  font-weight: bold;\n}\n\n.ship-image {\n  cursor: pointer;\n}\n\n.rotate-btn {\n  width: 50%;\n  height: 50%;\n  cursor: pointer;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Toggle switch to show/hide enemy ships */\n\n\n/* The size of the toggle switch */\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 20px;\n}\n\n/* Hide the default checkbox */\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider that the circle can move */\n/* same size as the toggle switch */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n/* The circle that moves in the slider */\n/* Before it is checked, the indicator (square) is on the left */\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\n/* Change toggle switch background color when it is clicked */\n/* Thethe + is used to select the .slider immidiately follow the input:checked */\n/* The styling applies to the .slider */\ninput:checked + .slider {\n  background-color: var(--darker-color);\n}\n\n/* When checked, move indicator to the right by 16px */\ninput:checked + .slider:before {\n  transform: translateX(16px);\n}\n\n/* Make slider have round corners */\n.slider.round {\n  border-radius: 10px;\n}\n\n/* Make the indicator round */\n.slider.round:before {\n  border-radius: 50%;\n}"],"sourceRoot":""}]);
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




const humanFleetContainerEl = document.querySelector('.human-fleet-container');
const humanBoardEl = document.querySelector('#human-board');

const deployShip = (ship, human) => {
  // Set up deploy ship side bar
  humanFleetContainerEl.innerHTML = '';
  const headingEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
    'div',
    ['deploy-heading'],
    {},
    `Deploy your ${ship}`
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
  const rotateBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', ['rotate-btn'], {}, 'Rotate');
  rotateContainer.appendChild(rotateBtn);
  humanFleetContainerEl.appendChild(rotateContainer);

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
      shipImage.remove(); 

      const direction = rotated ? 'vertical' : 'horizontal';
      human.gameBoard.placeShip(ship, startRow, startCol, direction);
      (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)(human);
      resolve();
    };

    shipImage.addEventListener('dragstart', onDragStart);
    humanBoardEl.addEventListener('dragover', onDragOver);
    shipImage.addEventListener('dragend', onDragEnd);
  });
};

const deployFleet = (human) => {
  return new Promise((resolve) => {
    deployShip('carrier', human).then(() => {
      deployShip('battleship', human).then(() => {
        deployShip('cruiser', human).then(() => {
          deployShip('submarine', human).then(() => {
            deployShip('destroyer', human).then(() => {
              humanFleetContainerEl.innerHTML = ''
              resolve();
            });
          });
        });
      });
    });
  });
};


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stopPlaying": () => (/* binding */ stopPlaying),
/* harmony export */   "updateDisplay": () => (/* binding */ updateDisplay)
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
          console.log(i, j, 'hit!');
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

const game = (human, computer) => {
  let cheat = false;

  // Randomly places ships on the human board
  // placeFleet(human.gameBoard);
  // Randomly places ships on the computer board
  placeFleet(computer.gameBoard);

  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)(human, computer, cheat);

  // Wait for human player to go first
  // Human player places bombs onto computer's board
  const computerBoardEl = document.querySelector('#computer-board');
  computerBoardEl.addEventListener('click', async (e) => {
    // Check if a cell is clicked on
    // Cells that have been clicked on have `pointerEvents = none`
    // When those cells are click, the class of the target is the board, not cell
    if (e.target.classList.contains('cell')) {
      // Retrieve the row and col from the element's dataset
      // These were set when these cells are created in dom.js
      const { row } = e.target.dataset;
      const { col } = e.target.dataset;

      // Attack the computer's gameBoard
      computer.gameBoard.receiveAttack(row, col);
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)(human, computer, cheat);
      // Check if it is the winning move
      if (computer.gameBoard.isGameOver()) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.stopPlaying)();
        await (0,_delay__WEBPACK_IMPORTED_MODULE_1__["default"])(500);
        alert('Game Over, you won!');
      }
      
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
        return 'hit';
      }
      return 'miss';
    }
  };

  return {
    get board() {
      return board;
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

// Todo: when cheating, can not click on the enemy ships

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R3FCO0FBQ2M7QUFDUztBQUNOO0FBQ1I7O0FBRTlCO0FBQ0EsY0FBYyxnREFBTTtBQUNwQixpQkFBaUIsZ0RBQU07O0FBRXZCO0FBQ0E7QUFDQTtBQUNBLG1EQUFhOztBQUViO0FBQ0EseURBQVc7QUFDWCxFQUFFLDJDQUFJO0FBQ04sQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FDcEI2Qzs7QUFFdEM7QUFDUCxvQkFBb0IseURBQVM7QUFDN0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NyZWF0ZUNlbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3JlYXRlU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RlbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGVwbG95RmxlZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLyogVmljdG9yIFZlcmlvbiAqL1xcbiAgLS1kYXJrZXItY29sb3I6ICNmZjAwMDA7XFxuICAtLWRhcmstY29sb3I6ICMxMWNiZDc7XFxuICAtLWxpZ2h0LWNvbG9yOiAjYzZmMWU3O1xcbiAgLS1saWdodGVyLWNvbG9yOiAjZjBmZmYzO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvIDIwcHg7XFxufVxcblxcbmgxIHtcXG4gIC8qIGNvbG9yOiByZWQ7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE3ZnIgMzNmciAzM2ZyIDE3ZnI7XFxufVxcblxcbi5jb21wdXRlci1mbGVldCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5jb21wdXRlci1ib2FyZC1jb250YWluZXIsIC5odW1hbi1ib2FyZC1jb250YWluZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZXJyaXRvcnkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgZm9udDogMS41ZW0gc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZW5lbXkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm15IHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNoZWF0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5odW1hbi1mbGVldCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMXB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgd2lkdGg6IDN2dztcXG4gIGhlaWdodDogM3Z3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICAvKiBib3JkZXI6IDFweCBibHVlIHNvbGlkOyAqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmltYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnNob3cge1xcbiAgb3BhY2l0eTogNTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5ib21iIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5kcmFnZ2VkT3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmh1bWFuLWZsZWV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDFmciAxZnI7XFxufVxcblxcbi5kZXBsb3ktaGVhZGluZywgLnNoaXAtY29udGFpbmVyLCAgLnJvdGF0ZS1jb250YWluZXIsIC5yb3RhdGUtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZXBsb3ktaGVhZGluZyB7XFxuICBmb250OiAxZW0gc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc2hpcC1pbWFnZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yb3RhdGUtYnRuIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFRvZ2dsZSBzd2l0Y2ggdG8gc2hvdy9oaWRlIGVuZW15IHNoaXBzICovXFxuXFxuXFxuLyogVGhlIHNpemUgb2YgdGhlIHRvZ2dsZSBzd2l0Y2ggKi9cXG4udG9nZ2xlLXN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLyogSGlkZSB0aGUgZGVmYXVsdCBjaGVja2JveCAqL1xcbi50b2dnbGUtc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyogVGhlIHNsaWRlciB0aGF0IHRoZSBjaXJjbGUgY2FuIG1vdmUgKi9cXG4vKiBzYW1lIHNpemUgYXMgdGhlIHRvZ2dsZSBzd2l0Y2ggKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4vKiBUaGUgY2lyY2xlIHRoYXQgbW92ZXMgaW4gdGhlIHNsaWRlciAqL1xcbi8qIEJlZm9yZSBpdCBpcyBjaGVja2VkLCB0aGUgaW5kaWNhdG9yIChzcXVhcmUpIGlzIG9uIHRoZSBsZWZ0ICovXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDEycHg7XFxuICB3aWR0aDogMTJweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4vKiBDaGFuZ2UgdG9nZ2xlIHN3aXRjaCBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gaXQgaXMgY2xpY2tlZCAqL1xcbi8qIFRoZXRoZSArIGlzIHVzZWQgdG8gc2VsZWN0IHRoZSAuc2xpZGVyIGltbWlkaWF0ZWx5IGZvbGxvdyB0aGUgaW5wdXQ6Y2hlY2tlZCAqL1xcbi8qIFRoZSBzdHlsaW5nIGFwcGxpZXMgdG8gdGhlIC5zbGlkZXIgKi9cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItY29sb3IpO1xcbn1cXG5cXG4vKiBXaGVuIGNoZWNrZWQsIG1vdmUgaW5kaWNhdG9yIHRvIHRoZSByaWdodCBieSAxNnB4ICovXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcXG59XFxuXFxuLyogTWFrZSBzbGlkZXIgaGF2ZSByb3VuZCBjb3JuZXJzICovXFxuLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBNYWtlIHRoZSBpbmRpY2F0b3Igcm91bmQgKi9cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0s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ICAtLWRhcmtlci1jb2xvcjogI2ZmMDAwMDtcXG4gIC0tZGFyay1jb2xvcjogIzExY2JkNztcXG4gIC0tbGlnaHQtY29sb3I6ICNjNmYxZTc7XFxuICAtLWxpZ2h0ZXItY29sb3I6ICNmMGZmZjM7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG8gMjBweDtcXG59XFxuXFxuaDEge1xcbiAgLyogY29sb3I6IHJlZDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTdmciAzM2ZyIDMzZnIgMTdmcjtcXG59XFxuXFxuLmNvbXB1dGVyLWZsZWV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmNvbXB1dGVyLWJvYXJkLWNvbnRhaW5lciwgLmh1bWFuLWJvYXJkLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRlcnJpdG9yeSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFyZW07XFxuICBmb250OiAxLjVlbSBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5lbmVteSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubXkge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY2hlYXQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmh1bWFuLWZsZWV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAxcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICB3aWR0aDogM3Z3O1xcbiAgaGVpZ2h0OiAzdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gIC8qIGJvcmRlcjogMXB4IGJsdWUgc29saWQ7ICovXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaW1hZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2hvdyB7XFxuICBvcGFjaXR5OiA1MDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmJvbWIge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmRyYWdnZWRPdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaHVtYW4tZmxlZXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMWZyIDFmcjtcXG59XFxuXFxuLmRlcGxveS1oZWFkaW5nLCAuc2hpcC1jb250YWluZXIsICAucm90YXRlLWNvbnRhaW5lciwgLnJvdGF0ZS1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlcGxveS1oZWFkaW5nIHtcXG4gIGZvbnQ6IDFlbSBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zaGlwLWltYWdlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZS1idG4ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogVG9nZ2xlIHN3aXRjaCB0byBzaG93L2hpZGUgZW5lbXkgc2hpcHMgKi9cXG5cXG5cXG4vKiBUaGUgc2l6ZSBvZiB0aGUgdG9nZ2xlIHN3aXRjaCAqL1xcbi50b2dnbGUtc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKiBIaWRlIHRoZSBkZWZhdWx0IGNoZWNrYm94ICovXFxuLnRvZ2dsZS1zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyIHRoYXQgdGhlIGNpcmNsZSBjYW4gbW92ZSAqL1xcbi8qIHNhbWUgc2l6ZSBhcyB0aGUgdG9nZ2xlIHN3aXRjaCAqL1xcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi8qIFRoZSBjaXJjbGUgdGhhdCBtb3ZlcyBpbiB0aGUgc2xpZGVyICovXFxuLyogQmVmb3JlIGl0IGlzIGNoZWNrZWQsIHRoZSBpbmRpY2F0b3IgKHNxdWFyZSkgaXMgb24gdGhlIGxlZnQgKi9cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi8qIENoYW5nZSB0b2dnbGUgc3dpdGNoIGJhY2tncm91bmQgY29sb3Igd2hlbiBpdCBpcyBjbGlja2VkICovXFxuLyogVGhldGhlICsgaXMgdXNlZCB0byBzZWxlY3QgdGhlIC5zbGlkZXIgaW1taWRpYXRlbHkgZm9sbG93IHRoZSBpbnB1dDpjaGVja2VkICovXFxuLyogVGhlIHN0eWxpbmcgYXBwbGllcyB0byB0aGUgLnNsaWRlciAqL1xcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1jb2xvcik7XFxufVxcblxcbi8qIFdoZW4gY2hlY2tlZCwgbW92ZSBpbmRpY2F0b3IgdG8gdGhlIHJpZ2h0IGJ5IDE2cHggKi9cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xcbn1cXG5cXG4vKiBNYWtlIHNsaWRlciBoYXZlIHJvdW5kIGNvcm5lcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIE1ha2UgdGhlIGluZGljYXRvciByb3VuZCAqL1xcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjYXJyaWVySW1hZ2UgZnJvbSAnLi9pbWFnZXMvY2Fycmllci5zdmcnO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWFnZSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwLnN2Zyc7XG5pbXBvcnQgY3J1aXNlckltYWdlIGZyb20gJy4vaW1hZ2VzL2NydWlzZXIuc3ZnJztcbmltcG9ydCBzdWJtYXJpbmVJbWFnZSBmcm9tICcuL2ltYWdlcy9zdWJtYXJpbmUuc3ZnJztcbmltcG9ydCBkZXN0cm95ZXJJbWFnZSBmcm9tICcuL2ltYWdlcy9kZXN0cm95ZXIuc3ZnJztcblxuY29uc3QgQk9BUkRTSVpFID0gMTA7XG5cbmNvbnN0IEZMRUVUID0ge1xuICBjYXJyaWVyOiB7IHNpemU6IDUgfSxcbiAgYmF0dGxlc2hpcDogeyBzaXplOiA0IH0sXG4gIGNydWlzZXI6IHsgc2l6ZTogMyB9LFxuICBzdWJtYXJpbmU6IHsgc2l6ZTogMyB9LFxuICBkZXN0cm95ZXI6IHsgc2l6ZTogMiB9LFxufTtcblxuY29uc3QgSU1BR0VTID0ge1xuICBjYXJyaWVyOiBjYXJyaWVySW1hZ2UsXG4gIGJhdHRsZXNoaXA6IGJhdHRsZXNoaXBJbWFnZSxcbiAgY3J1aXNlcjogY3J1aXNlckltYWdlLFxuICBzdWJtYXJpbmU6IHN1Ym1hcmluZUltYWdlLFxuICBkZXN0cm95ZXI6IGRlc3Ryb3llckltYWdlLFxufTtcblxuXG5leHBvcnQge0JPQVJEU0laRSwgRkxFRVQsIElNQUdFU31cbiIsImV4cG9ydCBjb25zdCBDZWxsID0gKHJvdywgY29sKSA9PiB7XG4gIGxldCBzaGlwID0gbnVsbDtcbiAgbGV0IGhhc1NoaXAgPSBmYWxzZTtcbiAgbGV0IGlzQm9tYmVkID0gZmFsc2U7XG4gIGxldCBzZWN0aW9uO1xuICBsZXQgZGlyZWN0aW9uO1xuICBsZXQgZHJhZ2dlZE92ZXIgPSBmYWxzZTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAob2JqLCBpbmRleCwgZGlyKSA9PiB7XG4gICAgaGFzU2hpcCA9IHRydWU7XG4gICAgc2hpcCA9IG9iajtcbiAgICBzZWN0aW9uID0gaW5kZXg7XG4gICAgZGlyZWN0aW9uID0gZGlyO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFjayA9ICgpID0+IHtcbiAgICBpc0JvbWJlZCA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByb3csXG4gICAgY29sLFxuICAgIGdldCBzZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfSxcbiAgICBnZXQgZGlyZWN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgfSxcbiAgICBnZXQgc2hpcCgpIHtcbiAgICAgIHJldHVybiBzaGlwO1xuICAgIH0sXG4gICAgZ2V0IGhhc1NoaXAoKSB7XG4gICAgICByZXR1cm4gaGFzU2hpcDtcbiAgICB9LFxuICAgIGdldCBpc0JvbWJlZCgpIHtcbiAgICAgIHJldHVybiBpc0JvbWJlZDtcbiAgICB9LFxuICAgIHNldCBkcmFnZ2VkT3ZlciAodmFsdWUpIHtcbiAgICAgIGRyYWdnZWRPdmVyID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgZHJhZ2dlZE92ZXIoKSB7XG4gICAgICByZXR1cm4gZHJhZ2dlZE92ZXI7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAsXG4gICAgYXR0YWNrLFxuICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NBcnJheSwgYXR0ck9iaiwgdGV4dCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYgKGNsYXNzQXJyYXkpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0FycmF5KTtcblxuICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0ck9iaikge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJPYmpbYXR0cl0pO1xuICB9XG5cbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJjb25zdCBGTEVFVCA9IHtcbiAgY2FycmllcjogeyBzaXplOiA1IH0sXG4gIGJhdHRsZXNoaXA6IHsgc2l6ZTogNCB9LFxuICBjcnVpc2VyOiB7IHNpemU6IDMgfSxcbiAgc3VibWFyaW5lOiB7IHNpemU6IDMgfSxcbiAgZGVzdHJveWVyOiB7IHNpemU6IDIgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTaGlwID0gKHR5cGUpID0+IHtcbiAgY29uc3Qgc2l6ZSA9IEZMRUVUW3R5cGVdLnNpemU7XG4gIGxldCBoaXRzID0gMDtcbiAgbGV0IGlzU3VuayA9IGZhbHNlO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzKys7XG4gICAgaWYgKGhpdHMgPj0gc2l6ZSkgaXNTdW5rID0gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHR5cGUsXG4gICAgc2l6ZTogc2l6ZSxcbiAgICBnZXQgaGl0cygpIHtcbiAgICAgIHJldHVybiBoaXRzO1xuICAgIH0sXG4gICAgZ2V0IGlzU3VuaygpIHtcbiAgICAgIHJldHVybiBpc1N1bms7XG4gICAgfSxcbiAgICBoaXQsXG4gIH07XG59O1xuIiwiLy8gR2xvYmFsIGZ1bmN0aW9uXG5mdW5jdGlvbiBkZWxheSh0aW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGF5O1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCB7IEJPQVJEU0laRSwgRkxFRVQsIElNQUdFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IHVwZGF0ZURpc3BsYXkgfSBmcm9tICcuL2RvbSc7XG5cbmNvbnN0IGh1bWFuRmxlZXRDb250YWluZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1hbi1mbGVldC1jb250YWluZXInKTtcbmNvbnN0IGh1bWFuQm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1hbi1ib2FyZCcpO1xuXG5jb25zdCBkZXBsb3lTaGlwID0gKHNoaXAsIGh1bWFuKSA9PiB7XG4gIC8vIFNldCB1cCBkZXBsb3kgc2hpcCBzaWRlIGJhclxuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGhlYWRpbmdFbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgWydkZXBsb3ktaGVhZGluZyddLFxuICAgIHt9LFxuICAgIGBEZXBsb3kgeW91ciAke3NoaXB9YFxuICApO1xuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoaGVhZGluZ0VsKTtcbiAgY29uc3Qgc2hpcENvbnRhaW5lckVsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydzaGlwLWNvbnRhaW5lciddKTtcbiAgY29uc3Qgc2hpcEltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJywgWydzaGlwLWltYWdlJ10sIHsgZHJhZ2dhYmxlOiAndHJ1ZScgfSk7XG4gIHNoaXBJbWFnZS5zcmMgPSBJTUFHRVNbc2hpcF07XG4gIC8vIEVhY2ggY2VsbCBpbiB0aGUgZ2FtZSBib2FyZCBpcyAzdndcbiAgc2hpcEltYWdlLnN0eWxlLndpZHRoID0gRkxFRVRbc2hpcF0uc2l6ZSAqIDMgKyAndncnO1xuICBsZXQgcm90YXRlZCA9IGZhbHNlO1xuICBzaGlwQ29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoc2hpcEltYWdlKTtcbiAgaHVtYW5GbGVldENvbnRhaW5lckVsLmFwcGVuZENoaWxkKHNoaXBDb250YWluZXJFbCk7XG4gIGNvbnN0IHJvdGF0ZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsncm90YXRlLWNvbnRhaW5lciddKTtcbiAgY29uc3Qgcm90YXRlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgWydyb3RhdGUtYnRuJ10sIHt9LCAnUm90YXRlJyk7XG4gIHJvdGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGVCdG4pO1xuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQocm90YXRlQ29udGFpbmVyKTtcblxuICAvLyBCdXR0b24gdG8gdG9nZ2xlIHJvdGF0aW5nIG9mIHRoZSBzaGlwXG4gIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoIXJvdGF0ZWQpIHtcbiAgICAgIHNoaXBJbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBJbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICB9XG4gICAgcm90YXRlZCA9ICFyb3RhdGVkO1xuICB9KTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBsZXQgcm93T2Zmc2V0ID0gMDtcbiAgICBsZXQgY29sT2Zmc2V0ID0gMDtcbiAgICBsZXQgc3RhcnRSb3csIHN0YXJ0Q29sO1xuXG4gICAgY29uc3Qgb25EcmFnU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghcm90YXRlZCkge1xuICAgICAgICAvLyBUaGUgc2hpcCBpcyBob3Jpem9udGFsXG4gICAgICAgIHNoaXBJbWFnZS5zdHlsZS53aWR0aCA9IEZMRUVUW3NoaXBdLnNpemUgKiAzICsgJ3Z3JztcbiAgICAgICAgLy8gc2hpcEltYWdlLnN0eWxlLmhlaWdodCA9ICczdncnXG4gICAgICAgIC8vIEdldCB0aGUgbG9jYXRpb24gb2YgdGhlIG1vdXNlIHJlbGF0aXZlIHRvIHRoZSBpbWFnZVxuICAgICAgICBjb25zdCByZWN0ID0gc2hpcEltYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB4T2Zmc2V0ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgY29sT2Zmc2V0ID0gTWF0aC5mbG9vcih4T2Zmc2V0IC8gKCgzIC8gMTAwKSAqIHdpbmRvdy5pbm5lcldpZHRoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUb2RvOiBzaGlwSW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknXG4gICAgICAgIC8vIEhvdyB0byBtYWtlIHRoZSBkcmFnZ2VkIHNoaXAgaW1hZ2Ugcm90YXRlIGJ5IDkwIGRlZyB0b28/XG4gICAgICAgIHNoaXBJbWFnZS5zdHlsZS5oZWlnaHQgPSBGTEVFVFtzaGlwXS5zaXplICogMyArICd2dyc7XG4gICAgICAgIC8vIHNoaXBJbWFnZS5zdHlsZS5oZWlnaHQgPSAnM3Z3J1xuICAgICAgICAvLyBHZXQgdGhlIGxvY2F0aW9uIG9mIHRoZSBtb3VzZSByZWxhdGl2ZSB0byB0aGUgaW1hZ2VcbiAgICAgICAgY29uc3QgcmVjdCA9IHNoaXBJbWFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeU9mZnNldCA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgcm93T2Zmc2V0ID0gTWF0aC5mbG9vcih5T2Zmc2V0IC8gKCgzIC8gMTAwKSAqIHdpbmRvdy5pbm5lcldpZHRoKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uRHJhZ092ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIC8vIEdldCB0aGUgbG9jYXRpb24gYW5kIHNpemUgb2YgdGhlIGJvYXJkXG4gICAgICBjb25zdCByZWN0ID0gaHVtYW5Cb2FyZEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgLy8gVGhlIEdyaWQgaXMgMTAgeCAxMFxuICAgICAgY29uc3QgY2VsbFdpZHRoID0gcmVjdC53aWR0aCAvIEJPQVJEU0laRTtcbiAgICAgIGNvbnN0IGNlbGxIZWlnaHQgPSByZWN0LndpZHRoIC8gQk9BUkRTSVpFO1xuICAgICAgY29uc3QgY29sID0gTWF0aC5mbG9vcigoZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCkgLyBjZWxsV2lkdGgpO1xuICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcigoZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wKSAvIGNlbGxIZWlnaHQpO1xuXG4gICAgICBpZiAoIXJvdGF0ZWQpIHtcbiAgICAgICAgc3RhcnRDb2wgPSBjb2wgLSBjb2xPZmZzZXQ7XG4gICAgICAgIHN0YXJ0Um93ID0gcm93IDwgMCA/IDAgOiByb3c7XG4gICAgICAgIGlmIChzdGFydENvbCA8IDApIHN0YXJ0Q29sID0gMDtcbiAgICAgICAgaWYgKHN0YXJ0Q29sID4gOSAtIEZMRUVUW3NoaXBdLnNpemUpXG4gICAgICAgICAgc3RhcnRDb2wgPSA5IC0gRkxFRVRbc2hpcF0uc2l6ZSArIDE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRkxFRVRbc2hpcF0uc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKHN0YXJ0Q29sICsgaSA8IDEwKSB7XG4gICAgICAgICAgICBodW1hbi5nYW1lQm9hcmQuYm9hcmRbc3RhcnRSb3ddW3N0YXJ0Q29sICsgaV0uZHJhZ2dlZE92ZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVEaXNwbGF5KGh1bWFuKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBGTEVFVFtzaGlwXS5zaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAoc3RhcnRDb2wgKyBpIDwgMTApIHtcbiAgICAgICAgICAgIGh1bWFuLmdhbWVCb2FyZC5ib2FyZFtzdGFydFJvd11bc3RhcnRDb2wgKyBpXS5kcmFnZ2VkT3ZlciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRDb2wgPSBjb2wgPCAwID8gMCA6IGNvbDtcbiAgICAgICAgc3RhcnRSb3cgPSByb3cgLSByb3dPZmZzZXQgPCAwID8gMCA6IHJvdyAtIHJvd09mZnNldDtcbiAgICAgICAgaWYgKHN0YXJ0Um93IDwgMCkgc3RhcnRSb3cgPSAwO1xuICAgICAgICBpZiAoc3RhcnRSb3cgPiA5IC0gRkxFRVRbc2hpcF0uc2l6ZSlcbiAgICAgICAgICBzdGFydFJvdyA9IDkgLSBGTEVFVFtzaGlwXS5zaXplICsgMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBGTEVFVFtzaGlwXS5zaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAoc3RhcnRSb3cgKyBpIDwgMTApIHtcbiAgICAgICAgICAgIGh1bWFuLmdhbWVCb2FyZC5ib2FyZFtzdGFydFJvdyArIGldW3N0YXJ0Q29sXS5kcmFnZ2VkT3ZlciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoaHVtYW4pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEZMRUVUW3NoaXBdLnNpemU7IGkrKykge1xuICAgICAgICAgIGlmIChzdGFydFJvdyArIGkgPCAxMCkge1xuICAgICAgICAgICAgaHVtYW4uZ2FtZUJvYXJkLmJvYXJkW3N0YXJ0Um93ICsgaV1bc3RhcnRDb2xdLmRyYWdnZWRPdmVyID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uRHJhZ0VuZCA9ICgpID0+IHtcbiAgICAgIC8vIFRvZG86IFRoaXMgZG9lcyBub3Qgc2VlbSB0byB3b3JrXG4gICAgICAvLyBUaGUgaW50ZW50aW9uIGlzIHNvIHRoYXQgdGhlIHNoaXAgZG9lcyBub3Qgem9vbSBiYWNrIG9uY2UgaXQgaXMgcGxhY2VkXG4gICAgICBzaGlwSW1hZ2UucmVtb3ZlKCk7IFxuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSByb3RhdGVkID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgIGh1bWFuLmdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcCwgc3RhcnRSb3csIHN0YXJ0Q29sLCBkaXJlY3Rpb24pO1xuICAgICAgdXBkYXRlRGlzcGxheShodW1hbik7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHNoaXBJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBvbkRyYWdTdGFydCk7XG4gICAgaHVtYW5Cb2FyZEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnT3Zlcik7XG4gICAgc2hpcEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBvbkRyYWdFbmQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZXBsb3lGbGVldCA9IChodW1hbikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBkZXBsb3lTaGlwKCdjYXJyaWVyJywgaHVtYW4pLnRoZW4oKCkgPT4ge1xuICAgICAgZGVwbG95U2hpcCgnYmF0dGxlc2hpcCcsIGh1bWFuKS50aGVuKCgpID0+IHtcbiAgICAgICAgZGVwbG95U2hpcCgnY3J1aXNlcicsIGh1bWFuKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBkZXBsb3lTaGlwKCdzdWJtYXJpbmUnLCBodW1hbikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBkZXBsb3lTaGlwKCdkZXN0cm95ZXInLCBodW1hbikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGh1bWFuRmxlZXRDb250YWluZXJFbC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQk9BUkRTSVpFLCBJTUFHRVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuXG5mdW5jdGlvbiB1cGRhdGVCb2FyZChib2FyZEVsLCBib2FyZCwgc2hvdykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEJPQVJEU0laRTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBCT0FSRFNJWkU7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGJvYXJkW2ldW2pdO1xuICAgICAgY29uc3QgY2VsbEVsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIFsnY2VsbCddLFxuICAgICAgICB7ICdkYXRhLXJvdyc6IGksICdkYXRhLWNvbCc6IGosIHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyJyB9LFxuICAgICAgICAnJ1xuICAgICAgKTtcbiAgICAgIGJvYXJkRWwuYXBwZW5kQ2hpbGQoY2VsbEVsKTtcblxuICAgICAgLy8gU2hvdyBpZiBhIGNlbGwgaXMgYmVpbmcgZHJhZ2dlZCBvdmVyIHdoZW4gZGVwbG95aW5nIHNoaXBzXG4gICAgICBpZiAoY2VsbC5kcmFnZ2VkT3Zlcikge1xuICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnZHJhZ2dlZE92ZXInKTtcbiAgICAgIH1cblxuICAgICAgLy8gRm9yIGh1bWFuIHBsYXllciwgc2hvdyB0aGUgc2hpcCBkZXBsb3ltZW50XG4gICAgICAvLyBBbHNvIHVzZWQgd2hlbiBjaGVhdGluZywgdG8gc2hvdyB0aGUgZW5lbXkgZGVwbG95bWVudFxuICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgaWYgKGNlbGwuaGFzU2hpcCkge1xuICAgICAgICAgIGNlbGxFbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgLy8gY2VsbEVsLmlubmVyVGV4dCA9IGJvYXJkW2ldW2pdLnNoaXAudHlwZVswXTtcbiAgICAgICAgICBjb25zdCBpbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBbJ2ltYWdlJ10pO1xuICAgICAgICAgIGltZy5zcmMgPSBJTUFHRVNbY2VsbC5zaGlwLnR5cGVdO1xuICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSAnNHZ3JztcbiAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSAzICogY2VsbC5zaGlwLnNpemUgKyAndncnO1xuICAgICAgICAgIGlmIChjZWxsLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgaW1nLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpYDtcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPVxuICAgICAgICAgICAgICAoY2VsbC5zaGlwLnNpemUgLyAyIC0gY2VsbC5zZWN0aW9uIC0gMC41KSAqIDMgKyAndncnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IC1jZWxsLnNlY3Rpb24gKiAzICsgJ3Z3JztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2VsbEVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2hvdyBpZiBhIGxvY2F0aW9uIGhhcyBiZWVuIGJvbWJlZCwgYW5kIGlmIGhpdCBvciBtaXNzXG4gICAgICBpZiAoY2VsbC5pc0JvbWJlZCkge1xuICAgICAgICBjZWxsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgY29uc3QgYm9tYkVsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydib21iJ10pO1xuICAgICAgICBjZWxsRWwuYXBwZW5kQ2hpbGQoYm9tYkVsKTtcbiAgICAgICAgaWYgKGNlbGwuaGFzU2hpcCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGksIGosICdoaXQhJyk7XG4gICAgICAgICAgYm9tYkVsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvbWJFbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCB1cGRhdGVEaXNwbGF5ID0gKGh1bWFuLCBjb21wdXRlciwgY2hlYXQpID0+IHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyLWJvYXJkJyk7XG4gIGNvbnN0IGh1bWFuQm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1hbi1ib2FyZCcpO1xuXG4gIC8vIEFsd2F5cyBzaG93IGh1bWFuIHBsYXllciBmbGVldFxuICBodW1hbkJvYXJkRWwuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IHNob3cgPSB0cnVlO1xuICB1cGRhdGVCb2FyZChodW1hbkJvYXJkRWwsIGh1bWFuLmdhbWVCb2FyZC5ib2FyZCwgc2hvdyk7XG5cbiAgLy8gRHVyaW5nIGRlcGxveW1lbnQgc3RhZ2UsIG5vIG5lZWQgdG8gcmVmcmVzaCBjb21wdXRlciBib2FyZFxuICBpZiAoY29tcHV0ZXIpIHtcbiAgICBjb21wdXRlckJvYXJkRWwuaW5uZXJIVE1MID0gJyc7XG4gICAgLy8gU2hvdyBjb21wdXRlciBkZXBsb3ltZW50IGlmIGNoZWF0aW5nXG4gICAgdXBkYXRlQm9hcmQoY29tcHV0ZXJCb2FyZEVsLCBjb21wdXRlci5nYW1lQm9hcmQuYm9hcmQsIGNoZWF0KTtcbiAgfVxufTtcblxuY29uc3Qgc3RvcFBsYXlpbmcgPSAoKSA9PiB7XG4gIC8vIFRvZG86IFRoaXMgZG9lcyBub3Qgc2VlbSB0byB3b3JrXG4gIGNvbnN0IGh1bWFuQm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1hbi1ib2FyZCcpO1xuICBodW1hbkJvYXJkRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbn07XG5cbmV4cG9ydCB7IHVwZGF0ZURpc3BsYXksIHN0b3BQbGF5aW5nIH07XG4iLCJpbXBvcnQgeyB1cGRhdGVEaXNwbGF5LCBzdG9wUGxheWluZyB9IGZyb20gJy4vZG9tJztcbmltcG9ydCBkZWxheSBmcm9tICcuL2RlbGF5JztcblxuLy8gR2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciAwLTlcbmZ1bmN0aW9uIGdldFJhbmRvbU51bSgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbn1cblxuLy8gUGxhY2UgYSBzaGlwIGF0IGEgcmFuZG9tIGxvY2F0aW9uIHdpdGggYSByYW5kb20gZGlyZWN0aW9uXG5mdW5jdGlvbiBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCB0eXBlKSB7XG4gIGxldCByb3csIGNvbCwgZGlyZWN0aW9uO1xuICBkbyB7XG4gICAgcm93ID0gZ2V0UmFuZG9tTnVtKCk7XG4gICAgY29sID0gZ2V0UmFuZG9tTnVtKCk7XG4gICAgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gIH0gd2hpbGUgKCFnYW1lQm9hcmQucGxhY2VTaGlwKHR5cGUsIHJvdywgY29sLCBkaXJlY3Rpb24pKTtcbn1cblxuLy8gUGxhY2UgYWxsIDUgc2hpcHMgb24gYW4gZW1wdHkgYm9hcmRcbmZ1bmN0aW9uIHBsYWNlRmxlZXQoZ2FtZUJvYXJkKSB7XG4gIGdhbWVCb2FyZC5pbml0Qm9hcmQoKTtcbiAgcGxhY2VTaGlwUmFuZG9tKGdhbWVCb2FyZCwgJ2NhcnJpZXInKTtcbiAgcGxhY2VTaGlwUmFuZG9tKGdhbWVCb2FyZCwgJ2JhdHRsZXNoaXAnKTtcbiAgcGxhY2VTaGlwUmFuZG9tKGdhbWVCb2FyZCwgJ2NydWlzZXInKTtcbiAgcGxhY2VTaGlwUmFuZG9tKGdhbWVCb2FyZCwgJ3N1Ym1hcmluZScpO1xuICBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCAnZGVzdHJveWVyJyk7XG59XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gKGh1bWFuLCBjb21wdXRlcikgPT4ge1xuICBsZXQgY2hlYXQgPSBmYWxzZTtcblxuICAvLyBSYW5kb21seSBwbGFjZXMgc2hpcHMgb24gdGhlIGh1bWFuIGJvYXJkXG4gIC8vIHBsYWNlRmxlZXQoaHVtYW4uZ2FtZUJvYXJkKTtcbiAgLy8gUmFuZG9tbHkgcGxhY2VzIHNoaXBzIG9uIHRoZSBjb21wdXRlciBib2FyZFxuICBwbGFjZUZsZWV0KGNvbXB1dGVyLmdhbWVCb2FyZCk7XG5cbiAgdXBkYXRlRGlzcGxheShodW1hbiwgY29tcHV0ZXIsIGNoZWF0KTtcblxuICAvLyBXYWl0IGZvciBodW1hbiBwbGF5ZXIgdG8gZ28gZmlyc3RcbiAgLy8gSHVtYW4gcGxheWVyIHBsYWNlcyBib21icyBvbnRvIGNvbXB1dGVyJ3MgYm9hcmRcbiAgY29uc3QgY29tcHV0ZXJCb2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyLWJvYXJkJyk7XG4gIGNvbXB1dGVyQm9hcmRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgYSBjZWxsIGlzIGNsaWNrZWQgb25cbiAgICAvLyBDZWxscyB0aGF0IGhhdmUgYmVlbiBjbGlja2VkIG9uIGhhdmUgYHBvaW50ZXJFdmVudHMgPSBub25lYFxuICAgIC8vIFdoZW4gdGhvc2UgY2VsbHMgYXJlIGNsaWNrLCB0aGUgY2xhc3Mgb2YgdGhlIHRhcmdldCBpcyB0aGUgYm9hcmQsIG5vdCBjZWxsXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAvLyBSZXRyaWV2ZSB0aGUgcm93IGFuZCBjb2wgZnJvbSB0aGUgZWxlbWVudCdzIGRhdGFzZXRcbiAgICAgIC8vIFRoZXNlIHdlcmUgc2V0IHdoZW4gdGhlc2UgY2VsbHMgYXJlIGNyZWF0ZWQgaW4gZG9tLmpzXG4gICAgICBjb25zdCB7IHJvdyB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgIGNvbnN0IHsgY29sIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuXG4gICAgICAvLyBBdHRhY2sgdGhlIGNvbXB1dGVyJ3MgZ2FtZUJvYXJkXG4gICAgICBjb21wdXRlci5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICB1cGRhdGVEaXNwbGF5KGh1bWFuLCBjb21wdXRlciwgY2hlYXQpO1xuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgdGhlIHdpbm5pbmcgbW92ZVxuICAgICAgaWYgKGNvbXB1dGVyLmdhbWVCb2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgc3RvcFBsYXlpbmcoKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoNTAwKTtcbiAgICAgICAgYWxlcnQoJ0dhbWUgT3ZlciwgeW91IHdvbiEnKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ29tcHV0ZXIgYm9tYnMgdGhlIGh1bWFuIHBsYXllciBib2FyZFxuICAgICAgaHVtYW4uZ2V0Qm9tYmVkKCk7XG4gICAgICB1cGRhdGVEaXNwbGF5KGh1bWFuLCBjb21wdXRlciwgY2hlYXQpO1xuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgdGhlIHdpbm5pbmcgbW92ZVxuICAgICAgaWYgKGh1bWFuLmdhbWVCb2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgc3RvcFBsYXlpbmcoKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoNTAwKTtcbiAgICAgICAgYWxlcnQoJ0dhbWUgT3ZlciwgeW91IGxvc3QhJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjaGVhdENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWF0Jyk7XG4gIGNoZWF0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNoZWF0ID0gY2hlYXRDaGVja2JveC5jaGVja2VkO1xuICAgIHVwZGF0ZURpc3BsYXkoaHVtYW4sIGNvbXB1dGVyLCBjaGVhdCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IENlbGwgfSBmcm9tICcuL2NyZWF0ZUNlbGwnO1xuaW1wb3J0IHsgQk9BUkRTSVpFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gJy4vY3JlYXRlU2hpcCc7XG5cbmV4cG9ydCBjb25zdCBHYW1lQm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZDtcblxuICBjb25zdCBpbml0Qm9hcmQgPSAoKSA9PiB7XG4gICAgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJPQVJEU0laRTsgaSsrKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBCT0FSRFNJWkU7IGorKykge1xuICAgICAgICBib2FyZFtpXS5wdXNoKENlbGwoaSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcmludEJvYXJkID0gKCkgPT4ge1xuICAgIGxldCBkaXNwbGF5ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCT0FSRFNJWkU7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBCT0FSRFNJWkU7IGorKykge1xuICAgICAgICBpZiAoYm9hcmRbaV1bal0uaXNCb21iZWQpIHtcbiAgICAgICAgICBkaXNwbGF5ID0gJ3gnO1xuICAgICAgICB9IGVsc2UgZGlzcGxheSArPSAnLic7XG5cbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdLmhhc1NoaXApIHtcbiAgICAgICAgICBkaXNwbGF5ICs9ICdTJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwbGF5ICs9ICcgJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGlzcGxheSArPSAnXFxuJztcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGlzcGxheSk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHR5cGUsIHJvdywgY29sLCBkaXJlY3Rpb24pID0+IHtcbiAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcCh0eXBlKTtcbiAgICBjb25zdCBzaXplID0gc2hpcC5zaXplO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIGNvbCArIHNpemUgPiBCT0FSRFNJWkUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnICYmIHJvdyArIHNpemUgPiBCT0FSRFNJWkUpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFtyb3cgKyBpXVtjb2xdLmhhc1NoaXApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3JvdyArIGldW2NvbF0ucGxhY2VTaGlwKHNoaXAsIGksIGRpcmVjdGlvbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgIGlmIChib2FyZFtyb3ddW2NvbCArIGldLmhhc1NoaXApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICBib2FyZFtyb3ddW2NvbCArIGldLnBsYWNlU2hpcChzaGlwLCBpLCBkaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGlzR2FtZU92ZXIoKSB7XG4gICAgY29uc3QgY291bnQgPSBib2FyZC5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGFjY3VtdWxhdG9yICtcbiAgICAgICAgY3VycmVudFZhbHVlLmZpbHRlcigoY2VsbCkgPT4gY2VsbC5pc0JvbWJlZCAmJiBjZWxsLmhhc1NoaXApLmxlbmd0aFxuICAgICAgKTtcbiAgICB9LCAwKTtcbiAgICBpZiAoY291bnQgPj0gMTcpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAocm93LCBjb2wpID0+IHtcbiAgICBpZiAoYm9hcmRbcm93XVtjb2xdLmlzQm9tYmVkKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1hcmsgdGhlIGNlbGwgaXNCb21iZWQgPSB0cnVlXG4gICAgICBib2FyZFtyb3ddW2NvbF0uYXR0YWNrKCk7XG4gICAgICAvLyBDaGVjayBpZiBpdCBpcyBhIGhpdFxuICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXS5oYXNTaGlwKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBib2FyZFtyb3ddW2NvbF0uc2hpcDtcbiAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdtaXNzJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBpbml0Qm9hcmQsXG4gICAgcHJpbnRCb2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBpc0dhbWVPdmVyLFxuICB9O1xufTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXJzJztcbmltcG9ydCB7IGRlcGxveUZsZWV0IH0gZnJvbSAnLi9kZXBsb3lGbGVldCc7XG5pbXBvcnQgeyB1cGRhdGVEaXNwbGF5IH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5cbi8vIEluaXRpYWxpemUgcGxheWVyc1xuY29uc3QgaHVtYW4gPSBQbGF5ZXIoJ1RvbScsICdodW1hbicpO1xuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoJ0plcnJ5JywgJ2NvbXB1dGVyJyk7XG5cbi8vIEluaXRpYWxpemUgZGlzcGxheVxuaHVtYW4uZ2FtZUJvYXJkLmluaXRCb2FyZCgpO1xuY29tcHV0ZXIuZ2FtZUJvYXJkLmluaXRCb2FyZCgpO1xudXBkYXRlRGlzcGxheShodW1hbiwgY29tcHV0ZXIpO1xuXG4vLyBEZXBsb3kgZmxlZXQgdGhlbiBzdGFydCB0aGUgZ2FtZVxuZGVwbG95RmxlZXQoaHVtYW4pLnRoZW4oKCkgPT4ge1xuICBnYW1lKGh1bWFuLCBjb21wdXRlcik7XG59KTtcblxuLy8gVG9kbzogd2hlbiBjaGVhdGluZywgY2FuIG5vdCBjbGljayBvbiB0aGUgZW5lbXkgc2hpcHMiLCJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tICcuLi9zcmMvZ2FtZUJvYXJkJztcblxuZXhwb3J0IGNvbnN0IFBsYXllciA9IChuYW1lLCB0eXBlKSA9PiB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IEdhbWVCb2FyZCgpO1xuICBjb25zdCBxdWV1ZSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbU51bSgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Qm9tYmVkUmFuZG9ubHkoKSB7XG4gICAgbGV0IHJvdywgY29sLCByZXN1bHQ7XG4gICAgZG8ge1xuICAgICAgcm93ID0gZ2V0UmFuZG9tTnVtKCk7XG4gICAgICBjb2wgPSBnZXRSYW5kb21OdW0oKTtcbiAgICAgIHJlc3VsdCA9IGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09ICcnKTtcbiAgICByZXR1cm4geyByb3csIGNvbCwgcmVzdWx0IH07XG4gIH1cblxuICBjb25zdCBnZXRCb21iZWQgPSAoKSA9PiB7XG4gICAgbGV0IGZlZWRiYWNrO1xuICAgIGxldCByb3csIGNvbCwgcmVzdWx0O1xuXG4gICAgLy8gSWYgdGhlIHF1ZXVlIGlzIGVtcHR5LCBnZXQgYm9tYmVkIGF0IGEgcmFuZG9tZSBwbGFjZVxuICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICBmZWVkYmFjayA9IGdldEJvbWJlZFJhbmRvbmx5KCk7XG4gICAgICByb3cgPSBmZWVkYmFjay5yb3c7XG4gICAgICBjb2wgPSBmZWVkYmFjay5jb2w7XG4gICAgICByZXN1bHQgPSBmZWVkYmFjay5yZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEdvIHRocm91Z2ggdGhlIHF1ZXVlIHRvIGdldCBib21iZWQgYXQgdGhlIGZpcnN0IGNlbGwgdGhhdCdzIG5vdCBhbHJlYWR5IGJvbWJlZFxuICAgICAgZG8ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICByb3cgPSB0YXJnZXQucm93O1xuICAgICAgICBjb2wgPSB0YXJnZXQuY29sO1xuICAgICAgICByZXN1bHQgPSBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICB9IHdoaWxlIChyZXN1bHQgPT09ICcnKTtcbiAgICB9XG5cbiAgICAvLyBJZiBoaXQsIHB1c2ggdGhpcyBjZWxsJ3MgNCBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBuZWlnaGJvdXJzIFxuICAgIC8vIHRoYXQgYXJlIG5vdCBhbHJlYWR5IGJvbWJlZCBpbnRvIHRoZSBxdWV1ZVxuICAgIGlmIChyZXN1bHQgPT09ICdoaXQnKSB7XG4gICAgICBmb3IgKGxldCBpID0gLTE7IGkgPD0gMTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAtMTsgaiA8PSAxOyBqKyspIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBpICE9PSBqICYmIC8vIHJlbW92ZSBkaWFnb25hbFxuICAgICAgICAgICAgaSArIGogIT09IDAgJiYgLy8gcmVtb3ZlIGRpYWdvbmFsIFxuICAgICAgICAgICAgcm93ICsgaSA+PSAwICYmIC8vIG1ha2Ugc3VyZSBjZWxsIGlzIHdpdGhpbiB0aGUgZ2FtZWJvYXJkXG4gICAgICAgICAgICByb3cgKyBpIDwgMTAgJiZcbiAgICAgICAgICAgIGNvbCArIGogPj0gMCAmJlxuICAgICAgICAgICAgY29sICsgaiA8IDEwICYmXG4gICAgICAgICAgICAhZ2FtZUJvYXJkLmJvYXJkW3JvdyArIGldW2NvbCArIGpdLmlzQm9tYmVkIC8vIG5vdCBib21iZWRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZ2FtZUJvYXJkLmJvYXJkW3JvdyArIGldW2NvbCArIGpdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IFxuICAgIHJldHVybjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICBuYW1lID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgc2V0IHR5cGUodmFsdWUpIHtcbiAgICAgIHR5cGUgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldCB0eXBlKCkge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSxcbiAgICBnZXQgZ2FtZUJvYXJkKCkge1xuICAgICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgICB9LFxuICAgIGdldEJvbWJlZCxcbiAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=