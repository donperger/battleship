/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --field-border-clr: #0d0d0d;\n  --filed-bg-clr: #f2c335;\n  --attacked-bg-clr: #fff;\n  --hit-bg-clr: #ff0000;\n}\n\n.gb-container {\n  width: 100vw;\n  height: calc(100vh - var(--header-height) - var(--footer-height));\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.gb-player,\n.gb-enemy {\n  box-sizing: border-box;\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: repeat(10, 3rem);\n  grid-template-rows: repeat(10, 3rem);\n  place-items: center;\n}\n\n.player-field,\n.enemy-field,\n.hit {\n  border: 0.2rem solid var(--field-border-clr);\n  width: 100%;\n  height: 100%;\n}\n\ndiv[class$='field'] {\n  background-color: var(--filed-bg-clr);\n}\n\n.drag-over {\n  border: dashed 0.2rem red;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/gameboard.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,uBAAuB;EACvB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,iEAAiE;EACjE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;EAEE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;;;EAGE,4CAA4C;EAC5C,WAAW;EACX,YAAY;AACd;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[":root {\n  --field-border-clr: #0d0d0d;\n  --filed-bg-clr: #f2c335;\n  --attacked-bg-clr: #fff;\n  --hit-bg-clr: #ff0000;\n}\n\n.gb-container {\n  width: 100vw;\n  height: calc(100vh - var(--header-height) - var(--footer-height));\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.gb-player,\n.gb-enemy {\n  box-sizing: border-box;\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: repeat(10, 3rem);\n  grid-template-rows: repeat(10, 3rem);\n  place-items: center;\n}\n\n.player-field,\n.enemy-field,\n.hit {\n  border: 0.2rem solid var(--field-border-clr);\n  width: 100%;\n  height: 100%;\n}\n\ndiv[class$='field'] {\n  background-color: var(--filed-bg-clr);\n}\n\n.drag-over {\n  border: dashed 0.2rem red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --header-height: 3rem;\n  --header-bg-clr: #0d0d0d;\n  --header-font-clr: #f2c335;\n  --bf-bg-clr: #f2e63d;\n  --footer-height: 3rem;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n}\n\nheader {\n  height: var(--header-height);\n  background-color: var(--header-bg-clr);\n  color: var(--header-font-clr);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.bf-title {\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.bf-container {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - var(--header-height) - var(--footer-height));\n  background-color: var(--bf-bg-clr);\n  overflow: auto;\n}\n\nfooter {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  height: var(--footer-height);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--header-font-clr);\n  color: var(--header-bg-clr);\n}\n\n.github-icon {\n  height: var(--footer-height);\n}\n\n.github-link {\n  margin: 0 0.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,0BAA0B;EAC1B,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,4BAA4B;EAC5B,sCAAsC;EACtC,6BAA6B;EAC7B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iEAAiE;EACjE,kCAAkC;EAClC,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,YAAY;EACZ,4BAA4B;EAC5B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wCAAwC;EACxC,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[":root {\n  --header-height: 3rem;\n  --header-bg-clr: #0d0d0d;\n  --header-font-clr: #f2c335;\n  --bf-bg-clr: #f2e63d;\n  --footer-height: 3rem;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n}\n\nheader {\n  height: var(--header-height);\n  background-color: var(--header-bg-clr);\n  color: var(--header-font-clr);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.bf-title {\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.bf-container {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - var(--header-height) - var(--footer-height));\n  background-color: var(--bf-bg-clr);\n  overflow: auto;\n}\n\nfooter {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  height: var(--footer-height);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--header-font-clr);\n  color: var(--header-bg-clr);\n}\n\n.github-icon {\n  height: var(--footer-height);\n}\n\n.github-link {\n  margin: 0 0.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/ship-list.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/ship-list.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --ship-field-bg-clr: #d88b32;\n}\n\n.ship-list-container {\n  position: absolute;\n  top: var(--header-hegith);\n  right: 0;\n  width: 50vw;\n  height: calc(100vh - var(--header-height) - var(--footer-height));\n  color: aliceblue;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.instruction {\n  text-align: center;\n  margin: 1rem;\n}\n\n.ship-container {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: repeat(auto-fit, 1.8rem);\n  width: max-content;\n}\n\n.ship-list {\n  display: flex;\n  justify-content: space-around;\n  align-content: space-around;\n  flex-wrap: wrap;\n  overflow: auto;\n}\n\n.ship-card {\n  height: 13rem;\n  width: 10rem;\n  padding: 1rem;\n  border: 0.2rem solid var(--ship-field-bg-clr);\n  border-radius: 0.5rem;\n  background-color: rgba(177, 177, 177, 0.8);\n  margin: 0.5rem;\n  overflow: auto;\n  font-size: 1.2rem;\n}\n\n.card-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.rotate-btn {\n  box-sizing: border-box;\n  margin-left: auto;\n  cursor: pointer;\n  background: linear-gradient(\n    to bottom,\n    var(--ship-field-bg-clr) 5%,\n    #ffc164 100%\n  );\n  background-color: var(--ship-field-bg-clr);\n  padding: 0.4rem;\n  border: 0.15rem solid #000;\n  border-radius: 0.5rem;\n}\n\n.rotate-btn:hover {\n  background: linear-gradient(\n    to top,\n    var(--ship-field-bg-clr) 5%,\n    #ffc164 100%\n  );\n}\n\n.rotate-btn:active {\n  position: relative;\n  bottom: 0.2rem;\n}\n\n.rotate-btn img {\n  width: 1rem;\n}\n\n.ship-container .ship-field {\n  box-sizing: border-box;\n  border: 0.2rem solid var(--field-border-clr);\n  background-color: var(--ship-field-bg-clr);\n  height: 2rem;\n  width: 2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/ship-list.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,QAAQ;EACR,WAAW;EACX,iEAAiE;EACjE,gBAAgB;EAChB,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,+CAA+C;EAC/C,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,2BAA2B;EAC3B,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,6CAA6C;EAC7C,qBAAqB;EACrB,0CAA0C;EAC1C,cAAc;EACd,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,eAAe;EACf;;;;GAIC;EACD,0CAA0C;EAC1C,eAAe;EACf,0BAA0B;EAC1B,qBAAqB;AACvB;;AAEA;EACE;;;;GAIC;AACH;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,4CAA4C;EAC5C,0CAA0C;EAC1C,YAAY;EACZ,WAAW;AACb","sourcesContent":[":root {\n  --ship-field-bg-clr: #d88b32;\n}\n\n.ship-list-container {\n  position: absolute;\n  top: var(--header-hegith);\n  right: 0;\n  width: 50vw;\n  height: calc(100vh - var(--header-height) - var(--footer-height));\n  color: aliceblue;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.instruction {\n  text-align: center;\n  margin: 1rem;\n}\n\n.ship-container {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: repeat(auto-fit, 1.8rem);\n  width: max-content;\n}\n\n.ship-list {\n  display: flex;\n  justify-content: space-around;\n  align-content: space-around;\n  flex-wrap: wrap;\n  overflow: auto;\n}\n\n.ship-card {\n  height: 13rem;\n  width: 10rem;\n  padding: 1rem;\n  border: 0.2rem solid var(--ship-field-bg-clr);\n  border-radius: 0.5rem;\n  background-color: rgba(177, 177, 177, 0.8);\n  margin: 0.5rem;\n  overflow: auto;\n  font-size: 1.2rem;\n}\n\n.card-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.rotate-btn {\n  box-sizing: border-box;\n  margin-left: auto;\n  cursor: pointer;\n  background: linear-gradient(\n    to bottom,\n    var(--ship-field-bg-clr) 5%,\n    #ffc164 100%\n  );\n  background-color: var(--ship-field-bg-clr);\n  padding: 0.4rem;\n  border: 0.15rem solid #000;\n  border-radius: 0.5rem;\n}\n\n.rotate-btn:hover {\n  background: linear-gradient(\n    to top,\n    var(--ship-field-bg-clr) 5%,\n    #ffc164 100%\n  );\n}\n\n.rotate-btn:active {\n  position: relative;\n  bottom: 0.2rem;\n}\n\n.rotate-btn img {\n  width: 1rem;\n}\n\n.ship-container .ship-field {\n  box-sizing: border-box;\n  border: 0.2rem solid var(--field-border-clr);\n  background-color: var(--ship-field-bg-clr);\n  height: 2rem;\n  width: 2rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/winner.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/winner.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".winner {\n  position: absolute;\n  top: 45vh;\n  left: 0;\n  width: 100vw;\n  height: 10vh;\n  padding: 1rem;\n  background-color: rgba(66, 66, 66, 0.8);\n  color: #f2f2f2;\n  font-weight: 600;\n  font-size: 3rem;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.play-again-btn {\n  width: 10rem;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border: 0.15rem solid #000;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  font-weight: 600;\n  background: linear-gradient(to bottom, #7c7a7a 5%, #000000 100%);\n  background-color: #7c7a7a;\n  color: #fff;\n}\n\n.play-again-btn:hover {\n  background: linear-gradient(to top, #7c7a7a 5%, #000000 100%);\n}\n\n.play-again-btn:active {\n  position: relative;\n  top: 0.2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/winner.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uCAAuC;EACvC,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,0BAA0B;EAC1B,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,gEAAgE;EAChE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,6DAA6D;AAC/D;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb","sourcesContent":[".winner {\n  position: absolute;\n  top: 45vh;\n  left: 0;\n  width: 100vw;\n  height: 10vh;\n  padding: 1rem;\n  background-color: rgba(66, 66, 66, 0.8);\n  color: #f2f2f2;\n  font-weight: 600;\n  font-size: 3rem;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.play-again-btn {\n  width: 10rem;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border: 0.15rem solid #000;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  font-weight: 600;\n  background: linear-gradient(to bottom, #7c7a7a 5%, #000000 100%);\n  background-color: #7c7a7a;\n  color: #fff;\n}\n\n.play-again-btn:hover {\n  background: linear-gradient(to top, #7c7a7a 5%, #000000 100%);\n}\n\n.play-again-btn:active {\n  position: relative;\n  top: 0.2rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/gameboard.css":
/*!**********************************!*\
  !*** ./src/styles/gameboard.css ***!
  \**********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameboard.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/ship-list.css":
/*!**********************************!*\
  !*** ./src/styles/ship-list.css ***!
  \**********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ship_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ship-list.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/ship-list.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ship_list_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ship_list_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ship_list_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ship_list_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/winner.css":
/*!*******************************!*\
  !*** ./src/styles/winner.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_winner_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./winner.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/winner.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_winner_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_winner_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_winner_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_winner_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeGridElementsBorder": () => (/* binding */ changeGridElementsBorder),
/* harmony export */   "cleanOutGBContainer": () => (/* binding */ cleanOutGBContainer),
/* harmony export */   "displayAttack": () => (/* binding */ displayAttack),
/* harmony export */   "displayPlayerGrid": () => (/* binding */ displayPlayerGrid),
/* harmony export */   "displayRandomGrid": () => (/* binding */ displayRandomGrid),
/* harmony export */   "displayShipList": () => (/* binding */ displayShipList),
/* harmony export */   "displayWinner": () => (/* binding */ displayWinner),
/* harmony export */   "hideWinner": () => (/* binding */ hideWinner),
/* harmony export */   "removeShipFromList": () => (/* binding */ removeShipFromList)
/* harmony export */ });
/* harmony import */ var _img_rotate_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/rotate-svgrepo-com.svg */ "./src/img/rotate-svgrepo-com.svg");
/* harmony import */ var _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-n-drop */ "./src/scripts/drag-n-drop.js");




