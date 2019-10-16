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
});
