// RANKING LIST START CODE

// HTML Variables
let outputEl = document.getElementById("output");

// Ranking List Array
let rankList = ["Pizza", "Pasta", "Salad", "Soup"];

drawRankList();

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Implement Menu Selection
  if (selection === "add") {
    addItem();
  } else if (selection === "remove-last") {
    removeLast();
  } else if (selection === "insert") {
    insert();
  } else if (selection === "remove-pos") {
    removePos();
  } else if (selection === "move") {
    move();
  } else if (selection === "edit") {
    edit();
  } else if (selection == "empty") {
    empty();
  }

  // Redraw rankList after changes have been made
  drawRankList();
}

// FUNCTIONS TO DEFINE
function drawRankList() {
  for (let i = 0; i < rankList.length; i++) {
    outputEl.innerHTML += `<p>${i + 1}: ${rankList[i]}</p>`;
  }
}

function addItem() {
  outputEl.innerHTML = "";
  let item = prompt("Enter Item:");
  rankList.push(item);
}

function removeLast() {
  outputEl.innerHTML = "";
  rankList.pop();
}

function insert() {
  outputEl.innerHTML = "";
  let position = +prompt("Insert Position:");
  let item = prompt("Enter Item:");
  rankList.splice(position - 1, 0, item);
}

function removePos() {
  outputEl.innerHTML = "";
  let position = +prompt("Position to remove:");
  rankList.splice(position - 1, 1);
}

function move() {
  outputEl.innerHTML = "";
  let move_from = +prompt("Move item from:");
  let move_to = prompt("Move item to:");
  let item = rankList[move_from - 1];
  rankList.splice(move_from - 1, 1);
  rankList.splice(move_to - 1, 0, item);
}

function edit() {
  outputEl.innerHTML = "";
  let position = +prompt("Enter position:");
  let replace_item = prompt("Replace with:");
  rankList[position - 1] = replace_item;
}

function empty() {
  rankList = [];
  outputEl.innerHTML = "";
}
