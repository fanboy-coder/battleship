//modal that starts the game
let startWindow = function (game) {
	let container = document.querySelector(".container");
	let background = container.appendChild(document.createElement("div"));
	background.setAttribute("id", "modal-bg-display");
	let slider = container.appendChild(document.createElement("div"));
	slider.setAttribute("class", "slider");
	slider.classList.add("slide-in");
	let header = slider.appendChild(document.createElement("div"));
	header.setAttribute("class", "header");
	let h1 = header.appendChild(document.createElement("h1"));
	h1.textContent = "Welcome to BATTLESHIP";
	let footer = slider.appendChild(document.createElement("div"));
	footer.setAttribute("class", "footer");
	let button = footer.appendChild(document.createElement("btn"));
	button.textContent = "New game";
	button.setAttribute("class", "button");
	button.setAttribute("id","new-game");
	button.addEventListener("click", () => {
		slider.style.cssText = "box-shadow: -3px 0px 10px 1px #aaaaaa";
		background.remove();
		h1.textContent = "Place your ships on the board";
		let cell = document.querySelectorAll(".player-cell");
		cell.forEach(cell => {
			cell.innerText = cell.id.slice(7, 10);
		})
		let dock = document.createElement("div");
		dock.setAttribute("class", "dock");
		slider.insertBefore(dock, footer);
		addShip();
		let ships = document.querySelectorAll(".coordinates");
		ships.forEach((ship) => {
			let field1 = ship.children[0];
			let field2 = ship.children[2];
			ship.addEventListener("change", () => {
				if ((field1.value.length == 2 || field1.value.length == 3) && (field2.value.length == 2 || field2.value.length == 3)) {
					const lettersRegex = /^[a-zA-Z]+$/;
					const numbersRegex = /^[0-9]+$/;
					const nextElement = ship.nextSibling;
					const vessel = ship.parentElement.id;
					const currentDockSize = game.player.dock.length;
					if (lettersRegex.test(field1.value[0]) && lettersRegex.test(field2.value[0])) {
						if (numbersRegex.test(field1.value[1]) && numbersRegex.test(field2.value[1])) {
							game.playerBoard.placeShip(game.player.dock, game[vessel], field1.value, field2.value, nextElement);
							if (game.player.dock.length > currentDockSize) {
								const validation = "valid";
								validate(nextElement,validation, game.player.dock);
							} else {
								const validation = "size";
								validate(nextElement,validation);
							};
						} else {
							let validation = "invalid";
							validate(nextElement, validation);
						};
					} else {
						let validation = "invalid";
						validate(nextElement, validation);
					};
				}
			})
		})
		button.textContent = "Start game";
		button.addEventListener("click", () => {
			cell.forEach(cell => {
				cell.innerText = "";
			});
			game.placeShipCpu();
			slider.remove();
		})
	})
}

//validates if a ship can be placed on the board or not
let validate = function (element, validation, dock) {

	if (element.querySelector("span") === null) {
		element.appendChild(document.createElement("span"));
		element.appendChild(document.createElement("p"));
	}

	const validity = element.querySelector("span");
	const p = element.querySelector("p");
	const target = element.previousElementSibling;
	const inputElements = target.querySelectorAll("input");

	if (validation == "invalid") {
		validity.classList.add("wrong");
		p.textContent = "Coordinates aren't valid";
	} else if (validation == "position") {
		validity.classList.add("wrong");
		p.textContent = "Invalid position"
	} else if (validation == "size") {
		validity.classList.add("wrong");
		p.textContent = "The spaces don't match the ship's size."
	} else if (validation == "valid") {
		validity.classList.add("right");
		validity.classList.remove("wrong");
		p.textContent = "";
		inputElements.forEach(input => {
			input.disabled = true;
		});
		let cells = document.querySelectorAll(".player-cell");
		cells.forEach(cell => {
			dock.forEach(element => {
				if (element.position.includes(cell.id.slice(7, 10))) {
					cell.classList.add("class", "ship");
				}
			})
		})
	}
};

