class Ship {
	constructor(length) {
		this.length = length,
		this.hits = 0,
		this.sunk = false,

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
		const columns = ["A","B","C","D","E","F","G","H","I","J"];

		function letterPositions(firstNum, result =[]){
			if(result.length === vessel.length) return;
			result.push(firstLetter+firstNum);
			letterPositions(firstNum+1, result);
		}

		function numberPositions(letter, firstNum, result = []) {
			if(result.length === vessel.length) return;
			let correctLetter = columns[letter];
			result.push(correctLetter+=firstNum);
			numberPositions(letter+1,firstNum, result);
		}
		
		this.newBoard = function () {
			columns.forEach(column => {				
				for(let i=1; i<11; i++) {
					this.board.push(column+i);
				};
			});
		};

		this.placeShip = function (ship,xPos,yPos) {
			const vessel = new Ship(ship);
			let firstNum = xPos.slice(1,3);
			let secondNum = yPos.slice(1,3);
			let firstLetter = xPos.slice(0,1);
			let secondLetter = yPos.slice(0,1);

			if ((firstNum - secondNum) === -vessel.length + 1 || ((columns.indexOf(secondLetter)+1)-columns.indexOf(firstLetter)) === vessel.length) {
				if (firstLetter === secondLetter) {
					letterPositions(firstNum);
				}
				else if(firstNum === secondNum) {
					let letter = columns.indexOf(firstLetter);
					numberPositions(letter,firstNum);
				}
				else {
					console.log("Invalid position");
				}
			}
			else {
				console.log("The spaces you selected do not match your ship's size.")
			};
	}
}
}


module.exports = {Ship, Gameboard};