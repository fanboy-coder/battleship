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
		
		this.newBoard = function () {
			const columns = ["A","B","C","D","E","F","G","H","I","J"];
			columns.forEach(column => {				
				for(let i=1; i<11; i++) {
					this.board.push(column+i);
				};
			});
		};
	}
}


module.exports = {Ship, Gameboard};