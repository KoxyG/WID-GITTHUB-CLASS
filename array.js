// array
const array = [2, 4, 5, {
    name: "Joy",
    number: 1234567890,
    cars: ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan"],
}];

array[3].cars;

// array.toString();
// object

const obj = {
    name: "Joy",
    number: 1234567890,
    cars: ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan"],
}

obj.cars;


for (let i = 0; i < obj.cars.length; i++) {
    console.log("obj_array: ", obj.cars[i]);
}


// object array value
// const obj_value = obj.cars;
// const obj_number = obj.number;
// // array index
// const array_index = array[0];

// console.log("obj_array: ", obj_value);
// console.log("array_index: ", array_index);
// console.log("obj_number: ", obj_value);