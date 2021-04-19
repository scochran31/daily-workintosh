$(document).ready(function() {
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
});


$('.saveBtn').on('click', function() {
    var schedule = $(this)
    .siblings('.description')
    .val();

    var save = $(this)
    .siblings('.description')
    .attr('id')
    
    localStorage.setItem(save, schedule);
    
})

function checkTime(){
    
    for (i = 9; i < 18; i++){
       
        if (moment().format('H') > i){
            $(`#${i}`).addClass('past');
        } else if (moment().format('H') < i){
            $(`#${i}`).addClass('future');
        } else{
            $(`#${i}`).addClass('present');
        };

        $(`#${i}`)
            .val(localStorage.getItem(i));

    }
};

checkTime();
