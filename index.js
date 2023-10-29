const firstRow = document.querySelector(".first-row");
const secondRow = document.querySelector(".second-row");
const final = document.querySelector(".final");
const tournamentSizeSelector = document.createElement("input");
const tournamentSizeSelectorLabel = document.createElement("label");
const tournamentSubmitBtn = document.createElement("button");
const tournamentSizeSelectorAttributes = {
  id: "tournamentselector",
  name: "tournamentselector",
  type: "number",
  style: "display: block; align-self: center; padding: 0.5em 1em;",
};
const tournamentSizeSelectorLabelAttributes = {
  for: "tournamentselector",
  innerText: "Choose ammount of Contestants",
  style: "display: block; align-self: center; margin: auto 0 1em 0;",
};
const tournamentSubmitBtnAttributes = {
  text: "Set Up Tournament",
  style:
    "display: block; align-self: center; margin: 1em 0 auto 0; padding: 0.5em 1em; background: blue; border: none; border-radius: 1em; color: white;",
};
for (let attribute of Object.keys(tournamentSizeSelectorAttributes)) {
  tournamentSizeSelector.setAttribute(
    attribute,
    tournamentSizeSelectorAttributes[attribute]
  );
}
for (let attribute of Object.keys(tournamentSizeSelectorLabelAttributes)) {
  tournamentSizeSelectorLabel.setAttribute(
    attribute,
    tournamentSizeSelectorLabelAttributes[attribute]
  );
}
tournamentSizeSelectorLabel.innerText =
  tournamentSizeSelectorLabelAttributes.innerText;
for (let attribute of Object.keys(tournamentSubmitBtnAttributes)) {
  tournamentSubmitBtn.setAttribute(
    attribute,
    tournamentSubmitBtnAttributes[attribute]
  );
}
tournamentSubmitBtn.textContent = tournamentSubmitBtnAttributes.text;
function appendStartInputs() {
  firstRow.appendChild(tournamentSizeSelectorLabel);
  firstRow.appendChild(tournamentSizeSelector);
  firstRow.appendChild(tournamentSubmitBtn);
}
appendStartInputs();
console.log(tournamentSizeSelectorLabel);
