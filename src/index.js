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
		this.carrier = new Ship("carrier", 5);
		this.battleship = new Ship("battleship", 4);
		this.submarine = new Ship("submarine", 3);
		this.submarine2 = new Ship("submarine 2", 3);
		this.destroyer = new Ship("destroyer", 2);
		this.destroyer2 = new Ship("destroyer 2", 2);
		this.cpucarrier = new Ship("carrier", 5);
		this.cpubattleship = new Ship("battleship", 4);
		this.cpusubmarine = new Ship("submarine", 3);
		this.cpusubmarine2 = new Ship("submarine 2", 3);
		this.cpudestroyer = new Ship("destroyer", 2);
		this.cpudestroyer2 = new Ship("destroyer 2", 2);
	};

	placeShipCpu () {
		this.cpuBoard.randomPlaceShip(this.cpu, this.cpucarrier);
		this.cpuBoard.randomPlaceShip(this.cpu, this.cpubattleship);
		this.cpuBoard.randomPlaceShip(this.cpu, this.cpusubmarine);
		this.cpuBoard.randomPlaceShip(this.cpu, this.cpusubmarine2);
		this.cpuBoard.randomPlaceShip(this.cpu, this.cpudestroyer);
		this.cpuBoard.randomPlaceShip(this.cpu, this.cpudestroyer2);
	};

	emptyObjects() {
		this.playerBoard = [];
		this.cpuBoard = [];
	};

	checkGameOver() {
		if (this.player.lost || this.cpu.lost) {
			this.gameover = true;
			gameoverWindow(this.player, this.cpu, this);
		};
	}
};

let game = new GameController();

// game.createObjects();
startWindow(game);
domBoard(game.playerBoard, game.cpuBoard, game.player, game.cpu, game);

// class GameController {
// 	constructor() {
// 		this.myObjects = [];
// 	};

// 	createObjects() {
// 		this.player = new Player("joel");
// 		this.myObjects.push(this.player);
// 		this.cpu = new Player("CPU");
// 		this.myObjects.push(this.cpu);
// 		this.playerBoard = new Gameboard();
// 		this.playerBoard.newBoard();
// 		this.myObjects.push(this.playerBoard);
// 		this.cpuBoard = new Gameboard();
// 		this.cpuBoard.newBoard();
// 		this.myObjects.push(this.cpuBoard);
// 		this.carrier = new Ship("carrier", 5);
// 		this.myObjects.push(this.carrier);
// 		this.battleship = new Ship("battleship", 4);
// 		this.myObjects.push(this.battleship);
// 		this.submarine = new Ship("submarine", 3);
// 		this.myObjects.push(this.submarine);
// 		this.submarine2 = new Ship("submarine 2", 3);
// 		this.myObjects.push(this.submarine2);
// 		this.destroyer = new Ship("destroyer", 2);
// 		this.myObjects.push(this.destroyer);
// 		this.destroyer2 = new Ship("destroyer 2", 2);
// 		this.myObjects.push(this.destroyer2);
// 		this.cpucarrier = new Ship("carrier", 5);
// 		this.myObjects.push(this.cpucarrier);
// 		this.cpubattleship = new Ship("battleship", 4);
// 		this.myObjects.push(this.cpubattleship);
// 		this.cpusubmarine = new Ship("submarine", 3);
// 		this.myObjects.push(this.cpusubmarine);
// 		this.cpusubmarine2 = new Ship("submarine 2", 3);
// 		this.myObjects.push(this.cpusubmarine2);
// 		this.cpudestroyer = new Ship("destroyer", 2);
// 		this.myObjects.push(this.cpudestroyer);
// 		this.cpudestroyer2 = new Ship("destroyer 2", 2);
// 		this.myObjects.push(this.cpudestroyer2);
// 	};

// 	placeShipCpu () {
// 		this.cpuBoard.randomPlaceShip(this.cpu, this.cpucarrier);
// 		this.cpuBoard.randomPlaceShip(this.cpu, this.cpubattleship);
// 		this.cpuBoard.randomPlaceShip(this.cpu, this.cpusubmarine);
// 		this.cpuBoard.randomPlaceShip(this.cpu, this.cpusubmarine2);
// 		this.cpuBoard.randomPlaceShip(this.cpu, this.cpudestroyer);
// 		this.cpuBoard.randomPlaceShip(this.cpu, this.cpudestroyer2);
// 	};

// 	deleteObjects() {
// 		this.myObjects = [];
// 	};

// 	checkGameOver() {
// 		if (this.player.lost || this.cpu.lost) {
// 			this.gameover = true;
// 			gameoverWindow(this.player, this.cpu, this);
// 		};
// 	}
// };

// let game;

// function resetGame() {
//   if (game) {
//     game.deleteObjects();
//   }

//   const gameName = `game_${Date.now()}`;
//   window[gameName] = new GameController();
//   window[gameName].createObjects();

//   game = window[gameName];
//   console.log(game)
// }

// resetGame();
// game.createObjects();
// startWindow(game);
// domBoard(game.playerBoard, game.cpuBoard, game.player, game.cpu, game);

export { GameController };