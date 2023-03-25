/*
-- when on question screen, 30 sec timer needs to be set and Think! song can be played 
  -- decide whether answer can be typed in &/or make questions multiple choice
--gameboard
  -- specific question box disappears after an attempt has been made
--when question box is clicked, it will open up to a div that list a corresponding quesiion
    **onclick can be set to the value of a function 
-set value of questions. Ease of questions changes as you get to higher valued questions
-- reset/play again/quit
  --'X' button that quits/let the player restart/get to the home screen to play the game
    -- ensure the game resets when it is exited out of.
*/

const numOfPlayersDiv = document.getElementById("numOfPlayers");

//numOfPlayers Selector
let numOfPlayers = Number(numOfPlayersDiv.innerText);

const incrPlayers = () => {
  if (numOfPlayers >= 3) {
    return;
  }
  numOfPlayers += 1;
  numOfPlayersDiv.innerText = numOfPlayers;
};

const decrPlayers = () => {
  if (numOfPlayers <= 1) {
    return;
  }
  numOfPlayers -= 1;
  numOfPlayersDiv.innerText = numOfPlayers;
};
