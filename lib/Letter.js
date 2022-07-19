class Letter {
    constructor (value) {
        this.value = value
        if ("abcdefghijklmnopqrstuvwxyz0123456789".includes(value.toLowerCase()) === false ) {
            console.log('not a digit or a letter')
            this.visible = true;
        } else {
            console.log('a special character')
            this.visible = false;
        }
    }

    toString() {
        if (this.visible) {
            return this.value;
        } else {
            return "_";
        }
    }

    guess(letter) {
        if (this.value.toLowerCase() === letter.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }

    getSolution () {
        return this.value;
    }
}

module.exports = Letter;
