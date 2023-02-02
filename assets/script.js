
//Setting the hero clock
let clock = moment();
$('#currentDay').text(clock.format("Do MMMM YYYY hh:mm:ss a"));

// current time variable
let currentTime = moment();

//table colour change
let currentTimeCol = function(divPointer) {
    divPointer.addClass('present')
}
let pastTimeCol = function(divPointer) {
    divPointer.addClass('past')
}
let futureTimeCol = function(divPointer) {
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

    if (hoursNumber > currentHour){
        futureTimeCol($(this))
    }
    else if (hoursNumber == currentHour){
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
    //for each input class call the function..
    $(".input").each(function (index) {
      let inputValue = $(this).val();
      console.log(inputValue);
      localStorage.setItem("hour" + index, inputValue);
    });
  });

//WORKS
let hour5 = localStorage.getItem("hour0")



console.log(hour5);



// $('.colors').each(function())
// console.log(localStorage.getItem("hour"));









//     let saveInput = localStorage.setItem("input", inputValue);

//     let output = localStorage.getItem("input");


//     // console.log(output);
// });
    // let userInput = window.localStorage.getItem('hour');
    // if (userInput) {
    //   input.val(userInput);
    // }
// $(".input").each(function () {
//     let localStorageValue = localStorage.getItem('input');
//     $(this).val(localStorageValue)
// })

// var textTag = $(this).attr("id") 
// var inputValue = $(this).siblings(".input").val()
// localStorage.setItem(textTag, inputValue);
// // console.log(textTag);
// console.log(inputValue);

// $(".input").each(function () {
//     var textTag = $(this).attr("id")
//     console.log(textTag);
//     var localStorageValue = localStorage.getItem(textTag);
//     $(this).val(localStorageValue)
// })