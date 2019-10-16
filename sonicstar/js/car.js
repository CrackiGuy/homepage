$('#pickupdate').daterangepicker({
    opens: 'right',
    minDate: moment().add('days', 1),
    startDate: moment().add('days', 1),
    endDate: moment().add('days', 1),
    autoUpdateInput: true,
    locale: {
        format: 'DD MMMM YYYY'
    }


}).on('apply.daterangepicker', function(e, picker) {
    // $("#dynamicrow").remove();
   var diffDays=0;
    var startDate = picker.startDate.format('MM/DD/YYYY');
    var endDate = picker.endDate.format('MM/DD/YYYY');

    $("#daily_pickup_date1").val(startDate);
    $("#daily_dropoff_date1").val(endDate);
    var cityfrom=$('#car_city_daily').val();
    c = 24*60*60*1000,
    a=new Date(startDate),
    b = new Date(endDate),
    diffDays= Math.round(Math.abs((a - b)/(c)));
    
    
    $('#exampleModaldate').modal('show');

    i=1;
    if (diffDays>=0) {
        for (var index = 0; index <= diffDays; index++) {
            // alert(1);
            if (index ==0) {
                $("#dynamicrow").append('<div class="row"><div class="col-md-6">'+moment(a).format('l')+'<br>Yangon</div><div class="col-md-6"><select><option>hihi</option><option>hay hay</option></select></div><br>');
            }else if (index>0 && index!=diffDays) {
                $("#dynamicrow").append('<div class="row"><div class="col-md-6">'+moment(a).add('days', index).format('l')+'<br>Mandalay</div><div class="col-md-6"><select><option>hihi</option><option>hay hay</option></select></div><br>');
            }else{
                $("#dynamicrow").append('<div class="row"><div class="col-md-6">'+moment(a).add('days', index).format('l')+'<br>Mandalay</div><div class="col-md-6"><input type="text" value="hi test" readonly></div><br>');
            }    
        }
      
    }
   


});

$('#remove').click(function(){
    $("#dynamicrow").find('.row').remove();
});
$('#removebtn').click(function(){
    $("#dynamicrow").find('.row').remove();
});

$(document).ready(function(){
    var diffDays=0;
    $('#exampleModaldate').modal('hide');

});

$('#timepicker').timepicker({
 
});

$(document).ready(function(){
    $('input.timepicker').timepicker({
        timeFormat: 'h:mm p',
        interval: 30,
        minTime: '10',
        maxTime: '6:00pm',
        defaultTime: '11',
        startTime: '10:00',
        dynamic: true,
        dropdown: true,
        scrollbar: true
        
    });
});