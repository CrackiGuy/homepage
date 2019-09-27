$(function() {
    $('#roundtrip_datepicker').daterangepicker({
        autoUpdateInput: false,
        autoApply: true,
        useCurrent: true,
        minDate: new Date(new Date().setDate(new Date().getDate())),
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('#roundtrip_datepicker').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('#roundtrip_datepicker').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });

    $('#roundtrip_datepicker').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear',
            applyLabel: 'Apply'
        }
    });

    $('#roundtrip_datepicker').on('apply.daterangepicker', function(ev, picker) {
        $('#from_date').val(picker.startDate.format('MM/DD/YYYY'));
        $('#to_date').val(picker.endDate.format('MM/DD/YYYY'));

        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('#roundtrip_datepicker').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });


    //both means foreigner passengers count
    //adult count incrementor
    $('.quantity-right-plus').click(function(e){
       //get fields
        var adult_local_quantity_field1 = parseInt($('#quantity').val());
        var adult_local_quantity_field2 = parseInt($('#quantity_1').val());
        var adult_foreign_quantity_field1 = parseInt($('#both_quantity').val());
        var adult_foreign_quantity_field2 = parseInt($('#both_quantity_1').val());
        var local_foreign_field1 = adult_local_quantity_field1 + adult_foreign_quantity_field1;
        var local_foreign_field2 = adult_local_quantity_field2 + adult_foreign_quantity_field2;
        var total_adult_quantity1 = (local_foreign_field1, local_foreign_field2);
        var adult_count = parseInt($('#quantity,#quantity_1').val());
        var total_quantity = parseInt($('#total_quantity').val());
        // If is not undefined
        //Increment
        if (total_quantity<9){
        $('#quantity,#quantity_1').val(adult_count + 1);
        $('#total_quantity').val(total_quantity + 1);
        }
    });

    $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var adult_count = parseInt($('#quantity,#quantity_1').val());
        var total_quantity = parseInt($('#total_quantity').val());
        // Increment
        if(adult_count>1){
            $('#quantity,#quantity_1').val(adult_count - 1);
            $('#total_quantity').val(total_quantity-1);
        }
    });

    //child count incrementor
    $('.child_quantity-right-plus').click(function(e){

        e.preventDefault();
        var local_child_quantity1 = parseInt($('#child_quantity').val());
        var local_child_quantity2 = parseInt($('#child_quantity_1').val());
        var foreign_child_quantity1 = parseInt($('#both_child_quantity').val());
        var foreign_child_quantity2 = parseInt($('#both_child_quantity_1').val());
        var local_foreign_child1 = local_child_quantity1 + foreign_child_quantity1;
        var local_foreign_child2 = local_child_quantity2 + foreign_child_quantity2;
        var child_quantity = (local_foreign_child1, local_foreign_child2);
        var child_quantity2 = parseInt($('#child_quantity,#child_quantity_1').val());
         var total_quantity = parseInt($('#total_quantity').val());
        // If is not undefined
        if (total_quantity<9) {
            $('#child_quantity,#child_quantity_1').val(child_quantity2 + 1);
            $('#total_quantity').val(total_quantity+1);
        }
    });

$('.child_quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var child_quantity = parseInt($('#child_quantity,#child_quantity_1').val());
        var total_quantity = parseInt($('#total_quantity').val());
        // If is not undefined

        // Increment
        if(child_quantity>0){
            $('#child_quantity,#child_quantity_1').val(child_quantity - 1);
            $('#total_quantity').val(total_quantity-1);
        }
    });

 $('.infant_quantity-right-plus').click(function(e){

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var local_infant_quantity1 = parseInt($('#infant_quantity').val());
        var local_infant_quantity2 = parseInt($('#infant_quantity_1').val());
        var foreign_infant_quantity1 = parseInt($('#both_infant_quantity').val());
        var foreign_infant_quantity2 = parseInt($('#both_infant_quantity_1').val());
        var local_foreign_infant1 = local_infant_quantity1 + foreign_infant_quantity1;
        var local_foreign_infant2 = local_infant_quantity2 + foreign_infant_quantity2;
        var infant_quantity = (local_foreign_infant1, local_foreign_infant2);
        var infant_quantity2 = parseInt($('#infant_quantity, #infant_quantity_1').val());
        var total_quantity = parseInt($('#total_quantity').val());

        // If is not undefined
        if (total_quantity<9 && infant_quantity2<4) {
            $('#infant_quantity, #infant_quantity_1').val(infant_quantity2 + 1);
                $('#total_quantity').val(total_quantity + 1);
        }

        // Increment

    });

    $('.infant_quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var infant_quantity = parseInt($('#infant_quantity, #infant_quantity_1').val());
        var total_quantity = parseInt($('#total_quantity').val());
        // If is not undefined

        // Increment
        if(infant_quantity>0){
            $('#infant_quantity, #infant_quantity_1').val(infant_quantity - 1);
            $('#total_quantity').val(total_quantity - 1);
        }
    });


