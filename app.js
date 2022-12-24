var taskList = document.getElementById("taskList");

function submit(el) {
    if (event.keyCode == 13) {
        let task = document.createElement("div");
        task.className = "task";
        task.innerHTML = `<p>${el.value}</p> <button onclick=(deleteTask(this))>&#x274c;</button>`;
        taskList.append(task);
        el.value = "";
    }
}

function deleteTask(el) {
    el.parentElement.remove();
}