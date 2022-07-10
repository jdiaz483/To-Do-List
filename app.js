const taskInput = document.getElementById("taskInput");     
const addTask = document.getElementById("addTask");     
const pendingTasks = document.getElementById("pendingTasks");   
const completedTasks = document.getElementById("completedTasks"); 


addTask.addEventListener("click", () => {   // Event Listener on the Add Button to trigger the creation of the list
    switch (taskInput.value) {  // Switch to ensure the Text Input cannot be left blank
        case "":
            window.alert("Add new task!")
            return;
    }   
    const taskName = taskInput.value
    taskInput.value = ""

    const div = document.createElement("div")    //  Creates a Task Div 
    div.className = "task"
    const check = document.createElement("input");  // Creates Checkbox
    check.setAttribute("type", "checkbox");
    check.className = "checkbox";
    div.appendChild(check);
    const title = document.createElement("h3");     //  The List Item, taken from the task Input and made a list-item
    title.innerHTML = taskName;
    div.appendChild(title);
    const remove = document.createElement("button")     //  Creates Remove Button
    remove.innerHTML = "Remove";
    div.appendChild(remove);
    
    remove.addEventListener('click', function() {    // Event Listener on the Remove Button 
        const p_dom = this.parentNode;
        p_dom.remove();
    });
    
    pendingTasks.appendChild(div);
    
    const checks = document.getElementsByClassName("checkbox");  
    for (i = 0; i < checks.length; i++) {   
        checks[i].onclick = function() {
            const p_dom = this.parentNode;
            const parent = p_dom.parentNode;
            if (parent == pendingTasks) {
                completedTasks.appendChild(p_dom);
            } else if (parent == completedTasks) {   // Removing task item from the Pending Tasks Section  
                pendingTasks.appendChild(p_dom);
            };
        };
    };
});
