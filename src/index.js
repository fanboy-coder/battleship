const { Ship, Gameboard, Player } = require("./objects");
// const { domBoard } = require("./DOM");

let cpu = new Player("CPU");
let cpuboard = new Gameboard();
let cpucarrier = new Ship(5);
let cpubattleship = new Ship(4);
let cpusubmarine1 = new Ship(3);
let cpusubmarine2 = new Ship(3);
let cpudestroyer1 = new Ship(2);
let cpudestroyer2 = new Ship(2);
let cpudestroyer3 = new Ship(2);
cpuboard.newBoard();
cpuboard.placeShip(cpu.dock, cpucarrier, "A1", "A5");
cpuboard.placeShip(cpu.dock, cpubattleship, "J1", "J4");
cpuboard.placeShip(cpu.dock, cpusubmarine1, "B2", "D2");
cpuboard.placeShip(cpu.dock, cpusubmarine2, "H1", "H3");
cpuboard.placeShip(cpu.dock, cpudestroyer1, "C9", "C10");
cpuboard.placeShip(cpu.dock, cpudestroyer2, "E3", "E4");
cpuboard.placeShip(cpu.dock, cpudestroyer3, "I3", "J3");

let player = new Player("Joel");
let playerboard = new Gameboard();
let playercarrier = new Ship(5);
let playerbattleship = new Ship(4);
let playersubmarine1 = new Ship(3);
let playersubmarine2 = new Ship(3);
let playerdestroyer1 = new Ship(2);
let playerdestroyer2 = new Ship(2);
let playerdestroyer3 = new Ship(2);
playerboard.newBoard();
playerboard.placeShip(player.dock, playercarrier, "F1", "F5");
playerboard.placeShip(player.dock, playerbattleship, "J1", "J4");
playerboard.placeShip(player.dock, playersubmarine1, "B2", "D2");
playerboard.placeShip(player.dock, playersubmarine2, "H1", "H3");
playerboard.placeShip(player.dock, playerdestroyer1, "C9", "C10");
playerboard.placeShip(player.dock, playerdestroyer2, "E3", "E4");
playerboard.placeShip(player.dock, playerdestroyer3, "I3", "J3");

// domBoard();

module.exports = { newGame };