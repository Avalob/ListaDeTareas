document.getElementById("addBtn").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = ""; 
    }
});

function addTask(task) {
    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `${task} <i class="fas fa-trash deleteBtn"></i>`;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    let deleteBtn = li.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    taskList.appendChild(li);
}
