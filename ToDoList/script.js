//selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click' , deleteCheck);


//functions
//defining add todo function
function addTodo(event){ 

    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    //adding class todo to div
    todoDiv.classList.add("todo");   
    //creat li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    //adding class todo-item to li
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //checkmark button
    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class="fas fa-check"></i>';

    completedbutton.classList.add("complete-btn");
    todoDiv.appendChild(completedbutton);
    //trash button
    const trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
    trashbutton.classList.add("trash-btn");
    todoDiv.appendChild(trashbutton);
 

    todoList.appendChild(todoDiv);
    todoInput.value = "";

}   


function deleteCheck(e){
    console.log(e.target);
    //delete todo
    const item = e.target;
    console.log(item.parentElement);

    if(item.classList[0] == "trash-btn"){
        item.parentElement.remove();

    }
    if(item.classList[0] == "complete-btn"){
        item.parentElement.classList.toggle('completed');
    }
}