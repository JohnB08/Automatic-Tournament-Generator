const firstRow = document.querySelector(".first-row");
const secondRow = document.querySelector(".second-row");
const final = document.querySelector(".final");
const attributes = {
  mainInput: {
    id: "tournamentselector",
    name: "tournamentselector",
    type: "number",
    style: "display: block; padding: 0.5em 1em;",
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
};

function appendStartInputs() {
  secondRow.appendChild(
    Object.assign(document.createElement("label"), attributes.mainInputLabel)
  );
  secondRow.appendChild(
    Object.assign(document.createElement("input"), attributes.mainInput)
  );
  secondRow.appendChild(
    Object.assign(document.createElement("button"), attributes.mainBtn)
  );
  firstRow.classList.add("main-menu-rows");
  for (let child of firstRow.children) {
    child.classList.add("place-menu");
  }
  secondRow.classList.add("MainMenu");
}
function renderTournamentStart() {}
appendStartInputs();
console.log(firstRow.children);
