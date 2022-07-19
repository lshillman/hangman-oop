const Letter = require("./Letter");

class Word {
    constructor(input) {
        this.letters = [];
        for (let letter of input) {
            let letterObj = new Letter(letter)
            this.letters.push(letterObj);
        }
        
    }

    guessLetter(guess) {
        let isCorrect = false
        for (let i=0; i < this.letters.length; i++) {
            if (this.letters[i].char.toLowerCase() === guess.toLowerCase()) {
                this.letters[i].visible = true;
                isCorrect = true;
            }
        }
        return isCorrect;
    }

    guessedCorrectly() {
        for (let i=0; i < this.letters.length; i++) {
            if (this.letters[i].visible == false) {
                return false;
            }
        }
        return true;
    }

    toString() {
        let wordString = "";
        for (let i=0; i < this.letters.length; i++) {
            wordString += this.letters[i].toString();
        }
        return wordString;
    }

    getSolution() {
        let solution = "";
        for (let i=0; i < this.letters.length; i++) {
            solution += this.letters[i].char;
        }
        return solution;
    }

}

module.exports = Word;
