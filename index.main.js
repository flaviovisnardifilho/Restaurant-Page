/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Pompiere-Regular.ttf */ "./src/assets/fonts/Pompiere-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/PrincessSofia-Regular.ttf */ "./src/assets/fonts/PrincessSofia-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Pompiere;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: PrincessSofia;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    font-family: Pompiere;\n    color: #606c38;\n    background-color: #dda15e;\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* HEADER */\n.header {\n    height: 150px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\nh1 {\n    font-family: PrincessSofia;\n    font-size: 2.5rem;\n    color: #283618;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 25px;\n}\n\nnav>button {\n    padding: 5px;\n    background-color: #fefae0;\n    border: none;\n    border-radius: 3px;\n    font-family: PrincessSofia;\n    font-size: large;\n}\n\nnav>button:hover {\n    background-color: #606c38\n}\n\n.tabcontent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* HOME */\nimg {\n    border-radius: 2%;\n    /* background-color: #bc6c25; */\n    /* border-radius: 5%; */\n}\n\n.interior-attribution {\n    margin-bottom: 20px;\n}\n\na {\n    color: #fefae0;\n    text-decoration: none;\n}\n\na:hover {\n    background-color: #606c38;\n}\n\nh2 {\n    padding: 5px;\n    text-align: center;\n}\n\n/* MENU */\n.smoothie {\n    background-color: #fefae0;\n    border: #283618 2px;\n    border-style: inset;\n    border-radius: 5px;\n    box-shadow: 0 0 5px #283618 inset;\n    margin: 8px;\n    padding: 5px;\n    width: 90%;\n}\n\n#menu h2 {\n    margin: -5px -5px 5px -5px;\n    box-shadow: 0 0 5px #283618 inset;\n    font-family: PrincessSofia;\n    color: #283618;\n    background-color: #bc6c25;\n}\n\n#menu .smoothieContent {\n    display: flex;\n    gap: 8px;\n\n}\n\n#menu .smoothiePhoto {\n    font-size: 1rem;\n}\n\n#menu .smoothie-description {\n    padding: 10px;\n    color: #283618;\n    font-size: 1.3rem;\n    width: 100%;\n}\n\n#menu a {\n    color: #283618;\n}\n#menu a:hover {\n    color: #fefae0;\n}\n#menu img {\n    border-radius: 5px;\n    box-shadow: 0 0 5px #283618;\n}\n\n#menu .smoothie-description {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#menu .price {\n    font-size: 2rem;\n    color: #283618;\n    text-align: end;\n    padding: 10px;\n\n\n}\n\n/* ABOUT */\n#about {\n    margin-top: 40px;\n    padding: 10px;\n    text-align: center;\n}\n\n#thanks {\n    font-size: 2rem;\n    font-weight: bold;\n    color: #283618;\n    margin-bottom: 40px;\n}\n\n#not-responsible {\n    padding: 40px;\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAAgD;AACpD;;AAEA;IACI,0BAA0B;IAC1B,4CAAqD;AACzD;;AAEA;IACI,WAAW;IACX,YAAY;;AAEhB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA,WAAW;AACX;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA;IACI;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA,SAAS;AACT;IACI,iBAAiB;IACjB,+BAA+B;IAC/B,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA,SAAS;AACT;IACI,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,iCAAiC;IACjC,WAAW;IACX,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,0BAA0B;IAC1B,iCAAiC;IACjC,0BAA0B;IAC1B,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,QAAQ;;AAEZ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,cAAc;IACd,eAAe;IACf,aAAa;;;AAGjB;;AAEA,UAAU;AACV;IACI,gBAAgB;IAChB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["@font-face {\n    font-family: Pompiere;\n    src: url('../assets/fonts/Pompiere-Regular.ttf');\n}\n\n@font-face {\n    font-family: PrincessSofia;\n    src: url('../assets/fonts/PrincessSofia-Regular.ttf');\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    font-family: Pompiere;\n    color: #606c38;\n    background-color: #dda15e;\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* HEADER */\n.header {\n    height: 150px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\nh1 {\n    font-family: PrincessSofia;\n    font-size: 2.5rem;\n    color: #283618;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 25px;\n}\n\nnav>button {\n    padding: 5px;\n    background-color: #fefae0;\n    border: none;\n    border-radius: 3px;\n    font-family: PrincessSofia;\n    font-size: large;\n}\n\nnav>button:hover {\n    background-color: #606c38\n}\n\n.tabcontent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* HOME */\nimg {\n    border-radius: 2%;\n    /* background-color: #bc6c25; */\n    /* border-radius: 5%; */\n}\n\n.interior-attribution {\n    margin-bottom: 20px;\n}\n\na {\n    color: #fefae0;\n    text-decoration: none;\n}\n\na:hover {\n    background-color: #606c38;\n}\n\nh2 {\n    padding: 5px;\n    text-align: center;\n}\n\n/* MENU */\n.smoothie {\n    background-color: #fefae0;\n    border: #283618 2px;\n    border-style: inset;\n    border-radius: 5px;\n    box-shadow: 0 0 5px #283618 inset;\n    margin: 8px;\n    padding: 5px;\n    width: 90%;\n}\n\n#menu h2 {\n    margin: -5px -5px 5px -5px;\n    box-shadow: 0 0 5px #283618 inset;\n    font-family: PrincessSofia;\n    color: #283618;\n    background-color: #bc6c25;\n}\n\n#menu .smoothieContent {\n    display: flex;\n    gap: 8px;\n\n}\n\n#menu .smoothiePhoto {\n    font-size: 1rem;\n}\n\n#menu .smoothie-description {\n    padding: 10px;\n    color: #283618;\n    font-size: 1.3rem;\n    width: 100%;\n}\n\n#menu a {\n    color: #283618;\n}\n#menu a:hover {\n    color: #fefae0;\n}\n#menu img {\n    border-radius: 5px;\n    box-shadow: 0 0 5px #283618;\n}\n\n#menu .smoothie-description {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#menu .price {\n    font-size: 2rem;\n    color: #283618;\n    text-align: end;\n    padding: 10px;\n\n\n}\n\n/* ABOUT */\n#about {\n    margin-top: 40px;\n    padding: 10px;\n    text-align: center;\n}\n\n#thanks {\n    font-size: 2rem;\n    font-weight: bold;\n    color: #283618;\n    margin-bottom: 40px;\n}\n\n#not-responsible {\n    padding: 40px;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAbout)
/* harmony export */ });
function loadAbout() {
  const content = document.querySelector('#content');

  const tabcontent = document.createElement('div');
  tabcontent.classList.add('tabcontent');
  tabcontent.id = 'about';

  const thanks = document.createElement('p');
  thanks.textContent = 'Thank you for choosing Amazing Smoothies!';
  thanks.id = 'thanks';
  tabcontent.appendChild(thanks);

  const notResponsible = document.createElement('p');
  notResponsible.textContent =
    "If you are not feeling very well after enjoy our smoothies, please don't bother us, just go to a hospital close to you. Good luck!";
  notResponsible.id = 'not-responsible';
  tabcontent.appendChild(notResponsible);
  content.appendChild(tabcontent);
}


