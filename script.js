function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[(Math.random() * choices.length) | 0];
    return choice;
}

let playerwin = 0;
let cpuwin = 0;
function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock") {
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

    else if (playerSelection == "paper") {
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

    else if (playerSelection == "scissors") {
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
for (let i = 1; i <= 5; i++) {

    round++;
    console.log("ROUND " + round + " STARTS");

    var playerSelection = "";
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

    var computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    console.log("ROUND " + round + " ENDS\n");

}

if (giveup == true) {
    console.log("PLAYER LOSE BECAUSE GAVE UP THE MATCH... P1:" + playerwin + " CPU:" + cpuwin);
} else if (playerwin > cpuwin) {
    console.log("PLAYER WINS!!!  P1:" + playerwin + " CPU:" + cpuwin);
} else if (playerwin == cpuwin) {
    console.log("PLAYER TIED WITH COMPUTER.. P1:" + playerwin + " CPU:" + cpuwin);
} else {
    console.log("PLAYER LOSE... P1:" + playerwin + " CPU:" + cpuwin);
}

