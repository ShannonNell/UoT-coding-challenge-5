//empty array for tasks to be placed in
var tasks = {};

//find current date and display
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

//load and display tasks
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    //if nothing in localStorage, new object to track new tasks
    if (!tasks) {
        tasks = {};
    };

    $.each(tasks, function(list, arr) {
        var taskP = $("<p>").addClass("description task-info-" + list).text(arr);

        //replace anything in task-info p with this updated taskP
        $("#task-info-" + list).replaceWith(taskP);
    });    
};


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//var auditTask
var auditHour = function() {
    //get the current hour
    var currentHour = moment().hour();
    // console.log(currentHour);

    //loop to test the hours between 0900 - 1700
    for (var workHour = 9; workHour < 18; workHour++) {
        //find hour task id, take off number so can loop through i numbers
        var taskHour = $("#task-" + workHour);
        if (currentHour > workHour) {
            $(taskHour).addClass("past");
        } else if (currentHour === workHour) {
            $(taskHour).addClass("present");
        } else {
            $(taskHour).addClass("future");
        }
    };
};

// text entry was clicked
$(".task-entry").on("click", "p", function() {
    console.log("task entry was clicked");
 //get the current text of the p element
 var text = $(this)
     .text()
     .trim();

    //convert to textarea
    var textInput = $("<textarea>")
        .addClass("form-control col-10")
        .val(text);

    //turn div into textarea
    $(this).replaceWith(textInput);
    //auto focus for user
    textInput.trigger("focus");
})

//taskText was un-focused/update task
$(".task-entry").on("blur", "textarea", function() {
    //get textarea's current value/text
    var text = $(this)
        .val()
        .trim();

    //recreate p element
    var taskP = $("<p>")
        .addClass("taskItem")
        .text(text);

    //replace textarea with p
    $(this).replaceWith(taskP);
});

//save tasks button clicked
$(".saveBtn").on("click", function() {
    // console.log("Save was clicked");

    //find index of this task
    var index = $(".saveBtn").index(this);

    //update task in array and save to localStorage
    tasks[index] = $(this).parent().find(".taskItem").text();

    localStorage.setItem("tasks", JSON.stringify(tasks));
})

//load tasks when the page loads
loadTasks();

// load audit when page loacs
auditHour();

//run interval to check every hour
setInterval(function() {
    auditHour();
}, (1000*60)*60);