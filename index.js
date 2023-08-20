function addtask() {
    event.preventDefault();

    var Name = document.getElementById("name").value;
    var taskName = document.getElementById("tname").value;
    var taskDescription = document.getElementById("tdesc").value;

    if (Name.trim() === "" || taskName.trim() === "" || taskDescription.trim() === "") {
        alert("Please fill out all required fields.");
        return;
    }


    var taskElement = document.createElement("table");
    taskElement.className = "task";


    var taskContent =
        `
        <tr>
        <th>User Name </th>
        <th>Task Name </th>
        <th>Task description</th>
        <th class="dlete">Status</th>
        <th class="delete">Delete</th>
        </tr>

        <tr>
        <td>${Name} </td>
        <td>${taskName}  </td>
        <td>${taskDescription}</td>
        <td class="deete">In progess</td>
        <td class="delet"><button class="delete-task">X</button></td>
        </tr>
    `;

    taskElement.innerHTML = taskContent;


    var taskList = document.getElementById("task-list");
    taskList.appendChild(taskElement);

    var completedtasklist = document.getElementById("completed-task-list");


    document.getElementById("form").reset();


    var deleteButton = taskElement.getElementsByClassName("delete-task")[0];
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskElement);
        completedtasklist.appendChild(taskElement);
        taskElement.querySelector(".delete").remove();
        taskElement.querySelector(".deete").remove();
        taskElement.querySelector(".dlete").remove();
        taskElement.querySelector(".delet").remove();
    });
    alert("task added successfully.");
}
