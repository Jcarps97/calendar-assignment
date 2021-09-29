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
var allNotes = ["", "", "", "", "", "", "", "", ""];


// Might need, later
// JSON.stringify



// For determining past/present/future
// $("input").each(function(){
//     var dataHour = $(this).attr("data-hour")
//     console.log(dataHour);
//   Color coding
//     if(data-hour > currentHour) {
//     addClass("future")
//     }
//     if else(data-hour < currentHour) {
//     addClass("past")    
//     }
//     else {
//         addClass("present")
//     }

// })



//Displaying Time on Loading page
timeDisplay.text(now)



// Event Listener for saving activities
saveBtn.on("click", function(){
    // use $(this) to get the button that was clicked, and traverse the dom to find the sibling textarea
    selectedInput = $(this).closest(".row").children("input")
    localStorage.setItem(allNotes, selectedInput.val())
    
    // console.log( $(this).closest(".row").children("input") );


    // figure out based on the timeblock what item in the array should be updated
    // update just that item 
    // save the entire array to local storage


    // activityEntry = textArea.val()
    // console.log(activityEntry)
    // localStorage.setItem("Activity", textArea.val())
    //textArea.val(localStorage.getItem("Activity"))
    // if ((this)===allNotes.button){
    //     localStorage.setItem("Activity", textArea.val())
    //     textArea.val(localStorage.getItem("Activity"))
    //     .closest(allNotes.activityLog)
        // Above item is not being detected in debugger, format adjustment required
    }
)

// Color coding
// if(data-hour>now) {
//     addClass("future")
// }
//     if else (data-hour<now) {
//     addClass("past")    
//     }
//     else {
//         addClass("present")
//     }

function initializa(){

}


function recordActivity() {

}



