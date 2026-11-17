
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
