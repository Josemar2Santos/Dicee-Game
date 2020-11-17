// elements;
let title = document.querySelector("header h1");
let footer = document.querySelector("footer a");

// player1 randomGen;
let randomNum1 = Math.floor(Math.random() * 6) + 1; //1-6;
let imgName1 = "dice" + randomNum1 + ".png"; //img name, ex: dice4;
let imgAddress1 = "/Dice-Game/images/" + imgName1; //img address;
let player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", imgAddress1);

// player2 randomGen;
let randomNum2 = Math.floor(Math.random() * 6) + 1; //1-6;
let imgName2 = "dice" + randomNum2 + ".png"; //img name, ex: dice4;
let imgAddress2 = "/Dice-Game/images/" + imgName2; //img address;
let player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", imgAddress2);

// conditionals;
if (randomNum1 == randomNum2) {
    title.innerHTML = "Empate! 🙅‍♀️";
} else if (randomNum1 > randomNum2) {
    title.innerHTML = "🏆 Jogador 1 Venceu!";
    title.style.color = "rgba(0, 0, 255, 0.650)";
    footer.style.color = "rgba(0, 0, 255, 0.650)";
} else {
    title.innerHTML = "Jogador 2 Venceu! 🏆";
    title.style.color = "rgba(255, 0, 0, 0.650)";
    footer.style.color = "rgba(255, 0, 0, 0.650)";

}