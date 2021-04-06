/* должно выбирать цвет при загрузке страницы
window.onload = function () {
  document.getElementById("red").focus();
};
/*--------------*/

/*
//*??????????????????
let selectedInput;

document.getElementById("").onclick = function (event) {
  let target = event.target; // где был клик?

  if (target.tagName != "input") return; // не на TD? тогда не интересует

  highlight(target); // подсветить TD
};

function highlight(input) {
  if (selectedInput) {
    // убрать существующую подсветку, если есть
    selectedInput.classList.remove("highlight");
  }
  selectedInput = input;
  selectedInput.classList.add("highlight"); // подсветить новый td
}
//???????????????
*/

function taskAdder() {
  let newTask = document.createElement("div");
  let TaskByUser = document.getElementById("Text").value;
  if (TaskByUser.length > 0) {
    newTask.innerHTML =
      "<div id='taskCheckBoxBorder'><input type='checkbox'></div>  " +
      "<div id='taskTextBorder'>" +
      TaskByUser +
      "</div>";
    newTask.className = "newTask";

    document.getElementById("mainTaskWindow").prepend(newTask);
    document.getElementById("Text").value = "";
  }
}
/*taskAdder();*/

/*function taskComplete() {}*/

function taskColorifer() {
  console.log("1");
}

function colorButtonClickHandler(event) {
  /* event.preventDefault(); не пойму что делает*/

  let colorPicked = event.target.id;

  console.log(colorPicked);
  return colorPicked;
}
