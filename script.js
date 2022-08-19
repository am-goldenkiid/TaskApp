var ddate = new Date();
var year = ddate.getFullYear();
document.getElementById("year").innerHTML = year;

function mouseClick() {
  var text = document.getElementById("Task").value;
  var date = document.getElementById("date").value;
  if (text === "" && date === "") {
    alert("input field cannot be empty");
  } else {
    var newTask = document.createElement("div");
    newTask.setAttribute("id", "taskInd");

    var textBox = document.createElement("i");
    textBox.innerHTML = text;

    var timing = document.createElement("small");
    timing.innerHTML = date;

    newTask.appendChild(textBox);
    newTask.appendChild(timing);

    var taskarea = document.getElementById("footer");
    taskarea.appendChild(newTask);

    document.getElementById("Task").value = "";
    document.getElementById("date").value = "";
  }
}

var checkClick = false;
function closeBtn() {
  if (checkClick === false) {
    document.getElementById("task_body").style.display = "none";
    document.getElementById("topBtn").style.backgroundColor = "#009900";
    document.getElementById("topBtn").innerHTML = "Open";
    checkClick = true;
  } else {
    document.getElementById("task_body").style.display = "flex";
    checkClick = false;
    document.getElementById("topBtn").innerHTML = "Close";
    document.getElementById("topBtn").style.backgroundColor = "#1c1f23";
  }
}

function clearBtn() {
    var taskArea = document.getElementById("taskInd");
    taskArea.remove()
}

