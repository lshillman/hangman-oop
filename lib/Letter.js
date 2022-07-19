class Letter {
    constructor (char) {
        this.char = char
        if ("abcdefghijklmnopqrstuvwxyz0123456789".includes(char.toLowerCase()) === false ) {
            console.log('not a digit or a letter')
            this.visible = true;
        } else {
            console.log('a special character')
            this.visible = false;
        }
    }

    toString() {
        if (this.visible) {
            return this.char;
        } else {
            return "_";
        }
    }

    guess(letter) {
        if (this.char.toLowerCase() === letter.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }

    getSolution () {
        return this.char;
    }
}

module.exports = Letter;
