// TODO: 
// Get background colors to reflect times 
// Setup local storage to collect and display in each entry
// Make sure save buttons only affect current row


//Global Variables
var saveBtn = $(".saveBtn");
var timeDisplay = $("#currentDay");
var now = moment().format('MMMM Do YYYY, h:mm:ss a');
var textArea = $(".activityText")
var activityEntry;

//Displaying Time on Loading page
timeDisplay.text(now)

// Event Listener for saving activities
saveBtn.on("click", function(){
    activityEntry = textArea.val()
    localStorage.setItem("Activity", textArea.val())
    textArea.val(localStorage.getItem("Activity"))
    event.preventDefault();
})

