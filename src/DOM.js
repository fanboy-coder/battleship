const {Ship, Gameboard, Player} = require("./objects");

let domBoard = function(playerBoard,cpuBoard) {
	let container = document.querySelector(".container");
	let playarea = container.appendChild(document.createElement("div"));
	playarea.setAttribute("id", "play-area");

	const player = playarea.appendChild(document.createElement("div"));
	player.setAttribute("id","player-board");
	player.setAttribute("class","board");
	playerBoard.forEach(entry => {
		let cell = player.appendChild(document.createElement("div"));
		cell.setAttribute("class","cell")
		cell.setAttribute("id",entry);
	});

	const cpu = playarea.appendChild(document.createElement("div"));
	cpu.setAttribute("id","cpu-board");
	cpu.setAttribute("class","board");
	cpuBoard.forEach(entry => {
		let cell = cpu.appendChild(document.createElement("div"));
		cell.setAttribute("class","cell")
		cell.setAttribute("id",entry);
	});
};

module.exports = { domBoard };