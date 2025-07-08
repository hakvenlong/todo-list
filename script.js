let getTask = document.getElementById('task-input');
let taskList = document.querySelector('.task-list');
let isEdit = true;
let isCompleted = true;

let isTrue = true;

function mainBtn(){
    if(validation()){
        addTodo()
    }
}

function validation(){
    if(getTask.value == ''){
        alert('Plase input value!')
        isTrue = false;
    }
    return isTrue;
}

function addTodo(){
    let todo = `
     <div id="tasks">
        <div class="task">
            <div class="content">
                <input class="text" type="text" readonly="readonly" value="${getTask.value}">
            </div>
            <div class="actions">
                <button class="Edit" onclick = 'editTodo(this)'>Edit</button>
                <button class="Completed" onclick = 'completedTodo(this)'>Completed</button>
                <button class="Delete" onclick = 'deleteTodo(this)'>Delete</button>
            </div>
        </div>
    </div>
    `
    taskList.insertAdjacentHTML('afterbegin', todo);
    getTask.value = '';
    
}

function deleteTodo(btnDelete){
    btnDelete.parentElement.parentElement.remove();
    console.log(taskList);

}

function editTodo(btnEdit){
    let getInput = btnEdit.parentElement.parentElement.querySelector('.text');
    // 1 ===================================================

    if(isEdit){
        getInput.removeAttribute('readonly');
        btnEdit.innerHTML = 'Save';
        isEdit = false;
    }else{
        getInput.setAttribute('readonly','readonly');
        btnEdit.innerHTML = 'Edit';
        isEdit = true;
    }

    // 2 ===================================================
    
    // if( btnEdit.innerHTML == 'Edit'){
    //      getInput.removeAttribute('readonly');
    //      btnEdit.innerHTML = 'Save';
    // }else{
    //     getInput.setAttribute('readonly','readonly');
    //     btnEdit.innerHTML = 'Edit';
    // }
    
}

//completedTodo

function completedTodo(btnCompleted){
    let getInput = btnCompleted.parentElement.parentElement.querySelector('.text');
    if(isCompleted){
        getInput.style.textDecoration = 'line-through';
        isCompleted = false;
        btnCompleted.innerHTML = 'Uncompleted';

    }else{
        getInput.style.textDecoration = '';
        isCompleted = true;
        btnCompleted.innerHTML = 'Completed';
    }

}
