// Generating a random number between 1-10 using Math.random and Math.floor
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("The random Number is " + randomNumber);



function askForNumber(){  

    let guess = prompt("Guess the number 1-100")
    console.log("The guess was " + guess);

    if(guess < randomNumber){
    alert("You guessed too low");
    askForNumber();
    }   

    else if(guess > randomNumber){
    alert("You guessed too high");
    askForNumber();
    }

    else if(guess === null){
        alert("See you later!");
        askForNumber();
        
        }

    else {
    alert("You got it!");
    askForNumber();
    
    }
}


    askForNumber();


