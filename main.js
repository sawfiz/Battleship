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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* Victor Verion */\n  --darker-color: #ff0000;\n  --dark-color: #11cbd7;\n  --light-color: #c6f1e7;\n  --lighter-color: #f0fff3;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 100px auto 20px;\n}\n\nh1 {\n  /* color: red; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmain {\n  border: 1px solid red;\n  display: grid;\n  grid-template-columns: 1fr 3fr 3fr 1fr;\n}\n\n.computer-fleet {\n  border: 1px solid red;\n}\n\n.computer-board-container, .human-board-container {\n  border: 1px solid red;\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  position: relative;\n}\n\n.territory {\n  position: absolute;\n  top: 1rem;\n  font: 1.5em sans-serif;\n  font-weight: bold;\n}\n\n.enemy {\n  color: red;\n}\n\n.my {\n  color: green;\n}\n\n.cheat-container {\n  position: absolute;\n  bottom: 1rem;\n  display: flex;\n  gap: 5px;\n}\n\n.human-fleet {\n  border: 1px solid red;\n}\n\n.board {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n}\n\n.cell {\n  position: relative;\n  background-color: blue;\n  width: 3vw;\n  height: 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  /* border: 1px blue solid; */\n  overflow: hidden;\n}\n\n.image {\n  position: absolute;\n}\n\n.show {\n  opacity: 50;\n  background-color: lightblue;\n}\n\n.bomb {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  z-index: 100;\n}\n\n.missed {\n  background-color: white;\n}\n\n.hit {\n  background-color: red;\n}\n\n.human-fleet-container {\n  display: grid;\n  grid-template-rows: 1fr 4fr 1fr 1fr;\n}\n\n\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Toggle switch to show/hide enemy ships */\n\n\n/* The size of the toggle switch */\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 20px;\n}\n\n/* Hide the default checkbox */\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider that the circle can move */\n/* same size as the toggle switch */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n/* The circle that moves in the slider */\n/* Before it is checked, the indicator (square) is on the left */\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\n/* Change toggle switch background color when it is clicked */\n/* Thethe + is used to select the .slider immidiately follow the input:checked */\n/* The styling applies to the .slider */\ninput:checked + .slider {\n  background-color: var(--darker-color);\n}\n\n/* When checked, move indicator to the right by 16px */\ninput:checked + .slider:before {\n  transform: translateX(16px);\n}\n\n/* Make slider have round corners */\n.slider.round {\n  border-radius: 10px;\n}\n\n/* Make the indicator round */\n.slider.round:before {\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;EACrB,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,sCAAsC;EACtC,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,UAAU;EACV,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,2BAA2B;AAC7B;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mCAAmC;AACrC;;;;AAIA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,2CAA2C;;;AAG3C,kCAAkC;AAClC;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA,8BAA8B;AAC9B;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA,wCAAwC;AACxC,mCAAmC;AACnC;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA,wCAAwC;AACxC,gEAAgE;AAChE;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA,6DAA6D;AAC7D,gFAAgF;AAChF,uCAAuC;AACvC;EACE,qCAAqC;AACvC;;AAEA,sDAAsD;AACtD;EACE,2BAA2B;AAC7B;;AAEA,mCAAmC;AACnC;EACE,mBAAmB;AACrB;;AAEA,6BAA6B;AAC7B;EACE,kBAAkB;AACpB","sourcesContent":[":root {\n  /* Victor Verion */\n  --darker-color: #ff0000;\n  --dark-color: #11cbd7;\n  --light-color: #c6f1e7;\n  --lighter-color: #f0fff3;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 100px auto 20px;\n}\n\nh1 {\n  /* color: red; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmain {\n  border: 1px solid red;\n  display: grid;\n  grid-template-columns: 1fr 3fr 3fr 1fr;\n}\n\n.computer-fleet {\n  border: 1px solid red;\n}\n\n.computer-board-container, .human-board-container {\n  border: 1px solid red;\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  position: relative;\n}\n\n.territory {\n  position: absolute;\n  top: 1rem;\n  font: 1.5em sans-serif;\n  font-weight: bold;\n}\n\n.enemy {\n  color: red;\n}\n\n.my {\n  color: green;\n}\n\n.cheat-container {\n  position: absolute;\n  bottom: 1rem;\n  display: flex;\n  gap: 5px;\n}\n\n.human-fleet {\n  border: 1px solid red;\n}\n\n.board {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n}\n\n.cell {\n  position: relative;\n  background-color: blue;\n  width: 3vw;\n  height: 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  /* border: 1px blue solid; */\n  overflow: hidden;\n}\n\n.image {\n  position: absolute;\n}\n\n.show {\n  opacity: 50;\n  background-color: lightblue;\n}\n\n.bomb {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  z-index: 100;\n}\n\n.missed {\n  background-color: white;\n}\n\n.hit {\n  background-color: red;\n}\n\n.human-fleet-container {\n  display: grid;\n  grid-template-rows: 1fr 4fr 1fr 1fr;\n}\n\n\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Toggle switch to show/hide enemy ships */\n\n\n/* The size of the toggle switch */\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 20px;\n}\n\n/* Hide the default checkbox */\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider that the circle can move */\n/* same size as the toggle switch */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n/* The circle that moves in the slider */\n/* Before it is checked, the indicator (square) is on the left */\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\n/* Change toggle switch background color when it is clicked */\n/* Thethe + is used to select the .slider immidiately follow the input:checked */\n/* The styling applies to the .slider */\ninput:checked + .slider {\n  background-color: var(--darker-color);\n}\n\n/* When checked, move indicator to the right by 16px */\ninput:checked + .slider:before {\n  transform: translateX(16px);\n}\n\n/* Make slider have round corners */\n.slider.round {\n  border-radius: 10px;\n}\n\n/* Make the indicator round */\n.slider.round:before {\n  border-radius: 50%;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "FLEET": () => (/* binding */ FLEET)
/* harmony export */ });
const FLEET = {
  carrier: { size: 5 },
  battleship: { size: 4 },
  cruiser: { size: 3 },
  submarine: { size: 3 },
  destroyer: { size: 2 },
};

