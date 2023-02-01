const { Ship, Gameboard, Player } = require("./objects");
const { startWindow, domBoard, hits } = require("./DOM");
require("./styles/style.css");

class GameController {
	constructor() {
		this.player = new Player("joel");
		this.cpu = new Player("CPU");
		this.playerBoard = new Gameboard();
		this.playerBoard.newBoard();
		this.cpuBoard = new Gameboard();
		this.cpuBoard.newBoard();
		this.carrier = new Ship("carrier",5);
		this.battleship = new Ship("battleship",4);
		this.submarine = new Ship("submarine",3);
		this.submarine2 = new Ship("submarine 2",3);
		this.destroyer = new Ship("destroyer",2);
		this.destroyer2 = new Ship("destroyer 2",2);
		this.destroyer3 = new Ship("destroyer 3",2);
		this.cpucarrier = new Ship("carrier",5);
		this.cpubattleship = new Ship("battleship",4);
		this.cpusubmarine = new Ship("submarine",3);
		this.cpusubmarine2 = new Ship("submarine 2",3);
		this.cpudestroyer = new Ship("destroyer",2);
		this.cpudestroyer2 = new Ship("destroyer 2",2);
		this.cpudestroyer3 = new Ship("destroyer 3",2);
		this.placeShipPlayer = function () {
			this.playerBoard.placeShip(this.player.dock, this.carrier, "F1", "F5");
			this.playerBoard.placeShip(this.player.dock, this.battleship, "J1", "J4");
			this.playerBoard.placeShip(this.player.dock, this.submarine, "B2", "D2");
			this.playerBoard.placeShip(this.player.dock, this.submarine2, "H1", "H3");
			this.playerBoard.placeShip(this.player.dock, this.destroyer, "C9", "C10");
			this.playerBoard.placeShip(this.player.dock, this.destroyer2, "E3", "E4");
			this.playerBoard.placeShip(this.player.dock, this.destroyer3, "I6", "J6");
		};
		this.placeShipCpu = function () {
			this.cpuBoard.placeShip(this.cpu.dock, this.cpucarrier, "F1", "F5");
			this.cpuBoard.placeShip(this.cpu.dock, this.cpubattleship, "J1", "J4");
			this.cpuBoard.placeShip(this.cpu.dock, this.cpusubmarine, "B2", "D2");
			this.cpuBoard.placeShip(this.cpu.dock, this.cpusubmarine2, "H1", "H3");
			this.cpuBoard.placeShip(this.cpu.dock, this.cpudestroyer, "C9", "C10");
			this.cpuBoard.placeShip(this.cpu.dock, this.cpudestroyer2, "E3", "E4");
			this.cpuBoard.placeShip(this.cpu.dock, this.cpudestroyer3, "I6", "J6");
		};
	}
};

const game = new GameController();
startWindow(game);
domBoard(game.playerBoard, game.cpuBoard, game.player, game.cpu);


module.exports = { GameController };