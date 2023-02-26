// START + DIFFICULTY SELECTION
const startWrapper = document.getElementById(`startWrapper`);
const difficultySelectForm = document.getElementById(`difficultySelect`);
const difficultySelect = document.getElementById(`difficulty`);

// GAME
const gameWrapper = document.getElementById(`gameWrapper`);
const guessesText = document.getElementById(`guesses`);
const wordHolderText = document.getElementById(`wordHolder`);

// GUESSING FORM
const guessForm = document.getElementById(`guessForm`);
const guessInput = document.getElementById(`guessInput`);

// GAME RESET BUTTON
const resetGame = document.getElementById(`resetGame`);

// CANVAS
let canvas = document.getElementById(`hangmanCanvas`);



// The following Try-Catch Block will catch the errors thrown
try {

} catch (error) {

}
  // Instantiate a game Object using the Hangman class.

  // add a submit Event Listener for the to the difficultySelectionForm
  //    get the difficulty input
  //    call the game start() method, the callback function should do the following
  //       1. hide the startWrapper
  //       2. show the gameWrapper
  //       3. call the game getWordHolderText and set it to the wordHolderText
  //       4. call the game getGuessessText and set it to the guessesText
  difficultySelectForm.addEventListener(`submit`, function (event) {
    event.preventDefault();
    const difficulty = difficultySelect.value;
    game = new Hangman(canvas);
    game.start(difficulty, () => {
      startWrapper.style.display = `none`;
      gameWrapper.style.display = `block`;
      wordHolderText.textContent = game.getWordHolderText();
      guessesText.textContent = game.getGuessesText();
    });
  });

  // add a submit Event Listener to the guessForm
  //    get the guess input
  //    call the game guess() method
  //    set the wordHolderText to the game.getHolderText
  //    set the guessesText to the game.getGuessesText
  //    clear the guess input field
  // Given the Guess Function calls either the checkWin or the onWrongGuess methods
  // the value of the isOver and didWin would change after calling the guess() function.
  // Check if the game isOver:
  //      1. disable the guessInput
  //      2. disable the guessButton
  //      3. show the resetGame button
  // if the game is won or lost, show an alert.
  guessForm.addEventListener(`submit`, function (e) {
    e.preventDefault();
    const guess = guessInput.value.trim().toLowerCase();

    if (!guess.match(/^[a-z]$/)) {
      alert("Please enter a single letter from a to z.");
      return;
    }

    if (game.guessedLetters.has(guess)) {
      alert("You have already guessed this letter. Please try again.");
      return;
    }


  // Make the guess and update the display
  const result = game.guess(guess);
  wordHolderText.textContent = game.getWordHolderText();
  guessesText.textContent = game.getGuessesText();
  guessInput.value = ``;
     
   
    
  // Check if the game is over
  if (game.isOver) {
    guessInput.disabled = true;
    guessForm.querySelector(`button`).disabled = true;
    resetGame.style.display = `block`;
    if (game.didWin) {
      alert(`You won!`);
    } else {
      alert(`You lost! The word was "${game.word}".`);
    }
  }
});
  // update the guessed letters display
function updateGuessedLetters() {
  guessedLettersList.innerHTML = '';
  for (let letter of guessedLetters) {
    const li = document.createElement('li');
    li.textContent = letter;
    guessedLettersList.appendChild(li);
  }
}

  // add a click Event Listener to the resetGame button
  //    show the startWrapper
  //    hide the gameWrapper
  resetGame.addEventListener(`click`, function (e) {
    try {
      e.preventDefault();
      guessInput.disabled = false;
      guessForm.querySelector(`button`).disabled = false;
      resetGame.style.display = `none`;
      gameWrapper.style.display = `none`;
      startWrapper.style.display = `block`;
    } catch (error) {
      console.error(error);
      alert(error);
    }
  });