const BOARDSIZE = 10;




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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateDisplay": () => (/* binding */ updateDisplay)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _images_carrier_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/carrier.svg */ "./src/images/carrier.svg");
/* harmony import */ var _images_battleship_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/battleship.svg */ "./src/images/battleship.svg");
/* harmony import */ var _images_cruiser_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/cruiser.svg */ "./src/images/cruiser.svg");
/* harmony import */ var _images_submarine_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/submarine.svg */ "./src/images/submarine.svg");
/* harmony import */ var _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/destroyer.svg */ "./src/images/destroyer.svg");








const images = {
  carrier: _images_carrier_svg__WEBPACK_IMPORTED_MODULE_2__,
  battleship: _images_battleship_svg__WEBPACK_IMPORTED_MODULE_3__,
  cruiser: _images_cruiser_svg__WEBPACK_IMPORTED_MODULE_4__,
  submarine: _images_submarine_svg__WEBPACK_IMPORTED_MODULE_5__,
  destroyer: _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_6__,
};

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
      // Cheat, show the ship locations
      if (show) {
        if (cell.hasShip) {
          cellEl.classList.add('show');
          // cellEl.innerText = board[i][j].ship.type[0];
          const img = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('img', ['image']);
          img.src = images[cell.ship.type];
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
      if (cell.isBombed) {
        cellEl.style.pointerEvents = 'none';
        // cellEl.style.zIndex = 10;
        // cellEl.style.cursor = 'not-allowed';

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

  computerBoardEl.innerHTML = '';
  humanBoardEl.innerHTML = '';

  const show = true;
  updateBoard(computerBoardEl, computer.gameBoard.board, cheat);
  updateBoard(humanBoardEl, human.gameBoard.board, show);
};


/***/ }),

/***/ "./src/fleetSetup.js":
/*!***************************!*\
  !*** ./src/fleetSetup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupFleet": () => (/* binding */ setupFleet)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delay */ "./src/delay.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _images_carrier_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/carrier.svg */ "./src/images/carrier.svg");
/* harmony import */ var _images_battleship_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/battleship.svg */ "./src/images/battleship.svg");
/* harmony import */ var _images_cruiser_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/cruiser.svg */ "./src/images/cruiser.svg");
/* harmony import */ var _images_submarine_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/submarine.svg */ "./src/images/submarine.svg");
/* harmony import */ var _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/destroyer.svg */ "./src/images/destroyer.svg");









const images = {
  carrier: _images_carrier_svg__WEBPACK_IMPORTED_MODULE_3__,
  battleship: _images_battleship_svg__WEBPACK_IMPORTED_MODULE_4__,
  cruiser: _images_cruiser_svg__WEBPACK_IMPORTED_MODULE_5__,
  submarine: _images_submarine_svg__WEBPACK_IMPORTED_MODULE_6__,
  destroyer: _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_7__,
};

const humanBoardContainerEl = document.querySelector('.human-board-container');
const humanFleetContainerEl = document.querySelector('.human-fleet');

const setupShip = async (ship) => {
  await (0,_delay__WEBPACK_IMPORTED_MODULE_1__["default"])(5000);
  const headingEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('div', [], {}, `Place your ${ship}`);
  humanFleetContainerEl.appendChild(headingEl);
  return new Promise( (resolve) => {
    console.log('5 seconds delay in setupShip()');
    resolve();
  });
};

const setupFleet = () => {
  return new Promise((resolve) => {
    setupShip('carrier').then(async () => {
      await (0,_delay__WEBPACK_IMPORTED_MODULE_1__["default"])(5000);
      console.log('5 seconds delay in setupFleet()');
      resolve();
    });
  });
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
/* harmony import */ var _src_players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/players */ "./src/players.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delay */ "./src/delay.js");




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

const game = () => {
  let cheat = false;
  const human = (0,_src_players__WEBPACK_IMPORTED_MODULE_0__.Player)('Tom', 'human');
  const computer = (0,_src_players__WEBPACK_IMPORTED_MODULE_0__.Player)('Jerry', 'computer');

  // Randomly places ships on the human board
  placeFleet(human.gameBoard);
  // Randomly places ships on the computer board
  placeFleet(computer.gameBoard);

  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)(human, computer, cheat);

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
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)(human, computer, cheat);
      // Check if it is the winning move
      if (computer.gameBoard.isGameOver()) {
        await (0,_delay__WEBPACK_IMPORTED_MODULE_2__["default"])(500);
        alert('Game Over, you won!');
      }
      
      // Computer bombs the human player board
      human.getBombed();
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)(human, computer, cheat);
      // Check if it is the winning move
      if (human.gameBoard.isGameOver()) {
        await (0,_delay__WEBPACK_IMPORTED_MODULE_2__["default"])(500);
        alert('Game Over, you lost!');
      }
    }
  });

  const cheatCheckbox = document.querySelector('#cheat')
  cheatCheckbox.addEventListener('change', () => {
    cheat = cheatCheckbox.checked;
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)(human, computer, cheat);
  })
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
/* harmony import */ var _src_fleetSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/fleetSetup */ "./src/fleetSetup.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");