//algorithm that creates a form entry for each ship
let addShip = function (i = 0) {
	let dock = document.querySelector(".dock");
	if (dock.childNodes.length == 6) return;
	let form = dock.appendChild(document.createElement("div"));
	form.setAttribute("class", "form");
	let box1 = form.appendChild(document.createElement("div"));
	box1.setAttribute("class", "box");
	let name = box1.appendChild(document.createElement("p"));
	name.setAttribute("class", "name");
	switch (i) {
		case 0:
			name.textContent = "Carrier (5 spaces)";
			form.setAttribute("id", "carrier");
			break;
		case 1:
			name.textContent = "Battleship (4 spaces)";
			form.setAttribute("id", "battleship");
			break;
		case 2:
			name.textContent = "Submarine 1 (3 spaces)";
			form.setAttribute("id", "submarine");
			break;
		case 3:
			name.textContent = "Submarine 2 (3 spaces)";
			form.setAttribute("id", "submarine2");
			break;
		case 4:
			name.textContent = "Destroyer 1 (2 spaces)";
			form.setAttribute("id", "destroyer");
			break;
		case 5:
			name.textContent = "Destroyer 2 (2 spaces)";
			form.setAttribute("id", "destroyer2");
			break;
	};
	let box2 = form.appendChild(document.createElement("div"));
	box2.setAttribute("class", "box");
	box2.classList.add("coordinates");
	let pos1 = box2.appendChild(document.createElement("input"));
	pos1.setAttribute("class", "input");
	pos1.setAttribute("type", "text");
	pos1.setAttribute("maxlength", "3");
	pos1.setAttribute("size", "1");
	pos1.setAttribute("id", "pos-" + i);
	let to = box2.appendChild(document.createElement("p"));
	to.textContent = " to ";
	let pos2 = box2.appendChild(document.createElement("input"));
	pos2.setAttribute("class", "input");
	pos2.setAttribute("type", "text");
	pos2.setAttribute("maxlength", "3");
	pos2.setAttribute("size", "1");
	pos2.setAttribute("id", "pos-" + i + 1);
	let box3 = form.appendChild(document.createElement("div"));
	box3.setAttribute("class", "box");
	box3.setAttribute("class", "validation");
	addShip(i + 1);
};

//generates a game over modal once the game ends
let gameoverWindow = function (player, cpu,game) {
	let winner = "";
	if (player.lost == true) {
		winner = "CPU";
	}
	else if (cpu.lost == true) {
		winner = "Player";
	}
	if (winner != "") {
		let container = document.querySelector(".container");
		let background = container.appendChild(document.createElement("div"));
		background.setAttribute("id", "modal-bg-display");
		let modal = background.appendChild(document.createElement("div"));
		modal.setAttribute("class", "modal");
		let h1 = modal.appendChild(document.createElement("h1"));
		h1.textContent = "GAME OVER! " + winner + " WON THE GAME!";
		let button = modal.appendChild(document.createElement("btn"));
		button.textContent = "NEW GAME";
		button.setAttribute("class", "button");
		button.addEventListener("click", () => {
			game.emptyObjects();
			game.createShips();
			let playarea = document.getElementById("play-area");
			playarea.remove();
			domBoard(game.playerBoard, game.cpuBoard, game.player, game.cpu,game);
			clear();
			modal.remove();
			background.remove();
			startWindow(game);
			autoClick();
		})
	}
};

//auto-clicks the new game button after restarting the game
let autoClick = function() {
	let button = document.getElementById("new-game");
	button.click();
}

