/*
-- increment players when button is clicked
-- when on question screen, 30 sec timer needs to be set and Think! song can be played 
  -- decide whether answer can be typed in or make questions multiple choice
--gameboard
  -- specific question box disappears after an attempt has been made
  figure out how to fill in the gameboard with transparent boxs that can be selected 
--questions
  -determine if questions will be assigned randomly or if they will get harder as the value increases
-- reset/play again/quit
  --'X' button that quits/let the player restart/get to the home screen to play the game
    -- ensure the game resets when it is exited out of.
*/

//when question box is clicked, it will open up to a page that list a corresponding quesiion//
const box = document.querySelector(".question");
question.addEventListener("click", (e) => {
  console.log("click");
  questionClick();
});
function questionClick() {
  console.log("click");
}
