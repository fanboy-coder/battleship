const {Ship, Gameboard, Player} = require("./objects");

let domBoard = function(board) {
	let container = document.getElementsByClassName("container");

	const playerBoard = container.appendChild(document.createElement("div"));
	playerBoard.setAttribute("id","player-board");
	playerBoard.setAttribute("class","board")

	const cpuBoard = container.appendChild(document.createElement("div"));
	cpuBoard.setAttribute("id","cpu-board");
	cpuBoard.setAttribute("class","board")

}

module.exports = { domBoard };