//generates both player's boards
let domBoard = function (playerBoard, cpuBoard, player, cpu,game) {
	let container = document.querySelector(".container");
	let playarea = container.appendChild(document.createElement("div"));
	playarea.setAttribute("id", "play-area");

	const playerColumn = playarea.appendChild(document.createElement("div"));
	playerColumn.setAttribute("id", "player-column");
	const playerText = playerColumn.appendChild(document.createElement("h3"));
	playerText.setAttribute("id", "player-text");
	playerText.innerText = "Player's board";
	const playerArea = playerColumn.appendChild(document.createElement("div"));
	playerArea.setAttribute("id", "player-board");
	playerArea.setAttribute("class", "board");
	playerBoard.board.forEach(entry => {
		let cell = playerArea.appendChild(document.createElement("div"));
		cell.setAttribute("class", "player-cell")
		cell.setAttribute("id", "player-" + entry);
	});

	const cpuColumn = playarea.appendChild(document.createElement("div"));
	cpuColumn.setAttribute("id", "cpu-column");
	const cpuText = cpuColumn.appendChild(document.createElement("h3"));
	cpuText.setAttribute("id", "cpu-text");
	cpuText.innerText = "CPU's board";
	const cpuArea = cpuColumn.appendChild(document.createElement("div"));
	cpuArea.setAttribute("id", "cpu-board");
	cpuArea.setAttribute("class", "board");
	cpuBoard.board.forEach(entry => {
		let cell = cpuArea.appendChild(document.createElement("div"));
		cell.setAttribute("class", "cpu-cell")
		cell.setAttribute("id", "cpu-" + entry);
		cell.addEventListener("click", play);
		function play() {
			let coordinate = cell.id.slice(4, 7);
			cpuBoard.receiveAttack(cpu.dock, coordinate);
			cpu.randomPlay(player, playerBoard, cpu);
			hits(player, playerBoard, cpu, cpuBoard);
			cpu.gameOver();
			player.gameOver();
			game.checkGameOver();
			cell.removeEventListener("click", play);
		}
	});
};

//checks for a probable hit next to a hit on the board
let strategicStrike = function (player, playerBoard, cpu) {
	let hit = [];
	const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
	let playerCell = document.querySelectorAll(".player-cell");
	playerCell.forEach(cell => {
		if (cell.classList.contains("hit")) {
			hit.push(cell.id);
		};
	});

	let clearHit = [];

	hit.forEach(hit => {
		const right = "player-" + hit.slice(7, 8) + (Math.floor(hit.slice(8, 10)) + 1);
		const left = "player-" + hit.slice(7, 8) + (Math.floor(hit.slice(8, 10)) - 1);
		const up = "player-" + columns[columns.indexOf(hit.slice(7, 8)) - 1] + (Math.floor(hit.slice(8, 10)));
		const down = "player-" + columns[columns.indexOf(hit.slice(7, 8)) + 1] + (Math.floor(hit.slice(8, 10)));

		let checkConditions = function (side) {
			let conditions = !document.getElementById(side).classList.contains("hit") &&
				!document.getElementById(side).classList.contains("miss") &&
				!document.getElementById(side).classList.contains("sunk");
			if (conditions) {
				return true;
			};
		};

		const extraRightCondition = right.slice(8, 10) < 11;
		const extraLeftCondition = left.slice(8, 10) != 0;
		const extraUpCondition = up.slice(7, 16) != "undefined";
		const extraDownCondition = down.slice(7, 16) != "undefined";

		if (extraRightCondition && extraLeftCondition && extraUpCondition && extraDownCondition) {
			if (checkConditions(right)) {
				clearHit.push(right);
			} else if (checkConditions(left)) {
				clearHit.push(left);
			} else if (checkConditions(up)) {
				clearHit.push(up);
			} else if (checkConditions(down)) {
				clearHit.push(down);
			};
		} else if (!extraRightCondition) {
			if (!extraUpCondition) {
				if (checkConditions(left)) {
					clearHit.push(left);
				} else if (checkConditions(down)) {
					clearHit.push(down);
				};
			} else if (!extraDownCondition) {
				if (checkConditions(left)) {
					clearHit.push(left);
				} else if (checkConditions(up)) {
					clearHit.push(up);
				};
			} else {
				if (checkConditions(left)) {
					clearHit.push(left);
				} else if (checkConditions(up)) {
					clearHit.push(up);
				} else if (checkConditions(down)) {
					clearHit.push(down);
				};
			};
		} else if (!extraLeftCondition) {
			if (!extraUpCondition) {
				if (checkConditions(right)) {
					clearHit.push(right);
				} else if (checkConditions(down)) {
					clearHit.push(down);
				};
			} else if (!extraDownCondition) {
				if (checkConditions(right)) {
					clearHit.push(right);
				} else if (checkConditions(up)) {
					clearHit.push(up);
				};
			} else {
				if (checkConditions(right)) {
					clearHit.push(right);
				} else if (checkConditions(up)) {
					clearHit.push(up);
				} else if (checkConditions(down)) {
					clearHit.push(down);
				};
			};
		} else if (!extraUpCondition) {
			if (!extraRightCondition) {
				if (checkConditions(left)) {
					clearHit.push(left);
				} else if (checkConditions(down)) {
					clearHit.push(down);
				};
			} else if (!extraLeftCondition) {
				if (checkConditions(right)) {
					clearHit.push(right);
				} else if (checkConditions(down)) {
					clearHit.push(down);
				};
			} else {
				if (checkConditions(right)) {
					clearHit.push(right);
				} else if (checkConditions(left)) {
					clearHit.push(left);
				} else if (checkConditions(down)) {
					clearHit.push(down);
				};
			};
		} else if (!extraDownCondition) {
			if (!extraRightCondition) {
				if (checkConditions(left)) {
					clearHit.push(left);
				} else if (checkConditions(up)) {
					clearHit.push(up);
				};
			} else if (!extraLeftCondition) {
				if (checkConditions(right)) {
					clearHit.push(right);
				} else if (checkConditions(up)) {
					clearHit.push(up);
				};
			} else {
				if (checkConditions(right)) {
					clearHit.push(right);
				} else if (checkConditions(left)) {
					clearHit.push(left);
				} else if (checkConditions(up)) {
					clearHit.push(up);
				};
			};
		}
	});

	let attack = function () {
		playerBoard.receiveAttack(player.dock, clearHit[0].slice(7, 10));
		cpu.plays.push(clearHit[0].slice(7, 10));
	};
	attack();
};