const _battlefieldContainer = document.querySelector('.bf-container');
const _gameboardContainer = document.querySelector('.gb-container');

function displayRandomGrid(gameboard, gameboardOwner) {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add(`gb-${gameboardOwner}`);

  gameboard.displayGameboard().forEach((elem, index) => {
    const gbField = document.createElement('div');
    gbField.classList.add(`${gameboardOwner}-field`);
    gbField.id = `${gameboardOwner}-${index}`;

    gridContainer.appendChild(gbField);
  });

  _gameboardContainer.appendChild(gridContainer);
}

function displayPlayerGrid(gameboard, gameboardOwner) {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add(`gb-${gameboardOwner}`);

  gameboard.displayGameboard().forEach((elem, index) => {
    const gbField = document.createElement('div');
    gbField.classList.add(`${gameboardOwner}-field`);
    gbField.id = `${gameboardOwner}-${index}`;

    gbField.addEventListener('dragenter', _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.dragEnter);
    gbField.addEventListener('dragover', _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.dragOver);
    gbField.addEventListener('dragleave', _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.dragLeave);
    gbField.addEventListener('drop', (e) => {
      const coloringData = (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.drop)(e, gameboard);
      if (coloringData) {
        _displayDroppedShip(
          gameboardOwner,
          coloringData.startFieldNumber,
          coloringData.shipLength,
          coloringData.shipDirection
        );
      }

      if (gameboard.isFleetPlaced()) {
        const shipListContainer = document.querySelector(
          '.ship-list-container'
        );
        shipListContainer.parentNode.removeChild(shipListContainer);
      }
    });

    gridContainer.appendChild(gbField);
  });

  _gameboardContainer.appendChild(gridContainer);
}

function cleanOutGBContainer() {
  _gameboardContainer.textContent = '';
}

function displayAttack(field, isShip) {
  if (isShip) {
    field.style.backgroundColor = 'var(--hit-bg-clr)';
  } else {
    field.style.backgroundColor = 'var(--attacked-bg-clr)';
  }
}

function displayWinner(winner) {
  const winnerDiv = document.createElement('div');
  winnerDiv.classList.add('winner');
  winnerDiv.textContent = `Congratulation ${winner}`;

  const playAgainBtn = document.createElement('button');
  playAgainBtn.textContent = 'Play again';
  playAgainBtn.classList.add('play-again-btn');
  winnerDiv.appendChild(playAgainBtn);

  _battlefieldContainer.appendChild(winnerDiv);
}

function hideWinner() {
  const winnerDiv = document.querySelector('.winner');
  winnerDiv.parentNode.removeChild(winnerDiv);
}

function displayShipList() {
  const shipListContainer = document.createElement('div');
  shipListContainer.classList.add('ship-list-container');

  const instruction = document.createElement('h1');
  instruction.classList.add('instruction');
  instruction.textContent = 'Deploy your ships, Captain!';
  shipListContainer.appendChild(instruction);

  _battlefieldContainer.appendChild(shipListContainer);

  const shipList = document.createElement('div');
  shipList.classList.add('ship-list');
  shipListContainer.appendChild(shipList);

  const patrolBoat = _creatShipListItem('Patrol boat', 2);
  shipList.appendChild(patrolBoat);

  const submarine = _creatShipListItem('Submarine', 3);
  shipList.appendChild(submarine);

  const destroyer = _creatShipListItem('Destroyer', 3);
  shipList.appendChild(destroyer);

  const battleship = _creatShipListItem('Battleship', 4);
  shipList.appendChild(battleship);

  const carrier = _creatShipListItem('Carrier', 5);
  shipList.appendChild(carrier);
}

function _creatShipListItem(shipname, shipLength) {
  let isShipRotated = false;
  const item = document.createElement('div');
  item.classList.add('ship-card');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');

  const cardTitle = document.createElement('span');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = shipname;
  cardHeader.appendChild(cardTitle);

  const shipContId = _convertToId(shipname);

  const rotBtn = document.createElement('button');
  rotBtn.classList.add('rotate-btn');
  rotBtn.id = `${shipContId}-btn`;
  const rotateImg = document.createElement('img');
  rotateImg.src = './8f7b2067fc665eeb0aed.svg';

  rotBtn.addEventListener('click', () => {
    isShipRotated = !isShipRotated;
    _rotateShip(shipContId, isShipRotated, item);
    (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.setShipDirection)(shipContId, isShipRotated);
  });
  rotBtn.appendChild(rotateImg);
  cardHeader.appendChild(rotBtn);

  item.appendChild(cardHeader);

  const shipContainer = document.createElement('div');
  shipContainer.classList.add('ship-container');

  shipContainer.id = shipContId;

  for (let i = 0; i < shipLength; i++) {
    const shipField = document.createElement('div');
    shipField.classList.add('ship-field');
    shipContainer.appendChild(shipField);
  }

  (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.makeDragable)(shipContainer, isShipRotated);

  item.appendChild(shipContainer);

  return item;
}

function _displayDroppedShip(
  gameboardOwner,
  firstColoredFiledNumber,
  numberOfColoredFields,
  isClooringDirectionVertical
) {
  if (isClooringDirectionVertical) {
    for (
      let i = firstColoredFiledNumber;
      i < firstColoredFiledNumber + numberOfColoredFields * 10;
      i += 10
    ) {
      const field = document.getElementById(`${gameboardOwner}-${i}`);
      field.style.backgroundColor = 'var(--ship-field-bg-clr)';
    }
  } else {
    for (
      let i = firstColoredFiledNumber;
      i < firstColoredFiledNumber + numberOfColoredFields;
      i++
    ) {
      const field = document.getElementById(`${gameboardOwner}-${i}`);
      field.style.backgroundColor = 'var(--ship-field-bg-clr)';
    }
  }
}

function _rotateShip(shipId, direction, parentElement) {
  const shipCont = document.getElementById(shipId);
  if (direction) {
    shipCont.style.gridAutoFlow = 'row';
  } else {
    shipCont.style.gridAutoFlow = 'column';
  }

  parentElement.removeChild(parentElement.lastChild);
  parentElement.appendChild(shipCont);
}

function _convertToId(name) {
  return name.toLowerCase().replace(/ /g, '-');
}

function removeShipFromList(shipContId) {
  const shipListRepresentation = document.getElementById(shipContId);
  shipListRepresentation.style.display = 'none';
}

function changeGridElementsBorder(startElem, draggedElement, isRemove) {
  const gameboardOwner = startElem.id.split('-')[0];
  const numOfStartElem = Number(startElem.id.split('-')[1]);
  const isVertical = draggedElement.style.gridAutoFlow === 'row';

  const isPlacingValid = _checkPlacingValidity(
    numOfStartElem,
    draggedElement.childElementCount,
    isVertical
  );
  if (!isPlacingValid) {
    return false;
  }
  for (let i = 0; i < draggedElement.childElementCount; i++) {
    let elem;
    if (isVertical) {
      elem = document.getElementById(
        `${gameboardOwner}-${numOfStartElem + i * 10}`
      );
    } else {
      elem = document.getElementById(`${gameboardOwner}-${numOfStartElem + i}`);
    }

    if (isRemove) {
      elem.classList.remove('drag-over');
    } else {
      elem.classList.add('drag-over');
    }
  }
}

function _checkPlacingValidity(startFieldNumber, shipLength, isVertical) {
  if (isVertical) {
    return startFieldNumber + (shipLength - 1) * 10 < 100;
  } else {
    const startFieldDecimal = Math.floor(startFieldNumber / 10);
    const endFieldDecimal = Math.floor(
      (startFieldNumber + shipLength - 1) / 10
    );
    return startFieldDecimal === endFieldDecimal;
  }
}




/***/ }),

/***/ "./src/scripts/drag-n-drop.js":
/*!************************************!*\
  !*** ./src/scripts/drag-n-drop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breakUpFieldId": () => (/* binding */ breakUpFieldId),
/* harmony export */   "dragEnter": () => (/* binding */ dragEnter),
/* harmony export */   "dragLeave": () => (/* binding */ dragLeave),
/* harmony export */   "dragOver": () => (/* binding */ dragOver),
/* harmony export */   "drop": () => (/* binding */ drop),
/* harmony export */   "makeDragable": () => (/* binding */ makeDragable),
/* harmony export */   "setShipDirection": () => (/* binding */ setShipDirection)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/scripts/dom.js");


let draggedElement;

const _directions = [
  { id: 'patrol-boat', direction: false },
  { id: 'submarine', direction: false },
  { id: 'destroyer', direction: false },
  { id: 'battleship', direction: false },
  { id: 'carrier', direction: false },
];

function makeDragable(elem) {
  elem.setAttribute('draggable', true);
  elem.addEventListener('dragstart', dragStart);
}

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  draggedElement = e.target;
}

function dragEnter(e) {
  e.preventDefault();
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.changeGridElementsBorder)(e.target, draggedElement, false);
}

function dragOver(e) {
  e.preventDefault();
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.changeGridElementsBorder)(e.target, draggedElement, false);
}

function dragLeave(e) {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.changeGridElementsBorder)(e.target, draggedElement, true);
}

function drop(e, gameboard) {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.changeGridElementsBorder)(e.target, draggedElement, true);

  const id = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);

  const shipLength = draggable.childElementCount;
  const startField = breakUpFieldId(e.target);
  const startFieldNumber = startField.row * 10 + startField.column;
  const shipDirection = _directions.filter(
    (elem) => elem.id === draggable.id
  )[0].direction;

  const isShipPlaced = _placeShipOnBoard(
    gameboard,
    shipLength,
    startField.row,
    startField.column,
    shipDirection
  );

  if (isShipPlaced) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeShipFromList)(id);

    return { startFieldNumber, shipLength, shipDirection };
  }
}

function _placeShipOnBoard(gameboard, length, y, x, direction) {
  const isShipPlaced = gameboard.placeShip(length, y, x, direction);

  return isShipPlaced;
}

function breakUpFieldId(filed) {
  const filedNumber = Number(filed.id.split('-')[1]);
  const row = Math.floor(filedNumber / 10);
  const column = filedNumber - row * 10;

  return { row, column };
}

function setShipDirection(shipName, direction) {
  _directions.forEach((elem) => {
    if (elem.id === shipName) elem.direction = direction;
  });
}




/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");



