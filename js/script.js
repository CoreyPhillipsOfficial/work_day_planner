// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



  // Get all timeblocks
  var timeBlocks = $('.time-block');

  timeBlocks.each(function () {
    var timeBlock = $(this);
    var blockHour = parseInt(timeBlock.attr('id').slice(5));
    var currentHour = dayjs().hour();

    // Makes sure each time block only has one of the three time-based classes
    timeBlock.removeClass('past present future');

    if (blockHour < currentHour) {
      timeBlock.addClass('past');
    } else if (blockHour === currentHour) {
      timeBlock.addClass('present');
    } else {
      timeBlock.addClass('future');
    }

    // Get the id of the parent div
    var parentDivId = timeBlock.attr('id');

    // Get value from local storage using id as the key
    var storedValue = localStorage.getItem(parentDivId);

    // If value is found, set as value of text area
    if (storedValue) {
      timeBlock.find('textarea').val(storedValue);
    }
  })
});


var d = dayjs().format('DDDD, MMMM D, YYYY');
var t = dayjs().format('H');
console.log(t);

// Display current date
$(function () {
  var d = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(d);
})


var btns = $('.time-block button');

function storeEvent() {
  // Reference the button pressed
  var btn = $(this);

  // Reference the text area
  var textArea = btn.prev();

  // Get the value from the text area
  var eventText = textArea.val();

  // Get the id of the parent div
  var parentDivId = btn.parent().attr('id');

  // Store in local storage using the id as the key
  localStorage.setItem(parentDivId, eventText);
}

btns.click(storeEvent);