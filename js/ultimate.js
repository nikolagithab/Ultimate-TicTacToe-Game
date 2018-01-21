/* There is a total of 9 scripts, each for every board.
The only difference between them is the suffix in the
names of variables and methods. Each specific suffix
indicates the number of game board. Internal comments
from Script#1 apply to all the other scripts.*/

//Globar vars for each board winner.
var winner1;
var winner2;
var winner3;
var winner4;
var winner5;
var winner6;
var winner7;
var winner8;
var winner9;

//updates status messages for external and internal grids messages.
function resetGame() {  
	for (var i = 1; i <= 9; i++) { 
	clearAllBoxes(i);}
	ultimateWinner = null; 
	document.getElementById("message").innerText = "New Game!";
	
	document.getElementById("msg1").innerText = "Press to Start #1";
	document.getElementById("msg2").innerText = "Press to Start #2";
	document.getElementById("msg3").innerText = "Press to Start #3";
	document.getElementById("msg4").innerText = "Press to Start #4";
	document.getElementById("msg5").innerText = "Press to Start #5";
	document.getElementById("msg6").innerText = "Press to Start #6";
	document.getElementById("msg7").innerText = "Press to Start #7";
	document.getElementById("msg8").innerText = "Press to Start #8";
	document.getElementById("msg9").innerText = "Press to Start #9";
}

//empties the content of all cells.
function clearAllBoxes(number) {
	for (var i = 1; i<=9; i++)
	document.getElementById("s" + i + number).innerText = "";
}

//determines ultimate winner and provides status update message. 
function checkForUltimateWinner(ultimateWinner) {  
	var finalResult1 = checkUltimateLine(winner1, winner2, winner3);
	var finalResult2 = checkUltimateLine(winner4, winner5, winner6);
	var finalResult3 = checkUltimateLine(winner7, winner8, winner9);
	var finalResult4 = checkUltimateLine(winner1, winner4, winner7);
	var finalResult5 = checkUltimateLine(winner2, winner5, winner8);
	var finalResult6 = checkUltimateLine(winner3, winner6, winner9);
	var finalResult7 = checkUltimateLine(winner1, winner5, winner9);
	var finalResult8 = checkUltimateLine(winner3, winner5, winner7);
	if(finalResult1 != null)	{
		document.getElementById("message").innerText = finalResult1 + 
		" is the Ultimate Winner !";
	}
	if(finalResult2 != null)	{
		document.getElementById("message").innerText = finalResult2 + 
		" is the Ultimate Winner !";
	}
	if(finalResult3 != null)	{
		document.getElementById("message").innerText = finalResult3 + 
		" is the Ultimate Winner !";
	}
	if(finalResult4 != null)	{
		document.getElementById("message").innerText = finalResult4 + 
		" is the Ultimate Winner !";
	}
	if(finalResult5 != null)	{
		document.getElementById("message").innerText = finalResult5 + 
		" is the Ultimate Winner !";
	}
	if(finalResult6 != null)	{
		document.getElementById("message").innerText = finalResult6 + 
		" is the Ultimate Winner !";
	}
	if(finalResult7 != null)	{
		document.getElementById("message").innerText = finalResult7 + 
		" is the Ultimate Winner !";
	}
	if(finalResult8 != null)	{
		document.getElementById("message").innerText = finalResult8 + 
		" is the Ultimate Winner !";
	}
}

//evaluates if any three board winner values are equal.
function checkUltimateLine(winnerA, winnerB, winnerC) {  
	var result = null;  
	if (winnerA == winnerB && winnerB == winnerC) { 
		result = winnerA;
	}
	return result;
}

//======================================================

//performs initial board setup, local vars & random initialization.
function startGame1() {  
	for (var i = 1; i <= 9; i++) { 
	clearBox1(i);}
	turn1 = "X";
	if (Math.random() < 0.5) { 
	turn1 = "O";}
	winner1 = null; 
	setMessage1(turn1 + " starts first.");
}

//clears cell content.
function clearBox1(number) {
	for (var i = 1; i<=9; i++)
	document.getElementById("s1" + number).innerText = "";
}

//provides board status update messages.
function setMessage1(msg) {  
	document.getElementById("msg1").innerText = msg;
}

//evaluates board status and cell state.
function nextMove1(cell) {
	if (winner1 != null) {  
		setMessage1(winner1 + " is a winner!");}
	else if (cell.innerText == "") {  
		cell.innerText = turn1;  
		switchTurn1();}
	else { 
		setMessage1("That Square is Already Used.");}
}

