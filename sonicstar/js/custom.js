var fromCity = $("#box1");
var toCity = $("#box2");
var submit = $("#onewaysubmit");


$(document).ready(function() {

    // console.log(fromCity.val());
    // submit.attr("disabled",true);
  
    $("#adult_quantity").val(1);
    $("#child_quantity").val(0);
    $("#infant_quantity").val(0);
    $("#total_quantity").val(1)

    $(".qty").val(0);
    
    $(".qty_adult").val(1);
 


    var flightto="";
     flightto+="<option value='origin'>Flight To</option>";

     var flightfrom="";
     flightfrom+="<option value='origin'>Flight From</option>";
    $.getJSON("sonicstar/php/json.php",function(data){
    
        $.each(data,function(index,item) 
        {
            flightto+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
            flightfrom+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
        });
        $("#box1").html(flightfrom); 
        $("#box2").html(flightto);
    
    });
    
    toCity.attr("disabled", true);
    firstcondition();


});

// fromCity.on("change", function() {

//     toCity.attr("disabled", false);
//     firstcondition();
//     let $boxarr = $("#onearr").val();
//     let $boxval = $("#onedept").val();

//     if ($boxval === "origin") {

//         $('#onearr option:eq(0)').prop('selected', true).trigger('change');

//         } else {
          
//             var arr  = $("#onedept").find(':selected');
//             console.log(arr.val());
//             $("#onearr").find('option').show();
//             $.each($("#onearr"), function(){  
               
//             var self = this;
//             var selectVal = $(this).val();
//             $.each(arr, function(){  
                		
//                 if (selectVal !== $(this).val()){
                   
// 					$(self).find('option[value="'+$(this).val()+'"]').hide();
//                 } else {
//                     $('#onearr option:eq(0)').prop('selected', true).trigger('change');
//                     $(self).find('option[value="'+$(this).val()+'"]').hide();
//                 }
//             });
//         });
    
//     }
        
// });

toCity.on("change", function() {
    // let $boxval = $("#box2").val();

    firstcondition();

    console.log($('#box2').val());
    // if ($boxval === "origin") {


       


    // } else {
    //     // $("#onedept > option").each(function(ind) {
    //     //     let ele = $("#onedept > option").eq(ind);
    //     //     if (ele.val() === $boxval) ele.attr("disabled", "disabled");
    //     //     else ele.removeAttr("disabled");
    //     // });
    // }


});


$(document).ready(function() {

    var total = $("#total_quantity").val();
    var currentVal = 1;
    toCity.attr("disabled", true);
    $(".plus").click(function(e) {

        e.preventDefault();

        // Define field variable
        field = "input[name=" + $(this).attr("field") + "]";

        // Get its current value
        var currentVal = parseInt($(field).val());


        // If is not undefined
        if (!isNaN(currentVal) && currentVal < 10 && total < 9) {

            // Increment
            $(field).val(currentVal + 1);
            $("#adult_quantity").val(currentVal + 1);

            total++;



        }

    });

    // This button will decrement the value till 0
    $(".minus").click(function(e) {

        e.preventDefault();

        // Define field variable
        field = "input[name=" + $(this).attr("field") + "]";

        // Get its current value
        var currentVal = parseInt($(field).val());

        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 1) {
            // Decrement one
            $(field).val(currentVal - 1);
            $("#adult_quantity").val(currentVal - 1);
            total--;
        }

    });


    $(".child_plus").click(function(e) {

        e.preventDefault();

        // Define field variable
        field = "input[name=" + $(this).attr("field") + "]";

        // Get its current value
        var currentVal = parseInt($(field).val());

        // If is not undefined
        if (!isNaN(currentVal) && currentVal < 10 && total < 9) {

            // Increment
            $(field).val(currentVal + 1);
            $("#child_quantity").val(currentVal + 1)
            total++;
        }

    });

    // This button will decrement the value till 0
    $(".child_minus").click(function(e) {

        e.preventDefault();

        // Define field variable
        field = "input[name=" + $(this).attr("field") + "]";

        // Get its current value
        var currentVal = parseInt($(field).val());

        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $(field).val(currentVal - 1);
            $("#child_quantity").val(currentVal - 1)
            total--;
        }

    });



    $(".infant_plus").click(function(e) {

        e.preventDefault();

        // Define field variable
        field = "input[name=" + $(this).attr("field") + "]";

        // Get its current value
        var currentVal = parseInt($(field).val());

        // If is not undefined
        if (!isNaN(currentVal) && currentVal < 10 && total < 9) {

            // Increment
            $(field).val(currentVal + 1);
            $("#infant_quantity").val(currentVal + 1);

            total++;

        }

    });

    // This button will decrement the value till 0
    $(".infant_minus").click(function(e) {

        e.preventDefault();

        // Define field variable
        field = "input[name=" + $(this).attr("field") + "]";

        // Get its current value
        var currentVal = parseInt($(field).val());

        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $(field).val(currentVal - 1);
            $("#infant_quantity").val(currentVal - 1);
            total--;
        }

    });

});

function firstcondition() {


    var from_original = $("#box1").val();
    var to_original = $("#box2").val();

    
    if (from_original == "origin" || to_original == "origin" || from_original == null || to_original == null) {

        submit.attr("disabled", true);

    } else {
        submit.attr("disabled", false);
    }

}

function checkTheDropdowns(){
   

    toCity.attr("disabled", false);
   
      
         var items="";
         items+="<option value='origin'>Flight To</option>";
         $.getJSON("sonicstar/php/json.php",function(data){
         
             $.each(data,function(index,item) 
             {
                 if ($('#box1').val()==item.name) {
                    // toCity.attr("disabled", true);
                    submit.attr("disabled", true);
                   
                 }else{
                     if ($('#box1').val()=="origin") {
                        items+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
                        submit.attr("disabled", true);
                     }else{
                        items+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
                     }
                   
                 }
           
          
                 
             });

             $("#box2").html(items); 
         
         });
     
        
  };
  checkTheDropdowns();
  $('#box1').on('change', checkTheDropdowns);


