const gameboard = document.getElementById("gameboard");
const stats = document.querySelector(".stats");
const valDiv = document.querySelectorAll(".question");
const categoryEls = document.querySelectorAll(".category");
// const questionDiv = document.getElementById("questions");
const categories = [
  {
    subject: "What the HTML?!", //man need to change to match the category
    questions: [
      {
        question: "What does the HTML stand for?",
        answerChoices: [
          "Home Tool Markup Language",
          "Hyperlinks and Texts Markup Language",
          "Hyper Text Markup Language",
        ],
        correct: "Hyper Text Markup Language",
        value: "100",
      },
      {
        question: "What is the HTML element for the largest heading?",
        answerChoices: ["h6", "<heading>", "h1", "<head>"],
        correct: "h1",
        value: "200",
      },
      {
        question:
          "What is the correct HTML element for inserting a line break?",
        answerChoices: ["<br>", "<break", "<lb>", "&nbsp;"],
        correct: "<br>",
        value: "300",
      },
      {
        question: "Which character is used to indicate an end tag?",
        answerChoices: ["<", "/", "*", "^"],
        correct: "/",
        value: "400",
      },
      {
        question: "How can you make a numbered list?",
        answerChoices: ["<ul>", "<list>", "<ol>", "<dl>"],
        correct: "<ol>",
        value: "500",
      },
    ],
  },
  {
    subject: "First and Foremost",
    questions: [
      {
        question: "How many seasons are there in a year?",
        answerChoices: ["2", "6", "4"],
        correct: "4",
        value: "100",
      },
      {
        question: "What is 5+5?",
        answerChoices: ["100", "11", "10", "0"],
        correct: "10",
        value: "200",
      },
      {
        question: "What does water turn into when it is frozen?",
        answerChoices: ["ice", "rain", "steam"],
        correct: "ice",
        value: "300",
      },
      {
        question: "How many sides does a triangle have",
        answerChoices: ["8", "4", "5", "3"],
        correct: "3",
        value: "400",
      },
      {
        question: "How many 'cents' are in a quarter?",
        answerChoices: ["5¢", "10¢", "25¢", "1¢"],
        correct: "25",
        value: "500",
      },
    ],
  },
  {
    subject: "Javascript",
    questions: [
      {
        question: "Inside which HTML element do we put the JavaScript",
        answerChoices: ["<javascript", "<script>", "<js>", "scripting"],
        correct: "<script>",
        value: "100",
      },
      {
        question: "How do you create a function in JavaScript?",
        answerChoices: [
          "function = myFunction()",
          "function myFunction()",
          "function:myFunction()",
        ],
        correct: "function = myFunction()",
        value: "200",
      },
      {
        question: "How does a FOR loop start?",
        answerChoices: [
          "for i = 1 to 5",
          "for (i = 0; i < 5)",
          "for (i = 0; i < 5; i++)",
          "for (i <= 5, i++)",
        ],
        correct: "for (i = 0; i < 5; i++)",
        value: "300",
      },
      {
        question: "JavaScript is the same as Java.",
        answerChoices: ["True", "False"],
        correct: "",
        value: "400",
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        answerChoices: ["%", "-", "=", "*"],
        correct: "=",
        value: "500",
      },
    ],
  },
  {
    subject: "Are You Smarter Than a 7th Grader?",
    questions: [
      {
        question: "What are the three states of matter?",
        answerChoices: [
          "Moe, Larry, and Curly",
          "Solid, liquid, and gas",
          "Earth, Wind, & Fire",
        ],
        correct: "Solid, liquid, and gas",
        value: "100",
      },
      {
        question: "What do you call a person who studies weather?",
        answerChoices: [
          "Paleontologist",
          "Optometrist",
          "Meteorologist",
          "Astrologist",
        ],
        correct: "Meteorologist",
        value: "200",
      },
      {
        question: "If you have arachnophobia, which animal are you scared of?",
        answerChoices: ["Cats", "Spider Monkeys", "Dolphins", "Spiders"],
        correct: "Spiders",
        value: "300",
      },
      {
        question: "How many elements are in the periodic table? ",
        answerChoices: ["118", "365", "40", "250"],
        correct: "118",
        value: "400",
      },
      {
        question:
          "Which planet in our Solar System is known for having a ring?",
        answerChoices: ["Mars", "Venus", "Saturn", "Earth"],
        correct: "Saturn",
        value: "500",
      },
    ],
  },
  {
    subject: "Dectective CSS",
    questions: [
      {
        question:
          "Where in an HTML document is the correct place to refer to an external style sheet?",
        answerChoices: [
          "In the <body> section",
          "In the <head> section",
          "At the end of the document",
        ],
        correct: "In the <head> section",
        value: "100",
      },
      {
        question: "How do you insert a comment in a CSS file?",
        answerChoices: [
          "/*this is a comment */",
          "' this is a comment",
          "//this is a comment",
          "//this is a comment//",
        ],
        correct: "/*this is a comment */",
        value: "200",
      },
      {
        question: "What does CSS stand for?",
        answerChoices: [
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets",
        ],
        correct: "Cascading Style Sheets",
        value: "300",
      },
      {
        question:
          "Which CSS property is used to change the text color of an element?",
        answerChoices: ["text-color", "fgcolor", "color"],
        correct: "color",
        value: "400",
      },
      {
        question: "How do you select elements with class name 'test?",
        answerChoices: [".test", "#test", "*test", "test"],
        correct: ".test",
        value: "500",
      },
    ],
  },
  {
    subject: "This and that",
    questions: [
      {
        question: "Which vegetable is a pickle",
        answerChoices: ["zucchini", "squash", "cucumber"],
        correct: "cucumber",
        value: "100",
      },
      {
        question: "How many floors does the Eiffel Tower have?",
        answerChoices: ["6", "10", "20", "3"],
        correct: "3",
        value: "200",
      },
      {
        question: "Who is the villain in “Peter Pan”?",
        answerChoices: [
          "Captain Hook",
          "Captain Sparrow",
          "Captain Yondu",
          "Captain Planet",
        ],
        correct: "Captain Hook",
        value: "300",
      },
      {
        question: "What species of fish is Nemo?",
        answerChoices: ["clown fish", "shark", "pufferfish", "tuna"],
        correct: "clown fish",
        value: "400",
      },
      {
        question: "How many staircases are located in Hogwarts?",
        answerChoices: ["23", "142", "203", "72"],
        correct: "142",
        value: "500",
      },
    ],
  },
];

