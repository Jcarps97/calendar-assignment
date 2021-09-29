// TODO: 
// Get background colors to reflect times 
// Setup local storage to collect and display in each entry
// Make sure save buttons only affect current row


//Global Variables
var saveBtn = $(".saveBtn");
var timeDisplay = $("#currentDay");
var now = moment().format('MMMM Do YYYY, h:mm:ss a');
var textArea = $(".activityText");
var activityEntry;
var allNotes = [
    {
        timeSlot: "9:00:00 am",
        activityLog: textArea,
        button: saveBtn,
    },
    {
        timeSlot: "10:00:00 am",
        activityLog: textArea,
        button: saveBtn,
    },
    {
        timeSlot: "11:00:00 am",
        activityLog: textArea,
        button: saveBtn,
    },
    {
        timeSlot: "12:00:00 pm",
        activityLog: textArea,
        button: saveBtn,
    },
    {
        timeSlot: "1:00:00 pm",
        activityLog: textArea,
        button: saveBtn,
    },
    {
        timeSlot: "2:00:00 pm",
        activityLog: textArea,
        button: saveBtn,
    },
    {
        timeSlot: "3:00:00 pm",
        activityLog: textArea,
        button: saveBtn,
    },
    {
        timeSlot: "4:00:00 pm",
        activityLog: textArea,
        button: saveBtn,
    },
    {
        timeSlot: "5:00:00 pm",
        activityLog: textArea,
        button: saveBtn,
    }
];

//Displaying Time on Loading page
timeDisplay.text(now)

// Event Listener for saving activities
saveBtn.on("click", function(){
    debugger
    activityEntry = textArea.val()
    // localStorage.setItem("Activity", textArea.val())
    // textArea.val(localStorage.getItem("Activity"))
    // if ((this)===allNotes.button){
    //     localStorage.setItem("Activity", textArea.val())
    //     textArea.val(localStorage.getItem("Activity"))
    //     .closest(allNotes.activityLog)
        //Above item is not being detected in debugger, format adjustment required
    }
//}
)

//Recording activity on corresponding slot
function recordActivity() {

}

