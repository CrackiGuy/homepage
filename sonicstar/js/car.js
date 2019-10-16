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
    var startDate = picker.startDate.format('MM/DD/YYYY');
    var endDate = picker.endDate.format('MM/DD/YYYY');

    $("#daily_pickup_date1").val(startDate);
    $("#daily_dropoff_date1").val(endDate);
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
                $("#dynamicrow").append('<div class="row"><div class="col-md-6">'+moment(a).format('l')+'</div><div class="col-md-6"><select><option>hihi</option><option>hay hay</option></select></div>');
            }else{
                $("#dynamicrow").append('<div class="row"><div class="col-md-6">Date'+moment(a).add('days', index).format('l')+'</div><div class="col-md-6"><select><option>hihi</option><option>ss</option></select></div>');
            }
            
            
        }
      
    }
   


});


$(document).ready(function(){
    var diffDays=0;
    $('#exampleModaldate').modal('hide');
});

// function addrow(diffDays)
// {
    
// }