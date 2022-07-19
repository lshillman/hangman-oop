class Letter {
    constructor (value) {
        this.value = value
        this.visible = value => {
            if ("abcdefghijklmnopqrstuvwxyz0123456789".includes(value.toLowerCase) === false ) {
                return true;
            } else {
                return false;
            }

        }

    }

}

module.exports = Letter;
