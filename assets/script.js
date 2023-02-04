
//Setting the hero clock
let clock = moment();
$('#currentDay').text(clock.format("Do MMMM YYYY hh:mm:ss a"));

// current time variable
let currentTime = moment();

//table colour change
let currentTimeCol = function (divPointer) {
    divPointer.addClass('present')
}
let pastTimeCol = function (divPointer) {
    divPointer.addClass('past')
}
let futureTimeCol = function (divPointer) {
    divPointer.addClass('future')
};


let input = $('.input');
let save = $('.saveBtn');
let timeBlock = $('.time-block');

// loop through table to change background colour based on relation to time.
$(".colors").each(function () {
    //targets the ID related to the .colors class element
    let hoursTag = $(this).attr("id")
    console.log(hoursTag);

    // splits the ID at the - into seperate arrays
    let hoursArray = hoursTag.split("-")
    console.log(hoursArray);

    // turns the string of the split array [1] into a number
    let hoursNumber = parseInt(hoursArray[1])

    let currentHour = currentTime.hours()

    if (hoursNumber > currentHour) {
        futureTimeCol($(this))
    }
    else if (hoursNumber == currentHour) {
        currentTimeCol($(this))
    }
    else pastTimeCol($(this))

    let userInput = window.localStorage.getItem('hour');
    if (userInput) {
        input.val(userInput);
    }
})


// linking value of input to local storage
let inputValue = $('.input').val();

// event delegation so when the save button is clicked on the timeblock..
timeBlock.on("click", save, function (event) {
    event.preventDefault();
    // for each input class call the function..
    $(".input").each(function () {
      const inputText = $(this).attr("id")
      let inputValue = $(this).val();

      localStorage.setItem(inputText, inputValue);

    });
});

$(".input").each(function () {
    let inputText = $(this).attr("id")
    let localStorageValue = localStorage.getItem(inputText);
    $(this).val(localStorageValue)
})