//marks the hits and misses on each board
let hits = function (player, playerBoard, cpu, cpuBoard) {
	let cpuCell = document.querySelectorAll(".cpu-cell");
	let playerCell = document.querySelectorAll(".player-cell");

	cpuCell.forEach(cell => {
		if (cpuBoard.misses.includes(cell.id.slice(4, 7))) {
			cell.classList.add("miss");
		}
		if (cpuBoard.hits.includes(cell.id.slice(4, 7))) {
			cell.classList.add("hit");
		}
	});

	playerCell.forEach(cell => {
		if (playerBoard.misses.includes(cell.id.slice(7, 10))) {
			cell.classList.add("miss");
		}
		if (playerBoard.hits.includes(cell.id.slice(7, 10))) {
			cell.classList.add("hit");
		}
	});
	checkSunk(player);
	checkSunk(cpu);
};

//clears all graphic elements on the board
let clear = function () {
	let cpuCell = document.querySelectorAll(".cpu-cell");
	let playerCell = document.querySelectorAll(".player-cell");

	cpuCell.forEach(cell => {
		cell.classList.remove("hit");
		cell.classList.remove("miss");
		cell.classList.remove("sunk");
	})

	playerCell.forEach(cell => {
		cell.classList.remove("hit");
		cell.classList.remove("miss");
		cell.classList.remove("sunk");
		cell.classList.remove("ship");
	})
}

//marks sunk ships on the board
let checkSunk = function (current) {
	let cpuCells = document.querySelectorAll(".cpu-cell");
	let playerCells = document.querySelectorAll(".player-cell");

	for (let i = 0; i < current.dock.length; i++) {
		if (current.dock[i].sunk) {
			let cells = current.dock[i].position;
			if (current.name == "CPU") {
				cpuCells.forEach(cell => {
					if (cells.includes(cell.id.slice(4, 7))) {
						cell.classList.remove("hit");
						cell.classList.add("sunk");
					}
				})
			} else {
				playerCells.forEach(cell => {
					if (cells.includes(cell.id.slice(7, 10))) {
						cell.classList.remove("hit");
						cell.classList.add("sunk");
					}
				});
			}
		}
	}
}

export default { startWindow, domBoard, validate, hits, strategicStrike, gameoverWindow };