//provides board winner message or switches players turn.
function switchTurn1() {
	if (checkForWinner1(turn1)) {  
		setMessage1("Congratulations, " + turn1 + "  !!");
		winner1 = turn1;
		checkForUltimateWinner("temp");} 
	else if (turn1 == "X") {  
		turn1 = "O";
		setMessage1("It's " + turn1 + "'s turn!");}
	else {
		turn1 = "X";
		setMessage1("It's " + turn1 + "'s turn!");}
}

//evaluates particular cells for one out of 8 winning combinations.
function checkForWinner1(move) {  
	var result = false;  
	if (checkLine1(1, 2, 3, move) ||  
		checkLine1(4, 5, 6, move) ||
		checkLine1(7, 8, 9, move) || 
		checkLine1(1, 4, 7, move) ||
		checkLine1(2, 5, 8, move) ||
		checkLine1(3, 6, 9, move) ||
		checkLine1(1, 5, 9, move) ||
		checkLine1(3, 5, 7, move)) {
		
		result = true;
	}
	return result;
}

//evaluates if any three cells have sane content.
function checkLine1(a, b, c, move) {  
	var result = false;  
	if (getBox1(a) == move && 
		getBox1(b) == move && 
		getBox1(c) == move) { 
		result = true;
	}
	return result;
}

//assigns content to a specific cell.
function getBox1(number) {
	for (var i = 1; i<=9; i++)
	return document.getElementById("s1" + number).innerText;
}

//===============================================SCRIPT-BOARD#1^^^

function startGame2() {  
	for (var i = 1; i <= 9; i++) { 
	clearBox2(i);}
	turn2 = "X";
	if (Math.random() < 0.5) { 
	turn2 = "O";}
	winner2 = null; 
	setMessage2(turn2 + " starts first.");
}

function clearBox2(number) {
	for (var i = 1; i<=9; i++)
	document.getElementById("s2" + number).innerText = "";
}

function setMessage2(msg) {  
	document.getElementById("msg2").innerText = msg;
}

function nextMove2(cell) {
	if (winner2 != null) {  
		setMessage2(winner2 + " is a winner!");}
	else if (cell.innerText == "") {  
		cell.innerText = turn2;  
		switchTurn2();}
	else { 
		setMessage2("That Square is Already Used.");}
}

function switchTurn2() {
	if (checkForWinner2(turn2)) {  
		setMessage2("Congratulations, " + turn2 + "  !!");
		winner2 = turn2;
		checkForUltimateWinner("temp");} 
	else if (turn2 == "X") {  
		turn2 = "O";
		setMessage2("It's " + turn2 + "'s turn!");}
	else {
		turn2 = "X";
		setMessage2("It's " + turn2 + "'s turn!");}
}

function checkForWinner2(move) {  
	var result = false;  
	if (checkLine2(1, 2, 3, move) ||  
		checkLine2(4, 5, 6, move) ||
		checkLine2(7, 8, 9, move) || 
		checkLine2(1, 4, 7, move) ||
		checkLine2(2, 5, 8, move) ||
		checkLine2(3, 6, 9, move) ||
		checkLine2(1, 5, 9, move) ||
		checkLine2(3, 5, 7, move)) {
		
		result = true;
	}
	return result;
}

function checkLine2(a, b, c, move) {  
	var result = false;  
	if (getBox2(a) == move && 
		getBox2(b) == move && 
		getBox2(c) == move) { 
		result = true;
	}
	return result;
}

function getBox2(number) {
	for (var i = 1; i<=9; i++)
	return document.getElementById("s2" + number).innerText;
}

//===============================================SCRIPT-BOARD#2^^^

function startGame3() {  
	for (var i = 1; i <= 9; i++) { 
	clearBox3(i);}
	turn3 = "X";
	if (Math.random() < 0.5) { 
	turn3 = "O";}
	winner3 = null; 
	setMessage3(turn3 + " starts first.");
}

function clearBox3(number) {
	for (var i = 1; i<=9; i++)
	document.getElementById("s3" + number).innerText = "";
}

function setMessage3(msg) {  
	document.getElementById("msg3").innerText = msg;
}

function nextMove3(cell) {
	if (winner3 != null) {  
		setMessage3(winner3 + " is a winner!");}
	else if (cell.innerText == "") {  
		cell.innerText = turn3;  
		switchTurn3();}
	else { 
		setMessage3("That Square is Already Used.");}
}

function switchTurn3() {
	if (checkForWinner3(turn3)) {  
		setMessage3("Congratulations, " + turn3 + "  !!");
		winner3 = turn3;
		checkForUltimateWinner("temp");} 
	else if (turn3 == "X") {  
		turn3 = "O";
		setMessage3("It's " + turn3 + "'s turn!");}
	else {
		turn3 = "X";
		setMessage3("It's " + turn3 + "'s turn!");}
}

