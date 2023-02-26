class Hangman {
  constructor(_canvas) {
    if (!_canvas) {
      throw new Error(`invalid canvas provided`);
    }

    this.canvas = _canvas;
    this.ctx = this.canvas.getContext(`2d`);
    this.incorrectGuesses = 0;
  }

  /**
   * This function takes a difficulty string as a patameter
   * would use the Fetch API to get a random word from the Hangman
   * To get an easy word: https://it3049c-hangman.fly.dev/?difficulty=easy
   * To get an medium word: https://it3049c-hangman.fly.dev/?difficulty=medium
   * To get an hard word: https://it3049c-hangman.fly.dev/?difficulty=hard
   * The results is a json object that looks like this:
   *    { word: "book" }
   * */
  async getRandomWord(difficulty) {
    const response = await fetch(
      `https://it3049c-hangman.fly.dev/?difficulty=${difficulty}`
    );
    const data = await response.json();
    this.word = data.word.toLowerCase();
    this.wordLength = this.word.length;
    this.guessesLeft = 6;
    this.guessedLetters.clear();
    this.updateWordDisplay();
  }
  updateWordDisplay() {
    const wordDisplay = document.getElementById('word-display');
    let displayString = '';
    for (let i = 0; i < this.wordLength; i++) {
      const letter = this.word[i];
      if (this.guessedLetters.has(letter)) {
        displayString += letter;
      } else {
        displayString += '_';
      }
      displayString += ' ';
    }
    wordDisplay.textContent = displayString;
  }


  /**
   *
   * @param {string} difficulty a difficulty string to be passed to the getRandomWord Function
   * @param {function} next callback function to be called after a word is reveived from the API.
   */
  start(difficulty, next) {
    // get word and set it to the class's this.word
    // clear canvas
    // draw base
    // reset this.guesses to empty array
    // reset this.isOver to false
    // reset this.didWin to false
  }

  /**
   *
   * @param {string} letter the guessed letter.
   */
  guess(letter) {
    // Check if nothing was provided and throw an error if so
    // Check for invalid cases (numbers, symbols, ...) throw an error if it is
    // Check if more than one letter was provided. throw an error if it is.
    // if it's a letter, convert it to lower case for consistency.
    // check if this.guesses includes the letter. Throw an error if it has been guessed already.
    // add the new letter to the guesses array.
    // check if the word includes the guessed letter:
    //    if it's is call checkWin()
    //    if it's not call onWrongGuess()
  }

  checkWin() {
    // using the word and the guesses array, figure out how many remaining unknowns.
    // if zero, set both didWin, and isOver to true
  }

  /**
   * Based on the number of wrong guesses, this function would determine and call the appropriate drawing function
   * drawHead, drawBody, drawRightArm, drawLeftArm, drawRightLeg, or drawLeftLeg.
   * if the number wrong guesses is 6, then also set isOver to true and didWin to false.
   */
  onWrongGuess() {}

  /**
   * This function will return a string of the word placeholder
   * It will have underscores in the correct number and places of the unguessed letters.
   * i.e.: if the word is BOOK, and the letter O has been guessed, this would return _ O O _
   */
  getWordHolderText() {
    return;
  }

  /**
   * This function returns a string of all the previous guesses, seperated by a comma
   * This would return something that looks like
   * (Guesses: A, B, C)
   * Hint: use the Array.prototype.join method.
   */
  getGuessesText() {
    return ``;
  }


  /**
   * Draws the hangman base
   */
  drawBase() {
    this.ctx.fillRect(95, 10, 150, 10); // Top
    this.ctx.fillRect(245, 10, 10, 50); // Noose
    this.ctx.fillRect(95, 10, 10, 400); // Main beam
    this.ctx.fillRect(10, 410, 175, 10); // Base
  }


  /**
   * Draws the hangman head
   */
  drawHead() {
    this.ctx.beginPath();
    this.ctx.arc(250, 100, 40, 0, Math.PI * 2, false);
    this.ctx.stroke();
  }

  /**
   * Draws the hangman body
   */
  drawBody() {
    this.ctx.fillRect(240, 140, 20, 100);
  }

  /**
   * Draws the hangman left arm
   */
  drawLeftArm() {
    this.ctx.beginPath();
    this.ctx.moveTo(240, 170);
    this.ctx.lineTo(200, 220);
    this.ctx.stroke();
  }

  /**
   * Draws the hangman right arm
   */
  drawRightArm() {
    this.ctx.beginPath();
    this.ctx.moveTo(260, 170);
    this.ctx.lineTo(300, 220);
    this.ctx.stroke();
  }

  /**
   * Draws the hangman left leg
   */
  drawLeftLeg() {
    this.ctx.beginPath();
    this.ctx.moveTo(240, 240);
    this.ctx.lineTo(200, 300);
    this.ctx.stroke();
  }

  /**
   * Draws the hangman right leg
   */
  drawRightLeg() {
    this.ctx.beginPath();
    this.ctx.moveTo(260, 240);
    this.ctx.lineTo(300, 300);
    this.ctx.stroke();
  }

  /**
   * Clears the canvas
   */
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}