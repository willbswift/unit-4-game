
//There will be four crystals displayed as buttons on the page.

  //load display
$(document).ready(function() {

    //The random target number should be between 19 - 120.
  let targetMin = 19;
  let targetMax = 120;

    //Each crystal should have a random hidden value between 1 - 12.
  let crystalMin = 1;
  let crystalMax = 12;
  let sabresBuilt = 0;
  let sabreTrys = 0;
  let currentNumber = 0;

  let targetNumber;
  let adeganNumber;
  let jedhaNumber;
  let ilumNumber;
  let ruusanNumber;

  function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  // Use a function to reset game status to unbuilt
  function initializeGame() {
    currentNumber = 0;
    targetNumber.empty();
    adeganNumber.empty();
    jedhaNumber.empty();
    ilumNumber.empty();
    ruusanNumber.empty();
    isBuilt = false;
    $(".target, .current").empty();
  };

    //generate random target number
  targetNumber = random(targetMin, targetMax);
  console.log(targetNumber);

    //The player will be shown the random target number at the start of the game.  
  let html = targetNumber ;
  document.querySelector(".target").innerHTML = html;

    //generate random values for crystals. game will hide this amount until the player clicks a crystal.
  adeganNumber = random(crystalMin, crystalMax);
    console.log(adeganNumber);
  jedhaNumber = random(crystalMin, crystalMax);
    console.log(jedhaNumber);
  ilumNumber = random(crystalMin, crystalMax);
    console.log(ilumNumber);
  ruusanNumber = random(crystalMin, crystalMax);
    console.log(ruusanNumber);

    //When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
  $('img').bind('click', function (evt) {

    if (currentNumber < targetNumber) {
      if($(this).attr('id') == 'adegan') {
        currentNumber = currentNumber + adeganNumber;
        console.log(currentNumber);
      }
      if($(this).attr('id') == 'jedha') {
        currentNumber = currentNumber + jedhaNumber;
        console.log(currentNumber);
      }
      if($(this).attr('id') == 'ilum') {
        currentNumber = currentNumber + ilumNumber;
        console.log(currentNumber);
      }
      if($(this).attr('id') == 'ruusan') {
        currentNumber = currentNumber + ruusanNumber;
        console.log(currentNumber);
      }

        //When they do click one, update the player's score counter.
      let html3 = 
        "<h2>Current attunement of Lightsabre " + currentNumber + "</h2>";
      document.querySelector(".current").innerHTML = html3;

      //The player wins if their total score matches the random number from the beginning of the game.
    if (currentNumber === targetNumber) {
      console.log("You Win!")
      sabresBuilt = sabresBuilt +1;
      console.log(sabresBuilt);
      let html2 =
        "<h2>You have constructed a new lightsabre!  Indeed you are powerful as the Emperor has forseen" +
        "<br><h3>Hit any key to build another lightsabre.</h3>";
      document.querySelector(".status").innerHTML = html2;

    /*    //sabre ignite sound FX
        let audioElement = document.createElement("audio");
          audioElement.setAttribute("src", "assets/sound/___________.mp3");
          audioElement.play();
    */

//**load a picture of a lit sabre???  

        document.onkeyup = function(event) {
          initializeGame();
        }
      }

      //The player loses if their score goes above the random number.
    else if (currentNumber > targetNumber) {
      console.log("You Lose!")
      sabreTrys = sabreTrys +1;
      console.log(sabreTrys);
      let html5 =
        "<h2>The Lightsabre has exploded!</h2>" +
        "<h3>Hit any key to build another lightsabre.</h3>";
      document.querySelector(".status").innerHTML = html5;

      //load a picture of a lit sabre???  

  /*    //sabre ignite sound FX
      let audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/sound/___________.mp3");
        audioElement.play();
  */

      document.onkeyup = function(event) {
        initializeGame();
      }
    }

    }
  })

});


//The app should show the number of games the player wins and loses.

/*
        // Set isBuilt to true so that we don't get in a weird UI state by clicking buttons again
        isBuilt = true;
  }
*/

//The game restarts whenever the player wins or loses. (do not refresh the page as a means to restart the game.)
// The target number and current number should both reset, but the total wins and loses should remain.

/*



*/



//});

/*


Eralam
Opila
Bondar
Luxum
Durindfire 
Katak

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



*/