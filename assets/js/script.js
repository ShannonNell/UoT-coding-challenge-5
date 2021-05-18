var currentDayEl = document.querySelector("#currentDay");

//find current date and display
currentDayEl.textContent = moment().format("dddd, MMMM Do, YYYY");


// //create a task
// var createTask = function(taskText){
//     //create task paragraph
//     var taskP = $("<p>")
//         .addClass("m-1")
//         .text(taskText);
    
//     //append task p to parent div
//     $(".task").append(taskP);
// }

// //task text was clicked
// $(".task").on("click","p", function() {
//     //get the current text of the p element
//     var text = $(this)
//         .text()
//         .trim();

//     //replace with new textarea
//     var textInput = $("<textarea>")
//         .addClass("form-control")
//         .val(text);

$(".task").on("click", function() {
    //conver to textarea
    var textInput = $("<textarea>")
        .addClass("form-control col-10");

    //turn div into textarea
    $(this).replaceWith(textInput);

    //auto focus for user
    textInput.trigger("focus");

    console.log("I have been clicked");
})