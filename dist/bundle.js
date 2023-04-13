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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//modal that starts the game\nvar startWindow = function startWindow(game) {\n  var container = document.querySelector(\".container\");\n  var background = container.appendChild(document.createElement(\"div\"));\n  background.setAttribute(\"id\", \"modal-bg-display\");\n  var slider = container.appendChild(document.createElement(\"div\"));\n  slider.setAttribute(\"class\", \"slider\");\n  slider.classList.add(\"slide-in\");\n  var header = slider.appendChild(document.createElement(\"div\"));\n  header.setAttribute(\"class\", \"header\");\n  var h1 = header.appendChild(document.createElement(\"h1\"));\n  h1.textContent = \"Welcome to BATTLESHIP\";\n  var footer = slider.appendChild(document.createElement(\"div\"));\n  footer.setAttribute(\"class\", \"footer\");\n  var button = footer.appendChild(document.createElement(\"btn\"));\n  button.textContent = \"New game\";\n  button.setAttribute(\"class\", \"button\");\n  button.setAttribute(\"id\", \"new-game\");\n  button.addEventListener(\"click\", function () {\n    slider.style.cssText = \"box-shadow: -3px 0px 10px 1px #aaaaaa\";\n    background.remove();\n    h1.textContent = \"Place your ships on the board\";\n    var cell = document.querySelectorAll(\".player-cell\");\n    cell.forEach(function (cell) {\n      cell.innerText = cell.id.slice(7, 10);\n    });\n    var dock = document.createElement(\"div\");\n    dock.setAttribute(\"class\", \"dock\");\n    slider.insertBefore(dock, footer);\n    addShip();\n    var ships = document.querySelectorAll(\".coordinates\");\n    ships.forEach(function (ship) {\n      var field1 = ship.children[0];\n      var field2 = ship.children[2];\n      ship.addEventListener(\"change\", function () {\n        if ((field1.value.length == 2 || field1.value.length == 3) && (field2.value.length == 2 || field2.value.length == 3)) {\n          var lettersRegex = /^[a-zA-Z]+$/;\n          var numbersRegex = /^[0-9]+$/;\n          var nextElement = ship.nextSibling;\n          var vessel = ship.parentElement.id;\n          var currentDockSize = game.player.dock.length;\n          if (lettersRegex.test(field1.value[0]) && lettersRegex.test(field2.value[0])) {\n            if (numbersRegex.test(field1.value[1]) && numbersRegex.test(field2.value[1])) {\n              game.playerBoard.placeShip(game.player.dock, game[vessel], field1.value, field2.value, nextElement);\n              if (game.player.dock.length > currentDockSize) {\n                var validation = \"valid\";\n                validate(nextElement, validation, game.player.dock);\n              } else {\n                var _validation = \"size\";\n                validate(nextElement, _validation);\n              }\n              ;\n            } else {\n              var _validation2 = \"invalid\";\n              validate(nextElement, _validation2);\n            }\n            ;\n          } else {\n            var _validation3 = \"invalid\";\n            validate(nextElement, _validation3);\n          }\n          ;\n        }\n      });\n    });\n    button.textContent = \"Start game\";\n    button.addEventListener(\"click\", function () {\n      cell.forEach(function (cell) {\n        cell.innerText = \"\";\n      });\n      game.placeShipCpu();\n      slider.remove();\n    });\n  });\n};\n\n//validates if a ship can be placed on the board or not\nvar validate = function validate(element, validation, dock) {\n  if (element.querySelector(\"span\") === null) {\n    element.appendChild(document.createElement(\"span\"));\n    element.appendChild(document.createElement(\"p\"));\n  }\n  var validity = element.querySelector(\"span\");\n  var p = element.querySelector(\"p\");\n  var target = element.previousElementSibling;\n  var inputElements = target.querySelectorAll(\"input\");\n  if (validation == \"invalid\") {\n    validity.classList.add(\"wrong\");\n    p.textContent = \"Coordinates aren't valid\";\n  } else if (validation == \"position\") {\n    validity.classList.add(\"wrong\");\n    p.textContent = \"Invalid position\";\n  } else if (validation == \"size\") {\n    validity.classList.add(\"wrong\");\n    p.textContent = \"The spaces don't match the ship's size.\";\n  } else if (validation == \"valid\") {\n    validity.classList.add(\"right\");\n    validity.classList.remove(\"wrong\");\n    p.textContent = \"\";\n    inputElements.forEach(function (input) {\n      input.disabled = true;\n    });\n    var cells = document.querySelectorAll(\".player-cell\");\n    cells.forEach(function (cell) {\n      dock.forEach(function (element) {\n        if (element.position.includes(cell.id.slice(7, 10))) {\n          cell.classList.add(\"class\", \"ship\");\n        }\n      });\n    });\n  }\n};\n\n//algorithm that creates a form entry for each ship\nvar addShip = function addShip() {\n  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var dock = document.querySelector(\".dock\");\n  if (dock.childNodes.length == 6) return;\n  var form = dock.appendChild(document.createElement(\"div\"));\n  form.setAttribute(\"class\", \"form\");\n  var box1 = form.appendChild(document.createElement(\"div\"));\n  box1.setAttribute(\"class\", \"box\");\n  var name = box1.appendChild(document.createElement(\"p\"));\n  name.setAttribute(\"class\", \"name\");\n  switch (i) {\n    case 0:\n      name.textContent = \"Carrier (5 spaces)\";\n      form.setAttribute(\"id\", \"carrier\");\n      break;\n    case 1:\n      name.textContent = \"Battleship (4 spaces)\";\n      form.setAttribute(\"id\", \"battleship\");\n      break;\n    case 2:\n      name.textContent = \"Submarine 1 (3 spaces)\";\n      form.setAttribute(\"id\", \"submarine\");\n      break;\n    case 3:\n      name.textContent = \"Submarine 2 (3 spaces)\";\n      form.setAttribute(\"id\", \"submarine2\");\n      break;\n    case 4:\n      name.textContent = \"Destroyer 1 (2 spaces)\";\n      form.setAttribute(\"id\", \"destroyer\");\n      break;\n    case 5:\n      name.textContent = \"Destroyer 2 (2 spaces)\";\n      form.setAttribute(\"id\", \"destroyer2\");\n      break;\n  }\n  ;\n  var box2 = form.appendChild(document.createElement(\"div\"));\n  box2.setAttribute(\"class\", \"box\");\n  box2.classList.add(\"coordinates\");\n  var pos1 = box2.appendChild(document.createElement(\"input\"));\n  pos1.setAttribute(\"class\", \"input\");\n  pos1.setAttribute(\"type\", \"text\");\n  pos1.setAttribute(\"maxlength\", \"3\");\n  pos1.setAttribute(\"size\", \"1\");\n  pos1.setAttribute(\"id\", \"pos-\" + i);\n  var to = box2.appendChild(document.createElement(\"p\"));\n  to.textContent = \" to \";\n  var pos2 = box2.appendChild(document.createElement(\"input\"));\n  pos2.setAttribute(\"class\", \"input\");\n  pos2.setAttribute(\"type\", \"text\");\n  pos2.setAttribute(\"maxlength\", \"3\");\n  pos2.setAttribute(\"size\", \"1\");\n  pos2.setAttribute(\"id\", \"pos-\" + i + 1);\n  var box3 = form.appendChild(document.createElement(\"div\"));\n  box3.setAttribute(\"class\", \"box\");\n  box3.setAttribute(\"class\", \"validation\");\n  addShip(i + 1);\n};\n\n//generates a game over modal once the game ends\nvar gameoverWindow = function gameoverWindow(player, cpu, game) {\n  var winner = \"\";\n  if (player.lost == true) {\n    winner = \"CPU\";\n  } else if (cpu.lost == true) {\n    winner = \"Player\";\n  }\n  if (winner != \"\") {\n    var container = document.querySelector(\".container\");\n    var background = container.appendChild(document.createElement(\"div\"));\n    background.setAttribute(\"id\", \"modal-bg-display\");\n    var modal = background.appendChild(document.createElement(\"div\"));\n    modal.setAttribute(\"class\", \"modal\");\n    var h1 = modal.appendChild(document.createElement(\"h1\"));\n    h1.textContent = \"GAME OVER! \" + winner + \" WON THE GAME!\";\n    var button = modal.appendChild(document.createElement(\"btn\"));\n    button.textContent = \"NEW GAME\";\n    button.setAttribute(\"class\", \"button\");\n    button.addEventListener(\"click\", function () {\n      game.emptyObjects();\n      game.createShips();\n      var playarea = document.getElementById(\"play-area\");\n      playarea.remove();\n      domBoard(game.playerBoard, game.cpuBoard, game.player, game.cpu, game);\n      clear();\n      modal.remove();\n      background.remove();\n      startWindow(game);\n      autoClick();\n    });\n  }\n};\n\n//auto-clicks the new game button after restarting the game\nvar autoClick = function autoClick() {\n  var button = document.getElementById(\"new-game\");\n  button.click();\n};\n\n//generates both player's boards\nvar domBoard = function domBoard(playerBoard, cpuBoard, player, cpu, game) {\n  var container = document.querySelector(\".container\");\n  var playarea = container.appendChild(document.createElement(\"div\"));\n  playarea.setAttribute(\"id\", \"play-area\");\n  var playerColumn = playarea.appendChild(document.createElement(\"div\"));\n  playerColumn.setAttribute(\"id\", \"player-column\");\n  var playerText = playerColumn.appendChild(document.createElement(\"h3\"));\n  playerText.setAttribute(\"id\", \"player-text\");\n  playerText.innerText = \"Player's board\";\n  var playerArea = playerColumn.appendChild(document.createElement(\"div\"));\n  playerArea.setAttribute(\"id\", \"player-board\");\n  playerArea.setAttribute(\"class\", \"board\");\n  playerBoard.board.forEach(function (entry) {\n    var cell = playerArea.appendChild(document.createElement(\"div\"));\n    cell.setAttribute(\"class\", \"player-cell\");\n    cell.setAttribute(\"id\", \"player-\" + entry);\n  });\n  var cpuColumn = playarea.appendChild(document.createElement(\"div\"));\n  cpuColumn.setAttribute(\"id\", \"cpu-column\");\n  var cpuText = cpuColumn.appendChild(document.createElement(\"h3\"));\n  cpuText.setAttribute(\"id\", \"cpu-text\");\n  cpuText.innerText = \"CPU's board\";\n  var cpuArea = cpuColumn.appendChild(document.createElement(\"div\"));\n  cpuArea.setAttribute(\"id\", \"cpu-board\");\n  cpuArea.setAttribute(\"class\", \"board\");\n  cpuBoard.board.forEach(function (entry) {\n    var cell = cpuArea.appendChild(document.createElement(\"div\"));\n    cell.setAttribute(\"class\", \"cpu-cell\");\n    cell.setAttribute(\"id\", \"cpu-\" + entry);\n    cell.addEventListener(\"click\", play);\n    function play() {\n      var coordinate = cell.id.slice(4, 7);\n      cpuBoard.receiveAttack(cpu.dock, coordinate);\n      cpu.randomPlay(player, playerBoard, cpu);\n      hits(player, playerBoard, cpu, cpuBoard);\n      cpu.gameOver();\n      player.gameOver();\n      game.checkGameOver();\n      cell.removeEventListener(\"click\", play);\n    }\n  });\n};\n\n//checks for a probable hit next to a hit on the board\nvar strategicStrike = function strategicStrike(player, playerBoard, cpu) {\n  var hit = [];\n  var columns = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\n  var playerCell = document.querySelectorAll(\".player-cell\");\n  playerCell.forEach(function (cell) {\n    if (cell.classList.contains(\"hit\")) {\n      hit.push(cell.id);\n    }\n    ;\n  });\n  var clearHit = [];\n  hit.forEach(function (hit) {\n    var right = \"player-\" + hit.slice(7, 8) + (Math.floor(hit.slice(8, 10)) + 1);\n    var left = \"player-\" + hit.slice(7, 8) + (Math.floor(hit.slice(8, 10)) - 1);\n    var up = \"player-\" + columns[columns.indexOf(hit.slice(7, 8)) - 1] + Math.floor(hit.slice(8, 10));\n    var down = \"player-\" + columns[columns.indexOf(hit.slice(7, 8)) + 1] + Math.floor(hit.slice(8, 10));\n    var checkConditions = function checkConditions(side) {\n      var conditions = !document.getElementById(side).classList.contains(\"hit\") && !document.getElementById(side).classList.contains(\"miss\") && !document.getElementById(side).classList.contains(\"sunk\");\n      if (conditions) {\n        return true;\n      }\n      ;\n    };\n    var extraRightCondition = right.slice(8, 10) < 11;\n    var extraLeftCondition = left.slice(8, 10) != 0;\n    var extraUpCondition = up.slice(7, 16) != \"undefined\";\n    var extraDownCondition = down.slice(7, 16) != \"undefined\";\n    if (extraRightCondition && extraLeftCondition && extraUpCondition && extraDownCondition) {\n      if (checkConditions(right)) {\n        clearHit.push(right);\n      } else if (checkConditions(left)) {\n        clearHit.push(left);\n      } else if (checkConditions(up)) {\n        clearHit.push(up);\n      } else if (checkConditions(down)) {\n        clearHit.push(down);\n      }\n      ;\n    } else if (!extraRightCondition) {\n      if (!extraUpCondition) {\n        if (checkConditions(left)) {\n          clearHit.push(left);\n        } else if (checkConditions(down)) {\n          clearHit.push(down);\n        }\n        ;\n      } else if (!extraDownCondition) {\n        if (checkConditions(left)) {\n          clearHit.push(left);\n        } else if (checkConditions(up)) {\n          clearHit.push(up);\n        }\n        ;\n      } else {\n        if (checkConditions(left)) {\n          clearHit.push(left);\n        } else if (checkConditions(up)) {\n          clearHit.push(up);\n        } else if (checkConditions(down)) {\n          clearHit.push(down);\n        }\n        ;\n      }\n      ;\n    } else if (!extraLeftCondition) {\n      if (!extraUpCondition) {\n        if (checkConditions(right)) {\n          clearHit.push(right);\n        } else if (checkConditions(down)) {\n          clearHit.push(down);\n        }\n        ;\n      } else if (!extraDownCondition) {\n        if (checkConditions(right)) {\n          clearHit.push(right);\n        } else if (checkConditions(up)) {\n          clearHit.push(up);\n        }\n        ;\n      } else {\n        if (checkConditions(right)) {\n          clearHit.push(right);\n        } else if (checkConditions(up)) {\n          clearHit.push(up);\n        } else if (checkConditions(down)) {\n          clearHit.push(down);\n        }\n        ;\n      }\n      ;\n    } else if (!extraUpCondition) {\n      if (!extraRightCondition) {\n        if (checkConditions(left)) {\n          clearHit.push(left);\n        } else if (checkConditions(down)) {\n          clearHit.push(down);\n        }\n        ;\n      } else if (!extraLeftCondition) {\n        if (checkConditions(right)) {\n          clearHit.push(right);\n        } else if (checkConditions(down)) {\n          clearHit.push(down);\n        }\n        ;\n      } else {\n        if (checkConditions(right)) {\n          clearHit.push(right);\n        } else if (checkConditions(left)) {\n          clearHit.push(left);\n        } else if (checkConditions(down)) {\n          clearHit.push(down);\n        }\n        ;\n      }\n      ;\n    } else if (!extraDownCondition) {\n      if (!extraRightCondition) {\n        if (checkConditions(left)) {\n          clearHit.push(left);\n        } else if (checkConditions(up)) {\n          clearHit.push(up);\n        }\n        ;\n      } else if (!extraLeftCondition) {\n        if (checkConditions(right)) {\n          clearHit.push(right);\n        } else if (checkConditions(up)) {\n          clearHit.push(up);\n        }\n        ;\n      } else {\n        if (checkConditions(right)) {\n          clearHit.push(right);\n        } else if (checkConditions(left)) {\n          clearHit.push(left);\n        } else if (checkConditions(up)) {\n          clearHit.push(up);\n        }\n        ;\n      }\n      ;\n    }\n  });\n  var attack = function attack() {\n    playerBoard.receiveAttack(player.dock, clearHit[0].slice(7, 10));\n    cpu.plays.push(clearHit[0].slice(7, 10));\n  };\n  attack();\n};\n\n//marks the hits and misses on each board\nvar hits = function hits(player, playerBoard, cpu, cpuBoard) {\n  var cpuCell = document.querySelectorAll(\".cpu-cell\");\n  var playerCell = document.querySelectorAll(\".player-cell\");\n  cpuCell.forEach(function (cell) {\n    if (cpuBoard.misses.includes(cell.id.slice(4, 7))) {\n      cell.classList.add(\"miss\");\n    }\n    if (cpuBoard.hits.includes(cell.id.slice(4, 7))) {\n      cell.classList.add(\"hit\");\n    }\n  });\n  playerCell.forEach(function (cell) {\n    if (playerBoard.misses.includes(cell.id.slice(7, 10))) {\n      cell.classList.add(\"miss\");\n    }\n    if (playerBoard.hits.includes(cell.id.slice(7, 10))) {\n      cell.classList.add(\"hit\");\n    }\n  });\n  checkSunk(player);\n  checkSunk(cpu);\n};\n\n//clears all graphic elements on the board\nvar clear = function clear() {\n  var cpuCell = document.querySelectorAll(\".cpu-cell\");\n  var playerCell = document.querySelectorAll(\".player-cell\");\n  cpuCell.forEach(function (cell) {\n    cell.classList.remove(\"hit\");\n    cell.classList.remove(\"miss\");\n    cell.classList.remove(\"sunk\");\n  });\n  playerCell.forEach(function (cell) {\n    cell.classList.remove(\"hit\");\n    cell.classList.remove(\"miss\");\n    cell.classList.remove(\"sunk\");\n    cell.classList.remove(\"ship\");\n  });\n};\n\n//marks sunk ships on the board\nvar checkSunk = function checkSunk(current) {\n  var cpuCells = document.querySelectorAll(\".cpu-cell\");\n  var playerCells = document.querySelectorAll(\".player-cell\");\n  var _loop = function _loop() {\n    if (current.dock[i].sunk) {\n      var cells = current.dock[i].position;\n      if (current.name == \"CPU\") {\n        cpuCells.forEach(function (cell) {\n          if (cells.includes(cell.id.slice(4, 7))) {\n            cell.classList.remove(\"hit\");\n            cell.classList.add(\"sunk\");\n          }\n        });\n      } else {\n        playerCells.forEach(function (cell) {\n          if (cells.includes(cell.id.slice(7, 10))) {\n            cell.classList.remove(\"hit\");\n            cell.classList.add(\"sunk\");\n          }\n        });\n      }\n    }\n  };\n  for (var i = 0; i < current.dock.length; i++) {\n    _loop();\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  startWindow: startWindow,\n  domBoard: domBoard,\n  validate: validate,\n  hits: hits,\n  strategicStrike: strategicStrike,\n  gameoverWindow: gameoverWindow\n});\n\n//# sourceURL=webpack://battleship/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameController\": () => (/* binding */ GameController)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar _require = __webpack_require__(/*! ./objects */ \"./src/objects.js\"),\n  Ship = _require.Ship,\n  Gameboard = _require.Gameboard,\n  Player = _require.Player;\nvar _require$default = (__webpack_require__(/*! ./DOM */ \"./src/DOM.js\")[\"default\"]),\n  startWindow = _require$default.startWindow,\n  gameoverWindow = _require$default.gameoverWindow,\n  domBoard = _require$default.domBoard;\n__webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\nvar GameController = /*#__PURE__*/function () {\n  function GameController() {\n    _classCallCheck(this, GameController);\n    this.player = new Player(\"joel\");\n    this.cpu = new Player(\"CPU\");\n    this.playerBoard = new Gameboard();\n    this.playerBoard.newBoard();\n    this.cpuBoard = new Gameboard();\n    this.cpuBoard.newBoard();\n    this.ships = [];\n  }\n  _createClass(GameController, [{\n    key: \"createShips\",\n    value: function createShips() {\n      this.carrier = new Ship(\"carrier\", 5);\n      this.ships.push(this.carrier);\n      this.battleship = new Ship(\"battleship\", 4);\n      this.ships.push(this.battleship);\n      this.submarine = new Ship(\"submarine\", 3);\n      this.ships.push(this.submarine);\n      this.submarine2 = new Ship(\"submarine 2\", 3);\n      this.ships.push(this.submarine2);\n      this.destroyer = new Ship(\"destroyer\", 2);\n      this.ships.push(this.destroyer);\n      this.destroyer2 = new Ship(\"destroyer 2\", 2);\n      this.ships.push(this.destroyer2);\n      this.cpucarrier = new Ship(\"carrier\", 5);\n      this.ships.push(this.cpucarrier);\n      this.cpubattleship = new Ship(\"battleship\", 4);\n      this.ships.push(this.cpubattleship);\n      this.cpusubmarine = new Ship(\"submarine\", 3);\n      this.ships.push(this.cpusubmarine);\n      this.cpusubmarine2 = new Ship(\"submarine 2\", 3);\n      this.ships.push(this.cpusubmarine2);\n      this.cpudestroyer = new Ship(\"destroyer\", 2);\n      this.ships.push(this.cpudestroyer);\n      this.cpudestroyer2 = new Ship(\"destroyer 2\", 2);\n      this.ships.push(this.cpudestroyer2);\n    }\n  }, {\n    key: \"placeShipCpu\",\n    value: function placeShipCpu() {\n      this.cpuBoard.randomPlaceShip(this.cpu, this.cpucarrier);\n      this.cpuBoard.randomPlaceShip(this.cpu, this.cpubattleship);\n      this.cpuBoard.randomPlaceShip(this.cpu, this.cpusubmarine);\n      this.cpuBoard.randomPlaceShip(this.cpu, this.cpusubmarine2);\n      this.cpuBoard.randomPlaceShip(this.cpu, this.cpudestroyer);\n      this.cpuBoard.randomPlaceShip(this.cpu, this.cpudestroyer2);\n    }\n  }, {\n    key: \"emptyObjects\",\n    value: function emptyObjects() {\n      this.ships = [];\n      this.player.dock = [];\n      this.player.plays = [];\n      this.player.lost = false;\n      this.playerBoard.hits = [];\n      this.playerBoard.misses = [];\n      this.playerBoard.lost = false;\n      this.cpu.dock = [];\n      this.cpu.plays = [];\n      this.cpu.lost = false;\n      this.cpuBoard.hits = [];\n      this.cpuBoard.misses = [];\n      this.cpuBoard.lost = false;\n    }\n  }, {\n    key: \"checkGameOver\",\n    value: function checkGameOver() {\n      if (this.player.lost || this.cpu.lost) {\n        this.gameover = true;\n        gameoverWindow(this.player, this.cpu, this);\n      }\n      ;\n    }\n  }]);\n  return GameController;\n}();\n;\nvar game = new GameController();\ngame.createShips();\nstartWindow(game);\ndomBoard(game.playerBoard, game.cpuBoard, game.player, game.cpu, game);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar strategicStrike = (__webpack_require__(/*! ./DOM */ \"./src/DOM.js\")[\"default\"].strategicStrike);\nvar Ship = /*#__PURE__*/_createClass(function Ship(name, length) {\n  _classCallCheck(this, Ship);\n  this.name = name, this.length = length, this.hits = 0, this.sunk = false, this.position = [], this.hit = function (num) {\n    this.hits = this.hits + 1;\n  };\n  this.isSunk = function () {\n    if (this.hits >= length) {\n      this.sunk = true;\n    }\n    ;\n  };\n});\n;\nvar Gameboard = /*#__PURE__*/_createClass(function Gameboard() {\n  _classCallCheck(this, Gameboard);\n  this.board = [], this.misses = [], this.hits = [];\n  var columns = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\n  this.newBoard = function () {\n    var _this = this;\n    columns.forEach(function (column) {\n      for (var i = 1; i < 11; i++) {\n        _this.board.push(column + i);\n      }\n      ;\n    });\n  };\n  this.placeShip = function (dock, ship, xPos, yPos, nextElement) {\n    var firstNum = xPos.slice(1, 3);\n    var secondNum = yPos.slice(1, 3);\n    var firstLetter = xPos.toUpperCase().slice(0, 1);\n    var secondLetter = yPos.toUpperCase().slice(0, 1);\n    var result = [];\n    function letterPositions(firstLetter, firstNum) {\n      if (result.length === ship.length) return;\n      result.push(firstLetter + firstNum);\n      letterPositions(firstLetter, firstNum + 1);\n    }\n    ;\n    function numberPositions(letter, firstNum) {\n      if (result.length === ship.length) return;\n      result.push(columns[letter] + firstNum);\n      numberPositions(letter + 1, firstNum);\n    }\n    ;\n    function checkMatch(dock, ship) {\n      var isMatch = function isMatch(dock, result) {\n        for (var i = 0; i < dock.length; i++) {\n          var boat = dock[i];\n          for (var j = 0; j < result.length; j++) {\n            var value = result[j];\n            if (boat.position.includes(value)) {\n              return true;\n            }\n          }\n        }\n        return false;\n      };\n      if (!isMatch(dock, result)) {\n        dock.push(ship);\n      }\n      ;\n    }\n    ;\n    if (!dock.includes(ship.name)) {\n      if (firstNum - secondNum === -ship.length + 1 || columns.indexOf(secondLetter) + 1 - columns.indexOf(firstLetter) === ship.length) {\n        if (firstLetter === secondLetter) {\n          result.length = 0;\n          letterPositions(firstLetter, Number(firstNum));\n          ship.position = result;\n          if (dock.length > 0) {\n            checkMatch(dock, ship);\n          } else {\n            dock.push(ship);\n          }\n        } else if (firstNum === secondNum) {\n          var letter = columns.indexOf(firstLetter);\n          result.length = 0;\n          numberPositions(letter, firstNum);\n          ship.position = result;\n          if (dock.length > 0) {\n            checkMatch(dock, ship);\n          } else {\n            dock.push(ship);\n          }\n        }\n        ;\n      }\n      ;\n    }\n    ;\n  };\n  this.randomPlaceShip = function (cpu, ship) {\n    var letter1 = columns[Math.floor(Math.random() * columns.length)];\n    var num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;\n    if (num1 <= ship.length + 1) {\n      var num2 = num1 + ship.length - 1;\n      var xPos = letter1 + num1;\n      var yPos = letter1 + num2;\n      this.placeShip(cpu.dock, ship, xPos, yPos);\n    } else {\n      var pos = columns.indexOf(letter1);\n      if (pos <= ship.length + 1) {\n        var letter2 = columns[pos + ship.length - 1];\n        var _xPos = letter1 + num1;\n        var _yPos = letter2 + num1;\n        this.placeShip(cpu.dock, ship, _xPos, _yPos);\n      } else {\n        var _letter = columns[pos - ship.length + 1];\n        var _xPos2 = _letter + num1;\n        var _yPos2 = letter1 + num1;\n        this.placeShip(cpu.dock, ship, _xPos2, _yPos2);\n      }\n      ;\n    }\n    ;\n  };\n  this.receiveAttack = function (dock, coordinates) {\n    for (var i = 0; i < dock.length; i++) {\n      if (dock[i].position.includes(coordinates)) {\n        safe = [];\n        dock[i].hit();\n        dock[i].isSunk();\n        this.hits.push(coordinates);\n      }\n    }\n    if (this.hits.slice(-1) != coordinates) {\n      this.misses.push(coordinates);\n    }\n  };\n});\n;\nvar Player = /*#__PURE__*/_createClass(function Player(name) {\n  _classCallCheck(this, Player);\n  this.name = name, this.dock = [], this.plays = [], this.lost = false, this.randomPlay = function (player, playerBoard, cpu) {\n    var checkForTarget = function checkForTarget(player) {\n      for (var i = 0; i < player.dock.length; i++) {\n        if (player.dock[i].hits > 0 && player.dock[i].sunk == false) {\n          return true;\n        }\n        ;\n      }\n    };\n    if (checkForTarget(player)) {\n      strategicStrike(player, playerBoard, cpu);\n    } else {\n      var play = playerBoard.board[Math.floor(Math.random() * playerBoard.board.length)];\n      if (!this.plays.includes(play)) {\n        playerBoard.receiveAttack(player.dock, play);\n        this.plays.push(play);\n      } else {\n        this.randomPlay(player, playerBoard);\n      }\n      ;\n    }\n  };\n  this.gameOver = function () {\n    if (this.dock.every(function (ship) {\n      return ship.sunk == true;\n    })) {\n      this.lost = true;\n    }\n    ;\n  };\n});\n;\nmodule.exports = {\n  Ship: Ship,\n  Gameboard: Gameboard,\n  Player: Player\n};\n\n//# sourceURL=webpack://battleship/./src/objects.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/circle-medium.svg */ \"./src/styles/images/circle-medium.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/alpha-x.svg */ \"./src/styles/images/alpha-x.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/circle-medium-green.svg */ \"./src/styles/images/circle-medium-green.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/check-circle.svg */ \"./src/styles/images/check-circle.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/alert-circle.svg */ \"./src/styles/images/alert-circle.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n}\\n\\n.container {\\n\\tdisplay: grid;\\n\\tgrid-template-rows: 1fr 8fr;\\n}\\n\\n.title {\\n\\tdisplay: grid;\\n\\tplace-items: end center;\\n}\\n\\n.form {\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1.5fr 1fr 1fr;\\n}\\n\\n.box {\\n\\tdisplay: flex;\\n\\tflex-direction: row;\\n\\tgap: 10px;\\n}\\n\\nh1,\\nh3,\\n.button {\\n\\tfont-family: 'Zen Tokyo Zoo', cursive;\\n\\tfont-size: xx-large;\\n\\ttext-align: center;\\n}\\n\\n#play-area {\\n\\tdisplay: grid;\\n\\tgrid-template-columns: repeat(2, 1fr);\\n\\tpadding: 5%;\\n\\tgap: 3%;\\n\\talign-items: center;\\n\\tjustify-items: center;\\n}\\n\\n.board {\\n\\tbackground-color: rgb(40, 122, 222);\\n\\tcolor: rgba(255, 255, 255, 0.5);\\n\\ttext-align: center;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: repeat(10, 1fr);\\n\\theight: 450px;\\n\\twidth: 450px;\\n\\tborder: 5px solid rgb(96, 94, 94);\\n\\tborder-radius: 1%;\\n\\tcursor: pointer;\\n\\tline-height: 200%;\\n}\\n\\n.ship {\\n\\tbackground-color: rgb(193, 225, 193);\\n}\\n\\n.player-cell, .cpu-cell, .hit, .miss {\\n\\tborder: 1px solid white;\\n}\\n\\n.hit, .miss,.sunk, .validation {\\n\\tbackground-repeat: no-repeat;\\n}\\n\\n.hit {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n.miss {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n.sunk {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n\\n.right {\\n\\tdisplay: flex;\\n\\theight: 20px;\\n\\twidth: 20px;\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n\\n.wrong {\\n\\tdisplay: flex;\\n\\theight: 20px;\\n\\twidth: 20px;\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n}\\n\\n#modal-bg-display {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100vh;\\n    background-color:rgba(0,0,0,0.5);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    transition: visibility 0s opactity 0,5s;\\n}\\n\\n.modal {\\n    background-color: white;\\n\\tborder: 5px solid rgb(96, 94, 94);\\n    height: 40%;\\n    width: 40%;\\n    display: flex;\\n    align-items: center;\\n\\tjustify-content: center;\\n    flex-direction: column;\\n    border-radius: 1%;\\n\\tgap: 20%;\\n}\\n\\n.slider {\\n\\tbackground-color: white;\\n    height: 100%;\\n    min-width: 50%;\\n    display: grid;\\n\\tgrid-template-rows: repeat(3, 1fr);\\n    align-items: center;\\n\\tz-index: 1;\\n\\tposition: absolute;\\n  \\tright: 0%;\\n\\t  transform: translateX(100%);\\n\\t  -webkit-transform: translateX(100%);\\n}\\n\\n.slide-in {\\n    animation: slide-in 0.5s forwards;\\n    -webkit-animation: slide-in 0.5s forwards;\\n}\\n    \\n@keyframes slide-in {\\n    100% { transform: translateX(0%); }\\n}\\n\\n@-webkit-keyframes slide-in {\\n    100% { -webkit-transform: translateX(0%); }\\n}\\n\\n.header,.dock,.footer {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n}\\n\\n.dock {\\n\\tdisplay: grid;\\n\\tgrid-template-rows: repeat(5, 1fr);\\n\\tgap: 5px;\\n}\\n\\n.button {\\n    display: flex;\\n    border-radius: 10px;\\n\\tbackground-color: rgb(96, 94, 94);\\n\\tcolor: white;\\n\\tjustify-content: center;\\n\\tcursor: pointer;\\n\\tfont-size:x-large;\\n\\ttransition: all .2s ease-in-out;\\n\\twidth: 30%;\\n}\\n\\n.button:hover{\\n\\ttransform: scale(1.1); \\n}\\n\\n.input {\\n\\ttext-transform: uppercase;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/styles/images/alert-circle.svg":
/*!********************************************!*\
  !*** ./src/styles/images/alert-circle.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"alert-circle.svg\";\n\n//# sourceURL=webpack://battleship/./src/styles/images/alert-circle.svg?");

/***/ }),

/***/ "./src/styles/images/alpha-x.svg":
/*!***************************************!*\
  !*** ./src/styles/images/alpha-x.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"alpha-x.svg\";\n\n//# sourceURL=webpack://battleship/./src/styles/images/alpha-x.svg?");

/***/ }),

/***/ "./src/styles/images/check-circle.svg":
/*!********************************************!*\
  !*** ./src/styles/images/check-circle.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"check-circle.svg\";\n\n//# sourceURL=webpack://battleship/./src/styles/images/check-circle.svg?");

/***/ }),

/***/ "./src/styles/images/circle-medium-green.svg":
/*!***************************************************!*\
  !*** ./src/styles/images/circle-medium-green.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"circle-medium-green.svg\";\n\n//# sourceURL=webpack://battleship/./src/styles/images/circle-medium-green.svg?");

/***/ }),

/***/ "./src/styles/images/circle-medium.svg":
/*!*********************************************!*\
  !*** ./src/styles/images/circle-medium.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"circle-medium.svg\";\n\n//# sourceURL=webpack://battleship/./src/styles/images/circle-medium.svg?");

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
/******/ 			"bundle": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;