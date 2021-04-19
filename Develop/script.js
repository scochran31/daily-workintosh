$(document).ready(function() {
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
});

var scheduleEl = document.createElement('textarea');
$('.col-sm-9').append(scheduleEl);

var newSchedule = new Date();
console.log(newSchedule);
    var currentTime = newSchedule.getHours();
    console.log(currentTime);
    var thisRow = document.getElementsByName('time');
    if (currentTime === thisRow) {
        $('.col-sm-9').addClass('present')
    } else if (currentTime < 9) {
        $('.col-sm-9').addClass('past')
    } else {
        $('.col-sm-9').addClass('future');
    };
    