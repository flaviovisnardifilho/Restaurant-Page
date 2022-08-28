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
// import Image from '../assets/img/pexels-pratik-gupta-2995188.jpg'

function loadHome() {
  const content = document.querySelector('#content');

  const tabcontent = document.createElement('div');
  tabcontent.classList.add('tabcontent');
  tabcontent.id = 'home';

  const openImage = document.createElement('img');
  openImage.src = '../src/assets/img/smoothie-clipart-md.png';
  
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
const smoothies = [
    {
        title: 'Pure-ish Broccoli Smoothie',
        image: {
            src: '../src/assets/img/pexels-alisha-mishra-1346347.jpg',
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
            src: '../src/assets/img/pexels-moldy-vintages-8573731.jpg',
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
            src: '../src/assets/img/pexels-alleksana-4051785.jpg',
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
            src: '../src/assets/img/pexels-valeria-boltneva-1169004.jpg',
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
            src: '../src/assets/img/pexels-annelies-brouw-3523148.jpg',
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
            src: '../src/assets/img/pexels-vd-photography-12912638.jpg',
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
            src: '../src/assets/img/pexels-roman-odintsov-4551975.jpg',
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
            src: '../src/assets/img/pexels-kelvin-octa-7190365.jpg',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixxQ0FBcUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLENBQUM7O0FBRWM7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEtBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ007QUFDRjtBQUNBOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEVBQUUsaURBQVE7QUFDVixFQUFFLGlEQUFRO0FBQ1YsRUFBRSxrREFBUztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1BvbXBpZXJlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1ByaW5jZXNzU29maWEtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBQb21waWVyZTtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFByaW5jZXNzU29maWE7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuXFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBQb21waWVyZTtcXG4gICAgY29sb3I6ICM2MDZjMzg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGExNWU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogSEVBREVSICovXFxuLmhlYWRlciB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiBQcmluY2Vzc1NvZmlhO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgY29sb3I6ICMyODM2MTg7XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbm5hdj5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZhZTA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LWZhbWlseTogUHJpbmNlc3NTb2ZpYTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxubmF2PmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDZjMzhcXG59XFxuXFxuLnRhYmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBIT01FICovXFxuaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNiYzZjMjU7ICovXFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDUlOyAqL1xcbn1cXG5cXG4uaW50ZXJpb3ItYXR0cmlidXRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6ICNmZWZhZTA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDZjMzg7XFxufVxcblxcbmgyIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIE1FTlUgKi9cXG4uc21vb3RoaWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmYWUwO1xcbiAgICBib3JkZXI6ICMyODM2MTggMnB4O1xcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzI4MzYxOCBpbnNldDtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuI21lbnUgaDIge1xcbiAgICBtYXJnaW46IC01cHggLTVweCA1cHggLTVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjMjgzNjE4IGluc2V0O1xcbiAgICBmb250LWZhbWlseTogUHJpbmNlc3NTb2ZpYTtcXG4gICAgY29sb3I6ICMyODM2MTg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYzZjMjU7XFxufVxcblxcbiNtZW51IC5zbW9vdGhpZUNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG5cXG59XFxuXFxuI21lbnUgLnNtb290aGllUGhvdG8ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNtZW51IC5zbW9vdGhpZS1kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiAjMjgzNjE4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNtZW51IGEge1xcbiAgICBjb2xvcjogIzI4MzYxODtcXG59XFxuI21lbnUgYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmVmYWUwO1xcbn1cXG4jbWVudSBpbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzI4MzYxODtcXG59XFxuXFxuI21lbnUgLnNtb290aGllLWRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jbWVudSAucHJpY2Uge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiAjMjgzNjE4O1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuXFxufVxcblxcbi8qIEFCT1VUICovXFxuI2Fib3V0IHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdGhhbmtzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICMyODM2MTg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbiNub3QtcmVzcG9uc2libGUge1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsNENBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBLFNBQVM7QUFDVDtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7O0FBRVo7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTs7O0FBR2pCOztBQUVBLFVBQVU7QUFDVjtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFBvbXBpZXJlO1xcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1BvbXBpZXJlLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUHJpbmNlc3NTb2ZpYTtcXG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9QcmluY2Vzc1NvZmlhLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogUG9tcGllcmU7XFxuICAgIGNvbG9yOiAjNjA2YzM4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRhMTVlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LWZhbWlseTogUHJpbmNlc3NTb2ZpYTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiAjMjgzNjE4O1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG5uYXY+YnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmYWUwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZm9udC1mYW1pbHk6IFByaW5jZXNzU29maWE7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbm5hdj5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2YzM4XFxufVxcblxcbi50YWJjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogSE9NRSAqL1xcbmltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYmM2YzI1OyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1JTsgKi9cXG59XFxuXFxuLmludGVyaW9yLWF0dHJpYnV0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiAjZmVmYWUwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2YzM4O1xcbn1cXG5cXG5oMiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBNRU5VICovXFxuLnNtb290aGllIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmFlMDtcXG4gICAgYm9yZGVyOiAjMjgzNjE4IDJweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICMyODM2MTggaW5zZXQ7XFxuICAgIG1hcmdpbjogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbiNtZW51IGgyIHtcXG4gICAgbWFyZ2luOiAtNXB4IC01cHggNXB4IC01cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzI4MzYxOCBpbnNldDtcXG4gICAgZm9udC1mYW1pbHk6IFByaW5jZXNzU29maWE7XFxuICAgIGNvbG9yOiAjMjgzNjE4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmM2YzI1O1xcbn1cXG5cXG4jbWVudSAuc21vb3RoaWVDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuXFxufVxcblxcbiNtZW51IC5zbW9vdGhpZVBob3RvIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jbWVudSAuc21vb3RoaWUtZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogIzI4MzYxODtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbWVudSBhIHtcXG4gICAgY29sb3I6ICMyODM2MTg7XFxufVxcbiNtZW51IGE6aG92ZXIge1xcbiAgICBjb2xvcjogI2ZlZmFlMDtcXG59XFxuI21lbnUgaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICMyODM2MTg7XFxufVxcblxcbiNtZW51IC5zbW9vdGhpZS1kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI21lbnUgLnByaWNlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogIzI4MzYxODtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcblxcbn1cXG5cXG4vKiBBQk9VVCAqL1xcbiNhYm91dCB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RoYW5rcyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjMjgzNjE4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4jbm90LXJlc3BvbnNpYmxlIHtcXG4gICAgcGFkZGluZzogNDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgY29uc3QgdGFiY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYmNvbnRlbnQnKTtcbiAgdGFiY29udGVudC5pZCA9ICdhYm91dCc7XG5cbiAgY29uc3QgdGhhbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aGFua3MudGV4dENvbnRlbnQgPSAnVGhhbmsgeW91IGZvciBjaG9vc2luZyBBbWF6aW5nIFNtb290aGllcyEnO1xuICB0aGFua3MuaWQgPSAndGhhbmtzJztcbiAgdGFiY29udGVudC5hcHBlbmRDaGlsZCh0aGFua3MpO1xuXG4gIGNvbnN0IG5vdFJlc3BvbnNpYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBub3RSZXNwb25zaWJsZS50ZXh0Q29udGVudCA9XG4gICAgXCJJZiB5b3UgYXJlIG5vdCBmZWVsaW5nIHZlcnkgd2VsbCBhZnRlciBlbmpveSBvdXIgc21vb3RoaWVzLCBwbGVhc2UgZG9uJ3QgYm90aGVyIHVzLCBqdXN0IGdvIHRvIGEgaG9zcGl0YWwgY2xvc2UgdG8geW91LiBHb29kIGx1Y2shXCI7XG4gIG5vdFJlc3BvbnNpYmxlLmlkID0gJ25vdC1yZXNwb25zaWJsZSc7XG4gIHRhYmNvbnRlbnQuYXBwZW5kQ2hpbGQobm90UmVzcG9uc2libGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRhYmNvbnRlbnQpO1xufVxuIiwiLy8gaW1wb3J0IEltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWcvcGV4ZWxzLXByYXRpay1ndXB0YS0yOTk1MTg4LmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGNvbnN0IHRhYmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFiY29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWJjb250ZW50Jyk7XG4gIHRhYmNvbnRlbnQuaWQgPSAnaG9tZSc7XG5cbiAgY29uc3Qgb3BlbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIG9wZW5JbWFnZS5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWcvc21vb3RoaWUtY2xpcGFydC1tZC5wbmcnO1xuICBcbiAgb3BlbkltYWdlLmFsdCA9ICdHcmVlbiBzbW9vdGhpZSc7XG4gIG9wZW5JbWFnZS5oZWlnaHQgPSAnMzUwJztcbiAgdGFiY29udGVudC5hcHBlbmRDaGlsZChvcGVuSW1hZ2UpO1xuXG4gIGNvbnN0IHBBdHRyaWJ1dGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcEF0dHJpYnV0aW9uLmNsYXNzTGlzdC5hZGQoJ2ludGVyaW9yLWF0dHJpYnV0aW9uJyk7XG4gIHBBdHRyaWJ1dGlvbi50ZXh0Q29udGVudCA9ICdDbGlwYXJ0IGJ5ICc7XG4gIGNvbnN0IGFBdHRyaWJ1dGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYUF0dHJpYnV0aW9uLmhyZWYgPVxuICAgICdodHRwczovL2NyZWF6aWxsYS5jb20vbm9kZXMvMTc5NTMzOS1zbW9vdGhpZS1jbGlwYXJ0JztcbiAgYUF0dHJpYnV0aW9uLnRleHRDb250ZW50ID0gJ0NyZWF6aWxsYSc7XG4gIHBBdHRyaWJ1dGlvbi5hcHBlbmRDaGlsZChhQXR0cmlidXRpb24pO1xuICB0YWJjb250ZW50LmFwcGVuZENoaWxkKHBBdHRyaWJ1dGlvbik7XG5cbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSAnQ29tZSBhbmQgdGFzdGUgb3VyIGluc2FuZWx5IGRlbGljaW91cyBzbW9vdGhpZXMhJztcbiAgdGFiY29udGVudC5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHRhYmNvbnRlbnQpO1xufVxuIiwiY29uc3Qgc21vb3RoaWVzID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdQdXJlLWlzaCBCcm9jY29saSBTbW9vdGhpZScsXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICBzcmM6ICcuLi9zcmMvYXNzZXRzL2ltZy9wZXhlbHMtYWxpc2hhLW1pc2hyYS0xMzQ2MzQ3LmpwZycsXG4gICAgICAgICAgICBpbWFnZUFsdDogJ0Jyb2Njb2xpIHNtb290aGllJyxcbiAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbkhyZWY6ICdodHRwczovL3d3dy5wZXhlbHMuY29tL3Bob3RvL2NsZWFyLWdsYXNzLWJvdHRsZS1maWxsZWQtd2l0aC1icm9jY29saS1zaGFrZS0xMzQ2MzQ3LycsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvblRleHQ6ICdBbGlzaGEgTWlzaHJhJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246ICdNYWRlIHdpdGggdGhlIGdyZWVuZXN0IGJyb2Njb2xpLCBzZWNyZXQgc3BpY2VzIGFuZCBiYWNreWFyZCBncmFzcycsXG5cbiAgICB9LFxuICAgIFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdXYXJtIEljZSBCbHVlJyxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIHNyYzogJy4uL3NyYy9hc3NldHMvaW1nL3BleGVscy1tb2xkeS12aW50YWdlcy04NTczNzMxLmpwZycsXG4gICAgICAgICAgICBpbWFnZUFsdDogJ0JsdWUgc21vb3RoaWUnLFxuICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uSHJlZjogJ2h0dHBzOi8vd3d3LnBleGVscy5jb20vcGhvdG8vZ2xhc3Mtd2l0aC1ibHVlLWxpcXVpZC1hbmQtd2hpcHBlZC1jcmVhbS04NTczNzMxLycsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvblRleHQ6ICdtb2xkeSB2aW50YWdlcycsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGJsdWUgc3R1ZmYgZnJvbSB0aGUgZnJlenplciBkZWZyb3N0IHdpdGggc29tZSBzaGVsbCBwb3dkZXIgdG9wcGluZycsXG5cbiAgICB9LFxuICAgIFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdCYW5hbmFcXCdzIFBlZWwgU3BlY2lhbCcsXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICBzcmM6ICcuLi9zcmMvYXNzZXRzL2ltZy9wZXhlbHMtYWxsZWtzYW5hLTQwNTE3ODUuanBnJyxcbiAgICAgICAgICAgIGltYWdlQWx0OiAnQmFuYW5hIHNtb290aGllJyxcbiAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbkhyZWY6ICdodHRwczovL3d3dy5wZXhlbHMuY29tL3Bob3RvL2Zvb2QtY29sZC1yZWxheGF0aW9uLXN1bW1lci00MDUxNzg1LycsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvblRleHQ6ICdhbGxla3NhbmEnLFxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FsbCB0aGUgcGVlbCB5b3VcXCdkIGxpa2UgaW4gYSBiYW5hbmEgc21vb3RoaWUgYW5kIG1vcmUhJyxcblxuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIHRpdGxlOiAnQWxsIHRoZSBzdHVmZiBmcm9tIHRoYXQgYm94JyxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIHNyYzogJy4uL3NyYy9hc3NldHMvaW1nL3BleGVscy12YWxlcmlhLWJvbHRuZXZhLTExNjkwMDQuanBnJyxcbiAgICAgICAgICAgIGltYWdlQWx0OiAnQWxsIHlvdSBjYW4gZml0IHNtb290aGllJyxcbiAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbkhyZWY6ICdodHRwczovL3d3dy5wZXhlbHMuY29tL3Bob3RvL3BlcnNvbi1ob2xkaW5nLXNhdWNlci13aXRoLW11Zy1vZi1jaG9jb2xhdGUtaWNlLWNyZWFtLWNvZmZlZS0xMTY5MDA0LycsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvblRleHQ6ICdWYWxlcmlhIEJvbHRuZXZhJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246ICdGb3IgYXZpZCB0YXN0ZXJzLCBldmVyeXRoaW5nIHRoYXQgZml0cyBpbiB0aGUgbXVnJyxcblxuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIHRpdGxlOiAnQ2hyaXN0bWFzIFNwZWNpYWwnLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc3JjOiAnLi4vc3JjL2Fzc2V0cy9pbWcvcGV4ZWxzLWFubmVsaWVzLWJyb3V3LTM1MjMxNDguanBnJyxcbiAgICAgICAgICAgIGltYWdlQWx0OiAnQ2hyaXN0bWFzIHNtb290aGllJyxcbiAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbkhyZWY6ICdodHRwczovL3d3dy5wZXhlbHMuY29tL3Bob3RvL2ljZS1jcmVhbS1vbi1nbGFzcy13aXRoLWNvb2tpZXMtb24tdG9wLTM1MjMxNDgvJyxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uVGV4dDogJ0FubmVsaWVzIEJyb3V3JyxcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDaHJpc3RtYXMgdHJlZSBsZWF2ZXMgYW5kIHNlZWRzLCBmb3IgdGhhdCBub3N0YWxnaWMgdGFzdGUnLFxuXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdFbGV0cmljYWwgTWFuZ28nLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc3JjOiAnLi4vc3JjL2Fzc2V0cy9pbWcvcGV4ZWxzLXZkLXBob3RvZ3JhcGh5LTEyOTEyNjM4LmpwZycsXG4gICAgICAgICAgICBpbWFnZUFsdDogJ01hbmdvIHNtb290aGllJyxcbiAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbkhyZWY6ICdodHRwczovL3d3dy5wZXhlbHMuY29tL3Bob3RvL2NsZWFyLWRyaW5raW5nLWdsYXNzLXdpdGgteWVsbG93LWxpcXVpZC1vbi1icm93bi13b29kZW4tY29hc3Rlci0xMjkxMjYzOC8nLFxuICAgICAgICAgICAgYXR0cmlidXRpb25UZXh0OiAnVkQnLFxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RyYWRpdGlvbmFsIGZyb2cgc3Bhd24gbWl4ZWQgd2l0aCBtYW5nbyBhbmQgdG9wcGVkIHdpdGggZWxldHJpY2FsIHdpcmUgc2NyYXBzJyxcblxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0NoZWZcXCdzIFJlZCBMZWZ0b3ZlcnMnLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc3JjOiAnLi4vc3JjL2Fzc2V0cy9pbWcvcGV4ZWxzLXJvbWFuLW9kaW50c292LTQ1NTE5NzUuanBnJyxcbiAgICAgICAgICAgIGltYWdlQWx0OiAnUmVkIGxlZnRvdmVycyBzbW9vdGhpZScsXG4gICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgYXR0cmlidXRpb25IcmVmOiAnaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9waG90by9hcHBsZS1hbmQtYmVldHJvb3Qtc21vb3RoaWUtNDU1MTk3NS8nLFxuICAgICAgICAgICAgYXR0cmlidXRpb25UZXh0OiAnUk9NQU4gT0RJTlRTT1YnLFxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogJ09ubHkgdGhlIGJlc3QgbGVmdG92ZXJzIGZyb20gdGhlIGNoZWZcXCdzIGhvdXNlJyxcblxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0NhYmJhZ2UgU21vb3RoaWUnLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc3JjOiAnLi4vc3JjL2Fzc2V0cy9pbWcvcGV4ZWxzLWtlbHZpbi1vY3RhLTcxOTAzNjUuanBnJyxcbiAgICAgICAgICAgIGltYWdlQWx0OiAnQ2FiYmFnZSBzbW9vdGhpZScsXG4gICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgYXR0cmlidXRpb25IcmVmOiAnaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9waG90by9mcnVpdC1zYWxhZC13aXRoLXlvZ2h1cnQtaW4tcGxhc3RpYy1qYXJzLW9uLWNob3BwaW5nLWJvYXJkLWJlc2lkZS1tYW5nby03MTkwMzY1LycsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvblRleHQ6ICdrZWx2aW4gb2N0YScsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTGlnaHRseSBzZWFzb25lZCBjYWJiYWdlIHNtb290aGllLCBjb21iaW5lIHdpdGggbWFuZ28gb3Igc3RyYXdiZXJyeScsXG5cbiAgICB9LFxuXVxuXG5jb25zdCBzbW9vdGhpZUZhY3RvciA9ICgoc21vb3RoaWUpPT57XG4gICAgY29uc3Qgc21vb3RoaWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNtb290aGllU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzbW9vdGhpZScpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBzbW9vdGhpZS50aXRsZVxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcblxuICAgIHNtb290aGllU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBjb25zdCBzbW9vdGhpZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNtb290aGllQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzbW9vdGhpZUNvbnRlbnQnKVxuICAgIGNvbnN0IHNtb290aGllUGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNtb290aGllUGhvdG8uY2xhc3NMaXN0LmFkZCgnc21vb3RoaWVQaG90bycpXG5cbiAgICBjb25zdCBvcGVuSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBvcGVuSW1hZ2Uuc3JjID0gc21vb3RoaWUuaW1hZ2Uuc3JjO1xuICAgIG9wZW5JbWFnZS5hbHQgPSBzbW9vdGhpZS5pbWFnZS5hbHQ7XG4gICAgb3BlbkltYWdlLndpZHRoID0gc21vb3RoaWUuaW1hZ2Uud2lkdGg7IC8vMTUwXG5cbiAgICBjb25zdCBwQXR0cmlidXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcEF0dHJpYnV0aW9uLnRleHRDb250ZW50ID0gJ1Bob3RvIGJ5ICc7XG4gICAgY29uc3QgYUF0dHJpYnV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFBdHRyaWJ1dGlvbi5ocmVmID1zbW9vdGhpZS5pbWFnZS5hdHRyaWJ1dGlvbkhyZWY7XG4gICAgYUF0dHJpYnV0aW9uLnRleHRDb250ZW50ID0gc21vb3RoaWUuaW1hZ2UuYXR0cmlidXRpb25UZXh0O1xuICAgIHBBdHRyaWJ1dGlvbi5hcHBlbmRDaGlsZChhQXR0cmlidXRpb24pO1xuICAgIFxuICAgIHNtb290aGllUGhvdG8uYXBwZW5kQ2hpbGQob3BlbkltYWdlKTtcbiAgICBzbW9vdGhpZVBob3RvLmFwcGVuZENoaWxkKHBBdHRyaWJ1dGlvbik7XG4gICAgc21vb3RoaWVDb250ZW50LmFwcGVuZENoaWxkKHNtb290aGllUGhvdG8pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnc21vb3RoaWUtZGVzY3JpcHRpb24nKVxuICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvblRleHQuY2xhc3NMaXN0LmFkZCgnc21vb3RoaWUtZGVzY3JpcHRpb24tdGV4dCcpXG4gICAgZGVzY3JpcHRpb25UZXh0LnRleHRDb250ZW50ID0gc21vb3RoaWUuZGVzY3JpcHRpb247XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0KVxuXG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKVxuICAgIHByaWNlLnRleHRDb250ZW50ID0gYCQke01hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxNCArIDkpKX0sOTlgO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHByaWNlKVxuICAgIFxuICAgIHNtb290aGllQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBzbW9vdGhpZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc21vb3RoaWVDb250ZW50KVxuXG5cbiAgICByZXR1cm4gc21vb3RoaWVTZWN0aW9uXG5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgdGFiY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiY29udGVudCcpO1xuICAgIHRhYmNvbnRlbnQuaWQgPSAnbWVudSc7XG5cbiAgICBBcnJheS5mcm9tKHNtb290aGllcykuZm9yRWFjaChpPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpKVxuICAgICB0YWJjb250ZW50LmFwcGVuZENoaWxkKHNtb290aGllRmFjdG9yKGkpKVxuICAgIH0pXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYmNvbnRlbnQpO1xuICB9XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuaWQgPSAnY29udGVudCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0FtYXppbmcgU21vb3RoaWVzJztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHN1YlRpdGxlLnRleHRDb250ZW50ID0gJ0JlIHN1cnByaXNlZCB3aXRoIG91ciB1bmNvbnZlbnRpb25hbCBpbmdyZWRpZW50cyc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XG5cbiAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCBuYXZCdXR0b25Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5hdkJ1dHRvbkhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIG5hdkJ1dHRvbnMuYXBwZW5kQ2hpbGQobmF2QnV0dG9uSG9tZSk7XG5cbiAgY29uc3QgbmF2QnV0dG9uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuYXZCdXR0b25NZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBuYXZCdXR0b25zLmFwcGVuZENoaWxkKG5hdkJ1dHRvbk1lbnUpO1xuXG4gIGNvbnN0IG5hdkJ1dHRvbkFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5hdkJ1dHRvbkFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0JztcbiAgbmF2QnV0dG9ucy5hcHBlbmRDaGlsZChuYXZCdXR0b25BYm91dCk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbnMpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgbG9hZEhvbWUoKTtcbiAgbG9hZE1lbnUoKTtcbiAgbG9hZEFib3V0KCk7XG4gIFxuICBjb25zdCB0YWJCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKSk7XG5cbiAgdGFiQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUYWJzLmJpbmQodGhpcywgYnRuLnRleHRDb250ZW50KSk7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGNoYW5nZVRhYnModGFiLCBlKSB7XG4gICAgLy8gZnJvbSBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2pzX3RhYnMuYXNwXG5cbiAgICBjb25zdCB0YWJjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFiY29udGVudCcpO1xuICAgIEFycmF5LmZyb20odGFiY29udGVudCkuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgaWYgKGkuaWQgIT09IHRhYi50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5pbml0KCk7XG5jaGFuZ2VUYWJzKCdob21lJyk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==