function checkForWinner3(move) {  
	var result = false;  
	if (checkLine3(1, 2, 3, move) ||  
		checkLine3(4, 5, 6, move) ||
		checkLine3(7, 8, 9, move) || 
		checkLine3(1, 4, 7, move) ||
		checkLine3(2, 5, 8, move) ||
		checkLine3(3, 6, 9, move) ||
		checkLine3(1, 5, 9, move) ||
		checkLine3(3, 5, 7, move)) {
		
		result = true;
	}
	return result;
}

function checkLine3(a, b, c, move) {  
	var result = false;  
	if (getBox3(a) == move && 
		getBox3(b) == move && 
		getBox3(c) == move) { 
		result = true;
	}
	return result;
}

function getBox3(number) {
	for (var i = 1; i<=9; i++)
	return document.getElementById("s3" + number).innerText;
}

//===============================================SCRIPT-BOARD#3^^^

function startGame4() {  
	for (var i = 1; i <= 9; i++) { 
	clearBox4(i);}
	turn4 = "X";
	if (Math.random() < 0.5) { 
	turn4 = "O";}
	winner4 = null; 
	setMessage4(turn4 + " starts first.");
}

function clearBox4(number) {
	for (var i = 1; i<=9; i++)
	document.getElementById("s4" + number).innerText = "";
}

function setMessage4(msg) {  
	document.getElementById("msg4").innerText = msg;
}

function nextMove4(cell) {
	if (winner4 != null) {  
		setMessage4(winner4 + " is a winner!");}
	else if (cell.innerText == "") {  
		cell.innerText = turn4;  
		switchTurn4();}
	else { 
		setMessage4("That Square is Already Used.");}
}

function switchTurn4() {
	if (checkForWinner4(turn4)) {  
		setMessage4("Congratulations, " + turn4 + "  !!");
		winner4 = turn4;
		checkForUltimateWinner("temp");} 
	else if (turn4 == "X") {  
		turn4 = "O";
		setMessage4("It's " + turn4 + "'s turn!");}
	else {
		turn4 = "X";
		setMessage4("It's " + turn4 + "'s turn!");}
}

function checkForWinner4(move) {  
	var result = false;  
	if (checkLine4(1, 2, 3, move) ||  
		checkLine4(4, 5, 6, move) ||
		checkLine4(7, 8, 9, move) || 
		checkLine4(1, 4, 7, move) ||
		checkLine4(2, 5, 8, move) ||
		checkLine4(3, 6, 9, move) ||
		checkLine4(1, 5, 9, move) ||
		checkLine4(3, 5, 7, move)) {
		
		result = true;
	}
	return result;
}

function checkLine4(a, b, c, move) {  
	var result = false;  
	if (getBox4(a) == move && 
		getBox4(b) == move && 
		getBox4(c) == move) { 
		result = true;
	}
	return result;
}

function getBox4(number) {
	for (var i = 1; i<=9; i++)
	return document.getElementById("s4" + number).innerText;
}

//===============================================SCRIPT-BOARD#4^^^

function startGame5() {  
	for (var i = 1; i <= 9; i++) { 
	clearBox5(i);}
	turn5 = "X";
	if (Math.random() < 0.5) { 
	turn5 = "O";}
	winner5 = null; 
	setMessage5(turn5 + " starts first.");
}

function clearBox5(number) {
	for (var i = 1; i<=9; i++)
	document.getElementById("s5" + number).innerText = "";
}

function setMessage5(msg) {  
	document.getElementById("msg5").innerText = msg;
}

function nextMove5(cell) {
	if (winner5 != null) {  
		setMessage5(winner5 + " is a winner!");}
	else if (cell.innerText == "") {  
		cell.innerText = turn5;  
		switchTurn5();}
	else { 
		setMessage5("That Square is Already Used.");}
}

function switchTurn5() {
	if (checkForWinner5(turn5)) {  
		setMessage5("Congratulations, " + turn5 + "  !!");
		winner5 = turn5;
		checkForUltimateWinner("temp");} 
	else if (turn5 == "X") {  
		turn5 = "O";
		setMessage5("It's " + turn5 + "'s turn!");}
	else {
		turn5 = "X";
		setMessage5("It's " + turn5 + "'s turn!");}
}

