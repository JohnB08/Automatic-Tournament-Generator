const firstRow = document.querySelector(".first-row");
const secondRow = document.querySelector(".second-row");
const final = document.querySelector(".final");
const tournamentSizeSelector = document.createElement("input");
const tournamentSizeSelectorLabel = document.createElement("label");
const tournamentSubmitBtn = document.createElement("button");
const attributes = {
  mainInput: {
    id: "tournamentselector",
    name: "tournamentselector",
    type: "number",
    style: "display: block; padding: 0.5em 1em;",
  },
  mainInputLabel: {
    for: "tournamentselector",
    innerText: "Choose ammount of Contestants",
    style: "display: block; ",
  },
  mainBtn: {
    text: "Set Up Tournament",
    style:
      "display: block; padding: 0.5em 1em; background-color: blue; border: none; border-radius: 1em; color: white; transition: 300ms;",
    onMouseOver: "this.style.backgroundColor = 'black'",
    onMouseLeave: "this.style.backgroundColor = 'blue'",
  },
};
for (let attribute of Object.keys(attributes.mainInput)) {
  tournamentSizeSelector.setAttribute(
    attribute,
    attributes.mainInput[attribute]
  );
}
for (let attribute of Object.keys(attributes.mainInputLabel)) {
  tournamentSizeSelectorLabel.setAttribute(
    attribute,
    attributes.mainInputLabel[attribute]
  );
}
tournamentSizeSelectorLabel.innerText = attributes.mainInputLabel.innerText;
for (let attribute of Object.keys(attributes.mainBtn)) {
  tournamentSubmitBtn.setAttribute(attribute, attributes.mainBtn[attribute]);
}
tournamentSubmitBtn.textContent = attributes.mainBtn.text;
function appendStartInputs() {
  secondRow.appendChild(tournamentSizeSelectorLabel);
  secondRow.appendChild(tournamentSizeSelector);
  secondRow.appendChild(tournamentSubmitBtn);
  firstRow.classList.add("main-menu-rows");
  for (let child of firstRow.children) {
    child.classList.add("place-menu");
  }
  secondRow.classList.add("MainMenu");
}

appendStartInputs();
console.log(firstRow.children);
