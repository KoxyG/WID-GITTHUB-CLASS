// NEW CLASS SYSTEM DEFINITION
class Game2 {
    constructor() {
        this.red = "red colour, ";
        this.blue = "blue colour, ";
        this.score = [2, 3, 4];
        this.players = []
    }

    getColours() {
        return this.red + this.blue;
    }


    getScore() {
        return this.score;
    }

    getPlayer() {
        return this.players;
    }

    addPlayer(player) {
        return this.players.push(player);
    }
}


// Create a new user
const user1 = new Game2();
console.log(user1.getColours());
console.log(user1.getScore());
console.log(user1.getPlayer());
console.log(user1.addPlayer("Charis"));
console.log(user1.addPlayer("Jemmy"));
console.log(user1.getPlayer());


