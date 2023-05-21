let firstCard = 11;
let secondCard =1;

let sum = firstCard + secondCard;

let blackjak = false;
let isAlive = true;

let message =""

let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.getElementById("sum-el")
console.log(sumEl)

let cardsEl = document.getElementById("cards-el")
console.log(cardsEl)


function startGame()
{
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
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
    console.log(message)
    messageEl.textContent = message

}

function newCard()
{
    console.log("Drawing a new card from the deck!")
}
//console.log(blackjak)
