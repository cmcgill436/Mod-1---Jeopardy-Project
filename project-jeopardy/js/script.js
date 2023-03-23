/*
-- increment players when button is clicked
-- when on question screen, 30 sec timer needs to be set and Think! song can be played 
  -- decide whether answer can be typed in or make questions multiple choice
--gameboard
  -- specific question box disappears after an attempt has been made
  figure out how to fill in the gameboard with transparent boxs that can be selected 
--questions
  -determine if questions will be assigned randomly or set
    --when question box is clicked, it will open up to a page that list a corresponding quesiion
    **onclick can be set to the value of a function 
  -set value of questions. Ease of questions changes as you get to higher valued questions
-- reset/play again/quit
  --'X' button that quits/let the player restart/get to the home screen to play the game
    -- ensure the game resets when it is exited out of.
*/

//Player Selector
const numOfPlayersDiv = document.getElementById("numOfPlayers");
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

//question randomizer
//add to functionality by either making a function for each category or figuring out how to get the arrays w/n the array to work. //
const randomQuestion = (questions) => {
  const randomNum = Math.floor(Math.random() * questions.length);
  return questions[randomNum];
};

questions = [
  //htmlCategory
  "What does HTML stand for?",
  "What is the HTML element for the largest heading?",
  "What is the correct HTML element for inserting a line break?",
  "Which character is used to indicate an end tag?",
  "True or False: Inline elements are normally displayed without starting a new line.",
  "How can you make a numbered list?",
];

// let firstGrade = []

//score

// console.log(randomQuestion(questions)); //logs random question
// const questionDiv = document.querySelector(".question");
// const questionScore = (question) => question.innerText {
//   let score

//   if (question.innerText == "100") {
//     score = 100;
//   } else if (question.innerText == "200") {
//     score = 200;
//   } else if (question.innerText == "300") {
//     score = 300;
//   } else if (question.innerText == "400") {
//     score = 400;
//   } else if (question.innerText == "500") {
//     score = 500;
//   } else {
//     //for incorrect answer
//     score = 0;
//   }
//   return score;
// };

// console.log(questionScore("200"));
