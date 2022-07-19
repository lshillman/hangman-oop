class Letter {
    constructor (char) {
        this.char = char
        if ("éabcdefghijklmnopqrstuvwxyz0123456789".includes(char.toLowerCase()) === false ) {
            this.visible = true;
        } else {
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
