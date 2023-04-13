const {Ship, Gameboard, Player} = require("./objects");

//Creates a Carrier ship
test("Creates a Carrier ship", () => {
	let carrier = new Ship(5);
	expect(carrier).toMatchObject({"length":5, "hits":0, "sunk": false});
});

//Registers a hit
test("Checks if a boat was hit", () => {
	let board = new Gameboard();
	board.newBoard();
	let vessel = new Ship(5);
	let player1 = new Player("Player 1");
	board.placeShip(player1.dock, vessel, "A1", "A5");
	board.receiveAttack(player1.dock, "A1");
	expect(vessel).toMatchObject({"length":5, "hits":1, "sunk": false});
})

//Registers a missed hit
test("Checks if a missed hit is registered", () => {
	let board = new Gameboard();
	board.newBoard();
	let vessel = new Ship(5);
	let player1 = new Player("Player 1");
	board.placeShip(player1.dock, vessel, "A2", "A6");
	board.receiveAttack(player1.dock,"A1");
	expect(board.misses).toMatchObject(["A1"]);
});

//Checks if a ship sinks after taking more hits than necessary
test("Sinks a Carrier ship that has taken 5 hits", () => {
	let vessel = new Ship(5);
	let board = new Gameboard();
	board.newBoard();
	let player1 = new Player("Player 1");
	board.placeShip(player1.dock,vessel, "A1", "A5");
	board.receiveAttack(player1.dock,"A3");
	board.receiveAttack(player1.dock,"A2");
	board.receiveAttack(player1.dock,"A4");
	board.receiveAttack(player1.dock,"A5");
	board.receiveAttack(player1.dock,"A1");
	expect(vessel).toMatchObject({"length":5, "hits":5, "sunk": true});
});

//Creates a new gameboard
test("Creates a new gameboard", () => {
	let board = new Gameboard();
	board.newBoard();
	expect(board.board).toMatchObject([
		"A1","A2","A3","A4","A5","A6","A7","A8","A9","A10",
		"B1","B2","B3","B4","B5","B6","B7","B8","B9","B10",
		"C1","C2","C3","C4","C5","C6","C7","C8","C9","C10",
		"D1","D2","D3","D4","D5","D6","D7","D8","D9","D10",
		"E1","E2","E3","E4","E5","E6","E7","E8","E9","E10",
		"F1","F2","F3","F4","F5","F6","F7","F8","F9","F10",
		"G1","G2","G3","G4","G5","G6","G7","G8","G9","G10",
		"H1","H2","H3","H4","H5","H6","H7","H8","H9","H10",
		"I1","I2","I3","I4","I5","I6","I7","I8","I9","I10",
		"J1","J2","J3","J4","J5","J6","J7","J8","J9","J10"
	]);
});

// Checks if a ship can be placed horizontally
test("Checks if an horizontal position is valid", () => {
	let board = new Gameboard();
	board.newBoard();
	let vessel = new Ship(5);
	let player1 = new Player("Player 1");
	board.placeShip(player1.dock,vessel, "B2", "F2");
	expect(board.board).toMatchObject([
		"A1","A2","A3","A4","A5","A6","A7","A8","A9","A10",
		"B1","B3","B4","B5","B6","B7","B8","B9","B10",
		"C1","C3","C4","C5","C6","C7","C8","C9","C10",
		"D1","D3","D4","D5","D6","D7","D8","D9","D10",
		"E1","E3","E4","E5","E6","E7","E8","E9","E10",
		"F1","F3","F4","F5","F6","F7","F8","F9","F10",
		"G1","G2","G3","G4","G5","G6","G7","G8","G9","G10",
		"H1","H2","H3","H4","H5","H6","H7","H8","H9","H10",
		"I1","I2","I3","I4","I5","I6","I7","I8","I9","I10",
		"J1","J2","J3","J4","J5","J6","J7","J8","J9","J10"
	]);
});

// Checks if a ship can be placed vertically
test("Checks if a vertical position is valid", () => {
	let board = new Gameboard();
	board.newBoard();
	let vessel = new Ship(5);
	let player1 = new Player("Player 1");
	board.placeShip(player1.dock,vessel, "A2", "A6");
	expect(board.board).toMatchObject([
		"A1","A7","A8","A9","A10",
		"B1","B2","B3","B4","B5","B6","B7","B8","B9","B10",
		"C1","C2","C3","C4","C5","C6","C7","C8","C9","C10",
		"D1","D2","D3","D4","D5","D6","D7","D8","D9","D10",
		"E1","E2","E3","E4","E5","E6","E7","E8","E9","E10",
		"F1","F2","F3","F4","F5","F6","F7","F8","F9","F10",
		"G1","G2","G3","G4","G5","G6","G7","G8","G9","G10",
		"H1","H2","H3","H4","H5","H6","H7","H8","H9","H10",
		"I1","I2","I3","I4","I5","I6","I7","I8","I9","I10",
		"J1","J2","J3","J4","J5","J6","J7","J8","J9","J10"
	]);
});

//Checks the ship's positions after placing it on the board
test("Check the ship's position after placing on the board", () => {
	let board = new Gameboard();
	board.newBoard();
	let vessel = new Ship(2);
	let player1 = new Player("Player 1");
	board.placeShip(player1.dock,vessel, "I6", "J6");
	expect(vessel.position).toMatchObject(["I6","J6"]);
});

//Registers multiple missed hits
test("Checks if multiple missed hits are registered", () => {
	let board = new Gameboard();
	board.newBoard();
	let vessel = new Ship(5);
	let player1 = new Player("Player 1");
	board.placeShip(player1.dock,vessel, "A2", "A6");
	board.receiveAttack(player1.dock, "A1");
	let vessel2 = new Ship(3);
	board.placeShip(player1.dock,vessel2, "B3", "B5");
	board.receiveAttack(player1.dock,"E1");
	expect(board.misses).toMatchObject(["A1","E1"]);
});

//Logs a Game Over message if the game ends
test("Logs a Game Over message if all ships are sunk", () => {
	let board = new Gameboard();
	board.newBoard();
	let vessel = new Ship(3);
	let player1 = new Player("Player 1");
	board.placeShip(player1.dock, vessel, "A1", "A3");
	board.receiveAttack(player1.dock,"A1");
	board.receiveAttack(player1.dock,"A2");
	board.receiveAttack(player1.dock,"A3");
	const logSpy = jest.spyOn(global.console, 'log');
	board.gameOver(player1);
	expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("Game Over");
    logSpy.mockRestore();
});
