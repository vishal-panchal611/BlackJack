let firstCard = 11;
let secondCard =10;

let sum = firstCard + secondCard;

let blackjak = false;
let isAlive = true;

console.log(sum)

if(sum <= 20)
{
    console.log("Do you want to draw a card?")
}
else if (sum === 21)
{
    blackjak = true;
    console.log("Wohoo ! You've got blackjack")
}
else
{
    console.log("You're out of the game! ")
    isAlive = false;
}

console.log(blackjak)