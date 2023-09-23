
$(function () {
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

  // // Get the message element
  // var messageElement = document.getElementById('saved-message');

  // // Set message
  // messageElement.textContent = 'Appointment saved to local storage!';

  // // Make message visible on the page
  // messageElement.style.display = 'block';

  // // Time limit for message
  // setTimeout(function () {
  //   messageElement.style.display = 'none';
  // }, 3000);
}

btns.click(storeEvent);