const firstRow = document.querySelector(".first-row");
const secondRow = document.querySelector(".second-row");
const inputLabel = document.createElement("label");
const mainBtn = document.createElement("button");
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
    style: "display: block; padding: 0.5em 1em;",
  },
  tournamentInputLabel: {
    for: "tournamentInput",
    innerHTML: "Choose Contestant",
    style: "display: block;",
  },
};

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
function renderTournamentStart() {
  let inputValue = document.querySelector("input");
  removeStartInputs();
  for (let i = 0; i < inputValue.value; i++) {
    const contestantLabel = document.createElement("label");
    contestantLabel.appendChild(
      Object.assign(document.createElement("input"), attributes.tournamentInput)
    );
    secondRow.appendChild(contestantLabel);
  }
  for (let key of Object.keys(attributes.tournamentInputLabel)) {
    contestantLabel.setAttribute(key, attributes.tournamentInputLabel[key]);
  }
}
appendStartInputs();
console.log(secondRow.children);
