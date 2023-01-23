const { forEach } = require("neo-async");
const {Ship, Gameboard, Player} = require("./objects");

let domBoard = function(board) {
	let container = document.querySelector(".container");

	const player = container.appendChild(document.createElement("div"));
	player.setAttribute("id","player-board");
	player.setAttribute("class","board");
	playerBoard.forEach(entry => {
		let cell = player.appendChild(document.createElement("div"));
		cell.setAttribute("class","cell")
		cell.setAttribute("id",playerBoard[entry]);
	});

	const cpu = container.appendChild(document.createElement("div"));
	cpu.setAttribute("id","cpu-board");
	cpu.setAttribute("class","board");
	cpuBoard.forEach(entry => {
		let cell = cpu.appendChild(document.createElement("div"));
		cell.setAttribute("class","cell")
		cell.setAttribute("id",cpuBoard[entry]);
	});
};

module.exports = { domBoard };