/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _assets_img_smoothie_clipart_md_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/smoothie-clipart-md.png */ "./src/assets/img/smoothie-clipart-md.png");


function loadHome() {
  const content = document.querySelector('#content');

  const tabcontent = document.createElement('div');
  tabcontent.classList.add('tabcontent');
  tabcontent.id = 'home';

  const openImage = document.createElement('img');
  openImage.src = _assets_img_smoothie_clipart_md_png__WEBPACK_IMPORTED_MODULE_0__;
  
  openImage.alt = 'Green smoothie';
  openImage.height = '350';
  tabcontent.appendChild(openImage);

  const pAttribution = document.createElement('p');
  pAttribution.classList.add('interior-attribution');
  pAttribution.textContent = 'Clipart by ';
  const aAttribution = document.createElement('a');
  aAttribution.href =
    'https://creazilla.com/nodes/1795339-smoothie-clipart';
  aAttribution.textContent = 'Creazilla';
  pAttribution.appendChild(aAttribution);
  tabcontent.appendChild(pAttribution);

  const footerText = document.createElement('h3');
  footerText.textContent = 'Come and taste our insanely delicious smoothies!';
  tabcontent.appendChild(footerText);

  content.appendChild(tabcontent);
}


/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _assets_img_pexels_alisha_mishra_1346347_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/pexels-alisha-mishra-1346347.jpg */ "./src/assets/img/pexels-alisha-mishra-1346347.jpg");
/* harmony import */ var _assets_img_pexels_moldy_vintages_8573731_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/pexels-moldy-vintages-8573731.jpg */ "./src/assets/img/pexels-moldy-vintages-8573731.jpg");
/* harmony import */ var _assets_img_pexels_alleksana_4051785_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/pexels-alleksana-4051785.jpg */ "./src/assets/img/pexels-alleksana-4051785.jpg");
/* harmony import */ var _assets_img_pexels_valeria_boltneva_1169004_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/pexels-valeria-boltneva-1169004.jpg */ "./src/assets/img/pexels-valeria-boltneva-1169004.jpg");
/* harmony import */ var _assets_img_pexels_annelies_brouw_3523148_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/pexels-annelies-brouw-3523148.jpg */ "./src/assets/img/pexels-annelies-brouw-3523148.jpg");
/* harmony import */ var _assets_img_pexels_vd_photography_12912638_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/pexels-vd-photography-12912638.jpg */ "./src/assets/img/pexels-vd-photography-12912638.jpg");
/* harmony import */ var _assets_img_pexels_roman_odintsov_4551975_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/pexels-roman-odintsov-4551975.jpg */ "./src/assets/img/pexels-roman-odintsov-4551975.jpg");
/* harmony import */ var _assets_img_pexels_kelvin_octa_7190365_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/img/pexels-kelvin-octa-7190365.jpg */ "./src/assets/img/pexels-kelvin-octa-7190365.jpg");








