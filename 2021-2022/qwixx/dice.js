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
    var [
      white1, 
      white2, 
      blue, 
      yellow,
      green,
      red
    ] = [
      dice.roll(),
      dice.roll(),
      dice.roll(),
      dice.roll(),
      dice.roll(),
      dice.roll()
    ];

    // taking the color values and storing them into a global scope
    window.colorValues = {
      white1, 
      white2, 
      blue, 
      yellow,
      green,
      red
    }
    
    printNumber(white1, 'die1');
    printNumber(white2, 'die2');
    printNumber(blue, 'die3');
    printNumber(yellow, 'die4');
    printNumber(green, 'die5');
    printNumber(red, 'die6');

    var event = new Event('diceRolled');
    document.dispatchEvent(event); 
  };
  
  