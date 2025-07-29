function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.Human = function () {
    console.log(this.name + " is " + this.age + " years old");
}

const user = new User("Charis", 20)
const user2 = new User("Vanessa", 19)
console.log(user.Human());
console.log(user2.Human());