const Gameboard = () => {
  const _gameboard = new Array(100).fill(0);
  const _attackedGameboardFields = new Array(100).fill(0);

  let patrolBoat;
  let submarine;
  let destroyer;
  let battleship;
  let carrier;

  const displayGameboard = () => {
    return _gameboard;
  };

  const displayAttacks = () => {
    return _attackedGameboardFields;
  };

  const placeShip = (shipLength, startY, startX, isVertical) => {
    let newShip;
    const indexOfStartField = startY * 10 + startX;

    const isFieldsFree = _checkFreeFields(
      shipLength,
      indexOfStartField,
      isVertical
    );
    const isShipInGameboard = _checkShipWithinGameboard(
      shipLength,
      indexOfStartField,
      isVertical
    );
    if (!isFieldsFree || !isShipInGameboard) {
      return false;
    } else {
      newShip = _createShip(shipLength);
    }

    newShip.displayShip().forEach((elem, index) => {
      if (isVertical) {
        _gameboard.splice(indexOfStartField + index * 10, 1, elem);
      } else {
        _gameboard.splice(indexOfStartField + index, 1, elem);
      }
    });

    return true;
  };

  const _createShip = (shipLength) => {
    if (shipLength === 2) {
      patrolBoat = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 'pb');
      return patrolBoat;
    } else if (shipLength === 3) {
      if (!submarine) {
        submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 'sb');
        return submarine;
      } else {
        destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 'ds');
        return destroyer;
      }
    } else if (shipLength === 4) {
      battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 'bs');
      return battleship;
    } else if (shipLength === 5) {
      carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 'cr');
      return carrier;
    }
  };

  const _checkFreeFields = (shipLength, startField, isVertical) => {
    if (isVertical) {
      let rowNumber = 0;
      const gameboardFields = _gameboard.filter((elem, index) => {
        if (index === startField + rowNumber * 10) {
          rowNumber += 1;
          return true;
        }
      });

      return !gameboardFields.some((field) => /[a-z]/.test(field));
    } else {
      const gameboardFields = _gameboard.slice(
        startField,
        startField + shipLength
      );

      return !gameboardFields.some((field) => /[a-z]/.test(field));
    }
  };

  const _checkShipWithinGameboard = (shipLength, startField, isVertical) => {
    if (isVertical) {
      const lastDecimal = Math.floor((startField + (shipLength - 1) * 10) / 10);
      if (lastDecimal > 9) {
        return false;
      }
      return true;
    } else {
      const firstDecimal = Math.floor(startField / 10);
      const lastDecimal = Math.floor((startField + shipLength - 1) / 10);
      if (firstDecimal !== lastDecimal) {
        return false;
      }
      return true;
    }
  };

  const receiveAttack = (coordY, coordX) => {
    const attackedFieldIndex = coordY * 10 + coordX;

    if (typeof _gameboard[attackedFieldIndex] === 'string') {
      const attackedShipMark = _gameboard[attackedFieldIndex];
      const shipHologram = [];

      _gameboard.forEach((elem, index) => {
        if (elem === attackedShipMark) {
          shipHologram.push(index);
        }
      });

      const attackedShipFieldIndex = shipHologram.indexOf(attackedFieldIndex);
      _attackShip(attackedShipMark, attackedShipFieldIndex);
    }

    _attackedGameboardFields[attackedFieldIndex] = 1;
  };

  const _attackShip = (shipMark, attackedField) => {
    if (shipMark === 'pb') {
      patrolBoat.hit(attackedField);
    } else if (shipMark === 'sb') {
      submarine.hit(attackedField);
    } else if (shipMark === 'ds') {
      destroyer.hit(attackedField);
    } else if (shipMark === 'bs') {
      battleship.hit(attackedField);
    } else if (shipMark === 'cr') {
      carrier.hit(attackedField);
    }
  };

  const displayShips = () => {
    return { patrolBoat, submarine, destroyer, battleship, carrier };
  };

  const isFleetDestroyed = () => {
    return (
      patrolBoat.isSunk() &&
      submarine.isSunk() &&
      destroyer.isSunk() &&
      battleship.isSunk() &&
      carrier.isSunk()
    );
  };

  function placeShipsRandomly() {
    const lengths = [2, 3, 3, 4, 5];

    lengths.forEach((elem) => {
      let placeData = _generatePlaceData();
      let isShipPlaced = placeShip(
        elem,
        placeData.row,
        placeData.column,
        placeData.direction
      );

      while (!isShipPlaced) {
        placeData = _generatePlaceData();
        isShipPlaced = placeShip(
          elem,
          placeData.row,
          placeData.column,
          placeData.direction
        );
      }
    });
  }

  function _generatePlaceData() {
    const row = (0,_player__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(10);
    const column = (0,_player__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(10);
    const direction = (0,_player__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(2) === 0 ? true : false;

    return { row, column, direction };
  }

  function isFleetPlaced() {
    return patrolBoat && submarine && destroyer && battleship && carrier;
  }

  return {
    displayGameboard,
    displayAttacks,
    placeShip,
    receiveAttack,
    displayShips,
    isFleetDestroyed,
    placeShipsRandomly,
    isFleetPlaced,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt)
/* harmony export */ });
const Player = (playerName, isHuman) => {
  const name = playerName;
  const comp = !isHuman;
  let _isPreviousAtrackHit = false;
  let _lastAttackedField;

  const attackGameboard = (gameboard, coordY, coordX) => {
    const filedToAttack = coordY * 10 + coordX;
    const canAttackField = _checkIfFiledWasAttacked(gameboard, filedToAttack);
    if (!canAttackField) {
      return false;
    }
    gameboard.receiveAttack(coordY, coordX);

    const isHit =
      typeof gameboard.displayGameboard()[filedToAttack] === 'string'
        ? true
        : false;

    if (isHit) {
      _isPreviousAtrackHit = true;
    } else {
      _isPreviousAtrackHit = false;
    }
    _lastAttackedField = filedToAttack;

    return true;
  };

  const aiAttack = (gameboard) => {
    let fieldToAttack;
    if (_isPreviousAtrackHit) {
      fieldToAttack = _getNextFieldNumber(_lastAttackedField, gameboard);
    } else {
      fieldToAttack = getRandomInt(100);
    }

    while (!_checkIfFiledWasAttacked(gameboard, fieldToAttack)) {
      fieldToAttack = getRandomInt(100);
    }

    const row = Math.floor(fieldToAttack / 10);
    const column = fieldToAttack - row * 10;

    gameboard.receiveAttack(row, column);
    const isHit =
      typeof gameboard.displayGameboard()[fieldToAttack] === 'string'
        ? true
        : false;

    if (isHit) {
      _isPreviousAtrackHit = true;
    } else {
      _isPreviousAtrackHit = false;
    }
    _lastAttackedField = fieldToAttack;

    return fieldToAttack;
  };

  const _checkIfFiledWasAttacked = (gameboard, fieldNumber) => {
    const to = fieldNumber + 1;
    const attackedFieldContent = gameboard
      .displayAttacks()
      .slice(fieldNumber, to)[0];
    if (attackedFieldContent === 1) {
      return false;
    } else {
      return true;
    }
  };

  const _getNextFieldNumber = (attackedFieldNumber, gameboardToAttack) => {
    const nextFields = [
      attackedFieldNumber - 1,
      attackedFieldNumber - 10,
      attackedFieldNumber + 1,
      attackedFieldNumber + 10,
    ];
    const filteredFields = nextFields.filter((filedNum) => {
      if (filedNum < 0 || filedNum > 99) {
        return false;
      }
      const wasAttacked = _checkIfFiledWasAttacked(gameboardToAttack, filedNum);
      return wasAttacked;
    });

    if (filteredFields[0]) {
      return filteredFields[Math.floor(Math.random() * filteredFields.length)];
    } else {
      return getRandomInt(100);
    }
  };

  return { name, comp, attackGameboard, aiAttack };
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}




/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (shipLength, shipMark) => {
  const _ship = new Array(shipLength).fill(shipMark);

  const displayShip = () => {
    return _ship;
  };

  const hit = (numberOfField) => {
    _ship[numberOfField] = 1;
  };

  const isSunk = () => {
    return !_ship.includes(shipMark);
  };

  return { displayShip, hit, isSunk };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/img/icons8-github.svg":
/*!***********************************!*\
  !*** ./src/img/icons8-github.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a61b960f2ce17e7b773b.svg";

/***/ }),

/***/ "./src/img/rotate-svgrepo-com.svg":
/*!****************************************!*\
  !*** ./src/img/rotate-svgrepo-com.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f7b2067fc665eeb0aed.svg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_icons8_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icons8-github.svg */ "./src/img/icons8-github.svg");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_gameboard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/gameboard.css */ "./src/styles/gameboard.css");
/* harmony import */ var _styles_winner_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/winner.css */ "./src/styles/winner.css");
/* harmony import */ var _styles_ship_list_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ship-list.css */ "./src/styles/ship-list.css");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom */ "./src/scripts/dom.js");
/* harmony import */ var _drag_n_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drag-n-drop */ "./src/scripts/drag-n-drop.js");











let isPlayersTurn = true;

setUpGame('Human', 'Computer', false);

function setUpGame(player1Name, player2Name, isPlayer2Human) {
  isPlayersTurn = true;

  const player = (0,_player__WEBPACK_IMPORTED_MODULE_5__.Player)(player1Name, true);
  const enemy = (0,_player__WEBPACK_IMPORTED_MODULE_5__.Player)(player2Name, isPlayer2Human);
  const playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const enemyGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_6__["default"])();

  enemyGameboard.placeShipsRandomly();
  // playerGameboard.placeShipsRandomly();

  (0,_dom__WEBPACK_IMPORTED_MODULE_7__.displayPlayerGrid)(playerGameboard, 'player');
  // displayRandomGrid(playerGameboard, 'player');

  (0,_dom__WEBPACK_IMPORTED_MODULE_7__.displayRandomGrid)(enemyGameboard, 'enemy');

  (0,_dom__WEBPACK_IMPORTED_MODULE_7__.displayShipList)();

  const playerFields = document.querySelectorAll('.player-field');
  const enemyFields = document.querySelectorAll('.enemy-field');

  enemyFields.forEach((elem) => {
    elem.style.cursor = 'pointer';

    elem.addEventListener('click', () => {
      if (isPlayersTurn) {
        const row = (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_8__.breakUpFieldId)(elem).row;
        const column = (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_8__.breakUpFieldId)(elem).column;

        const isAttackTookPlace = player.attackGameboard(
          enemyGameboard,
          row,
          column
        );
        if (isAttackTookPlace) {
          const attackedField = row * 10 + column;
          const hitReport = reportHit(enemyGameboard, attackedField);
          (0,_dom__WEBPACK_IMPORTED_MODULE_7__.displayAttack)(elem, hitReport);

          isPlayersTurn = false;

          if (enemyGameboard.isFleetDestroyed()) {
            stateWinner(player);
          }
        }
      }

      if (!isPlayer2Human && !isPlayersTurn) {
        const attackedFieldNumber = enemy.aiAttack(playerGameboard);
        const attackField = document.querySelector(
          `#player-${attackedFieldNumber}`
        );
        const hitReport = reportHit(playerGameboard, attackedFieldNumber);
        (0,_dom__WEBPACK_IMPORTED_MODULE_7__.displayAttack)(attackField, hitReport);

        isPlayersTurn = true;

        if (playerGameboard.isFleetDestroyed()) {
          stateWinner(enemy);
        }
      }
    });
  });

  if (isPlayer2Human) {
    playerFields.forEach((elem) => {
      elem.style.cursor = 'pointer';

      elem.addEventListener('click', () => {
        if (!isPlayersTurn) {
          const row = (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_8__.breakUpFieldId)(elem).row;
          const column = (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_8__.breakUpFieldId)(elem).column;

          const isAttackTookPlace = enemy.attackGameboard(
            playerGameboard,
            row,
            column
          );
          if (isAttackTookPlace) {
            const attackedField = row * 10 + column;
            const hitReport = reportHit(playerGameboard, attackedField);
            (0,_dom__WEBPACK_IMPORTED_MODULE_7__.displayAttack)(elem, hitReport);

            isPlayersTurn = true;

            if (playerGameboard.isFleetDestroyed()) {
              stateWinner(enemy);
            }
          }
        }
      });
    });
  }
}

