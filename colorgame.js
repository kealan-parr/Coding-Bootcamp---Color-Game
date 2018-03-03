	var colors = [];
	var numberSquare = 6;
	populateColorsArray(numberSquare);
	var colorToFind = pickColor();

	var squares = document.getElementsByClassName("square");
	console.log(squares);
	var colorDisplay = document.getElementById("colorDisp");
	var result = document.getElementById("result");
	var title = document.getElementById("title");
	var resetButton = document.getElementById("buttonNewColors");
	var easyBtn = document.getElementById("ez");
	var hardBtn = document.getElementById("hrd");

	easyBtn.addEventListener("click", function() {
		result.textContent = "";
		hardBtn.classList.remove("selectedButton");
		easyBtn.classList.add("selectedButton");
		// -------------------------------------
		// Creates "new" game
		numberSquare = 3;
		populateColorsArray(numberSquare);
		colorToFind = pickColor();
		colorDisplay.textContent = colorToFind;
		for (var m=0; m < squares.length; m++){
			if(colors[m]){
				squares[m].style.background = colors[m];
			}
			else {
				squares[m].style.display = "none";
			}
		}	
	});

	hardBtn.addEventListener("click", function() {
		result.textContent = "";
		hardBtn.classList.add("selectedButton");
		easyBtn.classList.remove("selectedButton");
		// -------------------------------------
		// Creates "new" game
		numberSquare = 6;
		populateColorsArray(numberSquare);
		colorToFind = pickColor();
		colorDisplay.textContent = colorToFind;
		for (var k=0; k < colors.length; k++){	
			squares[k].style.background = colors[k];
			squares[k].style.display = "block";	
		}	
	});


	resetButton.addEventListener("click", function(){
		result.textContent = "";
		// gen new colors
		populateColorsArray(numberSquare);
		// change colors
		init();
		colorToFind = pickColor();
		colorDisplay.textContent = colorToFind;
		title.style.backgroundColor = "steelblue";
		this.textContent = "New Colors";
	})

	colorDisplay.textContent = colorToFind;

	function init() {
	for(var i = 0; i < squares.length; i++){
		// Adding the initial colors
		squares[i].style.backgroundColor = colors[i];
		// add a click handler to each square
		squares[i].addEventListener("click", function(){
			// Color of clicked color
			var clickedCol = this.style.backgroundColor;
			if (colorToFind == clickedCol) {
				correctAnswer();
				title.style.backgroundColor = colorToFind;
				result.textContent = "Correct!";
				resetButton.textContent = "Play again?"
			}
			else {
				this.style.backgroundColor = "#232323";
				result.textContent = "Wrong!";
			}
		})
	}}

	function populateColorsArray(arg) {
	colors=[];
	for (let i=0; i < arg; i++) {
	var col, math1, math2, math3;

	math1 = Math.floor(Math.random()  * 255);
	math2 = Math.floor(Math.random()  * 255);
	math3 = Math.floor(Math.random()  * 255);

	col = "rgb(" + math1 + ", " + math2 + ", " + math3 + ")";
	colors.push(col);
	}}

	function correctAnswer () {
	for(var x=0; x < squares.length; x++){
	squares[x].style.backgroundColor = colorToFind;
	}}

	function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
	    var final =  colors[random];
	    return final;
	}


	init();