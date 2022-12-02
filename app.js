var listOfActivities = [];
var input = document.getElementById("input");
var toDoList = document.getElementById("todolist");
document.getElementById("button").onclick = click;
function click() {
    listOfActivities.push(input.value);
    console.log(listOfActivities);
    input.value = "";
    showList();
}
function showList() {
    toDoList.innerHTML = " ";
    listOfActivities.forEach(function (n, i) {
      toDoList.innerHTML +=
        "<li>" +
        n +
        "<a onclick='editItem(" +
        i +
        ")'>Edit</a>" +
        "<a onclick='deleteItem(" +
        i +
        ")'>&times | </a></li>";
    });
}
function deleteItem(i) {
    listOfActivities.splice(i, 1);
    showList();
}
function editItem(i) {
    var newValue = prompt("Please insert your new value");
    listOfActivities.splice(i, 1, newValue);
    showList();
}