function reportHit(gameboard, fieldNumber) {
  const attackedFieldContent = gameboard.displayGameboard()[fieldNumber];
  if (typeof attackedFieldContent === 'string') {
    return true;
  } else {
    return false;
  }
}

function stateWinner(winner) {
  (0,_dom__WEBPACK_IMPORTED_MODULE_7__.displayWinner)(winner.name);
  const playAgainBtn = document.querySelector('.play-again-btn');
  playAgainBtn.addEventListener('click', () => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_7__.cleanOutGBContainer)();
    setUpGame('Human', 'Computer', false);
    (0,_dom__WEBPACK_IMPORTED_MODULE_7__.hideWinner)();
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUEsRUFBRSx1REFBaUI7QUFDbkI7O0FBRUEsRUFBRSx1REFBaUI7O0FBRW5CLEVBQUUscURBQWU7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDREQUFjO0FBQ2xDLHVCQUF1Qiw0REFBYzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbURBQWE7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0EsUUFBUSxtREFBYTs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiw0REFBYztBQUNwQyx5QkFBeUIsNERBQWM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFhOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsbURBQWE7QUFDZjtBQUNBO0FBQ0EsSUFBSSx5REFBbUI7QUFDdkI7QUFDQSxJQUFJLGdEQUFVO0FBQ2QsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zaGlwLWxpc3QuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3dpbm5lci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3M/MjE4NyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3NoaXAtbGlzdC5jc3M/ZGY4ZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy93aW5uZXIuY3NzP2JkZmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kcmFnLW4tZHJvcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1maWVsZC1ib3JkZXItY2xyOiAjMGQwZDBkO1xcbiAgLS1maWxlZC1iZy1jbHI6ICNmMmMzMzU7XFxuICAtLWF0dGFja2VkLWJnLWNscjogI2ZmZjtcXG4gIC0taGl0LWJnLWNscjogI2ZmMDAwMDtcXG59XFxuXFxuLmdiLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5nYi1wbGF5ZXIsXFxuLmdiLWVuZW15IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDNyZW0pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDNyZW0pO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1maWVsZCxcXG4uZW5lbXktZmllbGQsXFxuLmhpdCB7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY2xyKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5kaXZbY2xhc3MkPSdmaWVsZCddIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGVkLWJnLWNscik7XFxufVxcblxcbi5kcmFnLW92ZXIge1xcbiAgYm9yZGVyOiBkYXNoZWQgMC4ycmVtIHJlZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlFQUFpRTtFQUNqRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSw0Q0FBNEM7RUFDNUMsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWZpZWxkLWJvcmRlci1jbHI6ICMwZDBkMGQ7XFxuICAtLWZpbGVkLWJnLWNscjogI2YyYzMzNTtcXG4gIC0tYXR0YWNrZWQtYmctY2xyOiAjZmZmO1xcbiAgLS1oaXQtYmctY2xyOiAjZmYwMDAwO1xcbn1cXG5cXG4uZ2ItY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmdiLXBsYXllcixcXG4uZ2ItZW5lbXkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgM3JlbSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgM3JlbSk7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLWZpZWxkLFxcbi5lbmVteS1maWVsZCxcXG4uaGl0IHtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jbHIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmRpdltjbGFzcyQ9J2ZpZWxkJ10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsZWQtYmctY2xyKTtcXG59XFxuXFxuLmRyYWctb3ZlciB7XFxuICBib3JkZXI6IGRhc2hlZCAwLjJyZW0gcmVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWhlYWRlci1oZWlnaHQ6IDNyZW07XFxuICAtLWhlYWRlci1iZy1jbHI6ICMwZDBkMGQ7XFxuICAtLWhlYWRlci1mb250LWNscjogI2YyYzMzNTtcXG4gIC0tYmYtYmctY2xyOiAjZjJlNjNkO1xcbiAgLS1mb290ZXItaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY2xyKTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItZm9udC1jbHIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJmLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5iZi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJmLWJnLWNscik7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1mb250LWNscik7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWJnLWNscik7XFxufVxcblxcbi5naXRodWItaWNvbiB7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbn1cXG5cXG4uZ2l0aHViLWxpbmsge1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsc0NBQXNDO0VBQ3RDLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlFQUFpRTtFQUNqRSxrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWhlYWRlci1oZWlnaHQ6IDNyZW07XFxuICAtLWhlYWRlci1iZy1jbHI6ICMwZDBkMGQ7XFxuICAtLWhlYWRlci1mb250LWNscjogI2YyYzMzNTtcXG4gIC0tYmYtYmctY2xyOiAjZjJlNjNkO1xcbiAgLS1mb290ZXItaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY2xyKTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItZm9udC1jbHIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJmLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5iZi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJmLWJnLWNscik7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1mb250LWNscik7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWJnLWNscik7XFxufVxcblxcbi5naXRodWItaWNvbiB7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbn1cXG5cXG4uZ2l0aHViLWxpbmsge1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1zaGlwLWZpZWxkLWJnLWNscjogI2Q4OGIzMjtcXG59XFxuXFxuLnNoaXAtbGlzdC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiB2YXIoLS1oZWFkZXItaGVnaXRoKTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5pbnN0cnVjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAxLjhyZW0pO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uc2hpcC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uc2hpcC1jYXJkIHtcXG4gIGhlaWdodDogMTNyZW07XFxuICB3aWR0aDogMTByZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tc2hpcC1maWVsZC1iZy1jbHIpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjgpO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5yb3RhdGUtYnRuIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gYm90dG9tLFxcbiAgICB2YXIoLS1zaGlwLWZpZWxkLWJnLWNscikgNSUsXFxuICAgICNmZmMxNjQgMTAwJVxcbiAgKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtZmllbGQtYmctY2xyKTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ucm90YXRlLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHRvcCxcXG4gICAgdmFyKC0tc2hpcC1maWVsZC1iZy1jbHIpIDUlLFxcbiAgICAjZmZjMTY0IDEwMCVcXG4gICk7XFxufVxcblxcbi5yb3RhdGUtYnRuOmFjdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDAuMnJlbTtcXG59XFxuXFxuLnJvdGF0ZS1idG4gaW1nIHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIgLnNoaXAtZmllbGQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jbHIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1maWVsZC1iZy1jbHIpO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2hpcC1saXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsUUFBUTtFQUNSLFdBQVc7RUFDWCxpRUFBaUU7RUFDakUsZ0JBQWdCO0VBQ2hCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLCtDQUErQztFQUMvQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxxQkFBcUI7RUFDckIsMENBQTBDO0VBQzFDLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZjs7OztHQUlDO0VBQ0QsMENBQTBDO0VBQzFDLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7Ozs7R0FJQztBQUNIOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tc2hpcC1maWVsZC1iZy1jbHI6ICNkODhiMzI7XFxufVxcblxcbi5zaGlwLWxpc3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogdmFyKC0taGVhZGVyLWhlZ2l0aCk7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMS44cmVtKTtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLnNoaXAtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnNoaXAtY2FyZCB7XFxuICBoZWlnaHQ6IDEzcmVtO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHZhcigtLXNoaXAtZmllbGQtYmctY2xyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNzcsIDE3NywgMC44KTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucm90YXRlLWJ0biB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGJvdHRvbSxcXG4gICAgdmFyKC0tc2hpcC1maWVsZC1iZy1jbHIpIDUlLFxcbiAgICAjZmZjMTY0IDEwMCVcXG4gICk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWZpZWxkLWJnLWNscik7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgIzAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLnJvdGF0ZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byB0b3AsXFxuICAgIHZhcigtLXNoaXAtZmllbGQtYmctY2xyKSA1JSxcXG4gICAgI2ZmYzE2NCAxMDAlXFxuICApO1xcbn1cXG5cXG4ucm90YXRlLWJ0bjphY3RpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwLjJyZW07XFxufVxcblxcbi5yb3RhdGUtYnRuIGltZyB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIC5zaGlwLWZpZWxkIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY2xyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtZmllbGQtYmctY2xyKTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud2lubmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDV2aDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNjYsIDY2LCAwLjgpO1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5LWFnYWluLWJ0biB7XFxuICB3aWR0aDogMTByZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3YzdhN2EgNSUsICMwMDAwMDAgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M3YTdhO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5wbGF5LWFnYWluLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjN2M3YTdhIDUlLCAjMDAwMDAwIDEwMCUpO1xcbn1cXG5cXG4ucGxheS1hZ2Fpbi1idG46YWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC4ycmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3dpbm5lci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnRUFBZ0U7RUFDaEUseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndpbm5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQ1dmg7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsIDY2LCA2NiwgMC44KTtcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheS1hZ2Fpbi1idG4ge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgIzAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjN2M3YTdhIDUlLCAjMDAwMDAwIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjN2E3YTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ucGxheS1hZ2Fpbi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzdjN2E3YSA1JSwgIzAwMDAwMCAxMDAlKTtcXG59XFxuXFxuLnBsYXktYWdhaW4tYnRuOmFjdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuMnJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwLWxpc3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwLWxpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbm5lci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbm5lci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHJvdGF0ZVNWRyBmcm9tICcuLi9pbWcvcm90YXRlLXN2Z3JlcG8tY29tLnN2Zyc7XG5cbmltcG9ydCB7XG4gIG1ha2VEcmFnYWJsZSxcbiAgZHJhZ0VudGVyLFxuICBkcmFnTGVhdmUsXG4gIGRyYWdPdmVyLFxuICBkcm9wLFxuICBzZXRTaGlwRGlyZWN0aW9uLFxufSBmcm9tICcuL2RyYWctbi1kcm9wJztcblxuY29uc3QgX2JhdHRsZWZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJmLWNvbnRhaW5lcicpO1xuY29uc3QgX2dhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYi1jb250YWluZXInKTtcblxuZnVuY3Rpb24gZGlzcGxheVJhbmRvbUdyaWQoZ2FtZWJvYXJkLCBnYW1lYm9hcmRPd25lcikge1xuICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZChgZ2ItJHtnYW1lYm9hcmRPd25lcn1gKTtcblxuICBnYW1lYm9hcmQuZGlzcGxheUdhbWVib2FyZCgpLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZ2JGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdiRmllbGQuY2xhc3NMaXN0LmFkZChgJHtnYW1lYm9hcmRPd25lcn0tZmllbGRgKTtcbiAgICBnYkZpZWxkLmlkID0gYCR7Z2FtZWJvYXJkT3duZXJ9LSR7aW5kZXh9YDtcblxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2JGaWVsZCk7XG4gIH0pO1xuXG4gIF9nYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJHcmlkKGdhbWVib2FyZCwgZ2FtZWJvYXJkT3duZXIpIHtcbiAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYGdiLSR7Z2FtZWJvYXJkT3duZXJ9YCk7XG5cbiAgZ2FtZWJvYXJkLmRpc3BsYXlHYW1lYm9hcmQoKS5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGdiRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYkZpZWxkLmNsYXNzTGlzdC5hZGQoYCR7Z2FtZWJvYXJkT3duZXJ9LWZpZWxkYCk7XG4gICAgZ2JGaWVsZC5pZCA9IGAke2dhbWVib2FyZE93bmVyfS0ke2luZGV4fWA7XG5cbiAgICBnYkZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgZ2JGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICBnYkZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gICAgZ2JGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbG9yaW5nRGF0YSA9IGRyb3AoZSwgZ2FtZWJvYXJkKTtcbiAgICAgIGlmIChjb2xvcmluZ0RhdGEpIHtcbiAgICAgICAgX2Rpc3BsYXlEcm9wcGVkU2hpcChcbiAgICAgICAgICBnYW1lYm9hcmRPd25lcixcbiAgICAgICAgICBjb2xvcmluZ0RhdGEuc3RhcnRGaWVsZE51bWJlcixcbiAgICAgICAgICBjb2xvcmluZ0RhdGEuc2hpcExlbmd0aCxcbiAgICAgICAgICBjb2xvcmluZ0RhdGEuc2hpcERpcmVjdGlvblxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2FtZWJvYXJkLmlzRmxlZXRQbGFjZWQoKSkge1xuICAgICAgICBjb25zdCBzaGlwTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJy5zaGlwLWxpc3QtY29udGFpbmVyJ1xuICAgICAgICApO1xuICAgICAgICBzaGlwTGlzdENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNoaXBMaXN0Q29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2JGaWVsZCk7XG4gIH0pO1xuXG4gIF9nYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNsZWFuT3V0R0JDb250YWluZXIoKSB7XG4gIF9nYW1lYm9hcmRDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUF0dGFjayhmaWVsZCwgaXNTaGlwKSB7XG4gIGlmIChpc1NoaXApIHtcbiAgICBmaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0taGl0LWJnLWNsciknO1xuICB9IGVsc2Uge1xuICAgIGZpZWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1hdHRhY2tlZC1iZy1jbHIpJztcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2lubmVyKHdpbm5lcikge1xuICBjb25zdCB3aW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2lubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbm5lcicpO1xuICB3aW5uZXJEaXYudGV4dENvbnRlbnQgPSBgQ29uZ3JhdHVsYXRpb24gJHt3aW5uZXJ9YDtcblxuICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nO1xuICBwbGF5QWdhaW5CdG4uY2xhc3NMaXN0LmFkZCgncGxheS1hZ2Fpbi1idG4nKTtcbiAgd2lubmVyRGl2LmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ0bik7XG5cbiAgX2JhdHRsZWZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbm5lckRpdik7XG59XG5cbmZ1bmN0aW9uIGhpZGVXaW5uZXIoKSB7XG4gIGNvbnN0IHdpbm5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKTtcbiAgd2lubmVyRGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod2lubmVyRGl2KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNoaXBMaXN0KCkge1xuICBjb25zdCBzaGlwTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaGlwTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlwLWxpc3QtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBpbnN0cnVjdGlvbi5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbicpO1xuICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9ICdEZXBsb3kgeW91ciBzaGlwcywgQ2FwdGFpbiEnO1xuICBzaGlwTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbik7XG5cbiAgX2JhdHRsZWZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBMaXN0Q29udGFpbmVyKTtcblxuICBjb25zdCBzaGlwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaGlwTGlzdC5jbGFzc0xpc3QuYWRkKCdzaGlwLWxpc3QnKTtcbiAgc2hpcExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcExpc3QpO1xuXG4gIGNvbnN0IHBhdHJvbEJvYXQgPSBfY3JlYXRTaGlwTGlzdEl0ZW0oJ1BhdHJvbCBib2F0JywgMik7XG4gIHNoaXBMaXN0LmFwcGVuZENoaWxkKHBhdHJvbEJvYXQpO1xuXG4gIGNvbnN0IHN1Ym1hcmluZSA9IF9jcmVhdFNoaXBMaXN0SXRlbSgnU3VibWFyaW5lJywgMyk7XG4gIHNoaXBMaXN0LmFwcGVuZENoaWxkKHN1Ym1hcmluZSk7XG5cbiAgY29uc3QgZGVzdHJveWVyID0gX2NyZWF0U2hpcExpc3RJdGVtKCdEZXN0cm95ZXInLCAzKTtcbiAgc2hpcExpc3QuYXBwZW5kQ2hpbGQoZGVzdHJveWVyKTtcblxuICBjb25zdCBiYXR0bGVzaGlwID0gX2NyZWF0U2hpcExpc3RJdGVtKCdCYXR0bGVzaGlwJywgNCk7XG4gIHNoaXBMaXN0LmFwcGVuZENoaWxkKGJhdHRsZXNoaXApO1xuXG4gIGNvbnN0IGNhcnJpZXIgPSBfY3JlYXRTaGlwTGlzdEl0ZW0oJ0NhcnJpZXInLCA1KTtcbiAgc2hpcExpc3QuYXBwZW5kQ2hpbGQoY2Fycmllcik7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdFNoaXBMaXN0SXRlbShzaGlwbmFtZSwgc2hpcExlbmd0aCkge1xuICBsZXQgaXNTaGlwUm90YXRlZCA9IGZhbHNlO1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGl0ZW0uY2xhc3NMaXN0LmFkZCgnc2hpcC1jYXJkJyk7XG5cbiAgY29uc3QgY2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJyk7XG5cbiAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBzaGlwbmFtZTtcbiAgY2FyZEhlYWRlci5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuXG4gIGNvbnN0IHNoaXBDb250SWQgPSBfY29udmVydFRvSWQoc2hpcG5hbWUpO1xuXG4gIGNvbnN0IHJvdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByb3RCdG4uY2xhc3NMaXN0LmFkZCgncm90YXRlLWJ0bicpO1xuICByb3RCdG4uaWQgPSBgJHtzaGlwQ29udElkfS1idG5gO1xuICBjb25zdCByb3RhdGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgcm90YXRlSW1nLnNyYyA9ICcuLzhmN2IyMDY3ZmM2NjVlZWIwYWVkLnN2Zyc7XG5cbiAgcm90QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlzU2hpcFJvdGF0ZWQgPSAhaXNTaGlwUm90YXRlZDtcbiAgICBfcm90YXRlU2hpcChzaGlwQ29udElkLCBpc1NoaXBSb3RhdGVkLCBpdGVtKTtcbiAgICBzZXRTaGlwRGlyZWN0aW9uKHNoaXBDb250SWQsIGlzU2hpcFJvdGF0ZWQpO1xuICB9KTtcbiAgcm90QnRuLmFwcGVuZENoaWxkKHJvdGF0ZUltZyk7XG4gIGNhcmRIZWFkZXIuYXBwZW5kQ2hpbGQocm90QnRuKTtcblxuICBpdGVtLmFwcGVuZENoaWxkKGNhcmRIZWFkZXIpO1xuXG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlwLWNvbnRhaW5lcicpO1xuXG4gIHNoaXBDb250YWluZXIuaWQgPSBzaGlwQ29udElkO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2hpcEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcEZpZWxkLmNsYXNzTGlzdC5hZGQoJ3NoaXAtZmllbGQnKTtcbiAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBGaWVsZCk7XG4gIH1cblxuICBtYWtlRHJhZ2FibGUoc2hpcENvbnRhaW5lciwgaXNTaGlwUm90YXRlZCk7XG5cbiAgaXRlbS5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyKTtcblxuICByZXR1cm4gaXRlbTtcbn1cblxuZnVuY3Rpb24gX2Rpc3BsYXlEcm9wcGVkU2hpcChcbiAgZ2FtZWJvYXJkT3duZXIsXG4gIGZpcnN0Q29sb3JlZEZpbGVkTnVtYmVyLFxuICBudW1iZXJPZkNvbG9yZWRGaWVsZHMsXG4gIGlzQ2xvb3JpbmdEaXJlY3Rpb25WZXJ0aWNhbFxuKSB7XG4gIGlmIChpc0Nsb29yaW5nRGlyZWN0aW9uVmVydGljYWwpIHtcbiAgICBmb3IgKFxuICAgICAgbGV0IGkgPSBmaXJzdENvbG9yZWRGaWxlZE51bWJlcjtcbiAgICAgIGkgPCBmaXJzdENvbG9yZWRGaWxlZE51bWJlciArIG51bWJlck9mQ29sb3JlZEZpZWxkcyAqIDEwO1xuICAgICAgaSArPSAxMFxuICAgICkge1xuICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtnYW1lYm9hcmRPd25lcn0tJHtpfWApO1xuICAgICAgZmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLXNoaXAtZmllbGQtYmctY2xyKSc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoXG4gICAgICBsZXQgaSA9IGZpcnN0Q29sb3JlZEZpbGVkTnVtYmVyO1xuICAgICAgaSA8IGZpcnN0Q29sb3JlZEZpbGVkTnVtYmVyICsgbnVtYmVyT2ZDb2xvcmVkRmllbGRzO1xuICAgICAgaSsrXG4gICAgKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2dhbWVib2FyZE93bmVyfS0ke2l9YCk7XG4gICAgICBmaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tc2hpcC1maWVsZC1iZy1jbHIpJztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX3JvdGF0ZVNoaXAoc2hpcElkLCBkaXJlY3Rpb24sIHBhcmVudEVsZW1lbnQpIHtcbiAgY29uc3Qgc2hpcENvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwSWQpO1xuICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgc2hpcENvbnQuc3R5bGUuZ3JpZEF1dG9GbG93ID0gJ3Jvdyc7XG4gIH0gZWxzZSB7XG4gICAgc2hpcENvbnQuc3R5bGUuZ3JpZEF1dG9GbG93ID0gJ2NvbHVtbic7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHBhcmVudEVsZW1lbnQubGFzdENoaWxkKTtcbiAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChzaGlwQ29udCk7XG59XG5cbmZ1bmN0aW9uIF9jb252ZXJ0VG9JZChuYW1lKSB7XG4gIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnLScpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTaGlwRnJvbUxpc3Qoc2hpcENvbnRJZCkge1xuICBjb25zdCBzaGlwTGlzdFJlcHJlc2VudGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2hpcENvbnRJZCk7XG4gIHNoaXBMaXN0UmVwcmVzZW50YXRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gY2hhbmdlR3JpZEVsZW1lbnRzQm9yZGVyKHN0YXJ0RWxlbSwgZHJhZ2dlZEVsZW1lbnQsIGlzUmVtb3ZlKSB7XG4gIGNvbnN0IGdhbWVib2FyZE93bmVyID0gc3RhcnRFbGVtLmlkLnNwbGl0KCctJylbMF07XG4gIGNvbnN0IG51bU9mU3RhcnRFbGVtID0gTnVtYmVyKHN0YXJ0RWxlbS5pZC5zcGxpdCgnLScpWzFdKTtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IGRyYWdnZWRFbGVtZW50LnN0eWxlLmdyaWRBdXRvRmxvdyA9PT0gJ3Jvdyc7XG5cbiAgY29uc3QgaXNQbGFjaW5nVmFsaWQgPSBfY2hlY2tQbGFjaW5nVmFsaWRpdHkoXG4gICAgbnVtT2ZTdGFydEVsZW0sXG4gICAgZHJhZ2dlZEVsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQsXG4gICAgaXNWZXJ0aWNhbFxuICApO1xuICBpZiAoIWlzUGxhY2luZ1ZhbGlkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhZ2dlZEVsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQ7IGkrKykge1xuICAgIGxldCBlbGVtO1xuICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIGAke2dhbWVib2FyZE93bmVyfS0ke251bU9mU3RhcnRFbGVtICsgaSAqIDEwfWBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtnYW1lYm9hcmRPd25lcn0tJHtudW1PZlN0YXJ0RWxlbSArIGl9YCk7XG4gICAgfVxuXG4gICAgaWYgKGlzUmVtb3ZlKSB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfY2hlY2tQbGFjaW5nVmFsaWRpdHkoc3RhcnRGaWVsZE51bWJlciwgc2hpcExlbmd0aCwgaXNWZXJ0aWNhbCkge1xuICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgIHJldHVybiBzdGFydEZpZWxkTnVtYmVyICsgKHNoaXBMZW5ndGggLSAxKSAqIDEwIDwgMTAwO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXJ0RmllbGREZWNpbWFsID0gTWF0aC5mbG9vcihzdGFydEZpZWxkTnVtYmVyIC8gMTApO1xuICAgIGNvbnN0IGVuZEZpZWxkRGVjaW1hbCA9IE1hdGguZmxvb3IoXG4gICAgICAoc3RhcnRGaWVsZE51bWJlciArIHNoaXBMZW5ndGggLSAxKSAvIDEwXG4gICAgKTtcbiAgICByZXR1cm4gc3RhcnRGaWVsZERlY2ltYWwgPT09IGVuZEZpZWxkRGVjaW1hbDtcbiAgfVxufVxuXG5leHBvcnQge1xuICBkaXNwbGF5UmFuZG9tR3JpZCxcbiAgZGlzcGxheVBsYXllckdyaWQsXG4gIGNsZWFuT3V0R0JDb250YWluZXIsXG4gIGRpc3BsYXlBdHRhY2ssXG4gIGRpc3BsYXlXaW5uZXIsXG4gIGRpc3BsYXlTaGlwTGlzdCxcbiAgcmVtb3ZlU2hpcEZyb21MaXN0LFxuICBoaWRlV2lubmVyLFxuICBjaGFuZ2VHcmlkRWxlbWVudHNCb3JkZXIsXG59O1xuIiwiaW1wb3J0IHsgY2hhbmdlR3JpZEVsZW1lbnRzQm9yZGVyLCByZW1vdmVTaGlwRnJvbUxpc3QgfSBmcm9tICcuL2RvbSc7XG5cbmxldCBkcmFnZ2VkRWxlbWVudDtcblxuY29uc3QgX2RpcmVjdGlvbnMgPSBbXG4gIHsgaWQ6ICdwYXRyb2wtYm9hdCcsIGRpcmVjdGlvbjogZmFsc2UgfSxcbiAgeyBpZDogJ3N1Ym1hcmluZScsIGRpcmVjdGlvbjogZmFsc2UgfSxcbiAgeyBpZDogJ2Rlc3Ryb3llcicsIGRpcmVjdGlvbjogZmFsc2UgfSxcbiAgeyBpZDogJ2JhdHRsZXNoaXAnLCBkaXJlY3Rpb246IGZhbHNlIH0sXG4gIHsgaWQ6ICdjYXJyaWVyJywgZGlyZWN0aW9uOiBmYWxzZSB9LFxuXTtcblxuZnVuY3Rpb24gbWFrZURyYWdhYmxlKGVsZW0pIHtcbiAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBlLnRhcmdldC5pZCk7XG4gIGRyYWdnZWRFbGVtZW50ID0gZS50YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGRyYWdFbnRlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY2hhbmdlR3JpZEVsZW1lbnRzQm9yZGVyKGUudGFyZ2V0LCBkcmFnZ2VkRWxlbWVudCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY2hhbmdlR3JpZEVsZW1lbnRzQm9yZGVyKGUudGFyZ2V0LCBkcmFnZ2VkRWxlbWVudCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBkcmFnTGVhdmUoZSkge1xuICBjaGFuZ2VHcmlkRWxlbWVudHNCb3JkZXIoZS50YXJnZXQsIGRyYWdnZWRFbGVtZW50LCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gZHJvcChlLCBnYW1lYm9hcmQpIHtcbiAgY2hhbmdlR3JpZEVsZW1lbnRzQm9yZGVyKGUudGFyZ2V0LCBkcmFnZ2VkRWxlbWVudCwgdHJ1ZSk7XG5cbiAgY29uc3QgaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICBjb25zdCBzaGlwTGVuZ3RoID0gZHJhZ2dhYmxlLmNoaWxkRWxlbWVudENvdW50O1xuICBjb25zdCBzdGFydEZpZWxkID0gYnJlYWtVcEZpZWxkSWQoZS50YXJnZXQpO1xuICBjb25zdCBzdGFydEZpZWxkTnVtYmVyID0gc3RhcnRGaWVsZC5yb3cgKiAxMCArIHN0YXJ0RmllbGQuY29sdW1uO1xuICBjb25zdCBzaGlwRGlyZWN0aW9uID0gX2RpcmVjdGlvbnMuZmlsdGVyKFxuICAgIChlbGVtKSA9PiBlbGVtLmlkID09PSBkcmFnZ2FibGUuaWRcbiAgKVswXS5kaXJlY3Rpb247XG5cbiAgY29uc3QgaXNTaGlwUGxhY2VkID0gX3BsYWNlU2hpcE9uQm9hcmQoXG4gICAgZ2FtZWJvYXJkLFxuICAgIHNoaXBMZW5ndGgsXG4gICAgc3RhcnRGaWVsZC5yb3csXG4gICAgc3RhcnRGaWVsZC5jb2x1bW4sXG4gICAgc2hpcERpcmVjdGlvblxuICApO1xuXG4gIGlmIChpc1NoaXBQbGFjZWQpIHtcbiAgICByZW1vdmVTaGlwRnJvbUxpc3QoaWQpO1xuXG4gICAgcmV0dXJuIHsgc3RhcnRGaWVsZE51bWJlciwgc2hpcExlbmd0aCwgc2hpcERpcmVjdGlvbiB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF9wbGFjZVNoaXBPbkJvYXJkKGdhbWVib2FyZCwgbGVuZ3RoLCB5LCB4LCBkaXJlY3Rpb24pIHtcbiAgY29uc3QgaXNTaGlwUGxhY2VkID0gZ2FtZWJvYXJkLnBsYWNlU2hpcChsZW5ndGgsIHksIHgsIGRpcmVjdGlvbik7XG5cbiAgcmV0dXJuIGlzU2hpcFBsYWNlZDtcbn1cblxuZnVuY3Rpb24gYnJlYWtVcEZpZWxkSWQoZmlsZWQpIHtcbiAgY29uc3QgZmlsZWROdW1iZXIgPSBOdW1iZXIoZmlsZWQuaWQuc3BsaXQoJy0nKVsxXSk7XG4gIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoZmlsZWROdW1iZXIgLyAxMCk7XG4gIGNvbnN0IGNvbHVtbiA9IGZpbGVkTnVtYmVyIC0gcm93ICogMTA7XG5cbiAgcmV0dXJuIHsgcm93LCBjb2x1bW4gfTtcbn1cblxuZnVuY3Rpb24gc2V0U2hpcERpcmVjdGlvbihzaGlwTmFtZSwgZGlyZWN0aW9uKSB7XG4gIF9kaXJlY3Rpb25zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBpZiAoZWxlbS5pZCA9PT0gc2hpcE5hbWUpIGVsZW0uZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgbWFrZURyYWdhYmxlLFxuICBkcmFnRW50ZXIsXG4gIGRyYWdMZWF2ZSxcbiAgZHJhZ092ZXIsXG4gIGRyb3AsXG4gIGJyZWFrVXBGaWVsZElkLFxuICBzZXRTaGlwRGlyZWN0aW9uLFxufTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgeyBnZXRSYW5kb21JbnQgfSBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgX2dhbWVib2FyZCA9IG5ldyBBcnJheSgxMDApLmZpbGwoMCk7XG4gIGNvbnN0IF9hdHRhY2tlZEdhbWVib2FyZEZpZWxkcyA9IG5ldyBBcnJheSgxMDApLmZpbGwoMCk7XG5cbiAgbGV0IHBhdHJvbEJvYXQ7XG4gIGxldCBzdWJtYXJpbmU7XG4gIGxldCBkZXN0cm95ZXI7XG4gIGxldCBiYXR0bGVzaGlwO1xuICBsZXQgY2FycmllcjtcblxuICBjb25zdCBkaXNwbGF5R2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBfZ2FtZWJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlBdHRhY2tzID0gKCkgPT4ge1xuICAgIHJldHVybiBfYXR0YWNrZWRHYW1lYm9hcmRGaWVsZHM7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXBMZW5ndGgsIHN0YXJ0WSwgc3RhcnRYLCBpc1ZlcnRpY2FsKSA9PiB7XG4gICAgbGV0IG5ld1NoaXA7XG4gICAgY29uc3QgaW5kZXhPZlN0YXJ0RmllbGQgPSBzdGFydFkgKiAxMCArIHN0YXJ0WDtcblxuICAgIGNvbnN0IGlzRmllbGRzRnJlZSA9IF9jaGVja0ZyZWVGaWVsZHMoXG4gICAgICBzaGlwTGVuZ3RoLFxuICAgICAgaW5kZXhPZlN0YXJ0RmllbGQsXG4gICAgICBpc1ZlcnRpY2FsXG4gICAgKTtcbiAgICBjb25zdCBpc1NoaXBJbkdhbWVib2FyZCA9IF9jaGVja1NoaXBXaXRoaW5HYW1lYm9hcmQoXG4gICAgICBzaGlwTGVuZ3RoLFxuICAgICAgaW5kZXhPZlN0YXJ0RmllbGQsXG4gICAgICBpc1ZlcnRpY2FsXG4gICAgKTtcbiAgICBpZiAoIWlzRmllbGRzRnJlZSB8fCAhaXNTaGlwSW5HYW1lYm9hcmQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U2hpcCA9IF9jcmVhdGVTaGlwKHNoaXBMZW5ndGgpO1xuICAgIH1cblxuICAgIG5ld1NoaXAuZGlzcGxheVNoaXAoKS5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgICAgX2dhbWVib2FyZC5zcGxpY2UoaW5kZXhPZlN0YXJ0RmllbGQgKyBpbmRleCAqIDEwLCAxLCBlbGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9nYW1lYm9hcmQuc3BsaWNlKGluZGV4T2ZTdGFydEZpZWxkICsgaW5kZXgsIDEsIGVsZW0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgX2NyZWF0ZVNoaXAgPSAoc2hpcExlbmd0aCkgPT4ge1xuICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSB7XG4gICAgICBwYXRyb2xCb2F0ID0gU2hpcCgyLCAncGInKTtcbiAgICAgIHJldHVybiBwYXRyb2xCb2F0O1xuICAgIH0gZWxzZSBpZiAoc2hpcExlbmd0aCA9PT0gMykge1xuICAgICAgaWYgKCFzdWJtYXJpbmUpIHtcbiAgICAgICAgc3VibWFyaW5lID0gU2hpcCgzLCAnc2InKTtcbiAgICAgICAgcmV0dXJuIHN1Ym1hcmluZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc3Ryb3llciA9IFNoaXAoMywgJ2RzJyk7XG4gICAgICAgIHJldHVybiBkZXN0cm95ZXI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICBiYXR0bGVzaGlwID0gU2hpcCg0LCAnYnMnKTtcbiAgICAgIHJldHVybiBiYXR0bGVzaGlwO1xuICAgIH0gZWxzZSBpZiAoc2hpcExlbmd0aCA9PT0gNSkge1xuICAgICAgY2FycmllciA9IFNoaXAoNSwgJ2NyJyk7XG4gICAgICByZXR1cm4gY2FycmllcjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgX2NoZWNrRnJlZUZpZWxkcyA9IChzaGlwTGVuZ3RoLCBzdGFydEZpZWxkLCBpc1ZlcnRpY2FsKSA9PiB7XG4gICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgIGxldCByb3dOdW1iZXIgPSAwO1xuICAgICAgY29uc3QgZ2FtZWJvYXJkRmllbGRzID0gX2dhbWVib2FyZC5maWx0ZXIoKGVsZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gc3RhcnRGaWVsZCArIHJvd051bWJlciAqIDEwKSB7XG4gICAgICAgICAgcm93TnVtYmVyICs9IDE7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gIWdhbWVib2FyZEZpZWxkcy5zb21lKChmaWVsZCkgPT4gL1thLXpdLy50ZXN0KGZpZWxkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZEZpZWxkcyA9IF9nYW1lYm9hcmQuc2xpY2UoXG4gICAgICAgIHN0YXJ0RmllbGQsXG4gICAgICAgIHN0YXJ0RmllbGQgKyBzaGlwTGVuZ3RoXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gIWdhbWVib2FyZEZpZWxkcy5zb21lKChmaWVsZCkgPT4gL1thLXpdLy50ZXN0KGZpZWxkKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IF9jaGVja1NoaXBXaXRoaW5HYW1lYm9hcmQgPSAoc2hpcExlbmd0aCwgc3RhcnRGaWVsZCwgaXNWZXJ0aWNhbCkgPT4ge1xuICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICBjb25zdCBsYXN0RGVjaW1hbCA9IE1hdGguZmxvb3IoKHN0YXJ0RmllbGQgKyAoc2hpcExlbmd0aCAtIDEpICogMTApIC8gMTApO1xuICAgICAgaWYgKGxhc3REZWNpbWFsID4gOSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlyc3REZWNpbWFsID0gTWF0aC5mbG9vcihzdGFydEZpZWxkIC8gMTApO1xuICAgICAgY29uc3QgbGFzdERlY2ltYWwgPSBNYXRoLmZsb29yKChzdGFydEZpZWxkICsgc2hpcExlbmd0aCAtIDEpIC8gMTApO1xuICAgICAgaWYgKGZpcnN0RGVjaW1hbCAhPT0gbGFzdERlY2ltYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRZLCBjb29yZFgpID0+IHtcbiAgICBjb25zdCBhdHRhY2tlZEZpZWxkSW5kZXggPSBjb29yZFkgKiAxMCArIGNvb3JkWDtcblxuICAgIGlmICh0eXBlb2YgX2dhbWVib2FyZFthdHRhY2tlZEZpZWxkSW5kZXhdID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgYXR0YWNrZWRTaGlwTWFyayA9IF9nYW1lYm9hcmRbYXR0YWNrZWRGaWVsZEluZGV4XTtcbiAgICAgIGNvbnN0IHNoaXBIb2xvZ3JhbSA9IFtdO1xuXG4gICAgICBfZ2FtZWJvYXJkLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChlbGVtID09PSBhdHRhY2tlZFNoaXBNYXJrKSB7XG4gICAgICAgICAgc2hpcEhvbG9ncmFtLnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYXR0YWNrZWRTaGlwRmllbGRJbmRleCA9IHNoaXBIb2xvZ3JhbS5pbmRleE9mKGF0dGFja2VkRmllbGRJbmRleCk7XG4gICAgICBfYXR0YWNrU2hpcChhdHRhY2tlZFNoaXBNYXJrLCBhdHRhY2tlZFNoaXBGaWVsZEluZGV4KTtcbiAgICB9XG5cbiAgICBfYXR0YWNrZWRHYW1lYm9hcmRGaWVsZHNbYXR0YWNrZWRGaWVsZEluZGV4XSA9IDE7XG4gIH07XG5cbiAgY29uc3QgX2F0dGFja1NoaXAgPSAoc2hpcE1hcmssIGF0dGFja2VkRmllbGQpID0+IHtcbiAgICBpZiAoc2hpcE1hcmsgPT09ICdwYicpIHtcbiAgICAgIHBhdHJvbEJvYXQuaGl0KGF0dGFja2VkRmllbGQpO1xuICAgIH0gZWxzZSBpZiAoc2hpcE1hcmsgPT09ICdzYicpIHtcbiAgICAgIHN1Ym1hcmluZS5oaXQoYXR0YWNrZWRGaWVsZCk7XG4gICAgfSBlbHNlIGlmIChzaGlwTWFyayA9PT0gJ2RzJykge1xuICAgICAgZGVzdHJveWVyLmhpdChhdHRhY2tlZEZpZWxkKTtcbiAgICB9IGVsc2UgaWYgKHNoaXBNYXJrID09PSAnYnMnKSB7XG4gICAgICBiYXR0bGVzaGlwLmhpdChhdHRhY2tlZEZpZWxkKTtcbiAgICB9IGVsc2UgaWYgKHNoaXBNYXJrID09PSAnY3InKSB7XG4gICAgICBjYXJyaWVyLmhpdChhdHRhY2tlZEZpZWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVNoaXBzID0gKCkgPT4ge1xuICAgIHJldHVybiB7IHBhdHJvbEJvYXQsIHN1Ym1hcmluZSwgZGVzdHJveWVyLCBiYXR0bGVzaGlwLCBjYXJyaWVyIH07XG4gIH07XG5cbiAgY29uc3QgaXNGbGVldERlc3Ryb3llZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgcGF0cm9sQm9hdC5pc1N1bmsoKSAmJlxuICAgICAgc3VibWFyaW5lLmlzU3VuaygpICYmXG4gICAgICBkZXN0cm95ZXIuaXNTdW5rKCkgJiZcbiAgICAgIGJhdHRsZXNoaXAuaXNTdW5rKCkgJiZcbiAgICAgIGNhcnJpZXIuaXNTdW5rKClcbiAgICApO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcbiAgICBjb25zdCBsZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdO1xuXG4gICAgbGVuZ3Rocy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBsZXQgcGxhY2VEYXRhID0gX2dlbmVyYXRlUGxhY2VEYXRhKCk7XG4gICAgICBsZXQgaXNTaGlwUGxhY2VkID0gcGxhY2VTaGlwKFxuICAgICAgICBlbGVtLFxuICAgICAgICBwbGFjZURhdGEucm93LFxuICAgICAgICBwbGFjZURhdGEuY29sdW1uLFxuICAgICAgICBwbGFjZURhdGEuZGlyZWN0aW9uXG4gICAgICApO1xuXG4gICAgICB3aGlsZSAoIWlzU2hpcFBsYWNlZCkge1xuICAgICAgICBwbGFjZURhdGEgPSBfZ2VuZXJhdGVQbGFjZURhdGEoKTtcbiAgICAgICAgaXNTaGlwUGxhY2VkID0gcGxhY2VTaGlwKFxuICAgICAgICAgIGVsZW0sXG4gICAgICAgICAgcGxhY2VEYXRhLnJvdyxcbiAgICAgICAgICBwbGFjZURhdGEuY29sdW1uLFxuICAgICAgICAgIHBsYWNlRGF0YS5kaXJlY3Rpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZW5lcmF0ZVBsYWNlRGF0YSgpIHtcbiAgICBjb25zdCByb3cgPSBnZXRSYW5kb21JbnQoMTApO1xuICAgIGNvbnN0IGNvbHVtbiA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gZ2V0UmFuZG9tSW50KDIpID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgcmV0dXJuIHsgcm93LCBjb2x1bW4sIGRpcmVjdGlvbiB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNGbGVldFBsYWNlZCgpIHtcbiAgICByZXR1cm4gcGF0cm9sQm9hdCAmJiBzdWJtYXJpbmUgJiYgZGVzdHJveWVyICYmIGJhdHRsZXNoaXAgJiYgY2FycmllcjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheUdhbWVib2FyZCxcbiAgICBkaXNwbGF5QXR0YWNrcyxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBkaXNwbGF5U2hpcHMsXG4gICAgaXNGbGVldERlc3Ryb3llZCxcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgaXNGbGVldFBsYWNlZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IFBsYXllciA9IChwbGF5ZXJOYW1lLCBpc0h1bWFuKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBwbGF5ZXJOYW1lO1xuICBjb25zdCBjb21wID0gIWlzSHVtYW47XG4gIGxldCBfaXNQcmV2aW91c0F0cmFja0hpdCA9IGZhbHNlO1xuICBsZXQgX2xhc3RBdHRhY2tlZEZpZWxkO1xuXG4gIGNvbnN0IGF0dGFja0dhbWVib2FyZCA9IChnYW1lYm9hcmQsIGNvb3JkWSwgY29vcmRYKSA9PiB7XG4gICAgY29uc3QgZmlsZWRUb0F0dGFjayA9IGNvb3JkWSAqIDEwICsgY29vcmRYO1xuICAgIGNvbnN0IGNhbkF0dGFja0ZpZWxkID0gX2NoZWNrSWZGaWxlZFdhc0F0dGFja2VkKGdhbWVib2FyZCwgZmlsZWRUb0F0dGFjayk7XG4gICAgaWYgKCFjYW5BdHRhY2tGaWVsZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZFksIGNvb3JkWCk7XG5cbiAgICBjb25zdCBpc0hpdCA9XG4gICAgICB0eXBlb2YgZ2FtZWJvYXJkLmRpc3BsYXlHYW1lYm9hcmQoKVtmaWxlZFRvQXR0YWNrXSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogZmFsc2U7XG5cbiAgICBpZiAoaXNIaXQpIHtcbiAgICAgIF9pc1ByZXZpb3VzQXRyYWNrSGl0ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2lzUHJldmlvdXNBdHJhY2tIaXQgPSBmYWxzZTtcbiAgICB9XG4gICAgX2xhc3RBdHRhY2tlZEZpZWxkID0gZmlsZWRUb0F0dGFjaztcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGFpQXR0YWNrID0gKGdhbWVib2FyZCkgPT4ge1xuICAgIGxldCBmaWVsZFRvQXR0YWNrO1xuICAgIGlmIChfaXNQcmV2aW91c0F0cmFja0hpdCkge1xuICAgICAgZmllbGRUb0F0dGFjayA9IF9nZXROZXh0RmllbGROdW1iZXIoX2xhc3RBdHRhY2tlZEZpZWxkLCBnYW1lYm9hcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZFRvQXR0YWNrID0gZ2V0UmFuZG9tSW50KDEwMCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKCFfY2hlY2tJZkZpbGVkV2FzQXR0YWNrZWQoZ2FtZWJvYXJkLCBmaWVsZFRvQXR0YWNrKSkge1xuICAgICAgZmllbGRUb0F0dGFjayA9IGdldFJhbmRvbUludCgxMDApO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoZmllbGRUb0F0dGFjayAvIDEwKTtcbiAgICBjb25zdCBjb2x1bW4gPSBmaWVsZFRvQXR0YWNrIC0gcm93ICogMTA7XG5cbiAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG4gICAgY29uc3QgaXNIaXQgPVxuICAgICAgdHlwZW9mIGdhbWVib2FyZC5kaXNwbGF5R2FtZWJvYXJkKClbZmllbGRUb0F0dGFja10gPT09ICdzdHJpbmcnXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGZhbHNlO1xuXG4gICAgaWYgKGlzSGl0KSB7XG4gICAgICBfaXNQcmV2aW91c0F0cmFja0hpdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9pc1ByZXZpb3VzQXRyYWNrSGl0ID0gZmFsc2U7XG4gICAgfVxuICAgIF9sYXN0QXR0YWNrZWRGaWVsZCA9IGZpZWxkVG9BdHRhY2s7XG5cbiAgICByZXR1cm4gZmllbGRUb0F0dGFjaztcbiAgfTtcblxuICBjb25zdCBfY2hlY2tJZkZpbGVkV2FzQXR0YWNrZWQgPSAoZ2FtZWJvYXJkLCBmaWVsZE51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRvID0gZmllbGROdW1iZXIgKyAxO1xuICAgIGNvbnN0IGF0dGFja2VkRmllbGRDb250ZW50ID0gZ2FtZWJvYXJkXG4gICAgICAuZGlzcGxheUF0dGFja3MoKVxuICAgICAgLnNsaWNlKGZpZWxkTnVtYmVyLCB0bylbMF07XG4gICAgaWYgKGF0dGFja2VkRmllbGRDb250ZW50ID09PSAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBfZ2V0TmV4dEZpZWxkTnVtYmVyID0gKGF0dGFja2VkRmllbGROdW1iZXIsIGdhbWVib2FyZFRvQXR0YWNrKSA9PiB7XG4gICAgY29uc3QgbmV4dEZpZWxkcyA9IFtcbiAgICAgIGF0dGFja2VkRmllbGROdW1iZXIgLSAxLFxuICAgICAgYXR0YWNrZWRGaWVsZE51bWJlciAtIDEwLFxuICAgICAgYXR0YWNrZWRGaWVsZE51bWJlciArIDEsXG4gICAgICBhdHRhY2tlZEZpZWxkTnVtYmVyICsgMTAsXG4gICAgXTtcbiAgICBjb25zdCBmaWx0ZXJlZEZpZWxkcyA9IG5leHRGaWVsZHMuZmlsdGVyKChmaWxlZE51bSkgPT4ge1xuICAgICAgaWYgKGZpbGVkTnVtIDwgMCB8fCBmaWxlZE51bSA+IDk5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdhc0F0dGFja2VkID0gX2NoZWNrSWZGaWxlZFdhc0F0dGFja2VkKGdhbWVib2FyZFRvQXR0YWNrLCBmaWxlZE51bSk7XG4gICAgICByZXR1cm4gd2FzQXR0YWNrZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoZmlsdGVyZWRGaWVsZHNbMF0pIHtcbiAgICAgIHJldHVybiBmaWx0ZXJlZEZpZWxkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWx0ZXJlZEZpZWxkcy5sZW5ndGgpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldFJhbmRvbUludCgxMDApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBjb21wLCBhdHRhY2tHYW1lYm9hcmQsIGFpQXR0YWNrIH07XG59O1xuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xufVxuXG5leHBvcnQgeyBQbGF5ZXIsIGdldFJhbmRvbUludCB9O1xuIiwiY29uc3QgU2hpcCA9IChzaGlwTGVuZ3RoLCBzaGlwTWFyaykgPT4ge1xuICBjb25zdCBfc2hpcCA9IG5ldyBBcnJheShzaGlwTGVuZ3RoKS5maWxsKHNoaXBNYXJrKTtcblxuICBjb25zdCBkaXNwbGF5U2hpcCA9ICgpID0+IHtcbiAgICByZXR1cm4gX3NoaXA7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKG51bWJlck9mRmllbGQpID0+IHtcbiAgICBfc2hpcFtudW1iZXJPZkZpZWxkXSA9IDE7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiAhX3NoaXAuaW5jbHVkZXMoc2hpcE1hcmspO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BsYXlTaGlwLCBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuLi9pbWcvaWNvbnM4LWdpdGh1Yi5zdmcnO1xuaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2FtZWJvYXJkLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy93aW5uZXIuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3NoaXAtbGlzdC5jc3MnO1xuXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7XG4gIGRpc3BsYXlBdHRhY2ssXG4gIGRpc3BsYXlSYW5kb21HcmlkLFxuICBkaXNwbGF5UGxheWVyR3JpZCxcbiAgZGlzcGxheVNoaXBMaXN0LFxuICBkaXNwbGF5V2lubmVyLFxuICBjbGVhbk91dEdCQ29udGFpbmVyLFxuICBoaWRlV2lubmVyLFxufSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBicmVha1VwRmllbGRJZCB9IGZyb20gJy4vZHJhZy1uLWRyb3AnO1xuXG5sZXQgaXNQbGF5ZXJzVHVybiA9IHRydWU7XG5cbnNldFVwR2FtZSgnSHVtYW4nLCAnQ29tcHV0ZXInLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIHNldFVwR2FtZShwbGF5ZXIxTmFtZSwgcGxheWVyMk5hbWUsIGlzUGxheWVyMkh1bWFuKSB7XG4gIGlzUGxheWVyc1R1cm4gPSB0cnVlO1xuXG4gIGNvbnN0IHBsYXllciA9IFBsYXllcihwbGF5ZXIxTmFtZSwgdHJ1ZSk7XG4gIGNvbnN0IGVuZW15ID0gUGxheWVyKHBsYXllcjJOYW1lLCBpc1BsYXllcjJIdW1hbik7XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBlbmVteUdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGVuZW15R2FtZWJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAvLyBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG5cbiAgZGlzcGxheVBsYXllckdyaWQocGxheWVyR2FtZWJvYXJkLCAncGxheWVyJyk7XG4gIC8vIGRpc3BsYXlSYW5kb21HcmlkKHBsYXllckdhbWVib2FyZCwgJ3BsYXllcicpO1xuXG4gIGRpc3BsYXlSYW5kb21HcmlkKGVuZW15R2FtZWJvYXJkLCAnZW5lbXknKTtcblxuICBkaXNwbGF5U2hpcExpc3QoKTtcblxuICBjb25zdCBwbGF5ZXJGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWZpZWxkJyk7XG4gIGNvbnN0IGVuZW15RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZW15LWZpZWxkJyk7XG5cbiAgZW5lbXlGaWVsZHMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIGVsZW0uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChpc1BsYXllcnNUdXJuKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGJyZWFrVXBGaWVsZElkKGVsZW0pLnJvdztcbiAgICAgICAgY29uc3QgY29sdW1uID0gYnJlYWtVcEZpZWxkSWQoZWxlbSkuY29sdW1uO1xuXG4gICAgICAgIGNvbnN0IGlzQXR0YWNrVG9va1BsYWNlID0gcGxheWVyLmF0dGFja0dhbWVib2FyZChcbiAgICAgICAgICBlbmVteUdhbWVib2FyZCxcbiAgICAgICAgICByb3csXG4gICAgICAgICAgY29sdW1uXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpc0F0dGFja1Rvb2tQbGFjZSkge1xuICAgICAgICAgIGNvbnN0IGF0dGFja2VkRmllbGQgPSByb3cgKiAxMCArIGNvbHVtbjtcbiAgICAgICAgICBjb25zdCBoaXRSZXBvcnQgPSByZXBvcnRIaXQoZW5lbXlHYW1lYm9hcmQsIGF0dGFja2VkRmllbGQpO1xuICAgICAgICAgIGRpc3BsYXlBdHRhY2soZWxlbSwgaGl0UmVwb3J0KTtcblxuICAgICAgICAgIGlzUGxheWVyc1R1cm4gPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChlbmVteUdhbWVib2FyZC5pc0ZsZWV0RGVzdHJveWVkKCkpIHtcbiAgICAgICAgICAgIHN0YXRlV2lubmVyKHBsYXllcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNQbGF5ZXIySHVtYW4gJiYgIWlzUGxheWVyc1R1cm4pIHtcbiAgICAgICAgY29uc3QgYXR0YWNrZWRGaWVsZE51bWJlciA9IGVuZW15LmFpQXR0YWNrKHBsYXllckdhbWVib2FyZCk7XG4gICAgICAgIGNvbnN0IGF0dGFja0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgI3BsYXllci0ke2F0dGFja2VkRmllbGROdW1iZXJ9YFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBoaXRSZXBvcnQgPSByZXBvcnRIaXQocGxheWVyR2FtZWJvYXJkLCBhdHRhY2tlZEZpZWxkTnVtYmVyKTtcbiAgICAgICAgZGlzcGxheUF0dGFjayhhdHRhY2tGaWVsZCwgaGl0UmVwb3J0KTtcblxuICAgICAgICBpc1BsYXllcnNUdXJuID0gdHJ1ZTtcblxuICAgICAgICBpZiAocGxheWVyR2FtZWJvYXJkLmlzRmxlZXREZXN0cm95ZWQoKSkge1xuICAgICAgICAgIHN0YXRlV2lubmVyKGVuZW15KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBpZiAoaXNQbGF5ZXIySHVtYW4pIHtcbiAgICBwbGF5ZXJGaWVsZHMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgZWxlbS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICghaXNQbGF5ZXJzVHVybikge1xuICAgICAgICAgIGNvbnN0IHJvdyA9IGJyZWFrVXBGaWVsZElkKGVsZW0pLnJvdztcbiAgICAgICAgICBjb25zdCBjb2x1bW4gPSBicmVha1VwRmllbGRJZChlbGVtKS5jb2x1bW47XG5cbiAgICAgICAgICBjb25zdCBpc0F0dGFja1Rvb2tQbGFjZSA9IGVuZW15LmF0dGFja0dhbWVib2FyZChcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZCxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgIGNvbHVtblxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGlzQXR0YWNrVG9va1BsYWNlKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tlZEZpZWxkID0gcm93ICogMTAgKyBjb2x1bW47XG4gICAgICAgICAgICBjb25zdCBoaXRSZXBvcnQgPSByZXBvcnRIaXQocGxheWVyR2FtZWJvYXJkLCBhdHRhY2tlZEZpZWxkKTtcbiAgICAgICAgICAgIGRpc3BsYXlBdHRhY2soZWxlbSwgaGl0UmVwb3J0KTtcblxuICAgICAgICAgICAgaXNQbGF5ZXJzVHVybiA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChwbGF5ZXJHYW1lYm9hcmQuaXNGbGVldERlc3Ryb3llZCgpKSB7XG4gICAgICAgICAgICAgIHN0YXRlV2lubmVyKGVuZW15KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcG9ydEhpdChnYW1lYm9hcmQsIGZpZWxkTnVtYmVyKSB7XG4gIGNvbnN0IGF0dGFja2VkRmllbGRDb250ZW50ID0gZ2FtZWJvYXJkLmRpc3BsYXlHYW1lYm9hcmQoKVtmaWVsZE51bWJlcl07XG4gIGlmICh0eXBlb2YgYXR0YWNrZWRGaWVsZENvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXRlV2lubmVyKHdpbm5lcikge1xuICBkaXNwbGF5V2lubmVyKHdpbm5lci5uYW1lKTtcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktYWdhaW4tYnRuJyk7XG4gIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhbk91dEdCQ29udGFpbmVyKCk7XG4gICAgc2V0VXBHYW1lKCdIdW1hbicsICdDb21wdXRlcicsIGZhbHNlKTtcbiAgICBoaWRlV2lubmVyKCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9