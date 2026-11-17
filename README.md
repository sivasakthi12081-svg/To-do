# Ex03 To-Do List using JavaScript
## Date: 17-11-2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
```
index.html


<!DOCTYPE html>
<html>
<head>
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">

        <h1>My To-Do List</h1>

        <div class="input-box">
            <input type="text" id="taskInput"
                   placeholder="Enter your task">
            <button onclick="addTask()">Add</button>
        </div>

        <h3 id="count">Total Tasks: 0</h3>
        <h3 id="done">Completed: 0</h3>

        <ul id="taskList"></ul>

        <button class="clear" onclick="clearAll()">
            Clear All
        </button>

    </div>
    <script src="script.js"></script>
 
</body>
</html>


style.css


* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;

    background: linear-gradient(
        135deg,
        #ffb6c1 0%,
        #ffc0cb 25%,
        #f8c8dc 50%,
        #e6b8e8 75%,
        #dda0dd 100%
    );

    margin: 0;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
}

/* Main Container */

.container {
    background: #fff5f7;
    width: 420px;
    max-width: 90%;
    padding: 30px;
    border-radius: 18px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* Heading */

h1 {
    color: #9b416d;
    margin-bottom: 25px;
}

/* Input */

.input-box {
    display: flex;
    gap: 8px;
}

input {
    flex: 1;
    min-width: 0;
    padding: 12px;
    border: 1px solid #e6a9c5;
    border-radius: 7px;
    outline: none;
}

/* Buttons */

button {
    padding: 10px 15px;
    border: none;
    border-radius: 7px;
    background: #d45d91;
    color: white;
    cursor: pointer;
}

button:hover {
    background: #b83d75;
}

/* Task Count */

h3 {
    color: #9b416d;
    font-size: 16px;
}

/* Task List */

ul {
    padding: 0;
}

li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 12px;
    margin: 12px 0;
    border-radius: 9px;
    list-style: none;
}

/* Different Static Task Colours */

li:nth-child(5n+1) {
    background: #DFF3FF;
}

li:nth-child(5n+2) {
    background: #FFE2EA;
}

li:nth-child(5n+3) {
    background: #E1F7E7;
}

li:nth-child(5n+4) {
    background: #FFF1CC;
}

li:nth-child(5n+5) {
    background: #EDE3FF;
}

/* Task Text */

.task-text {
    flex: 1;
    text-align: left;
    overflow-wrap: anywhere;
}

.completed {
    color: #159957;
    font-weight: bold;
}

/* Edit and Delete */

.delete {
    background: #e74c3c;
}

.edit {
    background: #f39c12;
}

/* Clear Button */

.clear {
    background: #34495e;
    margin-top: 10px;
}

/* Responsive */

@media (max-width: 450px) {
    .container {
        padding: 20px;
    }
}


script.js


let tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        name: text,
        completed: false
    });

    input.value = "";
    displayTasks();
}

function displayTasks() {

    let list = document.getElementById("taskList");
    list.innerHTML = "";

    let completedCount = 0;

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.onchange = function() {
            task.completed = checkbox.checked;
            displayTasks();
        };

        let span = document.createElement("span");
        span.textContent = task.name;
        span.className = "task-text";

        if (task.completed) {
            span.classList.add("completed");
            completedCount++;
        }

        let edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.className = "edit";

        edit.onclick = function() {
            let newName = prompt("Edit task:", task.name);

            if (newName !== null && newName.trim() !== "") {
                task.name = newName.trim();
                displayTasks();
            }
        };

        let del = document.createElement("button");
        del.textContent = "Delete";
        del.className = "delete";

        del.onclick = function() {
            tasks.splice(index, 1);
            displayTasks();
        };

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(edit);
        li.appendChild(del);

        list.appendChild(li);
    });

    document.getElementById("count").textContent =
        "Total Tasks: " + tasks.length;

    document.getElementById("done").textContent =
        "Completed: " + completedCount;
}

function clearAll() {

    if (confirm("Delete all tasks?")) {
        tasks = [];
        displayTasks();
    }
}

```

## OUTPUT
![alt text](<Screenshot 2026-11-17 171638.png>)

## RESULT
The program for creating To-do list using JavaScript is executed successfully.
