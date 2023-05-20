let firstCard = 11;
let secondCard =1;

let sum = firstCard + secondCard;

let blackjak = false;
let isAlive = true;

let message =""
console.log(sum)

if(sum <= 20)
{
    message = "Do you want to draw a card?"
}
else if (sum === 21)
{
    blackjak = true;
    message = "Wohoo ! You've got blackjack"
}
else
{
    messgae = "You're out of the game!"
    isAlive = false;
}


console.log(blackjak)
console.log(message)