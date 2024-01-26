let todoValue = document.getElementById('todoText');
const listItems = document.getElementById('list-items');
const addUpdateClick = document.getElementById("addUpdateClick");
let updateText;
let updateTextParent;
let todoData = JSON.parse(localStorage.getItem("item-data")) ||[];
let todoDatalocal =JSON.parse(localStorage.getItem("item-data")) ||[];
// let todoDataRetive = localStorage.getItem("item-data") || [];
console.log(todoData)
if(todoDatalocal.length != 0){
todoDatalocal.forEach((item) => {
    let li = document.createElement("li");
    const todoItem = `<div ondblclick="completeTodoItem(this)">${item}</div><div><img src="./images/edit.png" onclick="updateTodoItem(this)" class="edit todo-controls"> <img class="delete todo-controls"  onclick="deleteTodoItem(this)" src="./images/delete.png"></div>`;
    li.innerHTML = (todoItem);
    listItems.appendChild(li);
});
}else{
    console.log("this is empty")
}
// listItems = todoDataRetive




todoValue.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
        addUpdateClick.click();
    }
})

function createTodoData(){
    // alert(todoValue.value)
    if(todoValue.value === ""){
        alert("Todo can't be Noting!")
        todoValue.focus();
    }

    let li = document.createElement("li");
    const todoItem = `<div ondblclick="completeTodoItem(this)">${todoValue.value}</div><div><img src="./images/edit.png" onclick="updateTodoItem(this)" class="edit todo-controls"> <img class="delete todo-controls"  onclick="deleteTodoItem(this)" src="./images/delete.png"></div>`;
    li.innerHTML = (todoItem);
    listItems.appendChild(li);
    todoData.push(todoValue.value)
    todoDatalocal = localStorage.setItem("item-data", JSON.stringify(todoData));
    todoValue.value = "";
   
}

function completeTodoItem(e){
    console.log(e);
    if(e.parentElement.querySelector("div").style.textDecoration === ""){
        e.parentElement.querySelector("div").style.textDecoration = "line-through";
    }
}

function updateSelectionItems(){
    updateText.innerHTML = todoValue.value;
    addUpdateClick.innerHTML = "&#128077;"
    todoValue.value = ""
    updateTextParent.style.border = "none"
    
};

function updateTodoItem(e){
    if(e.parentElement.parentElement.querySelector("div").style.textDecoration === ""){
    todoValue.value = e.parentElement.parentElement.querySelector("div").innerHTML;
    addUpdateClick.setAttribute("onclick", "updateSelectionItems()");
    updateText = e.parentElement.parentElement.querySelector("div");
    updateTextParent = e.parentElement.parentElement;
    console.log(updateTextParent);
    updateTextParent.style.border = "1px solid limegreen";
    addUpdateClick.innerHTML = "&#9997;"
    }
}

function deleteTodoItem(e){
    let deleteValue = e.parentElement.parentElement.querySelector("div").innerHTML;
    if(confirm("Are you sure you want to delete this?")){
        e.parentElement.parentElement.parentElement.querySelector('li').remove();
       
    }
}