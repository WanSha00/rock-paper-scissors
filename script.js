function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[(Math.random() * choices.length) | 0];
    return choice;
}

let playerwin = 0;
let cpuwin = 0;
function playRound(playerSelection, computerSelection) {

    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            console.log("P1: rock | CPU: rock");
            return "TIE P1: " + playerwin + " CPU: " + cpuwin;
        } else if (computerSelection == "Paper") {
            console.log("P1: rock | CPU: paper");
            cpuwin++;
            return "LOSE.. P1: " + playerwin + " CPU: " + cpuwin;

        } else {
            console.log("P1: rock | CPU: scissors");
            playerwin++;
            return "WIN!!! P1: " + playerwin + " CPU: " + cpuwin;
        }
    }

    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            console.log("P1: paper | CPU: rock");
            playerwin++;
            return "WIN!!! P1: " + playerwin + " CPU: " + cpuwin;
        } else if (computerSelection == "Paper") {
            console.log("P1: paper | CPU: paper");
            return "TIE.. P1: " + playerwin + " CPU: " + cpuwin;

        } else {
            console.log("P1: paper | CPU: scissors");
            cpuwin++;
            return "LOSE.. P1: " + playerwin + " CPU: " + cpuwin;
        }
    }

    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            console.log("P1: scissors | CPU: rock");
            cpuwin++;
            return "LOSE.. P1: " + playerwin + " CPU: " + cpuwin;
        } else if (computerSelection == "Paper") {
            console.log("P1: scissors | CPU: paper");
            playerwin++;
            return "WIN!!! P1: " + playerwin + " CPU: " + cpuwin;

        } else {
            console.log("P1: scissors | CPU: scissors");
            return "TIE P1: " + playerwin + " CPU: " + cpuwin;
        }

    }




}


let round = 0;
let giveup = false;
/*for (let i = 1; i <= 5; i++) {

    round++;
    console.log("ROUND " + round + " STARTS");

    let playerSelection = "";
    while (playerSelection == "" || (playerSelection != "rock" && playerSelection != "paper"
        && playerSelection != "scissors")) {
        playerSelection = prompt("Choose your attack! 1. Rock 2. Paper 3. Scissors");
        if (playerSelection != null) {
            playerSelection = playerSelection.toLowerCase();
        } else
            if (playerSelection == null) {
                break;
            }

    }

    if (playerSelection == null) {
        console.log("PLAYER gave up...");
        giveup = true;
        break;
    }

    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    console.log("ROUND " + round + " ENDS\n");

}*/



//listen for click for each button
let button = document.getElementsByClassName("btn");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', playGame);
}

let playerSelection = "";
function playGame(e) {

    //get player choice frm clicked btn
    playerSelection = e.target.innerHTML;
    console.log("pl " + playerSelection);

    //get cpu choice
    let computerSelection = getComputerChoice();
    console.log("cpu " + computerSelection);

    //add choices div
   // let choicesDiv = document.createElement('div');
   // choicesDiv.appendChild(document.createTextNode("PLAYER 1 " + playerSelection + " | VS CPU " + computerSelection));
    //document.body.appendChild(choicesDiv);

    //add round result div
    let result = playRound(playerSelection, computerSelection);

    let resultDiv = document.createElement('div');
    resultDiv.appendChild(document.createTextNode("PLAYER " + playerSelection + " | CPU " + computerSelection + "  --------------- [" + result + "]"));
    document.body.appendChild(resultDiv);

    //check winning condition and add winner div
    let winDiv = document.createElement('div');

    if (playerwin == 5 || cpuwin == 5) {

        //disable click btn listener when game ends with a winner
        for (let i = 0; i < button.length; i++) {

            button[i].removeEventListener('click', playGame);
        }

        if (playerwin == 5) {

            winDiv.appendChild(document.createTextNode("PLAYER REACHED THE SCORE OF 5 FIRST. PLAYER WINS!!!"));

        } else if (cpuwin == 5) {

            winDiv.appendChild(document.createTextNode("CPU REACHED THE SCORE OF 5 FIRST. CPU WINS!!!"));
        }

        document.body.appendChild(winDiv);
    }
}












/*if (giveup == true) {
    console.log("PLAYER LOSE BECAUSE GAVE UP THE MATCH... P1:" + playerwin + " CPU:" + cpuwin);
} else if (playerwin > cpuwin) {
    console.log("PLAYER WINS!!!  P1:" + playerwin + " CPU:" + cpuwin);
} else if (playerwin == cpuwin) {
    console.log("PLAYER TIED WITH COMPUTER.. P1:" + playerwin + " CPU:" + cpuwin);
} else {
    console.log("PLAYER LOSE... P1:" + playerwin + " CPU:" + cpuwin);
}*/

