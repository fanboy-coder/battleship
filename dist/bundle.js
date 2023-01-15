/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var Ship = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\nvar Gameboard = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((module) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar dock = [];\nvar Ship = /*#__PURE__*/_createClass(function Ship(length) {\n  _classCallCheck(this, Ship);\n  this.length = length, this.hits = 0, this.sunk = false, this.position = [], this.hit = function (num) {\n    this.hits = this.hits + num;\n  };\n  this.isSunk = function () {\n    if (this.hits >= length) {\n      this.sunk = true;\n    }\n    ;\n  };\n});\n;\nvar Gameboard = /*#__PURE__*/_createClass(function Gameboard() {\n  _classCallCheck(this, Gameboard);\n  this.board = [];\n  this.misses = [];\n  var columns = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\n  this.newBoard = function () {\n    var _this = this;\n    columns.forEach(function (column) {\n      for (var i = 1; i < 11; i++) {\n        _this.board.push(column + i);\n      }\n      ;\n    });\n  };\n  this.placeShip = function (ship, xPos, yPos) {\n    var firstNum = xPos.slice(1, 3);\n    var secondNum = yPos.slice(1, 3);\n    var firstLetter = xPos.slice(0, 1);\n    var secondLetter = yPos.slice(0, 1);\n    var result = [];\n    var board = this.board;\n    function letterPositions(firstLetter, firstNum) {\n      if (result.length === ship.length) return;\n      result.push(firstLetter + firstNum);\n      letterPositions(firstLetter, firstNum + 1);\n    }\n    ;\n    function numberPositions(letter, firstNum) {\n      if (result.length === ship.length) return;\n      result.push(columns[letter] += firstNum);\n      numberPositions(letter + 1, firstNum);\n    }\n    ;\n    function removeSpaces() {\n      result.forEach(function (entry) {\n        var place = board.indexOf(entry);\n        board.splice(place, 1);\n      });\n    }\n    ;\n    if (firstNum - secondNum === -ship.length + 1 || columns.indexOf(secondLetter) + 1 - columns.indexOf(firstLetter) === ship.length) {\n      if (firstLetter === secondLetter) {\n        result.length = 0;\n        letterPositions(firstLetter, Number(firstNum));\n        ship.position = result;\n        dock.push(ship);\n        removeSpaces();\n      } else if (firstNum === secondNum) {\n        var letter = columns.indexOf(firstLetter);\n        result.length = 0;\n        numberPositions(letter, firstNum);\n        ship.position = result;\n        removeSpaces();\n      } else {\n        console.log(\"Invalid position\");\n      }\n    } else {\n      console.log(\"The spaces you selected do not match your ship's size.\");\n    }\n    ;\n  };\n  this.receiveAttack = function (coordinates) {\n    for (var i = 0; i < dock.length; i++) {\n      if (!dock[i].position.includes(coordinates)) {\n        console.log(\"got here\");\n        this.misses.push(coordinates);\n        break;\n      } else if (dock.find(function (test) {\n        return test.position = coordinates;\n      })) {\n        dock[i].hit(1);\n        dock[i].isSunk();\n      }\n      ;\n    }\n\n    // for (let i=0; i<dock.length; i++) {\n    // \tif(dock.find(test => test.position = coordinates)){\n    // \t\tdock[i].hit(1);\n    // \t\tdock[i].isSunk();\n    // \t}\n    // \telse {\n    // \t\tconsole.log(\"got here\");\n    // \t\tthis.misses.push(coordinates);\n    // \t};\n    // }\n\n    // if (dock.find(ship => ship.position == coordinates)) {\n    // \tdock.ship.hit(1);\n    // \tdock.ship.isSunk();\n    // }\n    // else {\n    // \tthis.misses.push(coordinates)\n    // }\n  };\n});\n\n;\nmodule.exports = {\n  Ship: Ship,\n  Gameboard: Gameboard\n};\n\n//# sourceURL=webpack://battleship/./src/objects.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;