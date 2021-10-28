// Переменные.
const compChoice = document.getElementById("comp-choice");
const userChoice = document.getElementById("user-choice");
const result = document.getElementById("result");
const choices = document.querySelectorAll("button");

let userChosen;
let compChosen;
let finalResult;

// Пройдемся по кнопкам.
choices.forEach((choice) =>
  choice.addEventListener("click", (mouseClick) => {
    userChosen = mouseClick.target.id;
    userChoice.innerHTML = userChosen;
    compChoiceGenerator();
    gameResult();
  })
);

// Рандомный генератор выбора для компьютера.
function compChoiceGenerator() {
  const randNum = Math.floor(Math.random() * 5);

  if (randNum === 0) {
    compChosen = "Камень";
  }
  if (randNum === 1) {
    compChosen = "Ножницы";
  }
  if (randNum === 2) {
    compChosen = "Бумага";
  }
  if (randNum === 3) {
    compChosen = "Ящерица";
  }
  if (randNum === 4) {
    compChosen = "Спок";
  }
  compChoice.innerHTML = compChosen;
}

// Логика игры.
// победитель -> (проигравший_1, проигравший_2):
//     камень -> (ножницы, ящерица),
//     ножницы -> (бумага, ящерица),
//     бумага -> (камень, Спок),
//     ящерица -> (Спок, бумага),
//     Спок -> (ножницы, камень),
function gameResult() {
  if (compChosen === userChosen) {
    finalResult = "Ничья";
  }
  if (compChosen === "Камень" && userChosen === "Ножницы") {
    finalResult = "Вы проиграли!";
  }
  if (compChosen === "Камень" && userChosen === "Бумага") {
    finalResult = "Победа!!!";
  }
  if (compChosen === "Камень" && userChosen === "Ящерица") {
    finalResult = "Вы проиграли!";
  }
  if (compChosen === "Камень" && userChosen === "Спок") {
    finalResult = "Победа!!!";
  }
  if (compChosen === "Ножницы" && userChosen === "Бумага") {
    finalResult = "Вы проиграли!";
  }
  if (compChosen === "Ножницы" && userChosen === "Камень") {
    finalResult = "Победа!!!";
  }
  if (compChosen === "Ножницы" && userChosen === "Ящерица") {
    finalResult = "Вы проиграли!";
  }
  if (compChosen === "Ножницы" && userChosen === "Спок") {
    finalResult = "Победа!!!";
  }
  if (compChosen === "Бумага" && userChosen === "Ножницы") {
    finalResult = "Победа!!!";
  }
  if (compChosen === "Бумага" && userChosen === "Камень") {
    finalResult = "Вы проиграли!";
  }
  if (compChosen === "Бумага" && userChosen === "Ящерица") {
    finalResult = "Победа!!!";
  }
  if (compChosen === "Бумага" && userChosen === "Спок") {
    finalResult = "Вы проиграли!";
  }
  if (compChosen === "Ящерица" && userChosen === "Камень") {
    finalResult = "Победа!!!";
  }
  if (compChosen === "Ящерица" && userChosen === "Ножницы") {
    finalResult = "Победа!!!";
  }
  if (compChosen === "Ящерица" && userChosen === "Бумага") {
    finalResult = "Вы проиграли!";
  }
  if (compChosen === "Ящерица" && userChosen === "Спок") {
    finalResult = "Вы проиграли!";
  }
  if (compChosen === "Спок" && userChosen === "Камень") {
    finalResult = "Вы проиграли!";
  }
  if (compChosen === "Спок" && userChosen === "Ножницы") {
    finalResult = "Вы проиграли!";
  }
  if (compChosen === "Спок" && userChosen === "Бумага") {
    finalResult = "Победа!!!";
  }
  if (compChosen === "Спок" && userChosen === "Ящерица") {
    finalResult = "Победа!!!";
  }
  result.innerHTML = finalResult;
}
