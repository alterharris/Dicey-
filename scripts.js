//Store all of our created Die in an array
var dice = [];
//Create a new Class called Die
var Die = /** @class */ (function () {
    function Die() {
        //Create a new property on the Die class called value
        //'value' has a value of a random number between 1 - 6
        this.value = Math.floor(Math.random() * 6) + 1;
        //Create a new div and assign in to a property called div
        //This div has a class of 'die' and innerText of the random number from above 
        this.div = $("<div class='die'>" + this.value + "</div>");
        //Add a click event to this div to roll when clicked
        this.div.click(this.roll.bind(this));
        //Add a dbl-click event to this div to remove
        this.div.dblclick(function () {
            this.div.remove();
            //Get the index of the die in the array
            var index = dice.indexOf(this);
            //Remove it from array
            dice.splice(index, 1);
        }.bind(this));
        //Append our new div to the #dice-container div 
        $("#dice-container").append(this.div);
    }
    //Method on the Die class that 'rolls' the die
    //This reassigns 'value' to a new number between 1 - 6
    //And then updates the div to reflect that new value
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.text(this.value);
    };
    return Die;
}());
;
//Function called on-click to generate a new Die and add it to the page
function createDie() {
    dice.push(new Die());
}
//Function called on-click to roll all the Dice on the page
function rollDice() {
    //Fancy forEach function to iterate through array
    dice.forEach(function (die) {
        die.roll();
    });
}
//Function called on-click to sum up all the dice on the page
function sumDice() {
    var total = 0;
    dice.forEach(function (die) {
        total += die.value;
    });
    alert("The sum of all the dice is " + total);
}
