const { Ship, Gameboard, Player } = require("./objects");
const { domBoard } = require("./DOM");
require("./styles/style.css");


class GameController {
	constructor() {
		this.player = new Player("joel");
		this.cpu = new Player("CPU");
		this.playerBoard = new Gameboard();
		this.playerBoard.newBoard();
		this.cpuBoard = new Gameboard();
		this.cpuBoard.newBoard();
		domBoard(this.playerBoard.board,this.cpuBoard.board);
		this.carrier = new Ship(5);
		this.battleship = new Ship(4);
		this.submarine = new Ship(3);
		this.destroyer = new Ship(2);
		this.placeShipPlayer = function () {
			this.playerBoard.placeShip(this.player.dock, this.carrier, "F1", "F5");
			this.playerBoard.placeShip(this.player.dock, this.battleship, "J1", "J4");
			this.playerBoard.placeShip(this.player.dock, this.submarine, "B2", "D2");
			this.playerBoard.placeShip(this.player.dock, this.submarine, "H1", "H3");
			this.playerBoard.placeShip(this.player.dock, this.destroyer, "C9", "C10");
			this.playerBoard.placeShip(this.player.dock, this.destroyer, "E3", "E4");
			this.playerBoard.placeShip(this.player.dock, this.destroyer, "I3", "J3");
		};
		this.placeShipPlayer();
		this.placeShipCpu = function () {
			this.cpuBoard.placeShip(this.cpu.dock, this.carrier, "F1", "F5");
			this.cpuBoard.placeShip(this.cpu.dock, this.battleship, "J1", "J4");
			this.cpuBoard.placeShip(this.cpu.dock, this.submarine, "B2", "D2");
			this.cpuBoard.placeShip(this.cpu.dock, this.submarine, "H1", "H3");
			this.cpuBoard.placeShip(this.cpu.dock, this.destroyer, "C9", "C10");
			this.cpuBoard.placeShip(this.cpu.dock, this.destroyer, "E3", "E4");
			this.cpuBoard.placeShip(this.cpu.dock, this.destroyer, "I3", "J3");
		};
		this.placeShipCpu();
	}
};

const game = new GameController();

module.exports = { GameController };