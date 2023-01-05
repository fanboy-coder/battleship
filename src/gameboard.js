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

module.exports = Gameboard;