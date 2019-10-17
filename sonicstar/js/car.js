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
    i=1;
    // if ($("#city").is(":checked")) {
        
    // }else{
    //     $('#exampleModaldate').modal('show');
    //     console.log(12);
    // }
    $("#testcheck").find("#city").each(function(){
        if ($(this).prop('checked')==true){ 
     
            $('#exampleModaltime').modal('show');
            if (diffDays>=0) {
                for (var index = 0; index <= diffDays; index++) {
                    // alert(1);
                    if (index ==0) {
                        $('#timechoose').append('<div class="timetest">');
                        $('#timechoose').append('<div class="row timetest1">'+moment(a).format('l')+'</div>');
                        $('#timechoose').append('<div class="row timetest2"><div class="col-6"><small><b> From Time</b> </small></div><div class="col-6"><small><b> To Time </b> </small> </div> </div>');
                        $("#timechoose").append('<div class="row timetest3"><div class="col-md-6" style="z-index:99999"><input type="text" class="timepick col-md-11" readonly></div><div class="col-md-6" style="z-index:99999"><input type="text" class="timepick col-md-11" readonly></div></div>');
                        $("#timechoose").append('</div>');
                    // }else if (index>0 && index!=diffDays) {
                    //     $('#timechoose').append('<div class="timetest">');
                    //     $('#timechoose').append('<div class="row timetest1">'+moment(a).add('days', index).format('l')+'</div>');
                    //     $('#timechoose').append('<div class="row timetest1"><div class="col-6"><small><b> From Time</b> </small></div><div class="col-6"><small><b> To Time </b> </small> </div> </div>');
                    //     $("#timechoose").append('<div class="row timetest1"><div class="col-md-6" style="z-index:99999"><input type="text" class="timepick col-md-11" readonly></div><div class="col-md-6" style="z-index:99999"><input type="text" class="timepick col-md-11" readonly></div></div><br>');
                    //     $("#timechoose").append('</div>');
                    }else{
                        $('#timechoose').append('<div class="timetest">');
                        $('#timechoose').append('<div class="row timetest1">'+moment(a).add('days', index).format('l')+'</div>');
                        $('#timechoose').append('<div class="row timetest1"><div class="col-6"><small><b> From Time</b> </small></div><div class="col-6"><small><b> To Time </b> </small> </div> </div>');
                        $("#timechoose").append('<div class="row timetest1"><div class="col-md-6" style="z-index:99999"><input type="text" class="timepick col-md-11" readonly></div><div class="col-md-6" style="z-index:99999"><input type="text" class="timepick col-md-11" readonly></div></div>');
                        $("#timechoose").append('</div>');
                    }    
                }
              
            }
            $('.timepick').timepicker({
                timeFormat: 'h:mm p',
                interval: 30,
                minTime: '8',
                maxTime: '11:30PM',
                defaultTime: '11',
                startTime: '8:00AM',
                // dynamic: true,
                dropdown: true,
                scrollbar: true

        //         timeFormat: 'HH:mm:ss',
        // minTime: '11:45:00' // 11:45:00 AM,
        // maxHour: 20,
        // maxMinutes: 30,
        // startTime: new Date(0,0,0,15,0,0)
            });
         
        }else
        {
            $('#exampleModaldate').modal('show');  
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
        }
    })

  
   
   


});

$('#remove').click(function(){
    $("#dynamicrow").find('.row').remove();
});
$('#removebtn').click(function(){
    $("#dynamicrow").find('.row').remove();
});

$('#removetime').click(function(){
    $("#timechoose").find('.timetest').remove();
    $("#timechoose").find('.timetest1').remove();
    $("#timechoose").find('.timetest2').remove();
    $("#timechoose").find('.timetest3').remove();
});
$('#removebtntime').click(function(){
    $("#timechoose").find('.timetest').remove();
    $("#timechoose").find('.timetest1').remove();
    $("#timechoose").find('.timetest2').remove();
    $("#timechoose").find('.timetest3').remove();
});

$(document).ready(function(){
    var diffDays=0;
    $('#exampleModaldate').modal('hide');
    $('#exampleModal').modal('hide');

});


$(document).ready(function(){
    $('input.timepicker').timepicker({
        timeFormat: 'h:mm p',
        interval: 30,
        minTime: '8',
        maxTime: '11:30PM',
        defaultTime: '11',
        startTime: '8:00AM',
        dynamic: true,
        dropdown: true,
        scrollbar: true
        
    });
});