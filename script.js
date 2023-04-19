var saveButtonEl= $('.btn saveBtn');
var dateDisplayEl= $('#currentDay');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Function to create and format the current date to display at top of page.
  function displayDate() {
    var currentDate = dayjs().format('MMM DD, YYYY; h:mm A');
    dateDisplayEl.text(currentDate);
  }
  displayDate();


  // Button to save 'time' and 'text' variables in local storage for later use on click.
  saveButtonEl.on('click', function () {
    var time = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();
    localStorage.setItem(time, text);
 
  });

  // Variable to format the current hour using a 24-hour clock.
  var currentHour = dayjs().format('H');

  // For loop that takes the time-block's hour in the form of an integer to compare to the currentHour variable integer.
  // Then, it adds/removes the future, past, or present classes based on that comparison.
  var elements = $('.time-block');
  for (i = 0; i < elements.length; i++) {
    var h = parseInt(elements[i].getAttribute('data-hour'));

    if (currentHour < h) {
      elements[i].classList.add('future');
      elements[i].classList.remove('past');
      elements[i].classList.remove('present');
    } else if (h < currentHour) {
      elements[i].classList.add('past');
      elements[i].classList.remove('future');
      elements[i].classList.remove('present');
    } else if (h == currentHour) {
      elements[i].classList.add('present');
      elements[i].classList.remove('future');
      elements[i].classList.remove('past');
  } 
  };

  // Retrieves the stored data to use in the for loop.
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  
});


