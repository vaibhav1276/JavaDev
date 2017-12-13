var numSquares = 6;
var colors=[];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	setUpModeButtons();
	setUpSquares();
	reset();
}


function setUpModeButtons(){
	for (var i=0;i< modeButtons.length; i++)
{
	modeButtons[i].addEventListener("click",function()
	{
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
 		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});

}
}

function setUpSquares()
{
	for (var i=0; i < squares.length; i++)
{
	//Add click listener
	squares[i].addEventListener("click",function()
	{
		var clickedColor=this.style.background;
		console.log(clickedColor,pickedColor);
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent= "Correct ";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		else
		{
			this.style.background = "#121212";
			messageDisplay.textContent = "Try Again";
		}
	});
}
}
function reset(){

	colors =  generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change color display to match new color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i=0; i < squares.length; i++)
	{	
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];

		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click",function()
{
	reset();
});


function changeColors(color)
{
	for (var i=0; i < squares.length; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length); 
	return colors[random] ;
}

function generateRandomColors(num)
{
	var arr = []
	for (var i=0; i<num ; i++)
	{
		arr.push(randomColor());
	}

	return arr;
}

function randomColor()
{
	var red=Math.floor(Math.random() * 256);
	var green=Math.floor(Math.random() * 256);
	var blue=Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}