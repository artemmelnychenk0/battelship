/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, ".player,\n.computer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 10%;\n    margin-top: 2%;\n}\n\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    margin: 15px;\n    box-shadow: 5px 15px 35px rgb(0 0 0 / 25%);\n}\n\n.cell {\n    border: 1px solid rgb(31, 31, 31);\n    text-align: center;\n}\n\n/* .cell:hover {\n    background-color: yellow;\n} */\n\n.cell:active {\n    background-color: brown;\n}\n\n.hit {\n    background-color: red;\n}\n\n.missed {\n    background-color: blue;\n}\n\n.ship {\n    background-color: orange;\n}\n\n.done {\n    background-color: blueviolet;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,QAAQ;IACR,cAAc;AAClB;;;AAGA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,YAAY;IACZ,0CAA0C;AAC9C;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;AACtB;;AAEA;;GAEG;;AAEH;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,4BAA4B;AAChC","sourcesContent":[".player,\n.computer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 10%;\n    margin-top: 2%;\n}\n\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    margin: 15px;\n    box-shadow: 5px 15px 35px rgb(0 0 0 / 25%);\n}\n\n.cell {\n    border: 1px solid rgb(31, 31, 31);\n    text-align: center;\n}\n\n/* .cell:hover {\n    background-color: yellow;\n} */\n\n.cell:active {\n    background-color: brown;\n}\n\n.hit {\n    background-color: red;\n}\n\n.missed {\n    background-color: blue;\n}\n\n.ship {\n    background-color: orange;\n}\n\n.done {\n    background-color: blueviolet;\n}"],"sourceRoot":""}]);
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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");





