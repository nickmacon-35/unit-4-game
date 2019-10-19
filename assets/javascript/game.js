var targetNumber = Math.floor(Math.random() * 102) + 19;

$("#number-to-guess").text(targetNumber);

var counter = 0;
var wins = 0;
var losses = 0;

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
// var numberOption1 = Math.floor(Math.random() * 12) + 1;
// var numberOption2 = Math.floor(Math.random() * 12) + 1;
// var numberOption3 = Math.floor(Math.random() * 12) + 1;
// var numberOption4 = Math.floor(Math.random() * 12) + 1;

console.log(wins);
console.log(losses);
console.log(counter);

// function bigFunc() {

  var numberOption1 = Math.floor(Math.random() * 12) + 1;
  var numberOption2 = Math.floor(Math.random() * 12) + 1;
  var numberOption3 = Math.floor(Math.random() * 12) + 1;
  var numberOption4 = Math.floor(Math.random() * 12) + 1;

  // This time, our click event applies to every single crystal on the page. Not just one.
  $("#box-1").on("click", function() { 
    counter += numberOption1;
    guessMatch();
    console.log(counter);
    console.log(numberOption1);
    $("#userGuess").text(counter);
  });
  $("#box-2").on("click", function() {
    counter += numberOption2;
    guessMatch();
    console.log(counter);
    console.log(numberOption2);
    $("#userGuess").text(counter);
  });
  $("#box-3").on("click", function() {
    counter += numberOption3;
    guessMatch();
    console.log(counter);
    console.log(numberOption3);
    $("#userGuess").text(counter);
  });
  $("#box-4").on("click", function() {
    counter += numberOption4;
    guessMatch();
    console.log(counter);
    console.log(numberOption4);
    $("#userGuess").text(counter);
  });
    
  console.log(numberOption1);
  console.log(numberOption2);
  console.log(numberOption3);
  console.log(numberOption4);
    // All of the same game win-lose logic applies. So the rest remains unchanged.

    
    function guessMatch () {

    console.log(counter);
    console.log(targetNumber);

      if (counter === targetNumber) {
        alert("You win!");
        wins++;
        showWins();
        resetVariables();
    } 
      
      else if (counter > targetNumber) {
    alert("YOU LOSE! GOOD DAY SIR! (...or try again)");
    losses++;
    showLosses();
    resetVariables();
    }
    }

  //Show total wins on page
  function showWins() {
  document.getElementById("numWins").innerHTML = wins;
  }

  //Show total losses on page
  function showLosses() {
  document.getElementById("numLosses").innerHTML = losses;
  }

  //Reset variables for next game
  function resetVariables () {
  numberOption1 = Math.floor(Math.random() * 12) + 1;
  numberOption2 = Math.floor(Math.random() * 12) + 1;
  numberOption3 = Math.floor(Math.random() * 12) + 1;
  numberOption4 = Math.floor(Math.random() * 12) + 1;
  targetNumber = Math.floor(Math.random() * 102) + 19;
  counter = 0;
  console.log(targetNumber);
  console.log(counter);
  console.log(numberOption1);
  console.log(numberOption2);
  console.log(numberOption3);
  console.log(numberOption4);
  $("#number-to-guess").text(targetNumber);
  $("#userGuess").text(counter);
  }