function checkForWinner5(move) {  
	var result = false;  
	if (checkLine5(1, 2, 3, move) ||  
		checkLine5(4, 5, 6, move) ||
		checkLine5(7, 8, 9, move) || 
		checkLine5(1, 4, 7, move) ||
		checkLine5(2, 5, 8, move) ||
		checkLine5(3, 6, 9, move) ||
		checkLine5(1, 5, 9, move) ||
		checkLine5(3, 5, 7, move)) {
		
		result = true;
	}
	return result;
}

function checkLine5(a, b, c, move) {  
	var result = false;  
	if (getBox5(a) == move && 
		getBox5(b) == move && 
		getBox5(c) == move) { 
		result = true;
	}
	return result;
}

function getBox5(number) {
	for (var i = 1; i<=9; i++)
	return document.getElementById("s5" + number).innerText;
}

//===============================================SCRIPT-BOARD#5^^^

function startGame6() {  
	for (var i = 1; i <= 9; i++) { 
	clearBox6(i);}
	turn6 = "X";
	if (Math.random() < 0.5) { 
	turn6 = "O";}
	winner6 = null; 
	setMessage6(turn6 + " starts first.");
}

function clearBox6(number) {
	for (var i = 1; i<=9; i++)
	document.getElementById("s6" + number).innerText = "";
}

function setMessage6(msg) {  
	document.getElementById("msg6").innerText = msg;
}

function nextMove6(cell) {
	if (winner6 != null) {  
		setMessage6(winner6 + " is a winner!");}
	else if (cell.innerText == "") {  
		cell.innerText = turn6;  
		switchTurn6();}
	else { 
		setMessage6("That Square is Already Used.");}
}

function switchTurn6() {
	if (checkForWinner6(turn6)) {  
		setMessage6("Congratulations, " + turn6 + "  !!");
		winner6 = turn6;
		checkForUltimateWinner("temp");} 
	else if (turn6 == "X") {  
		turn6 = "O";
		setMessage6("It's " + turn6 + "'s turn!");}
	else {
		turn6 = "X";
		setMessage6("It's " + turn6 + "'s turn!");}
}

function checkForWinner6(move) {  
	var result = false;  
	if (checkLine6(1, 2, 3, move) ||  
		checkLine6(4, 5, 6, move) ||
		checkLine6(7, 8, 9, move) || 
		checkLine6(1, 4, 7, move) ||
		checkLine6(2, 5, 8, move) ||
		checkLine6(3, 6, 9, move) ||
		checkLine6(1, 5, 9, move) ||
		checkLine6(3, 5, 7, move)) {
		
		result = true;
	}
	return result;
}

function checkLine6(a, b, c, move) {  
	var result = false;  
	if (getBox6(a) == move && 
		getBox6(b) == move && 
		getBox6(c) == move) { 
		result = true;
	}
	return result;
}

function getBox6(number) {
	for (var i = 1; i<=9; i++)
	return document.getElementById("s6" + number).innerText;
}

//===============================================SCRIPT-BOARD#6^^^

function startGame7() {  
	for (var i = 1; i <= 9; i++) { 
	clearBox7(i);}
	turn7 = "X";
	if (Math.random() < 0.5) { 
	turn7 = "O";}
	winner7 = null; 
	setMessage7(turn7 + " starts first.");
}

function clearBox7(number) {
	for (var i = 1; i<=9; i++)
	document.getElementById("s7" + number).innerText = "";
}

function setMessage7(msg) {  
	document.getElementById("msg7").innerText = msg;
}

function nextMove7(cell) {
	if (winner7 != null) {  
		setMessage7(winner7 + " is a winner!");}
	else if (cell.innerText == "") {  
		cell.innerText = turn7;  
		switchTurn7();}
	else { 
		setMessage7("That Square is Already Used.");}
}

function switchTurn7() {
	if (checkForWinner7(turn7)) {  
		setMessage7("Congratulations, " + turn7 + "  !!");
		winner7 = turn7;
		checkForUltimateWinner("temp");} 
	else if (turn7 == "X") {  
		turn7 = "O";
		setMessage7("It's " + turn7 + "'s turn!");}
	else {
		turn7 = "X";
		setMessage7("It's " + turn7 + "'s turn!");}
}

function checkForWinner7(move) {  
	var result = false;  
	if (checkLine7(1, 2, 3, move) ||  
		checkLine7(4, 5, 6, move) ||
		checkLine7(7, 8, 9, move) || 
		checkLine7(1, 4, 7, move) ||
		checkLine7(2, 5, 8, move) ||
		checkLine7(3, 6, 9, move) ||
		checkLine7(1, 5, 9, move) ||
		checkLine7(3, 5, 7, move)) {
		
		result = true;
	}
	return result;
}

