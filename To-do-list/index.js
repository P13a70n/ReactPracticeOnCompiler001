let list = [];
//display the task with remove button
function displayTask(){
  let text=""
  for(let i = 0; i < list.length; i++){
    text += "<li> " + list[i] +  " <button onclick='removeTask(" + i + ")'>x</button></li>";
}
document.getElementById("listTask").innerHTML=text;
}
//save the task
function savedTask(){
  localStorage.setItem("task", JSON.stringify(list));
}
//add the task
function addTask(){
  let taskInput = document.getElementById("task");
  let text = taskInput.value;
  if(text === ""){
    return;
  }
  list.push(text);
  taskInput.value="";
  savedTask();
  displayTask();
}
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addTask);
//clear all the addTask
function clearAll(){
  list=[];
  savedTask();
  displayTask();
}
const closeBtn = document.getElementById("clear-all");
closeBtn.addEventListener("click", clearAll);

//remove the single task
function removeTask(i) {
  list.splice(i, 1);
  savedTask();
  displayTask();
}
//load from the localStorage
function loadTasks(){
  let text = localStorage.getItem("task");
  if(text !== null){
    list = JSON.parse(text);
  }
}
loadTasks();
displayTask();