const dom = () => {

    const playerSide = document.querySelector('.player')
    const computerSide = document.querySelector('.computer')

    const playerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const computerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const board4Player = playerBoard.getBoard();
    const board4AI = computerBoard.getBoard();

    const AI = (0,_player__WEBPACK_IMPORTED_MODULE_3__.computer)();

    //display player board
    let cell
    const displayPlayer = () => {
        const board = document.createElement('div')
        board.classList.add('board')

        for (let i = 0; i < board4Player.length; i++) {
            for (let j = 0; j < board4Player.length; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')

                if (board4Player[i][j] === 'carri' ||
                    board4Player[i][j] === 'battl' ||
                    board4Player[i][j] === 'sub' ||
                    board4Player[i][j] === 'patro' ||
                    board4Player[i][j] === 'tug' ||
                    board4Player[i][j] === 'jet') {
                    cell.classList.add('ship')
                    cell.appendChild(document.createTextNode(''))
                    cell.setAttribute('x', i.toString());
                    cell.setAttribute('y', j.toString())
                    board.appendChild(cell)

                } else {
                    if (board4Player[i][j] === 'missed') {
                        cell.classList.add('missed')
                    } else if (board4Player[i][j] === 'X') {
                        cell.classList.add('hit')
                    }
                    cell.appendChild(document.createTextNode(''))
                    cell.setAttribute('x', i.toString());
                    cell.setAttribute('y', j.toString())
                    board.appendChild(cell)
                }
            }
        }


        playerSide.appendChild(board)
        return cell
    }
    displayPlayer()

    //display ai board
    const displayComputer = () => {
        const board = document.createElement('div')
        board.classList.add('board')

        for (let i = 0; i < board4AI.length; i++) {
            for (let j = 0; j < board4AI.length; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                if (board4AI[i][j] === 'carri' ||
                    board4AI[i][j] === 'battl' ||
                    board4AI[i][j] === 'sub' ||
                    board4AI[i][j] === 'patro' ||
                    board4AI[i][j] === 'tug' ||
                    board4AI[i][j] === 'jet') {

                    cell.appendChild(document.createTextNode(''))

                    cell.setAttribute('x', i.toString());
                    cell.setAttribute('y', j.toString())
                    board.appendChild(cell)

                } else {
                    if (board4AI[i][j] === 'missed') {
                        cell.classList.add('missed')
                        cell.appendChild(document.createTextNode(''))
                    } else if (board4AI[i][j] === 'X') {
                        cell.classList.add('hit')
                        cell.appendChild(document.createTextNode(''))

                    }
                    cell.appendChild(document.createTextNode(''))
                    cell.setAttribute('x', i.toString());
                    cell.setAttribute('y', j.toString())
                    board.appendChild(cell)
                }
            }
        }


        computerSide.appendChild(board)
    }


    const renderDOMPlayer = () => {
        playerSide.removeChild(playerSide.firstChild)
        displayPlayer();
    }

    const renderDOMAI = () => {
        computerSide.removeChild(computerSide.firstChild);
        displayComputer();
    }

    //place computer ships & player ships

    const placeShipAI = () => {

        for (let i = 0; i < 6; i++) {
            let coords = AI.randomizer()

            computerBoard.placeShip(computerBoard.boatArray[i], coords.randomItem, coords.coordX, coords.coordY)


        }
        console.log(board4AI)
    }






    placeShipAI();



    //attack computer
    let myTurn = true
    const attack = computerSide.addEventListener('click', (e) => {
        //shot with coordinates
        const shot = e.target.attributes

        computerBoard.receiveAttack(shot.x.value, shot.y.value,)

        myTurn = false
        renderDOMAI();
        setTimeout(computerAttack, 700)
        gameOver();

    })
    //attack player

    const computerAttack = () => {
        if (myTurn == false) {
            let shot = playerBoard.receiveAttack(AI.randomShotY(), AI.randomShotX())
            if (shot == true) {
                playerBoard.receiveAttack(AI.randomShotY(), AI.randomShotX())
            } else {
                myTurn = true
            }
            renderDOMPlayer();
            gameOver();
        }
    }
    //is GameOver
    const gameOver = () => {
        if (computerBoard.shipsSunk() == true) {
            alert('Game is OVER')
        }
    }

    //dragable
    let choise

    const btns = document.querySelectorAll('button#ship')
    const change = document.querySelector('#change')

    let direction = 'horizontal'

    change.addEventListener('click', () => {
        if (direction == 'horizontal') {
            direction = 'vertical'
        } else {
            direction = 'horizontal'
        }
    })

    btns.forEach(function (btn) {
        btn.addEventListener('click', () => {
            choise = btn.classList
            btn.style.backgroundColor = 'purple'
            return choise
        })
    })

    let ships = 0
    playerSide.addEventListener('click', (e) => {

        const spot = e.target.attributes
        if (choise != '') {
            playerBoard.placeShip(playerBoard[choise], direction, spot.x.value, spot.y.value)

            choise = ''
            ships++
            renderDOMPlayer();
        }
        if (ships == 6) {
            displayComputer()
            return
        }
    })

}
///


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");



//new game
const newGame = () => {
    const playerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const computerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__["default"])();
    // const player = Player();
    // const ai = computer();
    //create Boards
    const board4Player = playerBoard.getBoard();
    // const playerShot = playerBoard.receiveAttack()

    const board4AI = computerBoard.getBoard();

    // place Ships
    const playerShips =
        playerBoard.placeShip(playerBoard.carrier, 3, 0, 'vertical')
    playerBoard.placeShip(playerBoard.battleship, 1, 6, 'horizontal')
    playerBoard.placeShip(playerBoard.submarine, 4, 7, 'vertical')
    playerBoard.placeShip(playerBoard.tugboat, 7, 4, 'horizontal')
    playerBoard.placeShip(playerBoard.patrol, 1, 3, 'horizontal')
    playerBoard.placeShip(playerBoard.jet, 9, 9, 'horizontal')


    const computerShips = computerBoard.placeShip(computerBoard.jet, 3, 3, 'horizontal')
    computerBoard.placeShip(playerBoard.carrier, 3, 1, 'vertical')
    computerBoard.placeShip(playerBoard.battleship, 2, 5, 'horizontal')
    computerBoard.placeShip(playerBoard.submarine, 4, 7, 'vertical')
    computerBoard.placeShip(playerBoard.tugboat, 7, 4, 'horizontal')
    computerBoard.placeShip(playerBoard.patrol, 1, 3, 'horizontal')


    //attack the computer

    return { board4Player, board4AI }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newGame);



/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


