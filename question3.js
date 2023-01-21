function sortNames(inputArray) {
  return inputArray.sort((a, b) => a.age - b.age);
}

const persons = [
  {
    name: "Ali",
    age: 63,
  },
  {
    name: "Hasan",
    age: 47,
  },
  {
    name: "Hossein",
    age: 57,
  },
  {
    name: "Sajjad",
    age: 57,
  },
  {
    name: "Bagher",
    age: 57,
  },
  {
    name: "Sadegh",
    age: 65,
  },
  {
    name: "Kazem",
    age: 55,
  },
  {
    name: "Reza",
    age: 55,
  },
  {
    name: "Taghi",
    age: 25,
  },
  {
    name: "Naghi",
    age: 42,
  },
  {
    name: "Asgari",
    age: 28,
  },
  {
    name: "Mahdi",
    age: 1189,
  },
];

console.log(sortNames(persons));
