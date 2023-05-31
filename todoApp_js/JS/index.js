
let tasks=[

    {
        "Title": 'الرياضة',
        "date":  '15/10/2023',
        "isDone": false
        
    },
    
    {
        "Title": 'الطعام',
        "date":  '15/10/2023',
        "isDone": false
        
    },
    
    {
        "Title": 'الصلاة',
        "date":  '15/10/2023',
        "isDone": false
        
    },

]
function addNewTaskTable()
{
document.getElementById('Tasks').innerHTML="";
let index=0;
for (task of tasks){
let content  =
        
    ` 
        <div class="containerTasks" id="Tasks">

            <!-- Task content-->
            <div class="taskContent">

            <!-- task info -->
            <div class="taskInfo">
                <h2>${task.Title}</h2>

                <div>
                <span><i class="fa-sharp fa-solid fa-calendar"></i></span>  </i><span>${task.date}</span>
                </div>
            </div>

                <!-- //task info -->

                <!-- tasks Actions -->
                
                <div class="actions">
                    <button onclick="deleteTask(${index})" class="circleBtn Delete"><i class="fa-solid fa-trash colorIcon"></i></button>
                    <button class="circleBtn Cheeck"><i class="fa-solid fa-check colorIcon"></i></button>
                    <button  onclick="Edit(${index})" class="circleBtn Edite"><i class="fa-solid fa-pen-to-square colorIcon"></i></button>
                    <!-- <BUtton>per</BUtton> -->
                </div>
                <!-- //tasks Actions// -->
            </div>

            <!-- //task content //-->
            </div>
`
document.getElementById('Tasks').innerHTML +=content
index++;
}
}
//call a function
addNewTaskTable();
//end call a function

document.getElementById('addNewTask').addEventListener('click', function(){

    let taskName =prompt("Enter your task")
    const now = new Date();
    const date =now.getDate() + "/"+ (now.getMonth()+1) +"/" + now.getFullYear() + "|"  + now.getHours()+":" + now.getMinutes();
    let taskobj = {
        "Title": taskName,
        "date": date,
        "isDone": false

    }
    tasks.push(taskobj);
    addNewTaskTable();
})
function deleteTask(index) {
    let task = tasks[index];

    let isConfirmed = confirm("Are you sure you want to delete: " + task.Title);

    if (isConfirmed) {
        tasks.splice(index, 1);
        addNewTaskTable();
    }
}


// function Edit(index){
//     let task = tasks[index];
//         let newTask = prompt("Enter a new task",task.Title)
//         task.Title=newTask;
//         addNewTaskTable();

    
// }
