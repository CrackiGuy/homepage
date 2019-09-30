var roundfromCity = $("#round_departure_location");
var roundtoCity = $("#round_arrival_location");
var round_submit=$("#round_submit");
// var submit=$("#round_departure_location");
var dep2=$("#dep2");
var arr=$("#arr2");
$( document ).ready(function() {

    roundtoCity.attr("disabled", true);
    // submit.attr("disabled",true);
    roundcondition();

});

roundfromCity.on("change",function(){

    roundtoCity.attr("disabled", false);
    roundcondition();

    let $boxval = $("#round_departure_location").val();

    if ($boxval==="origin") {

        // toCity.attr("disabled", true);
        // $('#onearr option:eq(0)').prop('selected', true).trigger('change');

    } else {

        $("#round_arrival_location > option").each(function(ind) {
            let ele = $("#round_arrival_location > option").eq(ind);
            if (ele.val() === $boxval) ele.attr("disabled", "disabled");
            else ele.removeAttr("disabled");
          });
    }

    var departure = $( "#round_departure_location" ).val();
    arr.val(departure);

    
    // console.log(departure);
});

roundtoCity.on("change",function(){
        let $boxval = $("#round_arrival_location").val();
        roundcondition();

        if ($boxval === "origin") {
            
        
            $('#round_departure_location option:eq(0)').prop('selected', true).trigger('change');

           
        } else {
            $("#round_departure_location > option").each(function(ind) {
                let ele = $("#round_departure_location > option").eq(ind);
                if (ele.val() === $boxval) ele.attr("disabled", "disabled");
                else ele.removeAttr("disabled");
             });
        }
        var arrvie = $( "#round_arrival_location" ).val();
    
        dep2.val(arrvie);
        // console.log(arrvie);
   
    });


    $( document ).ready(function() {

        var total=$("#total_quantity").val();
        var currentVal=1;
        
        $("#round_adult_plus").click( function(e) {
    
            e.preventDefault();
            
            // Define field variable
            field = "input[name=" + $(this).attr("field") + "]";
            
            // Get its current value
            var currentVal = parseInt($(field).val());
            
            
            // If is not undefined
            if ( !isNaN(currentVal) && currentVal < 10 && total < 9) {
        
                // Increment
                $(field).val(currentVal + 1);
                $("#round_adult_quantity").val(currentVal + 1);
    
                total++;
             
             
              
            }
            
        });
        
        // This button will decrement the value till 0
        $("#round_adult_minus").click( function(e) {
        
            e.preventDefault();
            
            // Define field variable
            field = "input[name=" + $(this).attr("field") + "]";
            
            // Get its current value
            var currentVal = parseInt($(field).val());
            
            // If it isn't undefined or its greater than 0
            if ( !isNaN(currentVal) && currentVal > 1 ) {
                // Decrement one
                $(field).val(currentVal - 1);
                $("#round_adult_quantity").val(currentVal - 1);
                total--;
            }
            
        });
    
    
        $(".round_child_plus").click( function(e) {
    
            e.preventDefault();
            
            // Define field variable
            field = "input[name=" + $(this).attr("field") + "]";
            
            // Get its current value
            var currentVal = parseInt($(field).val());
            
            // If is not undefined
            if ( !isNaN(currentVal) && currentVal < 10 && total < 9) {
        
                // Increment
                $(field).val(currentVal + 1);
                $("#round_child_quantity").val(currentVal + 1)
                total++;
            }
            
        });
        
        // This button will decrement the value till 0
        $(".round_child_minus").click( function(e) {
        
            e.preventDefault();
            
            // Define field variable
            field = "input[name=" + $(this).attr("field") + "]";
            
            // Get its current value
            var currentVal = parseInt($(field).val());
            
            // If it isn't undefined or its greater than 0
            if ( !isNaN(currentVal) && currentVal > 0 ) {
                // Decrement one
                $(field).val(currentVal - 1);
                $("#child_quantity").val(currentVal - 1)
                total--;
            }
            
        });
    
    
    
        $(".round_infant_plus").click( function(e) {
    
            e.preventDefault();
            
            // Define field variable
            field = "input[name=" + $(this).attr("field") + "]";
            
            // Get its current value
            var currentVal = parseInt($(field).val());
            
            // If is not undefined
            if ( !isNaN(currentVal) && currentVal < 10 && total < 9) {
        
                // Increment
                $(field).val(currentVal + 1);
                $("#round_infant_quantity").val(currentVal + 1);
    
                total++;
        
            }
            
        });
        
        // This button will decrement the value till 0
        $(".round_infant_minus").click( function(e) {
        
            e.preventDefault();
            
            // Define field variable
            field = "input[name=" + $(this).attr("field") + "]";
            
            // Get its current value
            var currentVal = parseInt($(field).val());
            
            // If it isn't undefined or its greater than 0
            if ( !isNaN(currentVal) && currentVal > 0 ) {
                // Decrement one
                $(field).val(currentVal - 1);
                $("#round_infant_quantity").val(currentVal - 1);
                total--;
            }
            
        });
    
    });

    function roundcondition(){

        var roundfromCity = $("#round_departure_location").val();
        var roundtoCity = $("#round_arrival_location").val();
     
    
        if (roundfromCity=="origin" || roundtoCity=="origin") {
    
            round_submit.attr("disabled", true);
          
        }else{
            round_submit.attr("disabled", false);
        }
    
    }