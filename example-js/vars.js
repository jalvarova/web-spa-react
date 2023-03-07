// Globals variables
const listNumebers = [1, 2, 3, 4, 5];

// Arrays numbers
const mapNumbers = listNumebers.map((value) => value * 2);

console.log(mapNumbers);

// Html concat

const mapHtml = listNumebers.map((value) => "<li>" + value + "</li>");

console.log(mapHtml);

// Element asigned variable

const [first, second, ...rest] = listNumebers;

console.log(first, second);
console.log(rest);

// Object

const object1 = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
};

const object2 = {
  name: "Full Stack web application development",
  level: "intermediate studies",
  size: 5,
};

const object3 = {
  name: {
    first: "Dan",
    last: "Abramov",
  },
  grades: [2, 3, 5, 3],
  department: "Stanford University",
};

console.log(object1.name); // se imprime Arto Hellas
const fieldName = "age";
console.log(object1[fieldName]); // 35 es impreso}

// Funciones

const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

const result = sum(8, 4);
console.log("Resultado : " + result);

const square = (p) => p * p;
console.log("Resultado Square : " + square(3));

const tSquared = listNumebers.map((p) => square(p));
console.log("Resultado Square Map : " + tSquared);

let sums = 0;

const average = function (...numbers) {
  numbers.forEach((number) => (sums += number));
  return sums / 2;
};

const resultAverage = average(2, 5, 9);
console.log("Resultado Avarage : " + resultAverage);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("hello, my name is" + this.name + " Date : " + this.getDate());
  }

  getDate() {
    var f = new Date();
    return f.getDate() + "/" + f.getMonth() + "/" + f.getFullYear();
  }
}

const adam = new Person("Adan Ondra", 30);
adam.greet();

const alvaro = new Person("Alvaro Aguinaga", 31);
alvaro.greet();
