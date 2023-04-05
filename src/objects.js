const { validate, strategicStrike } = require("./DOM").default;

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

		this.placeShip = function (dock, ship, xPos, yPos, nextElement) {
			let firstNum = xPos.slice(1, 3);
			let secondNum = yPos.slice(1, 3);
			let firstLetter = xPos.toUpperCase().slice(0, 1);
			let secondLetter = yPos.toUpperCase().slice(0, 1);

			let result = [];

			function letterPositions(firstLetter, firstNum) {
				if (result.length === ship.length) return;
				result.push(firstLetter + firstNum);
				letterPositions(firstLetter, firstNum + 1);
			};

			function numberPositions(letter, firstNum) {
				if (result.length === ship.length) return;
				result.push(columns[letter] + firstNum);
				numberPositions(letter + 1, firstNum);
			};

			function checkMatch(dock,ship) {
				const isMatch = (dock, result) => {
					for (let i = 0; i < dock.length; i++) {
					const boat = dock[i];
					  for (let j = 0; j < result.length; j++) {
						const value = result[j];
						if (boat.position.includes(value)) {
						  return true;
						}
					  }
					}
					return false;
				  };

				if (!isMatch(dock,result)) {
					dock.push(ship);
				};
			};

			if (!dock.includes(ship.name)) {
				if ((firstNum - secondNum) === -ship.length + 1 || ((columns.indexOf(secondLetter) + 1) - columns.indexOf(firstLetter)) === ship.length) {
					if (firstLetter === secondLetter) {
						result.length = 0;
						letterPositions(firstLetter, Number(firstNum));
						ship.position = result;
						if (dock.length > 0) {
							checkMatch(dock,ship);
						} else {
							dock.push(ship);
						}
					} else if (firstNum === secondNum) {
						const letter = columns.indexOf(firstLetter);
						result.length = 0;
						numberPositions(letter, firstNum);
						ship.position = result;
						if (dock.length > 0) {
								checkMatch(dock,ship);	
						} else {
							dock.push(ship);
						}
					};
				};
			};
		};

		this.randomPlaceShip = function (cpu, ship) {
			const letter1 = columns[Math.floor(Math.random() * columns.length)];
			const num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
			if (num1 <= ship.length + 1) {
				const num2 = (num1 + ship.length) - 1;
				const xPos = letter1 + num1;
				const yPos = letter1 + num2;
				this.placeShip(cpu.dock, ship, xPos, yPos);
			} else {
				const pos = columns.indexOf(letter1);
				if (pos <= ship.length + 1) {
					const letter2 = columns[(pos + ship.length) - 1];
					const xPos = letter1 + num1;
					const yPos = letter2 + num1;
					this.placeShip(cpu.dock, ship, xPos, yPos);
				} else {
					const letter2 = columns[(pos - ship.length) + 1];
					const xPos = letter2 + num1;
					const yPos = letter1 + num1;
					this.placeShip(cpu.dock, ship, xPos, yPos);
				};
			};
		};

		this.receiveAttack = function (dock, coordinates) {
			for (let i = 0; i < dock.length; i++) {
				if (dock[i].position.includes(coordinates)) {
						safe = [];
						dock[i].hit();
						dock[i].isSunk();
						this.hits.push(coordinates);
				}
			}
			if (this.hits.slice(-1) != coordinates) {
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

			this.randomPlay = function (player, playerBoard,cpu) {

				let checkForTarget = function(player) {
					for(let i =0; i<player.dock.length;i++) {
						if (player.dock[i].hits > 0 && player.dock[i].sunk == false) {
							return true;
						};
					}
				}

				if (checkForTarget(player)) {
					strategicStrike(player,playerBoard,cpu);
				} else {
					let play = playerBoard.board[Math.floor(Math.random() * playerBoard.board.length)];
					if (!this.plays.includes(play)) {
						playerBoard.receiveAttack(player.dock, play);
						this.plays.push(play);
					}
					else {
						this.randomPlay(player, playerBoard);
					};
				}
			};

		this.gameOver = function () {
			if (this.dock.every(ship => ship.sunk == true)) {
				this.lost = true;
			};
		};
	};
};

module.exports = { Ship, Gameboard, Player };