const smoothies = [
    {
        title: 'Pure-ish Broccoli Smoothie',
        image: {
            src: _assets_img_pexels_alisha_mishra_1346347_jpg__WEBPACK_IMPORTED_MODULE_0__,
            imageAlt: 'Broccoli smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/clear-glass-bottle-filled-with-broccoli-shake-1346347/',
            attributionText: 'Alisha Mishra',
        },
        description: 'Made with the greenest broccoli, secret spices and backyard grass',

    },
    
    {
        title: 'Warm Ice Blue',
        image: {
            src: _assets_img_pexels_moldy_vintages_8573731_jpg__WEBPACK_IMPORTED_MODULE_1__,
            imageAlt: 'Blue smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/glass-with-blue-liquid-and-whipped-cream-8573731/',
            attributionText: 'moldy vintages',
        },
        description: 'The blue stuff from the frezzer defrost with some shell powder topping',

    },
    
    {
        title: 'Banana\'s Peel Special',
        image: {
            src: _assets_img_pexels_alleksana_4051785_jpg__WEBPACK_IMPORTED_MODULE_2__,
            imageAlt: 'Banana smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/food-cold-relaxation-summer-4051785/',
            attributionText: 'alleksana',
        },
        description: 'All the peel you\'d like in a banana smoothie and more!',

    },

    {
        title: 'All the stuff from that box',
        image: {
            src: _assets_img_pexels_valeria_boltneva_1169004_jpg__WEBPACK_IMPORTED_MODULE_3__,
            imageAlt: 'All you can fit smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/person-holding-saucer-with-mug-of-chocolate-ice-cream-coffee-1169004/',
            attributionText: 'Valeria Boltneva',
        },
        description: 'For avid tasters, everything that fits in the mug',

    },

    {
        title: 'Christmas Special',
        image: {
            src: _assets_img_pexels_annelies_brouw_3523148_jpg__WEBPACK_IMPORTED_MODULE_4__,
            imageAlt: 'Christmas smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/ice-cream-on-glass-with-cookies-on-top-3523148/',
            attributionText: 'Annelies Brouw',
        },
        description: 'Christmas tree leaves and seeds, for that nostalgic taste',

    },

    {
        title: 'Eletrical Mango',
        image: {
            src: _assets_img_pexels_vd_photography_12912638_jpg__WEBPACK_IMPORTED_MODULE_5__,
            imageAlt: 'Mango smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/clear-drinking-glass-with-yellow-liquid-on-brown-wooden-coaster-12912638/',
            attributionText: 'VD',
        },
        description: 'Traditional frog spawn mixed with mango and topped with eletrical wire scraps',

    },
    {
        title: 'Chef\'s Red Leftovers',
        image: {
            src: _assets_img_pexels_roman_odintsov_4551975_jpg__WEBPACK_IMPORTED_MODULE_6__,
            imageAlt: 'Red leftovers smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/apple-and-beetroot-smoothie-4551975/',
            attributionText: 'ROMAN ODINTSOV',
        },
        description: 'Only the best leftovers from the chef\'s house',

    },
    {
        title: 'Cabbage Smoothie',
        image: {
            src: _assets_img_pexels_kelvin_octa_7190365_jpg__WEBPACK_IMPORTED_MODULE_7__,
            imageAlt: 'Cabbage smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/fruit-salad-with-yoghurt-in-plastic-jars-on-chopping-board-beside-mango-7190365/',
            attributionText: 'kelvin octa',
        },
        description: 'Lightly seasoned cabbage smoothie, combine with mango or strawberry',

    },
]

const smoothieFactor = ((smoothie)=>{
    const smoothieSection = document.createElement('section');
    smoothieSection.classList.add('smoothie')
    const title = document.createElement('h2')
    title.textContent = smoothie.title
    title.classList.add('title')

    smoothieSection.appendChild(title)
    const smoothieContent = document.createElement('div')
    smoothieContent.classList.add('smoothieContent')
    const smoothiePhoto = document.createElement('div')
    smoothiePhoto.classList.add('smoothiePhoto')

    const openImage = document.createElement('img');
    openImage.src = smoothie.image.src;
    openImage.alt = smoothie.image.alt;
    openImage.width = smoothie.image.width; //150

    const pAttribution = document.createElement('p');
    pAttribution.textContent = 'Photo by ';
    const aAttribution = document.createElement('a');
    aAttribution.href =smoothie.image.attributionHref;
    aAttribution.textContent = smoothie.image.attributionText;
    pAttribution.appendChild(aAttribution);
    
    smoothiePhoto.appendChild(openImage);
    smoothiePhoto.appendChild(pAttribution);
    smoothieContent.appendChild(smoothiePhoto)

    const description = document.createElement('div')
    description.classList.add('smoothie-description')
       const descriptionText = document.createElement('p');
    descriptionText.classList.add('smoothie-description-text')
    descriptionText.textContent = smoothie.description;
    description.appendChild(descriptionText)

    const price = document.createElement('p');
    price.classList.add('price')
    price.textContent = `$${Math.round((Math.random() * 14 + 9))},99`;
    description.appendChild(price)
    
    smoothieContent.appendChild(description)
    smoothieSection.appendChild(smoothieContent)


    return smoothieSection

})

function loadMenu() {
    const content = document.querySelector('#content');

    const tabcontent = document.createElement('div');
    tabcontent.classList.add('tabcontent');
    tabcontent.id = 'menu';

    Array.from(smoothies).forEach(i=> {
        console.log(i)
     tabcontent.appendChild(smoothieFactor(i))
    })

    content.appendChild(tabcontent);
  }



/***/ }),

/***/ "./src/assets/fonts/Pompiere-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Pompiere-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d64e9f0ce4043c4bfaac.ttf";

/***/ }),

/***/ "./src/assets/fonts/PrincessSofia-Regular.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/PrincessSofia-Regular.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68adf9e26e37c9db1584.ttf";

/***/ }),

/***/ "./src/assets/img/pexels-alisha-mishra-1346347.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/img/pexels-alisha-mishra-1346347.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6df89113307565f8942.jpg";

/***/ }),

