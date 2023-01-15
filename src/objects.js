let dock = [];

class Ship {
	constructor(length) {
		this.length = length,
			this.hits = 0,
			this.sunk = false,
			this.position = [],
			this.hit = function (num) {
				this.hits = this.hits + num;
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
		this.board = [];
		this.misses = [];
		const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

		this.newBoard = function () {
			columns.forEach(column => {
				for (let i = 1; i < 11; i++) {
					this.board.push(column + i);
				};
			});
		};

		this.placeShip = function (ship, xPos, yPos) {
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

			function removeSpaces() {
				result.forEach(entry => {
					let place = board.indexOf(entry);
					board.splice(place, 1);
				});
			};

			if ((firstNum - secondNum) === -ship.length + 1 || ((columns.indexOf(secondLetter) + 1) - columns.indexOf(firstLetter)) === ship.length) {
				if (firstLetter === secondLetter) {
					result.length = 0;
					letterPositions(firstLetter, Number(firstNum));
					ship.position = result;
					dock.push(ship);
					removeSpaces();
				} else if (firstNum === secondNum) {
					let letter = columns.indexOf(firstLetter);
					result.length = 0;
					numberPositions(letter, firstNum);
					ship.position = result;
					removeSpaces();
				} else {
					console.log("Invalid position");
				}
			} else {
				console.log("The spaces you selected do not match your ship's size.")
			};
		};

		this.receiveAttack = function (coordinates) {
			for (let i=0; i<dock.length; i++) {
				if(!dock[i].position.includes(coordinates)) {
					this.misses.push(coordinates);
					break;
				}
				else if (dock.find(test => test.position = coordinates)) {
						dock[i].hit(1);
						dock[i].isSunk();
				};
			};
		};
	};
};


module.exports = { Ship, Gameboard };