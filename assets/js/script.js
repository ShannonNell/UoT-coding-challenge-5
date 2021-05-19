//find current date and display
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

//empty array for tasks to be placed in
var tasks = [];

// var createTask = function(taskText) {
//     //create task paragraph inside div
//     var taskP = $("<p>")
//         .addClass("task-item")
//         .text(taskText);
// }

//show current tasks
// //create a task
// var createTask = function(taskText){
//     //create task paragraph
//     var taskP = $("<p>")
//         .addClass("m-1")
//         .text(taskText);
    
//     //append task p to parent div
//     $(".task").append(taskP);
// }

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
    console.log(index);

    tasks[index] = $(this).parent().find(".task-entry").text();

    localStorage.setItem("tasks", JSON.stringify(tasks));
})