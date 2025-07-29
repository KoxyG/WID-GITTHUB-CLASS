class User {
    constructor (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    run() {
        console.log(this.name + " is running" + this.age);
    }

    eat() {
        console.log(this.name + " is eating");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }

    getGender() {
        if (this.gender === "male") {
            console.log(this.name + " is a male");
        } else if (this.gender === "female") {
            console.log(this.name + " is a female");
        } else {
            console.log(this.name + " is a genderless");
        }
    }
}


const user_girl = new user("Vanessa", 19, 'bi-sexual');
console.log(user_girl.getGender());
