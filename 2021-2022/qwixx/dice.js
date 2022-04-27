// https://codepen.io/Pyremell/pen/eZGGXX/ 

var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number, dieNumber) {
    var placeholder = document.getElementById(dieNumber);
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('diceRoll');
  
  button.onclick = function() {
    printNumber(dice.roll(), 'die1');
    printNumber(dice.roll(), 'die2');
    printNumber(dice.roll(), 'die3');
    printNumber(dice.roll(), 'die4');
    printNumber(dice.roll(), 'die5');
    printNumber(dice.roll(), 'die6');
  };
  
  