class Ship {
	constructor(name, length) {
		this.name = name,
			this.length = length,
			this.hits = 0,
			this.sunk = false,
			this.position = [],
			this.hit = function (num) {
				this.hits = this.hits + 1;
			};
		this.isSunk = function () {
			if (this.hits >= length) {
				this.sunk = true;
			};
		};
	};
};

class Gameboard {
	constructor() {
		this.board = [],
			this.misses = [],
			this.hits = [];
		const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

		this.newBoard = function () {
			columns.forEach(column => {
				for (let i = 1; i < 11; i++) {
					this.board.push(column + i);
				};
			});
		};

		this.placeShip = function (dock, ship, xPos, yPos) {
			let firstNum = xPos.slice(1, 3);
			let secondNum = yPos.slice(1, 3);
			let firstLetter = xPos.slice(0, 1);
			let secondLetter = yPos.slice(0, 1);

			let result = [];
			let board = this.board;

			function letterPositions(firstLetter, firstNum) {
				if (result.length === ship.length) return;
				result.push(firstLetter + firstNum);
				letterPositions(firstLetter, firstNum + 1);
			};

			function numberPositions(letter, firstNum) {
				if (result.length === ship.length) return;
				result.push(columns[letter] += firstNum);
				numberPositions(letter + 1, firstNum);
			};

			if (!dock.includes(ship.name)) {
				if ((firstNum - secondNum) === -ship.length + 1 || ((columns.indexOf(secondLetter) + 1) - columns.indexOf(firstLetter)) === ship.length) {
					if (firstLetter === secondLetter) {
						result.length = 0;
						letterPositions(firstLetter, Number(firstNum));
						ship.position = result;
						dock.push(ship);
					} else if (firstNum === secondNum) {
						let letter = columns.indexOf(firstLetter);
						result.length = 0;
						numberPositions(letter, firstNum);
						ship.position = result;
						dock.push(ship);
					} else {
						console.log("Invalid position.");
					}
				} else {
					console.log("The spaces you selected do not match your ship's size.")
				};
			} else {
				console.log("That ship was already placed on the board.");
			}
		};

		this.randomPlaceShip = function (cpu,ship) {
			let let1 = columns[Math.floor(Math.random() * columns.length)];
			let num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
			// let coord1 = let1 += num1;
			if (num1 < 5) {
				let num2 = (num1 + 5) - 1;
				let let2 = let1;
				let xPos = let1+=num1;
				let yPos = let2+=num2;
				console.log(xPos,yPos);
				cpu.dock.push(ship);
			} else {
				let num2 = num1;
				let pos = columns.indexOf(let1);
				if (pos < 5) {
					let let2 = columns[(pos+5)-1];
					let xPos = let1+=num1;
					let yPos = let2+=num2;
					console.log(xPos,yPos);
					cpu.dock.push(ship);
				} else {
					this.randomPlaceShip(cpu,ship);
				}
			}
		}

		this.receiveAttack = function (dock, coordinates) {
			let safe = [];
			for (let i = 0; i < dock.length; i++) {
				for (let ship of dock[i].position) {
					if (dock[i].position.includes(coordinates)) {
						dock[i].hit();
						dock[i].isSunk();
						this.hits.push(coordinates);
						break;
					}
					else {
						safe.push(coordinates);
						break;
					}
				}
			}
			if (safe = []) {
				this.misses.push(coordinates);
			}
		};
	};
};

class Player {
	constructor(name) {
		this.name = name,
			this.dock = [],
			this.plays = [],
			this.lost = false,

			this.randomPlay = function (player, playerBoard) {
				let play = playerBoard.board[Math.floor(Math.random() * playerBoard.board.length)];
				if (!this.plays.includes(play)) {
					playerBoard.receiveAttack(player.dock, play);
					this.plays.push(play);
				}
				else {
					this.randomPlay(player, playerBoard);
				};
			};

		this.gameOver = function () {
			if (this.dock.every(ship => ship.sunk == true)) {
				this.lost = true;
			};
		};
	};
};

module.exports = { Ship, Gameboard, Player };