//prints name to category divs
categoryEls.forEach(
  (category, i) => (category.textContent = categories[i].subject)
);

let k = 0;

for (let q = 0; q < 6; q++) {
  for (let j = 0; j < 5; j++) {
    // let newValue = document.querySelector(`#question${k}`).textContent;
    let newValue = categories[q].questions[j].value;
    document.querySelector(`#question${k}`).textContent = newValue;
    console.log(newValue);
    k++;
  }
}

// //click event that creates a div w/ the questions, answerChoices
valDiv.forEach((d) => {
  d.addEventListener("click", (evt) => {
    a = evt.target.getAttribute("id").match(/[0-9]+/)[0];
    document.querySelector("#questionDiv").textContent =
      categories[Math.floor(a / 5)].questions[Math.floor(a % 5)].question;

    categories[Math.floor(a / 5)].questions[
      Math.floor(a % 5)
    ].answerChoices.forEach((v) => {
      console.log(v);
      const newEl2 = document.createElement("input");
      const newEl3 = document.createElement("label");
      newEl2.type = "radio";
      newEl2.value = v;
      newEl2.setAttribute(
        "id",
        `answer${categories[Math.floor(a / 5)].questions[
          Math.floor(a % 5)
        ].answerChoices.indexOf(v)}`
      );
      newEl2.setAttribute("name", "answer");
      newEl3.setAttribute("for", newEl2.id);
      newEl3.textContent = v;
      document
        .querySelector("#questionDiv")
        .appendChild(document.createElement("br"));
      document.querySelector("#questionDiv").appendChild(newEl2);
      document.querySelector("#questionDiv").appendChild(newEl3);
    });

    document
      .querySelector("#questionDiv")
      .appendChild(document.createElement("br"));
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.addEventListener("click", (evt) => {
      if (
        document.querySelector('input[name="answer"]:checked').value ==
        categories[Math.floor(a / 5)].questions[Math.floor(a % 5)].correct
      ) {
        score +=
          +categories[Math.floor(a / 5)].questions[Math.floor(a % 5)]["value"];
        alert("You're correct!");
        document.getElementById("score").textContent = score;
        let quest = document.querySelector(`#question${a}`);
        quest.textContent = "";
        quest.style.backgroundColor = "green";
      } else {
        document.querySelector('input[name="answer"]:checked').value !==
          categories[Math.floor(a / 5)].questions[Math.floor(a % 5)].correct;
        alert("Wrong");
        let quest = document.querySelector(`#question${a}`);
        quest.textContent = "";
        quest.style.backgroundColor = "red";
      }
      counter++;
      if (counter == 30) {
        alert(`Game over you scored ${score} pts.`);
      }
    });
    document.querySelector("#questionDiv").appendChild(submit);
  });
});

//score

let score = 0;
let a;
// counter
let counter = 0;
