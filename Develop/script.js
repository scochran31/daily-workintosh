$(document).ready(function() {
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
});

var currentDay = moment().format('dddd, MMMM Do YYYY');
    console.log(currentDay);

var hour = moment().format('h');
    if (hours >= 9 && hour <= 5) {
        $('.schedule').addClass('present');
    } else if(hours<9) {
        $('.schedule').addClass('past');
    } else {
        $('.schedule').addClass('future');
    }