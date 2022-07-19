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
        for (let i=0; i < this.letters.length; i++) {
            if (this.letters[i].char.toLowerCase() === guess.toLowerCase()) {
                this.letters[i].visible = true;
                return true;
            }
        }
        return false;
    }

    guessedCorrectly() {
        for (let i=0; i < this.letters.length; i++) {
            if (this.letters[i].visible == false) {
                return false;
            }
        }
        return true;
    }

    
}

module.exports = Word;
