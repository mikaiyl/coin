coin = {
    state: 0,
    src: '',
    flip: function() {
        // randomly set this.state to be either 0 or 1
        if ( Math.random() > 0.4999999) {
            this.src = './images/head.jpg'
            this.state = 0
        } else {
            this.src = './images/tail.jpg'
            this.state = 1
        }
    },
    toString: function() {
        // return “H” or “T” depending on whether this.state is 0 or 1
        if ( this.state === 0 ) {
            return 'H'
        } else if ( this.state === 1 ) {
            return 'T'
        }
    },
    toHTML: function() {
        let img = document.createElement("img")
        // set the properties of the image element to show either heads or tails
        //
        img.height = "100px"
        img.width = "100px"
        img.src = this.src
        return img;
    }
}


for ( let i of Array(20) ) {
    let str = document.createElement('p')
    coin.flip()
    str.textContent = coin.toString()
    document.getElementById('container').appendChild( str )
}

for ( let i of Array(20) ) {
    coin.flip()
    document.getElementById('container').appendChild( coin.toHTML() )
}
