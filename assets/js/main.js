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

// show iniatial activitis
showContent()

// decide what show
function showContent() {
    // check if there is acivities in the array
    if (activities.length > 0) {
        emptyMessage.innerText = 'Ci sono elementi'
    } else {
        emptyMessage.innerText = 'There is no Activity yet!'
    }
}


// add activity
function addActivity() {

    // intercept the new written activity
    const newActivity = addInput.value;

    // add the new activity to the activities array
    activities.push(newActivity);

    // clean the input
    addInput.value = ''
}

// listen the click and call the function
addButton.addEventListener("click", function () {
    addActivity()
    console.log('cliccato');
    console.log(activities);

    // show new activities
    showContent()
})



