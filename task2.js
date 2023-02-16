var persons = [
  {
    name: "Shahid",
    city: "Wah",
  },
  {
    name: "Ali",
    city: "Lahore",
  },
  {
    name: "Obaid",
    city: "Karachi",
  },
  {
    name: "Ahmed",
    city: "Karachi",
  },
];
var obj = {};
for (var i = 0; i < persons.length; i++) {
  var key = persons[i].city;
  obj[key] = [];
}
for (var i = 0; i < persons.length; i++) {
  var c = persons[i].city;
  if (obj.hasOwnProperty(c)) {
    // obj[c].push(persons[i].name);
    obj[c] = [...obj[c], (persons[i].name)];
  }
}
console.table(persons);
console.table(obj);
