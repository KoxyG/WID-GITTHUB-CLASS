// COLOUR GUESSING GAME
class Game {
    constructor(red, blue, green, yellow, player) {
        this.red = red;
        this.blue = blue;
        this.green = green;
        this.yellow = yellow;
        this.player = player;
        // cannot declare array in the constructor
        this.score = [];
    }

    // Gets all the colours in the game.
    getColours() {
        return this.red + this.blue + this.green + this.yellow;
    }

    // Gets the player's name
    getPlayer() {
        return this.player;
    }

    addScore(number) {
        return this.score.push(number);
    }

    removeScore() {
        return this.score.pop();
    }

    getScore() {
        return this.score;
    }


}


// create a new user
const user1 = new Game("red colour",  "blue colour, ", "green colour, ", "yellow colour", "Charis");
console.log(user1.addScore(100));
console.log(user1.addScore(20));
console.log(user1.getScore());
console.log(user1.removeScore());
console.log(user1.getScore());

// create a new user 2
const user2 = new Game("red colour, ",  "blue colour, ", "green colour, ", "yellow colour", "Jemmy");

console.log(user2.getPlayer());