const gameBoard = function () {

    let board = Array(10)
        .fill('')
        .map(() => Array(10).fill(''))
    const getBoard = () => board;

    const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 'carri')
    const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 'battl')
    const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 'sub')
    const tugboat = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 'tug')
    const patrol = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 'patro')
    const jet = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(1, 'jet')


    const boatArray = [carrier, battleship, submarine, tugboat, patrol, jet]

    //check if fits inside the board
    let validPlacement = false
    const shipFit = (ship, direction, x, y) => {
        if (direction == 'horizontal' && board[x][y] === '') {
            if (Number(y) + ship.shipLength <= board.length) {
                validPlacement = true
            } else validPlacement = false
        } else if (direction == 'vertical' && board[x][y] === '') {
            if (Number(x) + ship.shipLength <= board.length) {
                validPlacement = true
            } else validPlacement = false
        }
        return validPlacement
    };

    function placeShip(ship, direction, x, y) {
        shipFit(ship, direction, x, y)
        if (validPlacement == true) {
            for (let i = 0; i < ship.shipLength; i++) {
                board[x][y] = ship.getName()
                if (direction == 'horizontal') {
                    y++
                } else if (direction == 'vertical') {
                    x++
                }
            }
        } else console.log('not working')

    }



    function receiveAttack(positionX, positionY) {
        let illegalShot = false
        const found = boatArray.find(e => e.getName() == board[positionX][positionY])
        //problem
        if (found === undefined && board[positionX][positionY] != 'missed' && board[positionX][positionY] != 'X') {
            board[positionX][positionY] = 'missed';


        } else if (found !== undefined && board[positionX][positionY] != 'missed' && board[positionX][positionY] != found.hit()) {
            board[positionX][positionY] = found.hit();


        } else {
            illegalShot = true
            console.log('Idiot')
        }
        return illegalShot

    };

    function shipsSunk() {
        let allShips = false
        const resultArray = []
        for (let i = 0; i < board.length; i++) {
            const result = board[i].every(e => e != 'jet' && 'submarine' && 'tugboat' && 'carrier' && 'battleship' && 'patrol')
            resultArray.push(result)
        }
        if (resultArray.every(e => e == true)) {
            allShips = true
            return allShips
        }
    }

    return { getBoard, board, placeShip, receiveAttack, submarine, tugboat, jet, battleship, carrier, boatArray, patrol, shipsSunk, validPlacement, shipFit }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "computer": () => (/* binding */ computer)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


const Player = (name) => {

    const getName = () => {
        return name
    }
    const isMyTurn = true

    return { getName, isMyTurn }
}

