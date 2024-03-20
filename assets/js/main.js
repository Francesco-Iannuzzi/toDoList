// select Dom Element
const todoList = document.querySelector('.todo_list');
const addInput = document.querySelector('#add_todo_item');
const addButton = document.querySelector('.add_item');
const emptyMessage = document.querySelector('.empty_message');

// create activities Array
const activities = [];


// create activity template
function createActivityTemplate(activity) {
    return `
    <li class="todo_item">
        <div class="todo_check">
            <img class="check" src="./assets/img/check.svg" alt="check">
        </div>
        <p class="todo_text">${activity}</p>
    </li>`
}

// show initial activitis
showContent();

// decide what show
function showContent() {
    // clean empty message and todolist
    emptyMessage.innerText = '';
    todoList.innerText = '';

    // check if there are acivities in the array

    // if there are show the activities
    if (activities.length > 0) {

        // clean the todolist
        todoList.innerHTML = '';

        // cycle the array and stamp the items
        activities.forEach(activity => {

            todoList.innerHTML += createActivityTemplate(activity)
        });

        checksCliccable();

        // if there aren't show empty message
    } else {
        emptyMessage.innerText = 'There are no Activities yet!'
    }

}


// add activity
function addActivity() {

    // check if there are a characters in the input
    if (addInput.value.length > 0) {

        // intercept the new written activity
        const newActivity = addInput.value.trim();

        // add the new activity to the activities array
        activities.push(newActivity);
    }


    // clean the input
    addInput.value = ''
}


// listen the click on checks item and remove the activity
function checksCliccable() {
    const checksItem = document.querySelectorAll('.todo_check');

    // cycle the check items and make they cliccable
    checksItem.forEach(function (check, index) {
        check.addEventListener("click", function () {

            // remove activity
            activities.splice(index, 1);

            // show new todolist
            showContent()
        })
    });
}


// listen the click and call the function
addButton.addEventListener("click", function () {
    addActivity();

    // show new activities
    showContent();
})