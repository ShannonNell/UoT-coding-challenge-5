//find current date and display
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

//empty array for tasks to be placed in
var tasks = {};

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


// text entry was clicked
$(".task-entry").on("click", "p", function() {
    console.log("taskentry was clicked");
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
    console.log("Save was clicked");

    //find index of this task
    var index = $(".saveBtn").index(this);

    //update task in array and save to localStorage
    tasks[index] = $(this).parent().find(".taskItem").text();

    localStorage.setItem("tasks", JSON.stringify(tasks));
})

loadTasks();
