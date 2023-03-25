# Jeopardy

This project is a game modeled after the popuplar television game show.

## Motivation

I chose to recreate this game because of the nostalgia surrounding it. Its a game my family enjoyed watching when I was younger. I also thought it would be a great tool to put to use presently in school or office settings.

## Screenshots

![screenshot of the game set up page](playscreen.png)

![screenshot of the gameboard](inplay.png)

## Techology used

This game was created using HTML, CSS, and Javascript.

## Code Example

```
valDiv.forEach((d) => {
  d.addEventListener("click", (evt) => {
    a = evt.target.getAttribute("id").match(/[0-9]+/)[0];
    document.querySelector("#questionDiv").textContent =
      categories[Math.floor(a / 5)].questions[Math.floor(a % 5)].question;
```

## Instructions

1. Select number of players

2. Press Play

3. Once in the game, the game board will list 6 categories. Each with their question values below them.

4. Select a value and a question will pop up in the score box on the right.

5. Within the box, you will have a multiple choice question. You will select the radio button with the answer you want and press submit.

- If correct, you will receive the points associated with the question box you initially selected.

- After 30 questions are completed you will receive your score.

## Roadmap

- Enabling multiplay function

- A way to reset the board and play again

- Add music

- Include "Daily Double" question and "Final Jeopardy' round.

- Enabling the user the ability to add their own categories and questions.

## License

MIT © cmcgill436
