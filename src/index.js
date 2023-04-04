const { Ship, Gameboard, Player } = require("./objects");
const { startWindow, domBoard } = require("./DOM").default;
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
		this.cpucarrier = new Ship("carrier",5);
		this.cpubattleship = new Ship("battleship",4);
		this.cpusubmarine = new Ship("submarine",3);
		this.cpusubmarine2 = new Ship("submarine 2",3);
		this.cpudestroyer = new Ship("destroyer",2);
		this.cpudestroyer2 = new Ship("destroyer 2",2);
		this.placeShipCpu = function () {
			this.cpuBoard.randomPlaceShip(this.cpu,this.cpucarrier);
			this.cpuBoard.randomPlaceShip(this.cpu,this.cpubattleship);
			this.cpuBoard.randomPlaceShip(this.cpu,this.cpusubmarine);
			this.cpuBoard.randomPlaceShip(this.cpu,this.cpusubmarine2);
			this.cpuBoard.randomPlaceShip(this.cpu,this.cpudestroyer);
			this.cpuBoard.randomPlaceShip(this.cpu,this.cpudestroyer2);
		};
	};
};

const game = new GameController();
startWindow(game);
domBoard(game.playerBoard, game.cpuBoard, game.player, game.cpu);


// module.exports = { GameController };
export { GameController };