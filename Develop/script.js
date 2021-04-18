$(document).ready(function() {
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
});

var scheduleEl = document.createElement('textarea');
$('.col-sm-9').append(scheduleEl);

