var fromCity = $("#onedept");
var toCity = $("#onearr");
var submit=$("#onewaysubmit");


$( document ).ready(function() {

    toCity.attr("disabled", true);
    // submit.attr("disabled",true);
  
    firstcondition();

});

fromCity.on("change",function(){

    toCity.attr("disabled", false);
    firstcondition();

    let $boxval = $("#onedept").val();

    if ($boxval==="origin") {

      

    } else {

        $("#onearr > option").each(function(ind) {
            let ele = $("#onearr > option").eq(ind);
            if (ele.val() === $boxval) ele.attr("disabled", "disabled");
            else ele.removeAttr("disabled");
          });
    }

 

  

});

    toCity.on("change",function(){
        let $boxval = $("#onearr").val();
        firstcondition();

        if ($boxval === "origin") {
            
        
            $('#onedept option:eq(0)').prop('selected', true).trigger('change');

           
        } else {
            $("#onedept > option").each(function(ind) {
                let ele = $("#onedept > option").eq(ind);
                if (ele.val() === $boxval) ele.attr("disabled", "disabled");
                else ele.removeAttr("disabled");
             });
        }

   
    });


$( document ).ready(function() {

    var total=$("#total_quantity").val();
    var currentVal=1;
    
    $(".plus").click( function(e) {

        e.preventDefault();
        
        // Define field variable
        field = "input[name=" + $(this).attr("field") + "]";
        
        // Get its current value
        var currentVal = parseInt($(field).val());
        
        
        // If is not undefined
        if ( !isNaN(currentVal) && currentVal < 10 && total < 9) {
    
            // Increment
            $(field).val(currentVal + 1);
            $("#adult_quantity").val(currentVal + 1);

            total++;
         
         
          
        }
        
    });
    
    // This button will decrement the value till 0
    $(".minus").click( function(e) {
    
        e.preventDefault();
        
        // Define field variable
        field = "input[name=" + $(this).attr("field") + "]";
        
        // Get its current value
        var currentVal = parseInt($(field).val());
        
        // If it isn't undefined or its greater than 0
        if ( !isNaN(currentVal) && currentVal > 1 ) {
            // Decrement one
            $(field).val(currentVal - 1);
            $("#adult_quantity").val(currentVal - 1);
            total--;
        }
        
    });


    $(".child_plus").click( function(e) {

        e.preventDefault();
        
        // Define field variable
        field = "input[name=" + $(this).attr("field") + "]";
        
        // Get its current value
        var currentVal = parseInt($(field).val());
        
        // If is not undefined
        if ( !isNaN(currentVal) && currentVal < 10 && total < 9) {
    
            // Increment
            $(field).val(currentVal + 1);
            $("#child_quantity").val(currentVal + 1)
            total++;
        }
        
    });
    
    // This button will decrement the value till 0
    $(".child_minus").click( function(e) {
    
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



    $(".infant_plus").click( function(e) {

        e.preventDefault();
        
        // Define field variable
        field = "input[name=" + $(this).attr("field") + "]";
        
        // Get its current value
        var currentVal = parseInt($(field).val());
        
        // If is not undefined
        if ( !isNaN(currentVal) && currentVal < 10 && total < 9) {
    
            // Increment
            $(field).val(currentVal + 1);
            $("#infant_quantity").val(currentVal + 1);

            total++;
    
        }
        
    });
    
    // This button will decrement the value till 0
    $(".infant_minus").click( function(e) {
    
        e.preventDefault();
        
        // Define field variable
        field = "input[name=" + $(this).attr("field") + "]";
        
        // Get its current value
        var currentVal = parseInt($(field).val());
        
        // If it isn't undefined or its greater than 0
        if ( !isNaN(currentVal) && currentVal > 0 ) {
            // Decrement one
            $(field).val(currentVal - 1);
            $("#infant_quantity").val(currentVal - 1);
            total--;
        }
        
    });

});

function firstcondition(){


    var from_original=$("#onedept").val();
    var to_original=$("#onearr").val();

    if (from_original=="origin" || to_original=="origin") {

        submit.attr("disabled", true);
      
    }else{
        submit.attr("disabled", false);
    }

}

