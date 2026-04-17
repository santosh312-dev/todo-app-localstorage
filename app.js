const todoList = document.querySelector(".todoList")
const searchBox = document.querySelector('.searchBox')
const searchContainer = document.querySelector('.searchContainer')

function createToDo(){
    searchValue=searchBox.value.trim()
    const li = document.createElement("li")
    li.classList.add('todo')
    todoList.appendChild(li)
    const p=document.createElement('p')
    p.innerText=searchValue
    li.appendChild(p)
    const span = document.createElement('span')
    span.innerHTML="&#10006"
    li.appendChild(span)
 
    const textOfTodo = li.firstChild
    textOfTodo.addEventListener('click',()=>{
    completedTodo(textOfTodo)
})

    const DeleteTodoIcon = li.children[1]
    DeleteTodoIcon.addEventListener('click',()=>{
        deleteTodo(DeleteTodoIcon)
    })
    saveData()
}

function deleteTodo(DeleteTodoIcon){
    DeleteTodoIcon.parentElement.remove()
    saveData()
}

function completedTodo(textOfTodo){
    textOfTodo.classList.toggle('completed')
    saveData()
}

searchContainer.addEventListener('submit',(e)=>{
    e.preventDefault()
    createToDo()
    searchBox.value=''
})

function saveData(){
    localStorage.setItem("data",todoList.innerHTML)
}

function showTask() {
    todoList.innerHTML = localStorage.getItem("data") || ""; // Restore tasks
    const todos = document.querySelectorAll(".todo"); // Select all the restored tasks

    todos.forEach(todo => {
        const textOfTodo = todo.querySelector("p"); // Get the text element
        const deleteIcon = todo.querySelector("span"); // Get the delete icon

        // Reattach event listener for marking as completed
        textOfTodo.addEventListener("click", () => {
            completedTodo(textOfTodo);
        });

        // Reattach event listener for deleting
        deleteIcon.addEventListener("click", () => {
            deleteTodo(deleteIcon);
        });
    });
}

showTask()