function checkLine7(a, b, c, move) {  
	var result = false;  
	if (getBox7(a) == move && 
		getBox7(b) == move && 
		getBox7(c) == move) { 
		result = true;
	}
	return result;
}

function getBox7(number) {
	for (var i = 1; i<=9; i++)
	return document.getElementById("s7" + number).innerText;
}

//===============================================SCRIPT-BOARD#7^^^

function startGame8() {  
	for (var i = 1; i <= 9; i++) { 
	clearBox8(i);}
	turn8 = "X";
	if (Math.random() < 0.5) { 
	turn8 = "O";}
	winner8 = null; 
	setMessage8(turn8 + " starts first.");
}

function clearBox8(number) {
	for (var i = 1; i<=9; i++)
	document.getElementById("s8" + number).innerText = "";
}

function setMessage8(msg) {  
	document.getElementById("msg8").innerText = msg;
}

function nextMove8(cell) {
	if (winner8 != null) {  
		setMessage8(winner8 + " is a winner!");}
	else if (cell.innerText == "") {  
		cell.innerText = turn8;  
		switchTurn8();}
	else { 
		setMessage8("That Square is Already Used.");}
}

function switchTurn8() {
	if (checkForWinner8(turn8)) {  
		setMessage8("Congratulations, " + turn8 + "  !!");
		winner8 = turn8;
		checkForUltimateWinner("temp");} 
	else if (turn8 == "X") {  
		turn8 = "O";
		setMessage8("It's " + turn8 + "'s turn!");}
	else {
		turn8 = "X";
		setMessage8("It's " + turn8 + "'s turn!");}
}

function checkForWinner8(move) {  
	var result = false;  
	if (checkLine8(1, 2, 3, move) ||  
		checkLine8(4, 5, 6, move) ||
		checkLine8(7, 8, 9, move) || 
		checkLine8(1, 4, 7, move) ||
		checkLine8(2, 5, 8, move) ||
		checkLine8(3, 6, 9, move) ||
		checkLine8(1, 5, 9, move) ||
		checkLine8(3, 5, 7, move)) {
		
		result = true;
	}
	return result;
}

function checkLine8(a, b, c, move) {  
	var result = false;  
	if (getBox8(a) == move && 
		getBox8(b) == move && 
		getBox8(c) == move) { 
		result = true;
	}
	return result;
}

function getBox8(number) {
	for (var i = 1; i<=9; i++)
	return document.getElementById("s8" + number).innerText;
}

//===============================================SCRIPT-BOARD#8^^^

function startGame9() {  
	for (var i = 1; i <= 9; i++) { 
	clearBox9(i);}
	turn9 = "X";
	if (Math.random() < 0.5) { 
	turn9 = "O";}
	winner9 = null; 
	setMessage9(turn9 + " starts first.");
}

function clearBox9(number) {
	for (var i = 1; i<=9; i++)
	document.getElementById("s9" + number).innerText = "";
}

function setMessage9(msg) {  
	document.getElementById("msg9").innerText = msg;
}

function nextMove9(cell) {
	if (winner9 != null) {  
		setMessage9(winner9 + " is a winner!");}
	else if (cell.innerText == "") {  
		cell.innerText = turn9;  
		switchTurn9();}
	else { 
		setMessage9("That Square is Already Used.");}
}

function switchTurn9() {
	if (checkForWinner9(turn9)) {  
		setMessage9("Congratulations, " + turn9 + "  !!");
		winner9 = turn9;
		checkForUltimateWinner("temp");
		} 
	else if (turn9 == "X") {  
		turn9 = "O";
		setMessage9("It's " + turn9 + "'s turn!");}
	else {
		turn9 = "X";
		setMessage9("It's " + turn9 + "'s turn!");}
}

function checkForWinner9(move) {  
	var result = false;  
	if (checkLine9(1, 2, 3, move) ||  
		checkLine9(4, 5, 6, move) ||
		checkLine9(7, 8, 9, move) || 
		checkLine9(1, 4, 7, move) ||
		checkLine9(2, 5, 8, move) ||
		checkLine9(3, 6, 9, move) ||
		checkLine9(1, 5, 9, move) ||
		checkLine9(3, 5, 7, move)) {
		
		result = true;
	}
	
	return result;
}

function checkLine9(a, b, c, move) {  
	var result = false;  
	if (getBox9(a) == move && 
		getBox9(b) == move && 
		getBox9(c) == move) { 
		result = true;
	}
	return result;
}

function getBox9(number) {
	for (var i = 1; i<=9; i++)
	return document.getElementById("s9" + number).innerText;
}

//===============================================SCRIPT-BOARD#9^^^
