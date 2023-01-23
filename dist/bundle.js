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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! ./objects */ \"./src/objects.js\"),\n  Ship = _require.Ship,\n  Gameboard = _require.Gameboard,\n  Player = _require.Player;\nvar domBoard = function domBoard(board) {\n  var container = document.querySelector(\".container\");\n  var playerBoard = container.appendChild(document.createElement(\"div\"));\n  playerBoard.setAttribute(\"id\", \"player-board\");\n  playerBoard.setAttribute(\"class\", \"board\");\n  var cpuBoard = container.appendChild(document.createElement(\"div\"));\n  cpuBoard.setAttribute(\"id\", \"cpu-board\");\n  cpuBoard.setAttribute(\"class\", \"board\");\n};\nmodule.exports = {\n  domBoard: domBoard\n};\n\n//# sourceURL=webpack://battleship/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar _require = __webpack_require__(/*! ./objects */ \"./src/objects.js\"),\n  Ship = _require.Ship,\n  Gameboard = _require.Gameboard,\n  Player = _require.Player;\nvar _require2 = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\"),\n  domBoard = _require2.domBoard;\nvar GameController = /*#__PURE__*/_createClass(function GameController() {\n  _classCallCheck(this, GameController);\n  this.player = new Player(\"joel\");\n  this.cpu = new Player(\"CPU\");\n  this.playerBoard = new Gameboard();\n  this.playerBoard.newBoard();\n  this.cpuBoard = new Gameboard();\n  this.cpuBoard.newBoard();\n  this.carrier = new Ship(5);\n  this.battleship = new Ship(4);\n  this.submarine = new Ship(3);\n  this.destroyer = new Ship(2);\n  this.placeShipPlayer = function () {\n    this.playerBoard.placeShip(this.player.dock, this.carrier, \"F1\", \"F5\");\n    this.playerBoard.placeShip(this.player.dock, this.battleship, \"J1\", \"J4\");\n    this.playerBoard.placeShip(this.player.dock, this.submarine, \"B2\", \"D2\");\n    this.playerBoard.placeShip(this.player.dock, this.submarine, \"H1\", \"H3\");\n    this.playerBoard.placeShip(this.player.dock, this.destroyer, \"C9\", \"C10\");\n    this.playerBoard.placeShip(this.player.dock, this.destroyer, \"E3\", \"E4\");\n    this.playerBoard.placeShip(this.player.dock, this.destroyer, \"I3\", \"J3\");\n  };\n  this.placeShipPlayer();\n  this.placeShipCpu = function () {\n    this.cpuBoard.placeShip(this.cpu.dock, this.carrier, \"F1\", \"F5\");\n    this.cpuBoard.placeShip(this.cpu.dock, this.battleship, \"J1\", \"J4\");\n    this.cpuBoard.placeShip(this.cpu.dock, this.submarine, \"B2\", \"D2\");\n    this.cpuBoard.placeShip(this.cpu.dock, this.submarine, \"H1\", \"H3\");\n    this.cpuBoard.placeShip(this.cpu.dock, this.destroyer, \"C9\", \"C10\");\n    this.cpuBoard.placeShip(this.cpu.dock, this.destroyer, \"E3\", \"E4\");\n    this.cpuBoard.placeShip(this.cpu.dock, this.destroyer, \"I3\", \"J3\");\n  };\n  this.placeShipCpu();\n});\n;\nvar game = new GameController();\ndomBoard();\nmodule.exports = {\n  GameController: GameController\n};\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((module) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar Ship = /*#__PURE__*/_createClass(function Ship(length) {\n  _classCallCheck(this, Ship);\n  this.length = length, this.hits = 0, this.sunk = false, this.position = [], this.hit = function (num) {\n    this.hits = this.hits + 1;\n  };\n  this.isSunk = function () {\n    if (this.hits >= length) {\n      this.sunk = true;\n    }\n    ;\n  };\n});\n;\nvar Gameboard = /*#__PURE__*/_createClass(function Gameboard() {\n  _classCallCheck(this, Gameboard);\n  this.board = [], this.misses = [];\n  var columns = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\n  this.newBoard = function () {\n    var _this = this;\n    columns.forEach(function (column) {\n      for (var i = 1; i < 11; i++) {\n        _this.board.push(column + i);\n      }\n      ;\n    });\n  };\n  this.placeShip = function (dock, ship, xPos, yPos) {\n    var firstNum = xPos.slice(1, 3);\n    var secondNum = yPos.slice(1, 3);\n    var firstLetter = xPos.slice(0, 1);\n    var secondLetter = yPos.slice(0, 1);\n    var result = [];\n    var board = this.board;\n    function letterPositions(firstLetter, firstNum) {\n      if (result.length === ship.length) return;\n      result.push(firstLetter + firstNum);\n      letterPositions(firstLetter, firstNum + 1);\n    }\n    ;\n    function numberPositions(letter, firstNum) {\n      if (result.length === ship.length) return;\n      result.push(columns[letter] += firstNum);\n      numberPositions(letter + 1, firstNum);\n    }\n    ;\n    function removeSpaces() {\n      result.forEach(function (entry) {\n        var place = board.indexOf(entry);\n        board.splice(place, 1);\n      });\n    }\n    ;\n    if (firstNum - secondNum === -ship.length + 1 || columns.indexOf(secondLetter) + 1 - columns.indexOf(firstLetter) === ship.length) {\n      if (firstLetter === secondLetter) {\n        result.length = 0;\n        letterPositions(firstLetter, Number(firstNum));\n        ship.position = result;\n        dock.push(ship);\n        removeSpaces();\n      } else if (firstNum === secondNum) {\n        var letter = columns.indexOf(firstLetter);\n        result.length = 0;\n        numberPositions(letter, firstNum);\n        ship.position = result;\n        removeSpaces();\n      } else {\n        console.log(\"Invalid position\");\n      }\n    } else {\n      console.log(\"The spaces you selected do not match your ship's size.\");\n    }\n    ;\n  };\n  this.receiveAttack = function (dock, coordinates) {\n    var safe = [];\n    dock.forEach(function (ship) {\n      var check = ship.position.includes(coordinates);\n      if (check) {\n        ship.hit();\n        ship.isSunk();\n      } else {\n        safe.push(ship);\n      }\n      ;\n    });\n    if (safe = []) {\n      this.misses.push(coordinates);\n    }\n  };\n  this.gameOver = function (name) {\n    var check = name.dock.every(function (ship) {\n      return ship.sunk = false;\n    });\n    if (!check) {\n      console.log(\"Game Over\");\n    }\n    ;\n  };\n});\n;\nvar Player = /*#__PURE__*/_createClass(function Player(name) {\n  _classCallCheck(this, Player);\n  this.name = name, this.dock = [], this.plays = [], this.randomPlay = function (board) {\n    var play = board.board[Math.floor(Math.random() * board.board.length)];\n    if (!this.plays.includes(play)) {\n      board.receiveAttack(play);\n      this.plays.push(play);\n    } else {\n      this.randomPlay(board);\n    }\n    ;\n  };\n});\n;\nmodule.exports = {\n  Ship: Ship,\n  Gameboard: Gameboard,\n  Player: Player\n};\n\n//# sourceURL=webpack://battleship/./src/objects.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;