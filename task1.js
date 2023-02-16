const prompt = require("prompt-sync")();
var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
var flow = 5;
while (flow != 0) {
  // flow = prompt("1: Array Sorting \n2: Add Object \n3: Display \n0: Exit");
  flow = prompt("1: Array Sorting  | 2: Add Object  |  3: Display  |  0: Exit  ");

  if (flow == 1) {
    var n = prompt("enter 1 for Ascending and -1 for Descending  ");

    var decide = () => {
      if (n == 1) {
        console.table(library.sort((a, b) => a.libraryID - b.libraryID));
      } else if (n == -1) {
        console.table(library.sort((a, b) => b.libraryID - a.libraryID));
      } else {
        console.log("Wrong Input");
      }
    };
    decide();
  } else if (flow == 2) {
    var name = prompt("Enter Name: ");
    var auth = prompt("Enter Author: ");
    var l_id = prompt("Enter library Id: ");
    var addbook = () => {
      var obj = {
        title: name,
        author: auth,
        libraryID: parseInt(l_id),
      };

      library.push(obj);
      console.log("\n Object Added Successfully");

    };
    addbook();
  } else if (flow == 3) {
    console.table(library);
  } else {
  }
}

// console.table(library);