/***/ "./src/assets/img/pexels-alleksana-4051785.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/img/pexels-alleksana-4051785.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "362d0c652618be8f3103.jpg";

/***/ }),

/***/ "./src/assets/img/pexels-annelies-brouw-3523148.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/img/pexels-annelies-brouw-3523148.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fea0d81df8f1cd49c71b.jpg";

/***/ }),

/***/ "./src/assets/img/pexels-kelvin-octa-7190365.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/img/pexels-kelvin-octa-7190365.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72edb09925403bff91c4.jpg";

/***/ }),

/***/ "./src/assets/img/pexels-moldy-vintages-8573731.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/img/pexels-moldy-vintages-8573731.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1491ae73f7574a39e422.jpg";

/***/ }),

/***/ "./src/assets/img/pexels-roman-odintsov-4551975.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/img/pexels-roman-odintsov-4551975.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85e5f44c6da333f2fba4.jpg";

/***/ }),

/***/ "./src/assets/img/pexels-valeria-boltneva-1169004.jpg":
/*!************************************************************!*\
  !*** ./src/assets/img/pexels-valeria-boltneva-1169004.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a595e47bfba355b984e1.jpg";

/***/ }),

/***/ "./src/assets/img/pexels-vd-photography-12912638.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/img/pexels-vd-photography-12912638.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0793bd685a7d5128c4e6.jpg";

/***/ }),

