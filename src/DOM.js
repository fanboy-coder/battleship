const { Ship, Gameboard, Player } = require("./objects");
const { GameController } = require("./index")

let startWindow = function (game) {
	let container = document.querySelector(".container");
	let background = container.appendChild(document.createElement("div"));
	background.setAttribute("id", "modal-bg-display");
	let modal = background.appendChild(document.createElement("div"));
	modal.setAttribute("class", "modal");
	let h1 = modal.appendChild(document.createElement("h1"));
	h1.textContent = "WELCOME TO BATTLESHIP";
	let button = modal.appendChild(document.createElement("btn"));
	button.textContent = "NEW GAME";
	button.setAttribute("class", "button");
	button.addEventListener("click", () => {
		game.placeShipPlayer();
		game.placeShipCpu();
		background.remove();
	})
}

//generates a game over modal once the game ends
let gameoverWindow = function (player, cpu) {
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
			const game = new GameController();
			game.placeShipPlayer();
			game.placeShipCpu();
			hits(game.playerBoard, game.cpuBoard);
			background.remove();
			console.log(game);
		})
	}
};

//generates both player's boards
let domBoard = function (playerBoard, cpuBoard, player, cpu) {
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
			gameoverWindow(player, cpu);
			cell.removeEventListener("click", play);
		}
	});
};

let strategicStrike = function (player, playerBoard, cpu) {
	let hit = [];
	const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
	let playerCell = document.querySelectorAll(".player-cell");
	playerCell.forEach(cell => {
		if (cell.classList.contains("hit")) {
			hit.push(cell.id);
		};
	});

	for (let i = 0; i < hit.length; i++) {
		const right = "player-" + hit[i].slice(7, 8) + (Math.floor(hit[i].slice(8, 10)) + 1);
		const left = "player-" + hit[i].slice(7, 8) + (Math.floor(hit[i].slice(8, 10)) - 1);
		const up = "player-" + columns[columns.indexOf(hit[i].slice(7, 8)) - 1] + (Math.floor(hit[i].slice(8, 10)));
		const down = "player-" + columns[columns.indexOf(hit[i].slice(7, 8)) + 1] + (Math.floor(hit[i].slice(8, 10)));

		let checkConditions = function (side) {
			let conditions = !document.getElementById(side).classList.contains("hit") &&
				!document.getElementById(side).classList.contains("miss") &&
				!document.getElementById(side).classList.contains("sunk");
			if (conditions) {
				return true;
			};
		};

		let checkTarget = function (i) {
			if (right.slice(8, 10) < 11) {
				if (checkConditions(right)) {
					playerBoard.receiveAttack(player.dock, right.slice(7, 10));
					cpu.plays.push(right.slice(7, 10));
				} else {
					if (left.slice(8, 10) != 0) {
						if (checkConditions(left)) {
							playerBoard.receiveAttack(player.dock, left.slice(7, 10));
							cpu.plays.push(left.slice(7, 10));
						} else {
							if (up.slice(7, 16) != "undefined") {
								if (checkConditions(up)) {
									playerBoard.receiveAttack(player.dock, up.slice(7, 10));
									cpu.plays.push(up.slice(7, 10));
								} else {
									if (down.slice(7, 16) != "undefined") {
										playerBoard.receiveAttack(player.dock, down.slice(7, 10));
										cpu.plays.push(down.slice(7, 10));
									} else {
										hit.shift();
										checkTarget(i);
									}
								}
							}
						}
					}
				}
			};
		}
		checkTarget();
		break;
	}
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

module.exports = { startWindow, domBoard, hits, strategicStrike };