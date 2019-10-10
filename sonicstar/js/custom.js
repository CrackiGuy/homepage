var fromCity = $("#box1");
var toCity = $("#box2");
var submit = $("#onewaysubmit");
var dep2=$("#dep2");
var arr=$("#arr2");
var selectboxfrom="";
var selectboxto="";
$(document).ready(function() {

    // console.log(fromCity.val());
    // submit.attr("disabled",true);

    $("#adult_quantity").val(1);
    $("#child_quantity").val(0);
    $("#infant_quantity").val(0);
    $("#total_quantity").val(1)

    $(".qty").val(0);

    $(".qty_adult").val(1);



    var flightto = "";
    flightto += "<option value='origin'>Flight To</option>";

    var flightfrom = "";
    flightfrom += "<option value='origin'>Flight From</option>";
    $.getJSON("sonicstar/php/json.php", function(data) {

        $.each(data, function(index, item) {
            flightto += "<option value='" + item.name + "'>" + item.name + "&nbsp;(" + item.short_code + ")</option>";
            flightfrom += "<option value='" + item.name + "'>" + item.name + "&nbsp;(" + item.short_code + ")</option>";
        });
        $("#box1").html(flightfrom);
        $("#box2").html(flightto);

    });

    toCity.attr("disabled", true);
    firstcondition();


});

$("#radio2").change(function(){

    $(".round_radio2").prop("checked", true);

});
$("#radio1").change(function(){

    $(".round_radio1").prop("checked", true);

});

$(".round_radio2").change(function(){

    $("#radio2").prop("checked", true);

});
$(".round_radio1").change(function(){

    $("#radio1").prop("checked", true);

});


toCity.on("change", function() {
    // $("#round_submit").attr('disabled',flase);
    firstcondition();
    var round_submit=$("#round_submit");
    round_submit.attr("disabled",false);
    console.log($('#box2').val());
    selectboxto=$("#box2").val();
    selectboxfrom=$("#box1").val();

    if ($("#box1" ).val()==$("#box2").val()) {
        var items="";
        items+="<option value='origin'>Flight From</option>";
        $.getJSON("sonicstar/php/json.php",function(data){
        
            $.each(data,function(index,item) 
            {
                if ($('#round_arrival_location').val()==item.name) {
                  
                    items+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
                   submit.attr("disabled", true);
                  
                }else{
    
                    if ($('#round_arrival_location').val()=="origin") {
                        items+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
                        submit.attr("disabled", true);
                    } else {
                        items+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
                    }
                   
                }
          
         
                
            });
    
            $("#box1").html(items); 
        
        });
    }

    var roundflightto="";
    roundflightto+="<option value='origin'>Flight To</option>";
    var roundflightfrom="";
    roundflightfrom+="<option value='origin'>Flight From</option>";
   $.getJSON("sonicstar/php/json.php",function(data){
   
       $.each(data,function(index,item) 
       {
           if (item.name == selectboxto  ) {
            roundflightto+="<option value='"+item.name+"' selected>"+item.name+"&nbsp;("+item.short_code+")</option>";
            // roundflightto+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
           } else{
            if ($('#round_departure_location').val() == item.name) {
                // toCity.attr("disabled", true);
                console.log($('#box1').val()+"ddd");
              

            }
            else{
                roundflightto+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
            }
    
           }
    
           
           if (item.name == selectboxfrom) {
            roundflightfrom+="<option value='"+item.name+"' selected>"+item.name+"&nbsp;("+item.short_code+")</option>";
        
           } else{
            // roundflightto+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
            roundflightfrom+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
           }
        
       });

       $("#round_departure_location").html(roundflightfrom); 
       $("#round_arrival_location").html(roundflightto);
   
   });
   var arrvie = $( "#box2" ).val();
   console.log(arrvie+"arrive");
   dep2.val(arrvie);
   console.log($("#round_departure_location").val());
//    roundcondition();
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

function checkTheDropdowns() {

    var roundtoCity = $("#round_arrival_location");

    toCity.attr("disabled", false);
  
    roundtoCity.attr("disabled", false);
    selectboxfrom=$("#box1").val();



    var items = "";
    items += "<option value='origin'>Flight To</option>";
    $.getJSON("sonicstar/php/json.php", function(data) {

        $.each(data, function(index, item) {
            if ($('#box1').val() == item.name) {
                // toCity.attr("disabled", true);
                console.log($('#box1').val()+"ddd");
                submit.attr("disabled", true);

            } else {
                if ($('#box1').val() == "origin") {                       
                    items += "<option value='" + item.name + "'>" + item.name + "&nbsp;(" + item.short_code + ")</option>";
                    submit.attr("disabled", true);
                } else {      
                    items += "<option value='" + item.name + "'>" + item.name + "&nbsp;(" + item.short_code + ")</option>";
                }

            }

        });
        $("#box2").html(items);
    });

    var roundflightto="";
    roundflightto+="<option value='origin'>Flight To</option>";

    var roundflightfrom="";
    roundflightfrom+="<option value='origin'>Flight From</option>";
   $.getJSON("sonicstar/php/json.php",function(data){
   
       $.each(data,function(index,item) 
       {
           if (item.name == selectboxfrom) {
            roundflightfrom+="<option value='"+item.name+"' selected>"+item.name+"&nbsp;("+item.short_code+")</option>";
           }
           else{
            roundflightto+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
            roundflightfrom+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
           }
    
       });

       $("#round_departure_location").html(roundflightfrom); 
       $("#round_arrival_location").html(roundflightto);
   
   });

   var departure = $( "#box1" ).val();
   arr.val(departure);
   console.log(12);
};
checkTheDropdowns();
$('#box1').on('change', checkTheDropdowns);


