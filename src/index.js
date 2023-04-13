const { Ship, Gameboard, Player } = require("./objects");
const { startWindow, gameoverWindow, domBoard } = require("./DOM").default;
require("./styles/style.css");

class GameController {
	constructor() {
		this.player = new Player("joel");
		this.cpu = new Player("CPU");
		this.playerBoard = new Gameboard();
		this.playerBoard.newBoard();
		this.cpuBoard = new Gameboard();
		this.cpuBoard.newBoard();
		this.ships = [];
	};

	createShips () {
		this.carrier = new Ship("carrier", 5);
		this.ships.push(this.carrier);
		this.battleship = new Ship("battleship", 4);
		this.ships.push(this.battleship);
		this.submarine = new Ship("submarine", 3);
		this.ships.push(this.submarine);
		this.submarine2 = new Ship("submarine 2", 3);
		this.ships.push(this.submarine2);
		this.destroyer = new Ship("destroyer", 2);
		this.ships.push(this.destroyer);
		this.destroyer2 = new Ship("destroyer 2", 2);
		this.ships.push(this.destroyer2);
		this.cpucarrier = new Ship("carrier", 5);
		this.ships.push(this.cpucarrier);
		this.cpubattleship = new Ship("battleship", 4);
		this.ships.push(this.cpubattleship);
		this.cpusubmarine = new Ship("submarine", 3);
		this.ships.push(this.cpusubmarine);
		this.cpusubmarine2 = new Ship("submarine 2", 3);
		this.ships.push(this.cpusubmarine2);
		this.cpudestroyer = new Ship("destroyer", 2);
		this.ships.push(this.cpudestroyer);
		this.cpudestroyer2 = new Ship("destroyer 2", 2);
		this.ships.push(this.cpudestroyer2);
	}

	placeShipCpu () {
		this.cpuBoard.randomPlaceShip(this.cpu, this.cpucarrier);
		this.cpuBoard.randomPlaceShip(this.cpu, this.cpubattleship);
		this.cpuBoard.randomPlaceShip(this.cpu, this.cpusubmarine);
		this.cpuBoard.randomPlaceShip(this.cpu, this.cpusubmarine2);
		this.cpuBoard.randomPlaceShip(this.cpu, this.cpudestroyer);
		this.cpuBoard.randomPlaceShip(this.cpu, this.cpudestroyer2);
	};

	emptyObjects() {
		this.ships = [];
		this.player.dock = [];
		this.player.plays = [];
		this.player.lost = false;
		this.playerBoard.hits = [];
		this.playerBoard.misses = [];
		this.playerBoard.lost = false;
		this.cpu.dock = [];
		this.cpu.plays = [];
		this.cpu.lost = false;
		this.cpuBoard.hits = [];
		this.cpuBoard.misses = [];
		this.cpuBoard.lost = false;
	};

	checkGameOver() {
		if (this.player.lost || this.cpu.lost) {
			this.gameover = true;
			gameoverWindow(this.player, this.cpu, this);
		};
	}
};

let game = new GameController();
game.createShips();
startWindow(game);
domBoard(game.playerBoard, game.cpuBoard, game.player, game.cpu, game);

export { GameController };