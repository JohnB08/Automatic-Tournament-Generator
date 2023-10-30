const firstRow = document.querySelector(".first-row");
const secondRow = document.querySelector(".second-row");
const inputLabel = document.createElement("label");
const mainBtn = document.createElement("button");
const contestantLabel = document.createElement("label");
const attributes = {
  mainInput: {
    id: "tournamentselector",
    name: "tournamentselector",
    type: "number",
  },
  mainInputLabel: {
    for: "tournamentselector",
    innerHTML: "Choose ammount of Contestants",
    style: "display: block; ",
  },
  mainBtn: {
    innerHTML: "Set Up Tournament",
    style:
      "display: block; padding: 0.5em 1em; background-color: blue; border: none; border-radius: 1em; color: white; transition: 300ms;",
    onMouseOver: "this.style.backgroundColor = 'black'",
    onMouseLeave: "this.style.backgroundColor = 'blue'",
  },
  tournamentInput: {
    id: "tournamentInput",
    name: "tournamnetInput",
    type: "text",
    style: "padding: 0.5em 1em;",
  },
  tournamentInputLabel: {
    for: "tournamentInput",
    innerHTML: "Choose Contestant",
  },
};
let rows = 0;
let assignedRows = 2;

function appendStartInputs() {
  for (let key of Object.keys(attributes.mainInputLabel)) {
    inputLabel.setAttribute(key, attributes.mainInputLabel[key]);
  }
  inputLabel.innerHTML = attributes.mainInputLabel.innerHTML;
  secondRow.appendChild(inputLabel);

  secondRow.appendChild(
    Object.assign(document.createElement("input"), attributes.mainInput)
  );
  for (let key of Object.keys(attributes.mainBtn)) {
    mainBtn.setAttribute(key, attributes.mainBtn[key]);
  }
  mainBtn.innerHTML = attributes.mainBtn.innerHTML;
  secondRow.appendChild(mainBtn);

  firstRow.classList.add("main-menu-rows");
  for (let child of firstRow.children) {
    child.classList.add("place-menu");
  }
  secondRow.classList.add("MainMenu");

  mainBtn.addEventListener("click", renderTournamentStart);
}
function removeStartInputs() {
  for (let child of secondRow.children) {
    child.remove();
  }
  console.log(secondRow.children);
}
function makeGrid(inputValue) {
  firstRow.classList.remove("main-menu-rows");
  rows = Math.floor(inputValue / 2) + 2;
  firstRow.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  console.log(inputValue);
}
function makeInputs(inputValue) {
  for (let i = 0; i < inputValue; i++) {
    firstRow.appendChild(
      Object.assign(document.createElement("input"), attributes.tournamentInput)
    );
    contestantLabel.innerHTML = attributes.tournamentInputLabel.innerHTML;
    firstRow.appendChild(contestantLabel);
  }
  for (let key of Object.keys(attributes.tournamentInputLabel)) {
    contestantLabel.setAttribute(key, attributes.tournamentInputLabel[key]);
  }
  let tournamentContestant = document.querySelectorAll(".first-row input");
  for (let i = 0; i < inputValue; i++) {
    if (i % 2) {
      assignedRows++;
      tournamentContestant[i].style.gridColumn = `1 / span 1`;
      tournamentContestant[i].style.gridRow = `${assignedRows} / span 1`;
    } else {
      tournamentContestant[i].style.gridColumn = `2 / span 1`;
      tournamentContestant[i].style.gridRow = `${assignedRows} / span 1`;
    }
  }
}
function renderTournamentStart() {
  let inputField = document.querySelector("input");
  if (!inputField.value) {
    return;
  } else {
    removeStartInputs();
    makeGrid(inputField.value);
    makeInputs(inputField.value);
  }
}
appendStartInputs();
console.log(secondRow.children);
