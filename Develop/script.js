$(document).ready(function() {
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
});

var currentDay = moment().format('dddd, MMMM Do YYYY');
    console.log(currentDay);

var hour = moment().format('h');
    console.log(hour);
