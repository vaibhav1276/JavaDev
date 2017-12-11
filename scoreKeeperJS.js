var player1Score=0;
var player2Score=0;
var winningScore=5;


var player1Btn=document.querySelector("#Player1Button");
var player2Btn=document.querySelector("#Player2Button");
var settingsButton=document.querySelector("#settingButton");
var resetButton=document.querySelector("#resetButton");
var numInput = document.querySelector("#maxScore");
var winningScoreDisplay = document.querySelector("#winningScore");


// settingsButton.addEventListener("click",function()
// {
// 	alert("you have clicked the settings button");
// });

resetButton.addEventListener("click",function()
{
	reset();
});

player1Btn.addEventListener("click",function()
{
	if(player1Score<winningScore)
	{
		Player1Score.textContent = ++player1Score;

	}
	else if(player1Score === winningScore)
	{
		Player1Score.style.color = "green";
		winTag1.textContent = "WON...!!!";
		winTag1.style.fontSize = "40px";
		winTag1.style.color = "red";
		
		
	}
});

player2Btn.addEventListener("click",function()
{
	if(player2Score<winningScore)
	{
		Player2Score.textContent = ++player2Score;
	}
	else if(player2Score === winningScore)
	{
		Player2Score.style.color = "green";
		winTag2.textContent = "WON...!!!";
		winTag2.style.fontSize = "40px";
		winTag2.style.color = "red";
		
		
	}
});

function reset()
{
	player1Score=0;
	player2Score=0;
	Player1Score.textContent = player1Score;
	Player2Score.textContent = player2Score;
	winTag2.textContent = " ";
	winTag1.textContent = " ";
	Player1Score.style.color = "black";
	Player2Score.style.color = "black";
	winTag2.style.fontSize = "0px";
	winTag1.style.fontSize = "0px";

}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});