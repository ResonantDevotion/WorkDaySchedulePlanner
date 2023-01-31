
# Pseudocode - Challenge 7
## Link moment.js, Active Jquery, Bootstrap
- commit ///
##  Display the current day at the top of the calender when a user opens the planner.
- let time = $(‘#timer’)
time.moment().format(Do MMMM YYYY hh:mm:ss a)
- commit  ///
## Present timeblocks for standard business hours when the user scrolls down.
- make a table ////
- commit ///
## Color-code each timeblock based on past, present, and future when the timeblock is viewed.
-  code reads the time, uses an if statement to dictate the colour of the timeblock. if current time red, if past grey, if future green.
- Create time object
    time = [
        {9am: 9:00 - 9:59}
        {10am: [10:00, 10:59]}
    ]
let currentTime = moment().format("timeobject format")
- Create variables for current, past and present time.
    - let currentTimeColor = function() {
        $().attr("backgroundcolor", "red")
    }
    - let pastTimeColor = function() {
        $().attr("backgroundcolor", "grey")
    }
    - let futureTimeColor = function() {
        $().attr("backgroundcolor", "green")
    }
    -
- Link the variables to the 'setTime'
- commit
## Allow a user to enter an event when they click a timeblock
- Add input fields on each row
- commit
## Save the event in local storage when the save button is clicked in that timeblock.
- Link the value of the input fields to the save button
- add event listener to save button.
- commit
## Persist events between refreshes of a page
- Link value of input fields to local storage //
- commit //
 function settime()
 for (let i = 0; i < time.length; i++) {
    if (currentTime === [i])
    timeblock === currentTime
    return currentTime
    if (timeBlock[i] === pastTime[i])
    timeblock === pastTime
    return pastTime
    else
    timeblock === futureTime
    return futureTime
 }
Current time finds where it is in the array and sets the box to red. It then uses its own [i] value to loop +1 []. The loop +1 makes the boxes green.
LOOP HERE
greenBox = currentTime[i + 1]
redBox = currentTime[i]
else = greybox
1 2 3 (4 = 12pm) 5 6 7 8 9


 
## Color-code each timeblock based on past, present, and future when the timeblock is viewed.
-  each row is linked to a time, which is linked to the clock, which change colour when the time is before the current time, at the current time, and for future times.