const computer = () => {
    const board = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const computerBoard = () => board.getBoard()

    const randomShotY = () => {
        let result = Math.floor(Math.random() * 10)
        return result
    }
    const randomShotX = () => {
        let result = Math.floor(Math.random() * 10)
        return result
    }

    const randomizer = () => {
        let orientation = ['vertical', 'horizontal']
        let randomItem = orientation[Math.floor(Math.random() * orientation.length)];
        let coordX
        let coordY
        if (randomItem == 'vertical') {
            coordX = Math.floor(Math.random() * 6)
            coordY = Math.floor(Math.random() * 10)

        } else {
            coordX = Math.floor(Math.random() * 10)
            coordY = Math.floor(Math.random() * 6)
        }
        return { coordX, coordY, randomItem }
    }


    //should  not shot at the same spot



    return { computerBoard, randomShotY, randomShotX, randomizer }

}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = function (length, name) {
    const shipArray = Array(length).fill(null)
    const shipLength = shipArray.length

    let shots = 0
    let underWater = false

    function hit() {
        shots++;
        return 'X'
    }

    function recordShots() {
        return shots
    }

    function sunk() {
        if (shipLength == shots) {
            underWater = true
            return underWater
        }
    }

    function getName() {
        return name
    }
    return { shipArray, hit, sunk, shipLength, getName, shots, recordShots, underWater }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

// const Ship = function (length) {
//     const shipLength = new Array(length)


//     function hit() {
//         const mark = 'X';
//         shipLength.splice(0, 1, mark)
//     }
//     function sunk() {
//         //if whole array includes X
//         let isSunk = true
//     }
//     return { id, length, isHit, isSunk, hit, sunk }

// }

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



(0,_DOM__WEBPACK_IMPORTED_MODULE_1__["default"])()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7Ozs7OztVQzdDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E2QjtBQUNOOztBQUV2QixnREFBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBsYXllcixcXG4uY29tcHV0ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxufVxcblxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxNXB4IDM1cHggcmdiKDAgMCAwIC8gMjUlKTtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzEsIDMxLCAzMSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufSAqL1xcblxcbi5jZWxsOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5kb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsUUFBUTtJQUNSLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBsYXllcixcXG4uY29tcHV0ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxufVxcblxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxNXB4IDM1cHggcmdiKDAgMCAwIC8gMjUlKTtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzEsIDMxLCAzMSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufSAqL1xcblxcbi5jZWxsOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5kb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbmV3R2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIsIGNvbXB1dGVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IGRvbSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHBsYXllclNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyJylcbiAgICBjb25zdCBjb21wdXRlclNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXInKVxuXG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBnYW1lQm9hcmQoKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZ2FtZUJvYXJkKCk7XG4gICAgY29uc3QgYm9hcmQ0UGxheWVyID0gcGxheWVyQm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICBjb25zdCBib2FyZDRBSSA9IGNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKTtcblxuICAgIGNvbnN0IEFJID0gY29tcHV0ZXIoKTtcblxuICAgIC8vZGlzcGxheSBwbGF5ZXIgYm9hcmRcbiAgICBsZXQgY2VsbFxuICAgIGNvbnN0IGRpc3BsYXlQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQ0UGxheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkNFBsYXllci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpXG5cbiAgICAgICAgICAgICAgICBpZiAoYm9hcmQ0UGxheWVyW2ldW2pdID09PSAnY2FycmknIHx8XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkNFBsYXllcltpXVtqXSA9PT0gJ2JhdHRsJyB8fFxuICAgICAgICAgICAgICAgICAgICBib2FyZDRQbGF5ZXJbaV1bal0gPT09ICdzdWInIHx8XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkNFBsYXllcltpXVtqXSA9PT0gJ3BhdHJvJyB8fFxuICAgICAgICAgICAgICAgICAgICBib2FyZDRQbGF5ZXJbaV1bal0gPT09ICd0dWcnIHx8XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkNFBsYXllcltpXVtqXSA9PT0gJ2pldCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCd4JywgaS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3knLCBqLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpXG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQ0UGxheWVyW2ldW2pdID09PSAnbWlzc2VkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkNFBsYXllcltpXVtqXSA9PT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCd4JywgaS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3knLCBqLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBwbGF5ZXJTaWRlLmFwcGVuZENoaWxkKGJvYXJkKVxuICAgICAgICByZXR1cm4gY2VsbFxuICAgIH1cbiAgICBkaXNwbGF5UGxheWVyKClcblxuICAgIC8vZGlzcGxheSBhaSBib2FyZFxuICAgIGNvbnN0IGRpc3BsYXlDb21wdXRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZDRBSS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZDRBSS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkNEFJW2ldW2pdID09PSAnY2FycmknIHx8XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkNEFJW2ldW2pdID09PSAnYmF0dGwnIHx8XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkNEFJW2ldW2pdID09PSAnc3ViJyB8fFxuICAgICAgICAgICAgICAgICAgICBib2FyZDRBSVtpXVtqXSA9PT0gJ3BhdHJvJyB8fFxuICAgICAgICAgICAgICAgICAgICBib2FyZDRBSVtpXVtqXSA9PT0gJ3R1ZycgfHxcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQ0QUlbaV1bal0gPT09ICdqZXQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpXG5cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3gnLCBpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgneScsIGoudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbClcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZDRBSVtpXVtqXSA9PT0gJ21pc3NlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkNEFJW2ldW2pdID09PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCd4JywgaS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3knLCBqLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBjb21wdXRlclNpZGUuYXBwZW5kQ2hpbGQoYm9hcmQpXG4gICAgfVxuXG5cbiAgICBjb25zdCByZW5kZXJET01QbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllclNpZGUucmVtb3ZlQ2hpbGQocGxheWVyU2lkZS5maXJzdENoaWxkKVxuICAgICAgICBkaXNwbGF5UGxheWVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyRE9NQUkgPSAoKSA9PiB7XG4gICAgICAgIGNvbXB1dGVyU2lkZS5yZW1vdmVDaGlsZChjb21wdXRlclNpZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgIGRpc3BsYXlDb21wdXRlcigpO1xuICAgIH1cblxuICAgIC8vcGxhY2UgY29tcHV0ZXIgc2hpcHMgJiBwbGF5ZXIgc2hpcHNcblxuICAgIGNvbnN0IHBsYWNlU2hpcEFJID0gKCkgPT4ge1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRzID0gQUkucmFuZG9taXplcigpXG5cbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyQm9hcmQuYm9hdEFycmF5W2ldLCBjb29yZHMucmFuZG9tSXRlbSwgY29vcmRzLmNvb3JkWCwgY29vcmRzLmNvb3JkWSlcblxuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYm9hcmQ0QUkpXG4gICAgfVxuXG5cblxuXG5cblxuICAgIHBsYWNlU2hpcEFJKCk7XG5cblxuXG4gICAgLy9hdHRhY2sgY29tcHV0ZXJcbiAgICBsZXQgbXlUdXJuID0gdHJ1ZVxuICAgIGNvbnN0IGF0dGFjayA9IGNvbXB1dGVyU2lkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIC8vc2hvdCB3aXRoIGNvb3JkaW5hdGVzXG4gICAgICAgIGNvbnN0IHNob3QgPSBlLnRhcmdldC5hdHRyaWJ1dGVzXG5cbiAgICAgICAgY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHNob3QueC52YWx1ZSwgc2hvdC55LnZhbHVlLClcblxuICAgICAgICBteVR1cm4gPSBmYWxzZVxuICAgICAgICByZW5kZXJET01BSSgpO1xuICAgICAgICBzZXRUaW1lb3V0KGNvbXB1dGVyQXR0YWNrLCA3MDApXG4gICAgICAgIGdhbWVPdmVyKCk7XG5cbiAgICB9KVxuICAgIC8vYXR0YWNrIHBsYXllclxuXG4gICAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChteVR1cm4gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBzaG90ID0gcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhBSS5yYW5kb21TaG90WSgpLCBBSS5yYW5kb21TaG90WCgpKVxuICAgICAgICAgICAgaWYgKHNob3QgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soQUkucmFuZG9tU2hvdFkoKSwgQUkucmFuZG9tU2hvdFgoKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbXlUdXJuID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyRE9NUGxheWVyKCk7XG4gICAgICAgICAgICBnYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vaXMgR2FtZU92ZXJcbiAgICBjb25zdCBnYW1lT3ZlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbXB1dGVyQm9hcmQuc2hpcHNTdW5rKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgYWxlcnQoJ0dhbWUgaXMgT1ZFUicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2RyYWdhYmxlXG4gICAgbGV0IGNob2lzZVxuXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiNzaGlwJylcbiAgICBjb25zdCBjaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbmdlJylcblxuICAgIGxldCBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCdcblxuICAgIGNoYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJ1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGJ0bnMuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNob2lzZSA9IGJ0bi5jbGFzc0xpc3RcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncHVycGxlJ1xuICAgICAgICAgICAgcmV0dXJuIGNob2lzZVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBsZXQgc2hpcHMgPSAwXG4gICAgcGxheWVyU2lkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc3BvdCA9IGUudGFyZ2V0LmF0dHJpYnV0ZXNcbiAgICAgICAgaWYgKGNob2lzZSAhPSAnJykge1xuICAgICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckJvYXJkW2Nob2lzZV0sIGRpcmVjdGlvbiwgc3BvdC54LnZhbHVlLCBzcG90LnkudmFsdWUpXG5cbiAgICAgICAgICAgIGNob2lzZSA9ICcnXG4gICAgICAgICAgICBzaGlwcysrXG4gICAgICAgICAgICByZW5kZXJET01QbGF5ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hpcHMgPT0gNikge1xuICAgICAgICAgICAgZGlzcGxheUNvbXB1dGVyKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfSlcblxufVxuLy8vXG5cblxuZXhwb3J0IGRlZmF1bHQgZG9tIiwiaW1wb3J0IHsgUGxheWVyLCBjb21wdXRlciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcblxuLy9uZXcgZ2FtZVxuY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWVCb2FyZCgpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBnYW1lQm9hcmQoKTtcbiAgICAvLyBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgICAvLyBjb25zdCBhaSA9IGNvbXB1dGVyKCk7XG4gICAgLy9jcmVhdGUgQm9hcmRzXG4gICAgY29uc3QgYm9hcmQ0UGxheWVyID0gcGxheWVyQm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICAvLyBjb25zdCBwbGF5ZXJTaG90ID0gcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjaygpXG5cbiAgICBjb25zdCBib2FyZDRBSSA9IGNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKTtcblxuICAgIC8vIHBsYWNlIFNoaXBzXG4gICAgY29uc3QgcGxheWVyU2hpcHMgPVxuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyQm9hcmQuY2FycmllciwgMywgMCwgJ3ZlcnRpY2FsJylcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyQm9hcmQuYmF0dGxlc2hpcCwgMSwgNiwgJ2hvcml6b250YWwnKVxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJCb2FyZC5zdWJtYXJpbmUsIDQsIDcsICd2ZXJ0aWNhbCcpXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckJvYXJkLnR1Z2JvYXQsIDcsIDQsICdob3Jpem9udGFsJylcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyQm9hcmQucGF0cm9sLCAxLCAzLCAnaG9yaXpvbnRhbCcpXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckJvYXJkLmpldCwgOSwgOSwgJ2hvcml6b250YWwnKVxuXG5cbiAgICBjb25zdCBjb21wdXRlclNoaXBzID0gY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJCb2FyZC5qZXQsIDMsIDMsICdob3Jpem9udGFsJylcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJCb2FyZC5jYXJyaWVyLCAzLCAxLCAndmVydGljYWwnKVxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKHBsYXllckJvYXJkLmJhdHRsZXNoaXAsIDIsIDUsICdob3Jpem9udGFsJylcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJCb2FyZC5zdWJtYXJpbmUsIDQsIDcsICd2ZXJ0aWNhbCcpXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyQm9hcmQudHVnYm9hdCwgNywgNCwgJ2hvcml6b250YWwnKVxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKHBsYXllckJvYXJkLnBhdHJvbCwgMSwgMywgJ2hvcml6b250YWwnKVxuXG5cbiAgICAvL2F0dGFjayB0aGUgY29tcHV0ZXJcblxuICAgIHJldHVybiB7IGJvYXJkNFBsYXllciwgYm9hcmQ0QUkgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXdHYW1lO1xuXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCJcblxuY29uc3QgZ2FtZUJvYXJkID0gZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IGJvYXJkID0gQXJyYXkoMTApXG4gICAgICAgIC5maWxsKCcnKVxuICAgICAgICAubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKCcnKSlcbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gICAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgJ2NhcnJpJylcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCAnYmF0dGwnKVxuICAgIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMywgJ3N1YicpXG4gICAgY29uc3QgdHVnYm9hdCA9IFNoaXAoMiwgJ3R1ZycpXG4gICAgY29uc3QgcGF0cm9sID0gU2hpcCgyLCAncGF0cm8nKVxuICAgIGNvbnN0IGpldCA9IFNoaXAoMSwgJ2pldCcpXG5cblxuICAgIGNvbnN0IGJvYXRBcnJheSA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBzdWJtYXJpbmUsIHR1Z2JvYXQsIHBhdHJvbCwgamV0XVxuXG4gICAgLy9jaGVjayBpZiBmaXRzIGluc2lkZSB0aGUgYm9hcmRcbiAgICBsZXQgdmFsaWRQbGFjZW1lbnQgPSBmYWxzZVxuICAgIGNvbnN0IHNoaXBGaXQgPSAoc2hpcCwgZGlyZWN0aW9uLCB4LCB5KSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnICYmIGJvYXJkW3hdW3ldID09PSAnJykge1xuICAgICAgICAgICAgaWYgKE51bWJlcih5KSArIHNoaXAuc2hpcExlbmd0aCA8PSBib2FyZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWxpZFBsYWNlbWVudCA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSB2YWxpZFBsYWNlbWVudCA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09ICd2ZXJ0aWNhbCcgJiYgYm9hcmRbeF1beV0gPT09ICcnKSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKHgpICsgc2hpcC5zaGlwTGVuZ3RoIDw9IGJvYXJkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhbGlkUGxhY2VtZW50ID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHZhbGlkUGxhY2VtZW50ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsaWRQbGFjZW1lbnRcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGRpcmVjdGlvbiwgeCwgeSkge1xuICAgICAgICBzaGlwRml0KHNoaXAsIGRpcmVjdGlvbiwgeCwgeSlcbiAgICAgICAgaWYgKHZhbGlkUGxhY2VtZW50ID09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFt4XVt5XSA9IHNoaXAuZ2V0TmFtZSgpXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgeSsrXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgICAgICB4KytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBjb25zb2xlLmxvZygnbm90IHdvcmtpbmcnKVxuXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socG9zaXRpb25YLCBwb3NpdGlvblkpIHtcbiAgICAgICAgbGV0IGlsbGVnYWxTaG90ID0gZmFsc2VcbiAgICAgICAgY29uc3QgZm91bmQgPSBib2F0QXJyYXkuZmluZChlID0+IGUuZ2V0TmFtZSgpID09IGJvYXJkW3Bvc2l0aW9uWF1bcG9zaXRpb25ZXSlcbiAgICAgICAgLy9wcm9ibGVtXG4gICAgICAgIGlmIChmb3VuZCA9PT0gdW5kZWZpbmVkICYmIGJvYXJkW3Bvc2l0aW9uWF1bcG9zaXRpb25ZXSAhPSAnbWlzc2VkJyAmJiBib2FyZFtwb3NpdGlvblhdW3Bvc2l0aW9uWV0gIT0gJ1gnKSB7XG4gICAgICAgICAgICBib2FyZFtwb3NpdGlvblhdW3Bvc2l0aW9uWV0gPSAnbWlzc2VkJztcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoZm91bmQgIT09IHVuZGVmaW5lZCAmJiBib2FyZFtwb3NpdGlvblhdW3Bvc2l0aW9uWV0gIT0gJ21pc3NlZCcgJiYgYm9hcmRbcG9zaXRpb25YXVtwb3NpdGlvblldICE9IGZvdW5kLmhpdCgpKSB7XG4gICAgICAgICAgICBib2FyZFtwb3NpdGlvblhdW3Bvc2l0aW9uWV0gPSBmb3VuZC5oaXQoKTtcblxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbGxlZ2FsU2hvdCA9IHRydWVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJZGlvdCcpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlsbGVnYWxTaG90XG5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2hpcHNTdW5rKCkge1xuICAgICAgICBsZXQgYWxsU2hpcHMgPSBmYWxzZVxuICAgICAgICBjb25zdCByZXN1bHRBcnJheSA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGJvYXJkW2ldLmV2ZXJ5KGUgPT4gZSAhPSAnamV0JyAmJiAnc3VibWFyaW5lJyAmJiAndHVnYm9hdCcgJiYgJ2NhcnJpZXInICYmICdiYXR0bGVzaGlwJyAmJiAncGF0cm9sJylcbiAgICAgICAgICAgIHJlc3VsdEFycmF5LnB1c2gocmVzdWx0KVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHRBcnJheS5ldmVyeShlID0+IGUgPT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIGFsbFNoaXBzID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIGFsbFNoaXBzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRCb2FyZCwgYm9hcmQsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgc3VibWFyaW5lLCB0dWdib2F0LCBqZXQsIGJhdHRsZXNoaXAsIGNhcnJpZXIsIGJvYXRBcnJheSwgcGF0cm9sLCBzaGlwc1N1bmssIHZhbGlkUGxhY2VtZW50LCBzaGlwRml0IH1cbn1cbmV4cG9ydCBkZWZhdWx0IGdhbWVCb2FyZCIsImltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCJcblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lXG4gICAgfVxuICAgIGNvbnN0IGlzTXlUdXJuID0gdHJ1ZVxuXG4gICAgcmV0dXJuIHsgZ2V0TmFtZSwgaXNNeVR1cm4gfVxufVxuXG5jb25zdCBjb21wdXRlciA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGdhbWVCb2FyZCgpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSAoKSA9PiBib2FyZC5nZXRCb2FyZCgpXG5cbiAgICBjb25zdCByYW5kb21TaG90WSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICAgIGNvbnN0IHJhbmRvbVNob3RYID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21pemVyID0gKCkgPT4ge1xuICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBbJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXVxuICAgICAgICBsZXQgcmFuZG9tSXRlbSA9IG9yaWVudGF0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9yaWVudGF0aW9uLmxlbmd0aCldO1xuICAgICAgICBsZXQgY29vcmRYXG4gICAgICAgIGxldCBjb29yZFlcbiAgICAgICAgaWYgKHJhbmRvbUl0ZW0gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgY29vcmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNilcbiAgICAgICAgICAgIGNvb3JkWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb29yZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIGNvb3JkWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY29vcmRYLCBjb29yZFksIHJhbmRvbUl0ZW0gfVxuICAgIH1cblxuXG4gICAgLy9zaG91bGQgIG5vdCBzaG90IGF0IHRoZSBzYW1lIHNwb3RcblxuXG5cbiAgICByZXR1cm4geyBjb21wdXRlckJvYXJkLCByYW5kb21TaG90WSwgcmFuZG9tU2hvdFgsIHJhbmRvbWl6ZXIgfVxuXG59XG5leHBvcnQgeyBQbGF5ZXIsIGNvbXB1dGVyIH0iLCJjb25zdCBTaGlwID0gZnVuY3Rpb24gKGxlbmd0aCwgbmFtZSkge1xuICAgIGNvbnN0IHNoaXBBcnJheSA9IEFycmF5KGxlbmd0aCkuZmlsbChudWxsKVxuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwQXJyYXkubGVuZ3RoXG5cbiAgICBsZXQgc2hvdHMgPSAwXG4gICAgbGV0IHVuZGVyV2F0ZXIgPSBmYWxzZVxuXG4gICAgZnVuY3Rpb24gaGl0KCkge1xuICAgICAgICBzaG90cysrO1xuICAgICAgICByZXR1cm4gJ1gnXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjb3JkU2hvdHMoKSB7XG4gICAgICAgIHJldHVybiBzaG90c1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1bmsoKSB7XG4gICAgICAgIGlmIChzaGlwTGVuZ3RoID09IHNob3RzKSB7XG4gICAgICAgICAgICB1bmRlcldhdGVyID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVyV2F0ZXJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiBuYW1lXG4gICAgfVxuICAgIHJldHVybiB7IHNoaXBBcnJheSwgaGl0LCBzdW5rLCBzaGlwTGVuZ3RoLCBnZXROYW1lLCBzaG90cywgcmVjb3JkU2hvdHMsIHVuZGVyV2F0ZXIgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBTaGlwXG5cbi8vIGNvbnN0IFNoaXAgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4vLyAgICAgY29uc3Qgc2hpcExlbmd0aCA9IG5ldyBBcnJheShsZW5ndGgpXG5cblxuLy8gICAgIGZ1bmN0aW9uIGhpdCgpIHtcbi8vICAgICAgICAgY29uc3QgbWFyayA9ICdYJztcbi8vICAgICAgICAgc2hpcExlbmd0aC5zcGxpY2UoMCwgMSwgbWFyaylcbi8vICAgICB9XG4vLyAgICAgZnVuY3Rpb24gc3VuaygpIHtcbi8vICAgICAgICAgLy9pZiB3aG9sZSBhcnJheSBpbmNsdWRlcyBYXG4vLyAgICAgICAgIGxldCBpc1N1bmsgPSB0cnVlXG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB7IGlkLCBsZW5ndGgsIGlzSGl0LCBpc1N1bmssIGhpdCwgc3VuayB9XG5cbi8vIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbmV3R2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgZG9tIGZyb20gXCIuL0RPTVwiXG5cbmRvbSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=