//both
 $('.both_quantity-right-plus').click(function(e){

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var both_local_quantity1 = parseInt($('#quantity').val());
        var both_local_quantity2 = parseInt($('#quantity_1').val());
        var both_foreign_quantity1 = parseInt($('#both_quantity').val());
        var both_foreign_quantity2 = parseInt($('#both_quantity_1').val());
        var both_local_foreign1 = both_local_quantity1 + both_foreign_quantity1;
        var both_local_foreign2 = both_local_quantity2 + both_foreign_quantity2;
        var both_quantity = (both_local_foreign1, both_local_foreign2);
        var both_quantity2 = parseInt($('#both_quantity,.both_quantity_1').val());
        var total_quantity = parseInt($('#total_quantity').val());
        // If is not undefined
        if (total_quantity<9) {
            $('#both_quantity,#both_quantity_1').val(both_quantity2 + 1);
            $('#total_quantity').val(total_quantity + 1);
        }

        // Increment

    });

    $('.both_quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var both_quantity = parseInt($('#both_quantity,.quantity_1').val());
        var total_quantity = parseInt($('#total_quantity').val());
        // If is not undefined

        // Increment
        if(both_quantity>1){
            $('#both_quantity,#both_quantity_1').val(both_quantity - 1);
            $('#total_quantity').val(total_quantity - 1);
        }
    });

  //Foreigner Child
    $('.both_child_quantity-right-plus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var both_local_child_quantity1 = parseInt($('#child_quantity').val());
        var both_local_child_quantity2 = parseInt($('#child_quantity_1').val());
        var both_foreign_child_quantity1 = parseInt($('#both_child_quantity').val());
        var both_foreign_child_quantity2 = parseInt($('#both_child_quantity_1').val());
        var both_local_foreign_child1 = both_local_child_quantity1 + both_foreign_child_quantity1;
        var both_local_foreign_child2 = both_local_child_quantity2 + both_foreign_child_quantity2;
        var both_child_quantity = (both_local_foreign_child1, both_local_foreign_child2);
        var both_child_quantity2 = parseInt($('#both_child_quantity,#both_child_quantity_1').val());
        var total_quantity = parseInt($('#total_quantity').val() );
        // If is not undefined
        if (total_quantity<9) {
            $('#both_child_quantity,#both_child_quantity_1').val(both_child_quantity2 + 1);
            $('#total_quantity').val(total_quantity+1);
        }
    });

    $('.both_child_quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var both_child_quantity = parseInt($('#both_child_quantity,#both_child_quantity_1').val());
        var total_quantity = parseInt($('#total_quantity').val());
        // If is not undefined

        // Increment
        if(both_child_quantity>0){
            $('#both_child_quantity,#both_child_quantity_1').val(both_child_quantity - 1);
            $('#total_quantity').val(total_quantity-1);
        }
    });

    //Infant
     var both_infant_quantitiy = 0;
    $('.both_infant_quantity-right-plus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var both_local_infant_quantity1 = parseInt($('#infant_quantity').val());
        var both_local_infant_quantity2 = parseInt($('#infant_quantity_1').val());
        var both_foreign_infant_quantity1 = parseInt($('#both_infant_quantity').val());
        var both_foreign_infant_quantity2 = parseInt($('#both_infant_quantity_1').val());
        var both_local_foreign_infant1 = both_local_infant_quantity1 + both_foreign_infant_quantity1;
        var both_local_foreign_infant2 = both_local_infant_quantity2 + both_foreign_infant_quantity2;
        var both_infant_quantity = (both_local_foreign_infant1, both_local_foreign_infant2);
        var both_infant_quantity2 = parseInt($('#both_infant_quantity, #both_infant_quantity_1').val());
        var total_quantity = parseInt($('#total_quantity').val());
        // If is not undefined
        if (total_quantity<9 && both_infant_quantity2<4 ) {
            $('#both_infant_quantity, #both_infant_quantity_1').val(both_infant_quantity2 + 1);
            $('#total_quantity').val(total_quantity+1);
        }

        // Increment

    });

    $('.both_infant_quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();

        // Get the field name
        var both_infant_quantity = parseInt($('#both_infant_quantity, #both_infant_quantity_1').val());
        var total_quantity = parseInt($('#total_quantity').val());

        // If is not undefined

        // Increment
        if(both_infant_quantity>0){
            $('#both_infant_quantity, #both_infant_quantity_1').val(both_infant_quantity - 1);
            $('#total_quantity').val(total_quantity-1);
        }
    });


    $('body').on('focus',".singlepicker", function(){
        $(this).daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            minDate: new Date(new Date().setDate(new Date().getDate()+1))
        });
    });


    $('body').on('focus',".rangepicker", function(){
        $(this).daterangepicker({
            autoUpdateInput: false,
            autoApply: true,
            useCurrent: true,
            minDate: new Date(new Date().setDate(new Date().getDate())),
            locale: {
                cancelLabel: 'Clear',
                applyLabel: 'Apply'
            }
        });
        $(this).on('apply.daterangepicker', function(ev, picker) {
            $('#from_date').val(picker.startDate.format('MM/DD/YYYY'));
            $('#to_date').val(picker.endDate.format('MM/DD/YYYY'));

            $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        });
    });

    // $('#roundtrip_datepicker').daterangepicker({
    //     autoUpdateInput: false,
    //     autoApply: true,
    //     useCurrent: true,
    //     minDate: new Date(new Date().setDate(new Date().getDate())),
    //     locale: {
    //         cancelLabel: 'Clear'
    //     }
    // });
    $('body').on('focus',"#datepicker", function(){

        if($('#flight_status').val()=="roundtrip"){
            $('#datepicker').addClass('rangepicker');
            $('#datepicker').removeClass('singlepicker');
        }else{
            $('#datepicker').addClass('singlepicker');
            $('#datepicker').removeClass('rangepicker');
        }
        console.log($('#flight_status').val());
    });


    // ADD FORM ROW

    $('.dropdown-menu').click(function(e) {
        e.stopPropagation();
    });

    $(document).ready(function(){

        if($('#inlineRadio1').is(':checked')) {
            $("#badges").text('Citizen');
            $('#nationality').val("L");
            $('#input_box').show();
            $('#both_input_box').hide();

        } else if ($('#inlineRadio2').is(':checked')){
            $("#badges").text('Foreigner');
            $('#nationality').val("F");
            $('#input_box').show();
            $('#both_input_box').hide();

        } else if ($('#inlineRadio3').is(':checked')){
            $("#badges").text('Both');
            $('#nationality').val("B");
            $('#input_box').hide();
            $('#both_input_box').show();
            /*var flightcount = $('#flight_count').val();*/
        }
        $("#inlineRadio1").click(function(){
            $("#badges").text('Citizen');
            $('#nationality').val("L");
            $('#input_box').show();
            $('#both_input_box').hide();

        });

        $("#inlineRadio2").click(function(){
          $("#badges").text('Foreigner');
          $('#nationality').val("F");
          $('#input_box').show();
          $('#both_input_box').hide();
          
        });
        $("#inlineRadio3").click(function(){
            $("#badges").text('Both');
            $('#nationality').val("B");
            $('#input_box').hide();
            $('#both_input_box').show();
            $('.added').remove();
        });
        $(".configreset").on("click", function(event) {
            if($('#inlineRadio1').is(':checked')) {
                $("#badges").text('Citizen');
                $('#nationality').val("L");
                $('#input_box').show();
                $('#both_input_box').hide();
                $('.added').remove();
            } else if ($('#inlineRadio2').is(':checked')){
                $("#badges").text('Foreigner');
                $('#nationality').val("F");
                $('#input_box').show();
                $('#both_input_box').hide();
                $('.added').remove();
            } else if ($('#inlineRadio3').is(':checked')){
                $("#badges").text('Both');
                $('#nationality').val("B");
                $('#input_box').hide();
                $('#both_input_box').show();
                /*var flightcount = $('#flight_count').val();*/
                $('.added').remove();
            }
        });
    });


    $(document).ready(function(){
        $('#customRadio2').click(function() {
            $("#delivaryaddress").css("display","inline-block");
        })
    });

