const input = document.getElementById("input");
const addButoon = document.getElementById("addbutton");
const tasksContainer = document.getElementById("task-container");

// load task on page load
window.onload = () => {
    let storedData = JSON.parse(localStorage.getItem("tasks")) || [];
    storedData.forEach(task => loadTasks(task))
};


addButoon.onclick = taskCunstructor;
const taskArray = [];

// create task function
function taskCunstructor() {

    // check if the input is empty
    if(input.value === "" ) {
        alert("Please Enter a task");
        return;
    }
    
    // arrays to handle deletion from local storage
    let deletdItemfromarray = [];
    let idetedArray =[];

    // store the task in the local storage
    taskArray.length = 0;
    taskArray.push(...(JSON.parse(localStorage.getItem("tasks")) || []));
    // check if the task is already added
    if (taskArray.includes(input.value)) {
        alert("This task is already added");
        return;
    } else {
        taskArray.push(input.value);
        localStorage.setItem("tasks" , JSON.stringify(taskArray));
    }

    
    // crete the div that will contain the task with it name and delete button
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");

    // create the task name and it value
    const taskName = document.createElement("p");
    taskName.textContent = input.value;

    // create the delete button 
    const deletButton = document.createElement("button");
    deletButton.innerHTML = "Delete";

    // delete button function
    deletButton.onclick =  () => {

        taskDiv.remove();
        deletdItemfromarray = JSON.parse(localStorage.getItem("tasks")) || [];
        idetedArray = deletdItemfromarray.filter(task => task !== taskName.textContent);
        localStorage.setItem("tasks" , JSON.stringify(idetedArray));
    }
    

    // append the task name and delete button to the task div
    taskDiv.appendChild(taskName);
    taskDiv.appendChild(deletButton);

    // append the task div to the main parrent div
    tasksContainer.prepend(taskDiv);

    // clear the input value
    input.value = "";


};

// load tasks from local storage - function
function loadTasks(task) {

    // crete the div that will contain the task with it name and delete button
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");

    // create the task name and it value
    const taskName = document.createElement("p");
    taskName.textContent = task;

    // create the delete button 
    const deletButton = document.createElement("button");
    deletButton.innerHTML = "Delete";

    // delete button function
    deletButton.onclick =  () => {
        taskDiv.remove();
        let deletdItemfromarray = JSON.parse(localStorage.getItem("tasks")) || [];
        let idetedArray = deletdItemfromarray.filter(task => task !== taskName.textContent);
        localStorage.setItem("tasks" , JSON.stringify(idetedArray));
    }

    // append the task name and delete button to the task div
    taskDiv.appendChild(taskName);
    taskDiv.appendChild(deletButton);

    // append the task div to the main parrent div
    tasksContainer.prepend(taskDiv);

};

