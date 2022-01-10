let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Piedra";
    if (letter === "p") return "Papel";
    return "Tijeras";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    const letraUser = "User".fontsize(3).sub();
    const letraIa = "IA".fontsize(3).sub();

    result_p.innerHTML = `${convertToWord(userChoice)} ${letraUser} vence a ${convertToWord(computerChoice)} ${letraIa} You Win! 🔥`;

    document.getElementById(userChoice).classList.add('green-glow'); //Agremados un border si ganamos
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-glow'); }, 2000) //Agregamos un tiempo un borde
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    const letraUser = "User".fontsize(3).sub();
    const letraIa = "IA".fontsize(3).sub();

    result_p.innerHTML = `${convertToWord(userChoice)} ${letraUser} pierde ${convertToWord(computerChoice)} ${letraIa} You Lose! ❌`;
}
function draw(userChoice, computerChoice) {

    const letraUser = "User".fontsize(3).sub();
    const letraIa = "IA".fontsize(3).sub();

    result_p.innerHTML = `${convertToWord(userChoice)} ${letraUser} iguales ${convertToWord(computerChoice)} ${letraIa} EMPATE! 🏆`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}
main()