//change trip signs
    $(document).ready(function(){


        $('.departure_date2').hide();
        $('.add_field_button').attr("disabled", "disabled");
        $('#roundtrip-tab').click(function(){
            $('#trip_arrow').removeClass("  fa-long-arrow-right");
            $('#trip_arrow').addClass(" fa-exchange");
            $('.departure_date2').show();
            $('.departure_date1').hide();
             $('.add_field_button').attr("disabled", true);
             $('.add_field_button').hide();
             $('#adding_field').hide();
             $('#flight_status').val('roundtrip');
             var flight_count = $('#flight_count').val();
             flight_count = (+flight_count +1);
             $('#flight_count').val(flight_count);
        });
        $('#oneway-tab, #multicity-tab').click(function(){
            $('#trip_arrow').addClass(" fa-long-arrow-right");
            $('#trip_arrow').removeClass(" a-exchange");
            $('.departure_date2').hide();
            $('.departure_date1').show();
            $('#flight_count').val(1);
        });
        $('#multicity-tab').click(function(){

            $('.add_field_button').show();
            $('.add_field_button').attr("disabled", false);
            $('#flight_status').val('multicity');
        });
        $('#oneway-tab').click(function(){
            $('.add_field_button').attr("disabled", true);
            $('.add_field_button').hide();
            $('#adding_field').hide();
            $('#flight_status').val('oneway');
        });
    });

    $(document).ready(function(){
      $('#pills-home-tab').click(function(){
        $('#rounddep').val($('.onedept').val());
        $('#roundarr').val($('#onearr').val());
      });
    });

    $(document).ready(function(){
      $('#pills-profile-tab').click(function(){
        $('.onedept').val($('#rounddep').val());
        $('#onearr').val($('#roundarr').val());
      });
    });

    $(document).ready(function(){
      $('#pills-contact-tab').click(function(){
        $('#multidept').val($('#rounddep').val());
        $('#multiarr').val($('#roundarr').val());
      });
    });



    $('#traveller').change(function() {
        $("#adult_fullname0").val($(this).is(':checked') ? $("#travellername").val() : "");
        $("#adult_lastname0").val($(this).is(':checked') ? $("#travellerlastname").val() : "");
        $("#adult_gender0").val($(this).is(':checked') ? $("#gender").val() : "");
    });

    // $(document).ready(function() {
    //     $( "#dobpicker1" ).daterangepicker({
    //         singleDatePicker: true,
    //         showDropdowns: true,
    //         changeMonth: true,
    //         changeYear: true,
    //         maxDate: new Date(new Date().setDate(new Date().getDate() - 4380))
    //     });
    // });
    
  
    // for( i = 1; i <= 9; i++ ){
    //     $('body').on('focus',"#dobpicker"+i, function(){
    //     $(this).daterangepicker({
    //         singleDatePicker : true,
    //         showDropdowns : true,
    //         changeMonth : true,
    //         changeYear : true,
    //         autoclose : true,
    //         minDate: new Date(new Date().setFullYear(new Date().getFullYear()- 100)),
    //         maxDate: new Date(new Date().setDate(new Date().getDate())),
    //     });
    // });
    // };
  
    // for( i = 1; i <= 9; i++ ){
    //     $('body').on('focus',"#childdobpicker"+i, function(){
    //     $(this).daterangepicker({
    //         singleDatePicker : true,
    //         showDropdowns : true,
    //         changeMonth : true,
    //         changeYear : true,
    //         autoclose : true,
    //         minDate: new Date(new Date().setFullYear(new Date().getFullYear()- 12)),
    //         maxDate: new Date(new Date().setDate(new Date().getDate())),
    //     });
    // });
    // };

    // for( i = 1; i <= 9; i++ ){
    //     $('body').on('focus',"#infantdobpicker"+i, function(){
    //     $(this).daterangepicker({
    //         singleDatePicker : true,
    //         showDropdowns : true,
    //         changeMonth : true,
    //         changeYear : true,
    //         autoclose : true,
    //         minDate: new Date(new Date().setFullYear(new Date().getFullYear()- 2)),
    //         maxDate: new Date(new Date().setDate(new Date().getDate())),
    //     });
    // });
    // };
    // $('body').on('focus',".singlepicker", function(){
    //     $(this).daterangepicker({
    //         singleDatePicker: true,
    //         showDropdowns: true,
    //         minDate: new Date(new Date().setDate(new Date().getDate()+1))
    //     });
    // });
    for( i = 1; i <= 9; i++ ){
        $('body').on('focus',"#dobpicker"+i, function(){
        $(this).daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            autoclose: true,
            maxDate: moment().subtract(12, 'years'),
            minDate : moment().subtract(100, 'years'),
            startDate: moment().subtract(12, 'years'),
        });
    });
    };
