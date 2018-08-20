

// Created an array of themed words
let puterOptions = ["JOHN CONNER", "GUARDIAN TERMINATOR", "KYLE REESE", "SARAH CONNER", "SAM WRIGHT", "SKYNET", "CAMERON", "DEREK REESE", "KATE BREWSTER", "BLAIR WILLIAMS", "MILES DYSON", "JAMES ELLISON", "CROMARTIE", "CATHERINE WEAVER", "TERMINATRIX"];
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  let puterChoice = puterOptions[Math.floor(Math.random() * puterOptions.length)];
//let puterChoice = ['ABCDEF'];
    console.log("Skynet chooses " + puterChoice);
  //Convert puter's choice of string to an array 
  let puterChoiceArray = (Array.from(puterChoice));
    console.log(puterChoiceArray);

//Create empty array to display to player
let currentDisplay = new Array();
  //fill with dashes
  for ( let i = 0; i < puterChoiceArray.length; i++ ){
    currentDisplay.push("_");
  }
    console.log(currentDisplay);

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
let letterWins = 0;
let lettersLeft = (puterChoiceArray.length);
let humanDeaths = 0;
let humansLeft = 8;
    console.log("Humans Living " + humansLeft)
let lettersGuessed = [];