/***/ "./src/assets/img/smoothie-clipart-md.png":
/*!************************************************!*\
  !*** ./src/assets/img/smoothie-clipart-md.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bf33ec2722ecf9132f2.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/js/about.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/js/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");





function init() {
  const content = document.createElement('div');
  content.id = 'content';
  document.body.appendChild(content);

  const header = document.createElement('div');
  header.classList.add('header');

  const title = document.createElement('h1');
  title.textContent = 'Amazing Smoothies';
  header.appendChild(title);

  const subTitle = document.createElement('h3');
  subTitle.textContent = 'Be surprised with our unconventional ingredients';
  header.appendChild(subTitle);

  const navButtons = document.createElement('nav');
  const navButtonHome = document.createElement('button');
  navButtonHome.textContent = 'Home';
  navButtons.appendChild(navButtonHome);

  const navButtonMenu = document.createElement('button');
  navButtonMenu.textContent = 'Menu';
  navButtons.appendChild(navButtonMenu);

  const navButtonAbout = document.createElement('button');
  navButtonAbout.textContent = 'About';
  navButtons.appendChild(navButtonAbout);

  header.appendChild(navButtons);
  content.appendChild(header);

  (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_about__WEBPACK_IMPORTED_MODULE_1__["default"])();
  
  const tabButtons = Array.from(document.querySelectorAll('button'));

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', changeTabs.bind(this, btn.textContent));
  });
}


function changeTabs(tab, e) {
    // from https://www.w3schools.com/howto/howto_js_tabs.asp

    const tabcontent = document.getElementsByClassName('tabcontent');
    Array.from(tabcontent).forEach((i) => {
      if (i.id !== tab.toLowerCase()) {
        i.style.display = 'none';
      } else {
        i.style.display = 'flex';
      }
    });
  }

init();
changeTabs('home');


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EwQjtBQUNNO0FBQ0Y7QUFDQTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLGlEQUFRO0FBQ1YsRUFBRSxpREFBUTtBQUNWLEVBQUUsa0RBQVM7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9Qb21waWVyZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9QcmluY2Vzc1NvZmlhLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUG9tcGllcmU7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBQcmluY2Vzc1NvZmlhO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogUG9tcGllcmU7XFxuICAgIGNvbG9yOiAjNjA2YzM4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRhMTVlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LWZhbWlseTogUHJpbmNlc3NTb2ZpYTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiAjMjgzNjE4O1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG5uYXY+YnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmYWUwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZm9udC1mYW1pbHk6IFByaW5jZXNzU29maWE7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbm5hdj5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2YzM4XFxufVxcblxcbi50YWJjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogSE9NRSAqL1xcbmltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYmM2YzI1OyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1JTsgKi9cXG59XFxuXFxuLmludGVyaW9yLWF0dHJpYnV0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiAjZmVmYWUwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2YzM4O1xcbn1cXG5cXG5oMiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBNRU5VICovXFxuLnNtb290aGllIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmFlMDtcXG4gICAgYm9yZGVyOiAjMjgzNjE4IDJweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICMyODM2MTggaW5zZXQ7XFxuICAgIG1hcmdpbjogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbiNtZW51IGgyIHtcXG4gICAgbWFyZ2luOiAtNXB4IC01cHggNXB4IC01cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzI4MzYxOCBpbnNldDtcXG4gICAgZm9udC1mYW1pbHk6IFByaW5jZXNzU29maWE7XFxuICAgIGNvbG9yOiAjMjgzNjE4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmM2YzI1O1xcbn1cXG5cXG4jbWVudSAuc21vb3RoaWVDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuXFxufVxcblxcbiNtZW51IC5zbW9vdGhpZVBob3RvIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jbWVudSAuc21vb3RoaWUtZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogIzI4MzYxODtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbWVudSBhIHtcXG4gICAgY29sb3I6ICMyODM2MTg7XFxufVxcbiNtZW51IGE6aG92ZXIge1xcbiAgICBjb2xvcjogI2ZlZmFlMDtcXG59XFxuI21lbnUgaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICMyODM2MTg7XFxufVxcblxcbiNtZW51IC5zbW9vdGhpZS1kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI21lbnUgLnByaWNlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogIzI4MzYxODtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcblxcbn1cXG5cXG4vKiBBQk9VVCAqL1xcbiNhYm91dCB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RoYW5rcyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjMjgzNjE4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4jbm90LXJlc3BvbnNpYmxlIHtcXG4gICAgcGFkZGluZzogNDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDRDQUFxRDtBQUN6RDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBLFdBQVc7QUFDWDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUEsU0FBUztBQUNUO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQywwQkFBMEI7SUFDMUIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFROztBQUVaOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7OztBQUdqQjs7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBQb21waWVyZTtcXG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Qb21waWVyZS1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFByaW5jZXNzU29maWE7XFxuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvUHJpbmNlc3NTb2ZpYS1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG5cXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6IFBvbXBpZXJlO1xcbiAgICBjb2xvcjogIzYwNmMzODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkYTE1ZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4uaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6IFByaW5jZXNzU29maWE7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjb2xvcjogIzI4MzYxODtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxubmF2PmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmFlMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBQcmluY2Vzc1NvZmlhO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG5uYXY+YnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNmMzOFxcbn1cXG5cXG4udGFiY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEhPTUUgKi9cXG5pbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2JjNmMyNTsgKi9cXG4gICAgLyogYm9yZGVyLXJhZGl1czogNSU7ICovXFxufVxcblxcbi5pbnRlcmlvci1hdHRyaWJ1dGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogI2ZlZmFlMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNmMzODtcXG59XFxuXFxuaDIge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogTUVOVSAqL1xcbi5zbW9vdGhpZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZhZTA7XFxuICAgIGJvcmRlcjogIzI4MzYxOCAycHg7XFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjMjgzNjE4IGluc2V0O1xcbiAgICBtYXJnaW46IDhweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4jbWVudSBoMiB7XFxuICAgIG1hcmdpbjogLTVweCAtNXB4IDVweCAtNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICMyODM2MTggaW5zZXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBQcmluY2Vzc1NvZmlhO1xcbiAgICBjb2xvcjogIzI4MzYxODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JjNmMyNTtcXG59XFxuXFxuI21lbnUgLnNtb290aGllQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcblxcbn1cXG5cXG4jbWVudSAuc21vb3RoaWVQaG90byB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI21lbnUgLnNtb290aGllLWRlc2NyaXB0aW9uIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6ICMyODM2MTg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI21lbnUgYSB7XFxuICAgIGNvbG9yOiAjMjgzNjE4O1xcbn1cXG4jbWVudSBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZWZhZTA7XFxufVxcbiNtZW51IGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjMjgzNjE4O1xcbn1cXG5cXG4jbWVudSAuc21vb3RoaWUtZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNtZW51IC5wcmljZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICMyODM2MTg7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG5cXG59XFxuXFxuLyogQUJPVVQgKi9cXG4jYWJvdXQge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0aGFua3Mge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzI4MzYxODtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuI25vdC1yZXNwb25zaWJsZSB7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQWJvdXQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGNvbnN0IHRhYmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFiY29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWJjb250ZW50Jyk7XG4gIHRhYmNvbnRlbnQuaWQgPSAnYWJvdXQnO1xuXG4gIGNvbnN0IHRoYW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGhhbmtzLnRleHRDb250ZW50ID0gJ1RoYW5rIHlvdSBmb3IgY2hvb3NpbmcgQW1hemluZyBTbW9vdGhpZXMhJztcbiAgdGhhbmtzLmlkID0gJ3RoYW5rcyc7XG4gIHRhYmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhhbmtzKTtcblxuICBjb25zdCBub3RSZXNwb25zaWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbm90UmVzcG9uc2libGUudGV4dENvbnRlbnQgPVxuICAgIFwiSWYgeW91IGFyZSBub3QgZmVlbGluZyB2ZXJ5IHdlbGwgYWZ0ZXIgZW5qb3kgb3VyIHNtb290aGllcywgcGxlYXNlIGRvbid0IGJvdGhlciB1cywganVzdCBnbyB0byBhIGhvc3BpdGFsIGNsb3NlIHRvIHlvdS4gR29vZCBsdWNrIVwiO1xuICBub3RSZXNwb25zaWJsZS5pZCA9ICdub3QtcmVzcG9uc2libGUnO1xuICB0YWJjb250ZW50LmFwcGVuZENoaWxkKG5vdFJlc3BvbnNpYmxlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJjb250ZW50KTtcbn1cbiIsImltcG9ydCBjb3ZlckltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWcvc21vb3RoaWUtY2xpcGFydC1tZC5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBjb25zdCB0YWJjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhYmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiY29udGVudCcpO1xuICB0YWJjb250ZW50LmlkID0gJ2hvbWUnO1xuXG4gIGNvbnN0IG9wZW5JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBvcGVuSW1hZ2Uuc3JjID0gY292ZXJJbWFnZTtcbiAgXG4gIG9wZW5JbWFnZS5hbHQgPSAnR3JlZW4gc21vb3RoaWUnO1xuICBvcGVuSW1hZ2UuaGVpZ2h0ID0gJzM1MCc7XG4gIHRhYmNvbnRlbnQuYXBwZW5kQ2hpbGQob3BlbkltYWdlKTtcblxuICBjb25zdCBwQXR0cmlidXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBBdHRyaWJ1dGlvbi5jbGFzc0xpc3QuYWRkKCdpbnRlcmlvci1hdHRyaWJ1dGlvbicpO1xuICBwQXR0cmlidXRpb24udGV4dENvbnRlbnQgPSAnQ2xpcGFydCBieSAnO1xuICBjb25zdCBhQXR0cmlidXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGFBdHRyaWJ1dGlvbi5ocmVmID1cbiAgICAnaHR0cHM6Ly9jcmVhemlsbGEuY29tL25vZGVzLzE3OTUzMzktc21vb3RoaWUtY2xpcGFydCc7XG4gIGFBdHRyaWJ1dGlvbi50ZXh0Q29udGVudCA9ICdDcmVhemlsbGEnO1xuICBwQXR0cmlidXRpb24uYXBwZW5kQ2hpbGQoYUF0dHJpYnV0aW9uKTtcbiAgdGFiY29udGVudC5hcHBlbmRDaGlsZChwQXR0cmlidXRpb24pO1xuXG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gJ0NvbWUgYW5kIHRhc3RlIG91ciBpbnNhbmVseSBkZWxpY2lvdXMgc21vb3RoaWVzISc7XG4gIHRhYmNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJjb250ZW50KTtcbn1cbiIsImltcG9ydCBicm9jY29saVNtb290aGllIGZyb20gJy4uL2Fzc2V0cy9pbWcvcGV4ZWxzLWFsaXNoYS1taXNocmEtMTM0NjM0Ny5qcGcnXG5pbXBvcnQgd2FybUljZUJsdWUgZnJvbSAnLi4vYXNzZXRzL2ltZy9wZXhlbHMtbW9sZHktdmludGFnZXMtODU3MzczMS5qcGcnXG5pbXBvcnQgYmFuYW5hUGVlbCBmcm9tICcuLi9hc3NldHMvaW1nL3BleGVscy1hbGxla3NhbmEtNDA1MTc4NS5qcGcnXG5pbXBvcnQgYWxsdGhlU3R1ZmYgZnJvbSAnLi4vYXNzZXRzL2ltZy9wZXhlbHMtdmFsZXJpYS1ib2x0bmV2YS0xMTY5MDA0LmpwZydcbmltcG9ydCBjaHJpc3RtYXNTcGVjaWFsIGZyb20gJy4uL2Fzc2V0cy9pbWcvcGV4ZWxzLWFubmVsaWVzLWJyb3V3LTM1MjMxNDguanBnJ1xuaW1wb3J0IGVsZXRyaWNhbE1hbmdvIGZyb20gJy4uL2Fzc2V0cy9pbWcvcGV4ZWxzLXZkLXBob3RvZ3JhcGh5LTEyOTEyNjM4LmpwZydcbmltcG9ydCBjaGVmTGVmdG92ZXJzIGZyb20gJy4uL2Fzc2V0cy9pbWcvcGV4ZWxzLXJvbWFuLW9kaW50c292LTQ1NTE5NzUuanBnJ1xuaW1wb3J0IGNhYmJhZ2VTbW9vdGhpZSBmcm9tICcuLi9hc3NldHMvaW1nL3BleGVscy1rZWx2aW4tb2N0YS03MTkwMzY1LmpwZydcbmNvbnN0IHNtb290aGllcyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnUHVyZS1pc2ggQnJvY2NvbGkgU21vb3RoaWUnLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc3JjOiBicm9jY29saVNtb290aGllLFxuICAgICAgICAgICAgaW1hZ2VBbHQ6ICdCcm9jY29saSBzbW9vdGhpZScsXG4gICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgYXR0cmlidXRpb25IcmVmOiAnaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9waG90by9jbGVhci1nbGFzcy1ib3R0bGUtZmlsbGVkLXdpdGgtYnJvY2NvbGktc2hha2UtMTM0NjM0Ny8nLFxuICAgICAgICAgICAgYXR0cmlidXRpb25UZXh0OiAnQWxpc2hhIE1pc2hyYScsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTWFkZSB3aXRoIHRoZSBncmVlbmVzdCBicm9jY29saSwgc2VjcmV0IHNwaWNlcyBhbmQgYmFja3lhcmQgZ3Jhc3MnLFxuXG4gICAgfSxcbiAgICBcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnV2FybSBJY2UgQmx1ZScsXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICBzcmM6IHdhcm1JY2VCbHVlLFxuICAgICAgICAgICAgaW1hZ2VBbHQ6ICdCbHVlIHNtb290aGllJyxcbiAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbkhyZWY6ICdodHRwczovL3d3dy5wZXhlbHMuY29tL3Bob3RvL2dsYXNzLXdpdGgtYmx1ZS1saXF1aWQtYW5kLXdoaXBwZWQtY3JlYW0tODU3MzczMS8nLFxuICAgICAgICAgICAgYXR0cmlidXRpb25UZXh0OiAnbW9sZHkgdmludGFnZXMnLFxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBibHVlIHN0dWZmIGZyb20gdGhlIGZyZXp6ZXIgZGVmcm9zdCB3aXRoIHNvbWUgc2hlbGwgcG93ZGVyIHRvcHBpbmcnLFxuXG4gICAgfSxcbiAgICBcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnQmFuYW5hXFwncyBQZWVsIFNwZWNpYWwnLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc3JjOiBiYW5hbmFQZWVsLFxuICAgICAgICAgICAgaW1hZ2VBbHQ6ICdCYW5hbmEgc21vb3RoaWUnLFxuICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uSHJlZjogJ2h0dHBzOi8vd3d3LnBleGVscy5jb20vcGhvdG8vZm9vZC1jb2xkLXJlbGF4YXRpb24tc3VtbWVyLTQwNTE3ODUvJyxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uVGV4dDogJ2FsbGVrc2FuYScsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWxsIHRoZSBwZWVsIHlvdVxcJ2QgbGlrZSBpbiBhIGJhbmFuYSBzbW9vdGhpZSBhbmQgbW9yZSEnLFxuXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdBbGwgdGhlIHN0dWZmIGZyb20gdGhhdCBib3gnLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc3JjOiBhbGx0aGVTdHVmZixcbiAgICAgICAgICAgIGltYWdlQWx0OiAnQWxsIHlvdSBjYW4gZml0IHNtb290aGllJyxcbiAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbkhyZWY6ICdodHRwczovL3d3dy5wZXhlbHMuY29tL3Bob3RvL3BlcnNvbi1ob2xkaW5nLXNhdWNlci13aXRoLW11Zy1vZi1jaG9jb2xhdGUtaWNlLWNyZWFtLWNvZmZlZS0xMTY5MDA0LycsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvblRleHQ6ICdWYWxlcmlhIEJvbHRuZXZhJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246ICdGb3IgYXZpZCB0YXN0ZXJzLCBldmVyeXRoaW5nIHRoYXQgZml0cyBpbiB0aGUgbXVnJyxcblxuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIHRpdGxlOiAnQ2hyaXN0bWFzIFNwZWNpYWwnLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc3JjOiBjaHJpc3RtYXNTcGVjaWFsLFxuICAgICAgICAgICAgaW1hZ2VBbHQ6ICdDaHJpc3RtYXMgc21vb3RoaWUnLFxuICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uSHJlZjogJ2h0dHBzOi8vd3d3LnBleGVscy5jb20vcGhvdG8vaWNlLWNyZWFtLW9uLWdsYXNzLXdpdGgtY29va2llcy1vbi10b3AtMzUyMzE0OC8nLFxuICAgICAgICAgICAgYXR0cmlidXRpb25UZXh0OiAnQW5uZWxpZXMgQnJvdXcnLFxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NocmlzdG1hcyB0cmVlIGxlYXZlcyBhbmQgc2VlZHMsIGZvciB0aGF0IG5vc3RhbGdpYyB0YXN0ZScsXG5cbiAgICB9LFxuXG4gICAge1xuICAgICAgICB0aXRsZTogJ0VsZXRyaWNhbCBNYW5nbycsXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICBzcmM6IGVsZXRyaWNhbE1hbmdvLFxuICAgICAgICAgICAgaW1hZ2VBbHQ6ICdNYW5nbyBzbW9vdGhpZScsXG4gICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgYXR0cmlidXRpb25IcmVmOiAnaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9waG90by9jbGVhci1kcmlua2luZy1nbGFzcy13aXRoLXllbGxvdy1saXF1aWQtb24tYnJvd24td29vZGVuLWNvYXN0ZXItMTI5MTI2MzgvJyxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uVGV4dDogJ1ZEJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUcmFkaXRpb25hbCBmcm9nIHNwYXduIG1peGVkIHdpdGggbWFuZ28gYW5kIHRvcHBlZCB3aXRoIGVsZXRyaWNhbCB3aXJlIHNjcmFwcycsXG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdDaGVmXFwncyBSZWQgTGVmdG92ZXJzJyxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIHNyYzogY2hlZkxlZnRvdmVycyxcbiAgICAgICAgICAgIGltYWdlQWx0OiAnUmVkIGxlZnRvdmVycyBzbW9vdGhpZScsXG4gICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgYXR0cmlidXRpb25IcmVmOiAnaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9waG90by9hcHBsZS1hbmQtYmVldHJvb3Qtc21vb3RoaWUtNDU1MTk3NS8nLFxuICAgICAgICAgICAgYXR0cmlidXRpb25UZXh0OiAnUk9NQU4gT0RJTlRTT1YnLFxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogJ09ubHkgdGhlIGJlc3QgbGVmdG92ZXJzIGZyb20gdGhlIGNoZWZcXCdzIGhvdXNlJyxcblxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0NhYmJhZ2UgU21vb3RoaWUnLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc3JjOiBjYWJiYWdlU21vb3RoaWUsXG4gICAgICAgICAgICBpbWFnZUFsdDogJ0NhYmJhZ2Ugc21vb3RoaWUnLFxuICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uSHJlZjogJ2h0dHBzOi8vd3d3LnBleGVscy5jb20vcGhvdG8vZnJ1aXQtc2FsYWQtd2l0aC15b2dodXJ0LWluLXBsYXN0aWMtamFycy1vbi1jaG9wcGluZy1ib2FyZC1iZXNpZGUtbWFuZ28tNzE5MDM2NS8nLFxuICAgICAgICAgICAgYXR0cmlidXRpb25UZXh0OiAna2VsdmluIG9jdGEnLFxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xpZ2h0bHkgc2Vhc29uZWQgY2FiYmFnZSBzbW9vdGhpZSwgY29tYmluZSB3aXRoIG1hbmdvIG9yIHN0cmF3YmVycnknLFxuXG4gICAgfSxcbl1cblxuY29uc3Qgc21vb3RoaWVGYWN0b3IgPSAoKHNtb290aGllKT0+e1xuICAgIGNvbnN0IHNtb290aGllU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzbW9vdGhpZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc21vb3RoaWUnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gc21vb3RoaWUudGl0bGVcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG5cbiAgICBzbW9vdGhpZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgY29uc3Qgc21vb3RoaWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzbW9vdGhpZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc21vb3RoaWVDb250ZW50JylcbiAgICBjb25zdCBzbW9vdGhpZVBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzbW9vdGhpZVBob3RvLmNsYXNzTGlzdC5hZGQoJ3Ntb290aGllUGhvdG8nKVxuXG4gICAgY29uc3Qgb3BlbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgb3BlbkltYWdlLnNyYyA9IHNtb290aGllLmltYWdlLnNyYztcbiAgICBvcGVuSW1hZ2UuYWx0ID0gc21vb3RoaWUuaW1hZ2UuYWx0O1xuICAgIG9wZW5JbWFnZS53aWR0aCA9IHNtb290aGllLmltYWdlLndpZHRoOyAvLzE1MFxuXG4gICAgY29uc3QgcEF0dHJpYnV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBBdHRyaWJ1dGlvbi50ZXh0Q29udGVudCA9ICdQaG90byBieSAnO1xuICAgIGNvbnN0IGFBdHRyaWJ1dGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhQXR0cmlidXRpb24uaHJlZiA9c21vb3RoaWUuaW1hZ2UuYXR0cmlidXRpb25IcmVmO1xuICAgIGFBdHRyaWJ1dGlvbi50ZXh0Q29udGVudCA9IHNtb290aGllLmltYWdlLmF0dHJpYnV0aW9uVGV4dDtcbiAgICBwQXR0cmlidXRpb24uYXBwZW5kQ2hpbGQoYUF0dHJpYnV0aW9uKTtcbiAgICBcbiAgICBzbW9vdGhpZVBob3RvLmFwcGVuZENoaWxkKG9wZW5JbWFnZSk7XG4gICAgc21vb3RoaWVQaG90by5hcHBlbmRDaGlsZChwQXR0cmlidXRpb24pO1xuICAgIHNtb290aGllQ29udGVudC5hcHBlbmRDaGlsZChzbW9vdGhpZVBob3RvKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Ntb290aGllLWRlc2NyaXB0aW9uJylcbiAgICAgICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb25UZXh0LmNsYXNzTGlzdC5hZGQoJ3Ntb290aGllLWRlc2NyaXB0aW9uLXRleHQnKVxuICAgIGRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IHNtb290aGllLmRlc2NyaXB0aW9uO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dClcblxuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJylcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IGAkJHtNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTQgKyA5KSl9LDk5YDtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwcmljZSlcbiAgICBcbiAgICBzbW9vdGhpZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgc21vb3RoaWVTZWN0aW9uLmFwcGVuZENoaWxkKHNtb290aGllQ29udGVudClcblxuXG4gICAgcmV0dXJuIHNtb290aGllU2VjdGlvblxuXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRhYmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYmNvbnRlbnQnKTtcbiAgICB0YWJjb250ZW50LmlkID0gJ21lbnUnO1xuXG4gICAgQXJyYXkuZnJvbShzbW9vdGhpZXMpLmZvckVhY2goaT0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaSlcbiAgICAgdGFiY29udGVudC5hcHBlbmRDaGlsZChzbW9vdGhpZUZhY3RvcihpKSlcbiAgICB9KVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJjb250ZW50KTtcbiAgfVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZEFib3V0IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51JztcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdBbWF6aW5nIFNtb290aGllcyc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBzdWJUaXRsZS50ZXh0Q29udGVudCA9ICdCZSBzdXJwcmlzZWQgd2l0aCBvdXIgdW5jb252ZW50aW9uYWwgaW5ncmVkaWVudHMnO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuXG4gIGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgY29uc3QgbmF2QnV0dG9uSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuYXZCdXR0b25Ib21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBuYXZCdXR0b25zLmFwcGVuZENoaWxkKG5hdkJ1dHRvbkhvbWUpO1xuXG4gIGNvbnN0IG5hdkJ1dHRvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmF2QnV0dG9uTWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbmF2QnV0dG9ucy5hcHBlbmRDaGlsZChuYXZCdXR0b25NZW51KTtcblxuICBjb25zdCBuYXZCdXR0b25BYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuYXZCdXR0b25BYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gIG5hdkJ1dHRvbnMuYXBwZW5kQ2hpbGQobmF2QnV0dG9uQWJvdXQpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCdXR0b25zKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGxvYWRIb21lKCk7XG4gIGxvYWRNZW51KCk7XG4gIGxvYWRBYm91dCgpO1xuICBcbiAgY29uc3QgdGFiQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykpO1xuXG4gIHRhYkJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVGFicy5iaW5kKHRoaXMsIGJ0bi50ZXh0Q29udGVudCkpO1xuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBjaGFuZ2VUYWJzKHRhYiwgZSkge1xuICAgIC8vIGZyb20gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19qc190YWJzLmFzcFxuXG4gICAgY29uc3QgdGFiY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYmNvbnRlbnQnKTtcbiAgICBBcnJheS5mcm9tKHRhYmNvbnRlbnQpLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGlmIChpLmlkICE9PSB0YWIudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuaW5pdCgpO1xuY2hhbmdlVGFicygnaG9tZScpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=