var nowDate = new Date();
    for( i = 1; i <= 9; i++ ){
        $('body').on('focus',"#childdobpicker"+i, function(start,end){
        $(this).daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            autoclose: true,
            maxDate: moment().subtract(2, 'years'),
            minDate : moment().subtract(12, 'years'),
            startDate: moment().subtract(2, 'years'),
        });
    });
    };

    for( i = 1; i <= 9; i++ ){
        $('body').on('focus',"#infantdobpicker"+i, function(){
        $(this).daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            autoclose: true,
            maxDate: moment().subtract(7, 'days'),
            minDate : moment().add(7, 'days').subtract(2, 'years'),
            startDate: moment().add(7, 'days').subtract(2, 'years'),
        });
    });
    };

    //new Date(new Date().setDate(new Date().getDate() - 6570))

    $(document).ready(function() {
        $( "#localchilddobpicker2" ).datepicker({
            dateFormat : 'yyyy-mm-dd',
            changeMonth : true,
            changeYear : true,
            autoclose: true,
            yearRange: '-100y:c+nn',
            maxDate: '-1d'
        });
    });

    $(document).ready(function() {
        $( "#localchilddobpicker3" ).datepicker({
            dateFormat : 'yyyy-mm-dd',
            changeMonth : true,
            changeYear : true,
            autoclose: true,
            yearRange: '-100y:c+nn',
            maxDate: '-1d'
        });
    });

    $(document).ready(function() {
        $( "#localchilddobpicker4" ).datepicker({
            dateFormat : 'yyyy-mm-dd',
            changeMonth : true,
            changeYear : true,
            autoclose: true,
            yearRange: '-100y:c+nn',
            maxDate: '-1d'
        });
    });

    $(document).ready(function() {
        $( "#localchilddobpicker5" ).datepicker({
            dateFormat : 'yyyy-mm-dd',
            changeMonth : true,
            changeYear : true,
            autoclose: true,
            yearRange: '-100y:c+nn',
            maxDate: '-1d'
        });
    });

    $(document).ready(function() {
        $( "#localchilddobpicker6" ).datepicker({
            dateFormat : 'yyyy-mm-dd',
            changeMonth : true,
            changeYear : true,
            autoclose: true,
            yearRange: '-100y:c+nn',
            maxDate: '-1d'
        });
    });

    $(document).ready(function() {
        $( "#localchilddobpicker7" ).datepicker({
            dateFormat : 'yyyy-mm-dd',
            changeMonth : true,
            changeYear : true,
            autoclose: true,
            yearRange: '-100y:c+nn',
            maxDate: '-1d'
        });
    });

    $(document).ready(function() {
        $( "#localchilddobpicker8" ).datepicker({
            dateFormat : 'yyyy-mm-dd',
            changeMonth : true,
            changeYear : true,
            autoclose: true,
            yearRange: '-100y:c+nn',
            maxDate: '-1d'
        });
    });

    $(document).ready(function () {
        // $('#preloader').fadeOut()
    });
});
