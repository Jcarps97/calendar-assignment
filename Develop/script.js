// TODO: 
// Get background colors to reflect times 
// Setup local storage to collect and display in each entry
// Make sure save buttons only affect current row


//Global Variables
var saveBtn = $(".saveBtn");
var timeDisplay = $("#currentDay");
var now = moment();
var currentHour = moment().format("LT");
var textArea = $(".activityText");
var activityEntry;
var selectedInput;
var selectedTime;
var comparedTime = moment().format("HH")


// The stuff for coloring
textArea.each(function(index) {
    
        var dataHour = $(this).closest(".row").children(".time").attr("data-hour")
    
        if (dataHour > comparedTime ) {
            $(this).addClass("future")}
        if (dataHour < comparedTime ) {
            $(this).addClass("past")}
        if (dataHour === comparedTime ) {
            $(this).addClass("present")}

})


//Displaying Time on Loading page
timeDisplay.text(now)



// Event Listener for saving activities
saveBtn.on("click", function(){
    // debugger
    // use $(this) to get the button that was clicked, and traverse the dom to find the sibling textarea
    selectedInput = $(this).closest(".row").children("input")
    // console.log(selectedInput)
    selectedTime = $(this).closest(".row").children(".time").attr("data-hour")
    // console.log(selectedTime)
    localStorage.setItem(selectedTime, selectedInput.val())


    }
)