(0,_src_fleetSetup__WEBPACK_IMPORTED_MODULE_1__.setupFleet)().then(() => {
  console.log('Battleship');
  (0,_game__WEBPACK_IMPORTED_MODULE_2__.game)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NyZWF0ZUNlbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3JlYXRlU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RlbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmxlZXRTZXR1cC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKiBWaWN0b3IgVmVyaW9uICovXFxuICAtLWRhcmtlci1jb2xvcjogI2ZmMDAwMDtcXG4gIC0tZGFyay1jb2xvcjogIzExY2JkNztcXG4gIC0tbGlnaHQtY29sb3I6ICNjNmYxZTc7XFxuICAtLWxpZ2h0ZXItY29sb3I6ICNmMGZmZjM7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG8gMjBweDtcXG59XFxuXFxuaDEge1xcbiAgLyogY29sb3I6IHJlZDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAzZnIgMWZyO1xcbn1cXG5cXG4uY29tcHV0ZXItZmxlZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uY29tcHV0ZXItYm9hcmQtY29udGFpbmVyLCAuaHVtYW4tYm9hcmQtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGVycml0b3J5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXJlbTtcXG4gIGZvbnQ6IDEuNWVtIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmVuZW15IHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5teSB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5jaGVhdC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uaHVtYW4tZmxlZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDFweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIHdpZHRoOiAzdnc7XFxuICBoZWlnaHQ6IDN2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgLyogYm9yZGVyOiAxcHggYmx1ZSBzb2xpZDsgKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbWFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zaG93IHtcXG4gIG9wYWNpdHk6IDUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4uYm9tYiB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaHVtYW4tZmxlZXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMWZyIDFmcjtcXG59XFxuXFxuXFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFRvZ2dsZSBzd2l0Y2ggdG8gc2hvdy9oaWRlIGVuZW15IHNoaXBzICovXFxuXFxuXFxuLyogVGhlIHNpemUgb2YgdGhlIHRvZ2dsZSBzd2l0Y2ggKi9cXG4udG9nZ2xlLXN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLyogSGlkZSB0aGUgZGVmYXVsdCBjaGVja2JveCAqL1xcbi50b2dnbGUtc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyogVGhlIHNsaWRlciB0aGF0IHRoZSBjaXJjbGUgY2FuIG1vdmUgKi9cXG4vKiBzYW1lIHNpemUgYXMgdGhlIHRvZ2dsZSBzd2l0Y2ggKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4vKiBUaGUgY2lyY2xlIHRoYXQgbW92ZXMgaW4gdGhlIHNsaWRlciAqL1xcbi8qIEJlZm9yZSBpdCBpcyBjaGVja2VkLCB0aGUgaW5kaWNhdG9yIChzcXVhcmUpIGlzIG9uIHRoZSBsZWZ0ICovXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDEycHg7XFxuICB3aWR0aDogMTJweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4vKiBDaGFuZ2UgdG9nZ2xlIHN3aXRjaCBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gaXQgaXMgY2xpY2tlZCAqL1xcbi8qIFRoZXRoZSArIGlzIHVzZWQgdG8gc2VsZWN0IHRoZSAuc2xpZGVyIGltbWlkaWF0ZWx5IGZvbGxvdyB0aGUgaW5wdXQ6Y2hlY2tlZCAqL1xcbi8qIFRoZSBzdHlsaW5nIGFwcGxpZXMgdG8gdGhlIC5zbGlkZXIgKi9cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItY29sb3IpO1xcbn1cXG5cXG4vKiBXaGVuIGNoZWNrZWQsIG1vdmUgaW5kaWNhdG9yIHRvIHRoZSByaWdodCBieSAxNnB4ICovXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcXG59XFxuXFxuLyogTWFrZSBzbGlkZXIgaGF2ZSByb3VuZCBjb3JuZXJzICovXFxuLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBNYWtlIHRoZSBpbmRpY2F0b3Igcm91bmQgKi9cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7QUFDckM7Ozs7QUFJQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBLDJDQUEyQzs7O0FBRzNDLGtDQUFrQztBQUNsQztFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQSx3Q0FBd0M7QUFDeEMsbUNBQW1DO0FBQ25DO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQSx3Q0FBd0M7QUFDeEMsZ0VBQWdFO0FBQ2hFO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQSw2REFBNkQ7QUFDN0QsZ0ZBQWdGO0FBQ2hGLHVDQUF1QztBQUN2QztFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQSxzREFBc0Q7QUFDdEQ7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBWaWN0b3IgVmVyaW9uICovXFxuICAtLWRhcmtlci1jb2xvcjogI2ZmMDAwMDtcXG4gIC0tZGFyay1jb2xvcjogIzExY2JkNztcXG4gIC0tbGlnaHQtY29sb3I6ICNjNmYxZTc7XFxuICAtLWxpZ2h0ZXItY29sb3I6ICNmMGZmZjM7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG8gMjBweDtcXG59XFxuXFxuaDEge1xcbiAgLyogY29sb3I6IHJlZDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAzZnIgMWZyO1xcbn1cXG5cXG4uY29tcHV0ZXItZmxlZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uY29tcHV0ZXItYm9hcmQtY29udGFpbmVyLCAuaHVtYW4tYm9hcmQtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGVycml0b3J5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXJlbTtcXG4gIGZvbnQ6IDEuNWVtIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmVuZW15IHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5teSB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5jaGVhdC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uaHVtYW4tZmxlZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDFweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIHdpZHRoOiAzdnc7XFxuICBoZWlnaHQ6IDN2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgLyogYm9yZGVyOiAxcHggYmx1ZSBzb2xpZDsgKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbWFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zaG93IHtcXG4gIG9wYWNpdHk6IDUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4uYm9tYiB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaHVtYW4tZmxlZXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMWZyIDFmcjtcXG59XFxuXFxuXFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFRvZ2dsZSBzd2l0Y2ggdG8gc2hvdy9oaWRlIGVuZW15IHNoaXBzICovXFxuXFxuXFxuLyogVGhlIHNpemUgb2YgdGhlIHRvZ2dsZSBzd2l0Y2ggKi9cXG4udG9nZ2xlLXN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLyogSGlkZSB0aGUgZGVmYXVsdCBjaGVja2JveCAqL1xcbi50b2dnbGUtc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyogVGhlIHNsaWRlciB0aGF0IHRoZSBjaXJjbGUgY2FuIG1vdmUgKi9cXG4vKiBzYW1lIHNpemUgYXMgdGhlIHRvZ2dsZSBzd2l0Y2ggKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4vKiBUaGUgY2lyY2xlIHRoYXQgbW92ZXMgaW4gdGhlIHNsaWRlciAqL1xcbi8qIEJlZm9yZSBpdCBpcyBjaGVja2VkLCB0aGUgaW5kaWNhdG9yIChzcXVhcmUpIGlzIG9uIHRoZSBsZWZ0ICovXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDEycHg7XFxuICB3aWR0aDogMTJweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4vKiBDaGFuZ2UgdG9nZ2xlIHN3aXRjaCBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gaXQgaXMgY2xpY2tlZCAqL1xcbi8qIFRoZXRoZSArIGlzIHVzZWQgdG8gc2VsZWN0IHRoZSAuc2xpZGVyIGltbWlkaWF0ZWx5IGZvbGxvdyB0aGUgaW5wdXQ6Y2hlY2tlZCAqL1xcbi8qIFRoZSBzdHlsaW5nIGFwcGxpZXMgdG8gdGhlIC5zbGlkZXIgKi9cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItY29sb3IpO1xcbn1cXG5cXG4vKiBXaGVuIGNoZWNrZWQsIG1vdmUgaW5kaWNhdG9yIHRvIHRoZSByaWdodCBieSAxNnB4ICovXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcXG59XFxuXFxuLyogTWFrZSBzbGlkZXIgaGF2ZSByb3VuZCBjb3JuZXJzICovXFxuLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBNYWtlIHRoZSBpbmRpY2F0b3Igcm91bmQgKi9cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBGTEVFVCA9IHtcbiAgY2FycmllcjogeyBzaXplOiA1IH0sXG4gIGJhdHRsZXNoaXA6IHsgc2l6ZTogNCB9LFxuICBjcnVpc2VyOiB7IHNpemU6IDMgfSxcbiAgc3VibWFyaW5lOiB7IHNpemU6IDMgfSxcbiAgZGVzdHJveWVyOiB7IHNpemU6IDIgfSxcbn07XG5cbmNvbnN0IEJPQVJEU0laRSA9IDEwO1xuXG5leHBvcnQge0ZMRUVULCBCT0FSRFNJWkV9XG4iLCJleHBvcnQgY29uc3QgQ2VsbCA9IChyb3csIGNvbCkgPT4ge1xuICBsZXQgc2hpcCA9IG51bGw7XG4gIGxldCBoYXNTaGlwID0gZmFsc2U7XG4gIGxldCBpc0JvbWJlZCA9IGZhbHNlO1xuICBsZXQgc2VjdGlvbjtcbiAgbGV0IGRpcmVjdGlvbjtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAob2JqLCBpbmRleCwgZGlyKSA9PiB7XG4gICAgaGFzU2hpcCA9IHRydWU7XG4gICAgc2hpcCA9IG9iajtcbiAgICBzZWN0aW9uID0gaW5kZXg7XG4gICAgZGlyZWN0aW9uID0gZGlyO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFjayA9ICgpID0+IHtcbiAgICBpc0JvbWJlZCA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByb3csXG4gICAgY29sLFxuICAgIGdldCBzZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfSxcbiAgICBnZXQgZGlyZWN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgfSxcbiAgICBnZXQgc2hpcCgpIHtcbiAgICAgIHJldHVybiBzaGlwO1xuICAgIH0sXG4gICAgZ2V0IGhhc1NoaXAoKSB7XG4gICAgICByZXR1cm4gaGFzU2hpcDtcbiAgICB9LFxuICAgIGdldCBpc0JvbWJlZCgpIHtcbiAgICAgIHJldHVybiBpc0JvbWJlZDtcbiAgICB9LFxuICAgIHBsYWNlU2hpcCxcbiAgICBhdHRhY2ssXG4gIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjbGFzc0FycmF5LCBhdHRyT2JqLCB0ZXh0KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBpZiAoY2xhc3NBcnJheSkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzQXJyYXkpO1xuXG4gIGZvciAoY29uc3QgYXR0ciBpbiBhdHRyT2JqKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0ck9ialthdHRyXSk7XG4gIH1cblxuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImNvbnN0IEZMRUVUID0ge1xuICBjYXJyaWVyOiB7IHNpemU6IDUgfSxcbiAgYmF0dGxlc2hpcDogeyBzaXplOiA0IH0sXG4gIGNydWlzZXI6IHsgc2l6ZTogMyB9LFxuICBzdWJtYXJpbmU6IHsgc2l6ZTogMyB9LFxuICBkZXN0cm95ZXI6IHsgc2l6ZTogMiB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNoaXAgPSAodHlwZSkgPT4ge1xuICBjb25zdCBzaXplID0gRkxFRVRbdHlwZV0uc2l6ZTtcbiAgbGV0IGhpdHMgPSAwO1xuICBsZXQgaXNTdW5rID0gZmFsc2U7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdHMrKztcbiAgICBpZiAoaGl0cyA+PSBzaXplKSBpc1N1bmsgPSB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdHlwZSxcbiAgICBzaXplOiBzaXplLFxuICAgIGdldCBoaXRzKCkge1xuICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfSxcbiAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgcmV0dXJuIGlzU3VuaztcbiAgICB9LFxuICAgIGhpdCxcbiAgfTtcbn07XG4iLCIvLyBHbG9iYWwgZnVuY3Rpb25cbmZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsYXk7XG4iLCJpbXBvcnQgeyBCT0FSRFNJWkUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IGNhcnJpZXJJbWFnZSBmcm9tICcuL2ltYWdlcy9jYXJyaWVyLnN2Zyc7XG5pbXBvcnQgYmF0dGxlc2hpcEltYWdlIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXAuc3ZnJztcbmltcG9ydCBjcnVpc2VySW1hZ2UgZnJvbSAnLi9pbWFnZXMvY3J1aXNlci5zdmcnO1xuaW1wb3J0IHN1Ym1hcmluZUltYWdlIGZyb20gJy4vaW1hZ2VzL3N1Ym1hcmluZS5zdmcnO1xuaW1wb3J0IGRlc3Ryb3llckltYWdlIGZyb20gJy4vaW1hZ2VzL2Rlc3Ryb3llci5zdmcnO1xuXG5jb25zdCBpbWFnZXMgPSB7XG4gIGNhcnJpZXI6IGNhcnJpZXJJbWFnZSxcbiAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcEltYWdlLFxuICBjcnVpc2VyOiBjcnVpc2VySW1hZ2UsXG4gIHN1Ym1hcmluZTogc3VibWFyaW5lSW1hZ2UsXG4gIGRlc3Ryb3llcjogZGVzdHJveWVySW1hZ2UsXG59O1xuXG5mdW5jdGlvbiB1cGRhdGVCb2FyZChib2FyZEVsLCBib2FyZCwgc2hvdykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEJPQVJEU0laRTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBCT0FSRFNJWkU7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGJvYXJkW2ldW2pdO1xuICAgICAgY29uc3QgY2VsbEVsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIFsnY2VsbCddLFxuICAgICAgICB7ICdkYXRhLXJvdyc6IGksICdkYXRhLWNvbCc6IGosIHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyJyB9LFxuICAgICAgICAnJ1xuICAgICAgKTtcbiAgICAgIGJvYXJkRWwuYXBwZW5kQ2hpbGQoY2VsbEVsKTtcbiAgICAgIC8vIENoZWF0LCBzaG93IHRoZSBzaGlwIGxvY2F0aW9uc1xuICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgaWYgKGNlbGwuaGFzU2hpcCkge1xuICAgICAgICAgIGNlbGxFbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgLy8gY2VsbEVsLmlubmVyVGV4dCA9IGJvYXJkW2ldW2pdLnNoaXAudHlwZVswXTtcbiAgICAgICAgICBjb25zdCBpbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBbJ2ltYWdlJ10pO1xuICAgICAgICAgIGltZy5zcmMgPSBpbWFnZXNbY2VsbC5zaGlwLnR5cGVdO1xuICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSAnNHZ3JztcbiAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSAzICogY2VsbC5zaGlwLnNpemUgKyAndncnO1xuICAgICAgICAgIGlmIChjZWxsLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgaW1nLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpYDtcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPVxuICAgICAgICAgICAgICAoY2VsbC5zaGlwLnNpemUgLyAyIC0gY2VsbC5zZWN0aW9uIC0gMC41KSAqIDMgKyAndncnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IC1jZWxsLnNlY3Rpb24gKiAzICsgJ3Z3JztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2VsbEVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmlzQm9tYmVkKSB7XG4gICAgICAgIGNlbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAvLyBjZWxsRWwuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIC8vIGNlbGxFbC5zdHlsZS5jdXJzb3IgPSAnbm90LWFsbG93ZWQnO1xuXG4gICAgICAgIGNvbnN0IGJvbWJFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnYm9tYiddKTtcbiAgICAgICAgY2VsbEVsLmFwcGVuZENoaWxkKGJvbWJFbCk7XG4gICAgICAgIGlmIChjZWxsLmhhc1NoaXApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpLCBqLCAnaGl0IScpO1xuICAgICAgICAgIGJvbWJFbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib21iRWwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURpc3BsYXkgPSAoaHVtYW4sIGNvbXB1dGVyLCBjaGVhdCkgPT4ge1xuICBjb25zdCBjb21wdXRlckJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcHV0ZXItYm9hcmQnKTtcbiAgY29uc3QgaHVtYW5Cb2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWFuLWJvYXJkJyk7XG5cbiAgY29tcHV0ZXJCb2FyZEVsLmlubmVySFRNTCA9ICcnO1xuICBodW1hbkJvYXJkRWwuaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3Qgc2hvdyA9IHRydWU7XG4gIHVwZGF0ZUJvYXJkKGNvbXB1dGVyQm9hcmRFbCwgY29tcHV0ZXIuZ2FtZUJvYXJkLmJvYXJkLCBjaGVhdCk7XG4gIHVwZGF0ZUJvYXJkKGh1bWFuQm9hcmRFbCwgaHVtYW4uZ2FtZUJvYXJkLmJvYXJkLCBzaG93KTtcbn07XG4iLCJpbXBvcnQgeyBCT0FSRFNJWkUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgZGVsYXkgZnJvbSAnLi9kZWxheSc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IGNhcnJpZXJJbWFnZSBmcm9tICcuL2ltYWdlcy9jYXJyaWVyLnN2Zyc7XG5pbXBvcnQgYmF0dGxlc2hpcEltYWdlIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXAuc3ZnJztcbmltcG9ydCBjcnVpc2VySW1hZ2UgZnJvbSAnLi9pbWFnZXMvY3J1aXNlci5zdmcnO1xuaW1wb3J0IHN1Ym1hcmluZUltYWdlIGZyb20gJy4vaW1hZ2VzL3N1Ym1hcmluZS5zdmcnO1xuaW1wb3J0IGRlc3Ryb3llckltYWdlIGZyb20gJy4vaW1hZ2VzL2Rlc3Ryb3llci5zdmcnO1xuXG5jb25zdCBpbWFnZXMgPSB7XG4gIGNhcnJpZXI6IGNhcnJpZXJJbWFnZSxcbiAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcEltYWdlLFxuICBjcnVpc2VyOiBjcnVpc2VySW1hZ2UsXG4gIHN1Ym1hcmluZTogc3VibWFyaW5lSW1hZ2UsXG4gIGRlc3Ryb3llcjogZGVzdHJveWVySW1hZ2UsXG59O1xuXG5jb25zdCBodW1hbkJvYXJkQ29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtYW4tYm9hcmQtY29udGFpbmVyJyk7XG5jb25zdCBodW1hbkZsZWV0Q29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtYW4tZmxlZXQnKTtcblxuY29uc3Qgc2V0dXBTaGlwID0gYXN5bmMgKHNoaXApID0+IHtcbiAgYXdhaXQgZGVsYXkoNTAwMCk7XG4gIGNvbnN0IGhlYWRpbmdFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtdLCB7fSwgYFBsYWNlIHlvdXIgJHtzaGlwfWApO1xuICBodW1hbkZsZWV0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoaGVhZGluZ0VsKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCc1IHNlY29uZHMgZGVsYXkgaW4gc2V0dXBTaGlwKCknKTtcbiAgICByZXNvbHZlKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldHVwRmxlZXQgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldHVwU2hpcCgnY2FycmllcicpLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgZGVsYXkoNTAwMCk7XG4gICAgICBjb25zb2xlLmxvZygnNSBzZWNvbmRzIGRlbGF5IGluIHNldHVwRmxlZXQoKScpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9zcmMvcGxheWVycyc7XG5pbXBvcnQgeyB1cGRhdGVEaXNwbGF5IH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IGRlbGF5IGZyb20gJy4vZGVsYXknO1xuXG4vLyBHZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIDAtOVxuZnVuY3Rpb24gZ2V0UmFuZG9tTnVtKCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xufVxuXG4vLyBQbGFjZSBhIHNoaXAgYXQgYSByYW5kb20gbG9jYXRpb24gd2l0aCBhIHJhbmRvbSBkaXJlY3Rpb25cbmZ1bmN0aW9uIHBsYWNlU2hpcFJhbmRvbShnYW1lQm9hcmQsIHR5cGUpIHtcbiAgbGV0IHJvdywgY29sLCBkaXJlY3Rpb247XG4gIGRvIHtcbiAgICByb3cgPSBnZXRSYW5kb21OdW0oKTtcbiAgICBjb2wgPSBnZXRSYW5kb21OdW0oKTtcbiAgICBkaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgfSB3aGlsZSAoIWdhbWVCb2FyZC5wbGFjZVNoaXAodHlwZSwgcm93LCBjb2wsIGRpcmVjdGlvbikpO1xufVxuXG4vLyBQbGFjZSBhbGwgNSBzaGlwcyBvbiBhbiBlbXB0eSBib2FyZFxuZnVuY3Rpb24gcGxhY2VGbGVldChnYW1lQm9hcmQpIHtcbiAgZ2FtZUJvYXJkLmluaXRCb2FyZCgpO1xuICBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCAnY2FycmllcicpO1xuICBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCAnYmF0dGxlc2hpcCcpO1xuICBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCAnY3J1aXNlcicpO1xuICBwbGFjZVNoaXBSYW5kb20oZ2FtZUJvYXJkLCAnc3VibWFyaW5lJyk7XG4gIHBsYWNlU2hpcFJhbmRvbShnYW1lQm9hcmQsICdkZXN0cm95ZXInKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdhbWUgPSAoKSA9PiB7XG4gIGxldCBjaGVhdCA9IGZhbHNlO1xuICBjb25zdCBodW1hbiA9IFBsYXllcignVG9tJywgJ2h1bWFuJyk7XG4gIGNvbnN0IGNvbXB1dGVyID0gUGxheWVyKCdKZXJyeScsICdjb21wdXRlcicpO1xuXG4gIC8vIFJhbmRvbWx5IHBsYWNlcyBzaGlwcyBvbiB0aGUgaHVtYW4gYm9hcmRcbiAgcGxhY2VGbGVldChodW1hbi5nYW1lQm9hcmQpO1xuICAvLyBSYW5kb21seSBwbGFjZXMgc2hpcHMgb24gdGhlIGNvbXB1dGVyIGJvYXJkXG4gIHBsYWNlRmxlZXQoY29tcHV0ZXIuZ2FtZUJvYXJkKTtcblxuICB1cGRhdGVEaXNwbGF5KGh1bWFuLCBjb21wdXRlciwgY2hlYXQpO1xuXG4gIC8vIFdhaXQgZm9yIGh1bWFuIHBsYXllciB0byBnbyBmaXJzdFxuICAvLyBIdW1hbiBwbGF5ZXIgcGxhY2VzIGJvbWJzIG9udG8gY29tcHV0ZXIncyBib2FyZFxuICBjb25zdCBjb21wdXRlckJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcHV0ZXItYm9hcmQnKTtcbiAgY29tcHV0ZXJCb2FyZEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAvLyBDaGVjayBpZiBhIGNlbGwgaXMgY2xpY2tlZCBvblxuICAgIC8vIENlbGxzIHRoYXQgaGF2ZSBiZWVuIGNsaWNrZWQgb24gaGF2ZSBgcG9pbnRlckV2ZW50cyA9IG5vbmVgXG4gICAgLy8gV2hlbiB0aG9zZSBjZWxscyBhcmUgY2xpY2ssIHRoZSBjbGFzcyBvZiB0aGUgdGFyZ2V0IGlzIHRoZSBib2FyZCwgbm90IGNlbGxcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgIC8vIFJldHJpZXZlIHRoZSByb3cgYW5kIGNvbCBmcm9tIHRoZSBlbGVtZW50J3MgZGF0YXNldFxuICAgICAgLy8gVGhlc2Ugd2VyZSBzZXQgd2hlbiB0aGVzZSBjZWxscyBhcmUgY3JlYXRlZCBpbiBkb20uanNcbiAgICAgIGNvbnN0IHsgcm93IH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgY29uc3QgeyBjb2wgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG5cbiAgICAgIC8vIEF0dGFjayB0aGUgY29tcHV0ZXIncyBnYW1lQm9hcmRcbiAgICAgIGNvbXB1dGVyLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAgIHVwZGF0ZURpc3BsYXkoaHVtYW4sIGNvbXB1dGVyLCBjaGVhdCk7XG4gICAgICAvLyBDaGVjayBpZiBpdCBpcyB0aGUgd2lubmluZyBtb3ZlXG4gICAgICBpZiAoY29tcHV0ZXIuZ2FtZUJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgICAgICBhd2FpdCBkZWxheSg1MDApO1xuICAgICAgICBhbGVydCgnR2FtZSBPdmVyLCB5b3Ugd29uIScpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDb21wdXRlciBib21icyB0aGUgaHVtYW4gcGxheWVyIGJvYXJkXG4gICAgICBodW1hbi5nZXRCb21iZWQoKTtcbiAgICAgIHVwZGF0ZURpc3BsYXkoaHVtYW4sIGNvbXB1dGVyLCBjaGVhdCk7XG4gICAgICAvLyBDaGVjayBpZiBpdCBpcyB0aGUgd2lubmluZyBtb3ZlXG4gICAgICBpZiAoaHVtYW4uZ2FtZUJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgICAgICBhd2FpdCBkZWxheSg1MDApO1xuICAgICAgICBhbGVydCgnR2FtZSBPdmVyLCB5b3UgbG9zdCEnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNoZWF0Q2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlYXQnKVxuICBjaGVhdENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjaGVhdCA9IGNoZWF0Q2hlY2tib3guY2hlY2tlZDtcbiAgICB1cGRhdGVEaXNwbGF5KGh1bWFuLCBjb21wdXRlciwgY2hlYXQpO1xuICB9KVxufTtcbiIsImltcG9ydCB7IENlbGwgfSBmcm9tICcuL2NyZWF0ZUNlbGwnO1xuaW1wb3J0IHsgQk9BUkRTSVpFLCBGTEVFVCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tICcuL2NyZWF0ZVNoaXAnO1xuXG5leHBvcnQgY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuICBsZXQgYm9hcmQ7XG5cbiAgY29uc3QgaW5pdEJvYXJkID0gKCkgPT4ge1xuICAgIGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCT0FSRFNJWkU7IGkrKykge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQk9BUkRTSVpFOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV0ucHVzaChDZWxsKGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJpbnRCb2FyZCA9ICgpID0+IHtcbiAgICBsZXQgZGlzcGxheSA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQk9BUkRTSVpFOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQk9BUkRTSVpFOyBqKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdLmlzQm9tYmVkKSB7XG4gICAgICAgICAgZGlzcGxheSA9ICd4JztcbiAgICAgICAgfSBlbHNlIGRpc3BsYXkgKz0gJy4nO1xuXG4gICAgICAgIGlmIChib2FyZFtpXVtqXS5oYXNTaGlwKSB7XG4gICAgICAgICAgZGlzcGxheSArPSAnUyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGxheSArPSAnICc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRpc3BsYXkgKz0gJ1xcbic7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRpc3BsYXkpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh0eXBlLCByb3csIGNvbCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAodHlwZSk7XG4gICAgY29uc3Qgc2l6ZSA9IHNoaXAuc2l6ZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiBjb2wgKyBzaXplID4gQk9BUkRTSVpFKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiByb3cgKyBzaXplID4gQk9BUkRTSVpFKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbcm93ICsgaV1bY29sXS5oYXNTaGlwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBib2FyZFtyb3cgKyBpXVtjb2xdLnBsYWNlU2hpcChzaGlwLCBpLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2wgKyBpXS5oYXNTaGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbcm93XVtjb2wgKyBpXS5wbGFjZVNoaXAoc2hpcCwgaSwgZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBpc0dhbWVPdmVyKCkge1xuICAgIGNvbnN0IGNvdW50ID0gYm9hcmQucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhY2N1bXVsYXRvciArXG4gICAgICAgIGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGNlbGwpID0+IGNlbGwuaXNCb21iZWQgJiYgY2VsbC5oYXNTaGlwKS5sZW5ndGhcbiAgICAgICk7XG4gICAgfSwgMCk7XG4gICAgaWYgKGNvdW50ID49IDE3KSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHJvdywgY29sKSA9PiB7XG4gICAgaWYgKGJvYXJkW3Jvd11bY29sXS5pc0JvbWJlZCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYXJrIHRoZSBjZWxsIGlzQm9tYmVkID0gdHJ1ZVxuICAgICAgYm9hcmRbcm93XVtjb2xdLmF0dGFjaygpO1xuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBoaXRcbiAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0uaGFzU2hpcCkge1xuICAgICAgICBjb25zdCBzaGlwID0gYm9hcmRbcm93XVtjb2xdLnNoaXA7XG4gICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH0sXG4gICAgaW5pdEJvYXJkLFxuICAgIHByaW50Qm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaXNHYW1lT3ZlcixcbiAgfTtcbn07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNldHVwRmxlZXQgfSBmcm9tICcuLi9zcmMvZmxlZXRTZXR1cCc7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9nYW1lJztcblxuc2V0dXBGbGVldCgpLnRoZW4oKCkgPT4ge1xuICBjb25zb2xlLmxvZygnQmF0dGxlc2hpcCcpO1xuICBnYW1lKCk7XG59KTtcbiIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gJy4uL3NyYy9nYW1lQm9hcmQnO1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKG5hbWUsIHR5cGUpID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gR2FtZUJvYXJkKCk7XG4gIGNvbnN0IHF1ZXVlID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tTnVtKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRCb21iZWRSYW5kb25seSgpIHtcbiAgICBsZXQgcm93LCBjb2wsIHJlc3VsdDtcbiAgICBkbyB7XG4gICAgICByb3cgPSBnZXRSYW5kb21OdW0oKTtcbiAgICAgIGNvbCA9IGdldFJhbmRvbU51bSgpO1xuICAgICAgcmVzdWx0ID0gZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gJycpO1xuICAgIHJldHVybiB7IHJvdywgY29sLCByZXN1bHQgfTtcbiAgfVxuXG4gIGNvbnN0IGdldEJvbWJlZCA9ICgpID0+IHtcbiAgICBsZXQgZmVlZGJhY2s7XG4gICAgbGV0IHJvdywgY29sLCByZXN1bHQ7XG5cbiAgICAvLyBJZiB0aGUgcXVldWUgaXMgZW1wdHksIGdldCBib21iZWQgYXQgYSByYW5kb21lIHBsYWNlXG4gICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIGZlZWRiYWNrID0gZ2V0Qm9tYmVkUmFuZG9ubHkoKTtcbiAgICAgIHJvdyA9IGZlZWRiYWNrLnJvdztcbiAgICAgIGNvbCA9IGZlZWRiYWNrLmNvbDtcbiAgICAgIHJlc3VsdCA9IGZlZWRiYWNrLnJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gR28gdGhyb3VnaCB0aGUgcXVldWUgdG8gZ2V0IGJvbWJlZCBhdCB0aGUgZmlyc3QgY2VsbCB0aGF0J3Mgbm90IGFscmVhZHkgYm9tYmVkXG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIHJvdyA9IHRhcmdldC5yb3c7XG4gICAgICAgIGNvbCA9IHRhcmdldC5jb2w7XG4gICAgICAgIHJlc3VsdCA9IGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gJycpO1xuICAgIH1cblxuICAgIC8vIElmIGhpdCwgcHVzaCB0aGlzIGNlbGwncyA0IGhvcml6b250YWwgYW5kIHZlcnRpY2FsIG5laWdoYm91cnMgXG4gICAgLy8gdGhhdCBhcmUgbm90IGFscmVhZHkgYm9tYmVkIGludG8gdGhlIHF1ZXVlXG4gICAgaWYgKHJlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAtMTsgaSA8PSAxOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IC0xOyBqIDw9IDE7IGorKykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGkgIT09IGogJiYgLy8gcmVtb3ZlIGRpYWdvbmFsXG4gICAgICAgICAgICBpICsgaiAhPT0gMCAmJiAvLyByZW1vdmUgZGlhZ29uYWwgXG4gICAgICAgICAgICByb3cgKyBpID49IDAgJiYgLy8gbWFrZSBzdXJlIGNlbGwgaXMgd2l0aGluIHRoZSBnYW1lYm9hcmRcbiAgICAgICAgICAgIHJvdyArIGkgPCAxMCAmJlxuICAgICAgICAgICAgY29sICsgaiA+PSAwICYmXG4gICAgICAgICAgICBjb2wgKyBqIDwgMTAgJiZcbiAgICAgICAgICAgICFnYW1lQm9hcmQuYm9hcmRbcm93ICsgaV1bY29sICsgal0uaXNCb21iZWQgLy8gbm90IGJvbWJlZFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcXVldWUucHVzaChnYW1lQm9hcmQuYm9hcmRbcm93ICsgaV1bY29sICsgal0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0IG5hbWUodmFsdWUpIHtcbiAgICAgIG5hbWUgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBzZXQgdHlwZSh2YWx1ZSkge1xuICAgICAgdHlwZSA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IHR5cGUoKSB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9LFxuICAgIGdldCBnYW1lQm9hcmQoKSB7XG4gICAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICAgIH0sXG4gICAgZ2V0Qm9tYmVkLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==