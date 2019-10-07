var roundfromCity = $("#round_departure_location");
var roundtoCity = $("#round_arrival_location");
var round_submit=$("#round_submit");
// var submit=$("#round_departure_location");
var dep2=$("#dep2");
var arr=$("#arr2");
$( document ).ready(function() {

  
    $("#round_adult_quantity").val(1);
    $("#round_child_quantity").val(0);
    $("#round_infant_quantity").val(0);
    $("#round_total_quantity").val(1);

    $(".qty").val(0);
    
    $(".qty_adult").val(1);

    // submit.attr("disabled",true);
    var roundflightto="";
    roundflightto+="<option value='origin'>Flight To</option>";

    var roundflightfrom="";
    roundflightfrom+="<option value='origin'>Flight From</option>";
   $.getJSON("sonicstar/php/json.php",function(data){
   
       $.each(data,function(index,item) 
       {
        roundflightto+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
        roundflightfrom+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
       });
       $("#round_departure_location").html(roundflightfrom); 
       $("#round_arrival_location").html(roundflightto);
   
   });
   

   $("#departure_date").val(moment().add('days', 1).format('L'));
   $("#return_date").val(moment().add('days', 1).format('L'));
//    roundtoCity.attr("disabled", true);
   round_submit.attr("disabled", true);   
 

});

roundfromCity.on("change",function(){

    roundtoCity.attr("disabled", false);
 
    var roundflightto="";
    roundflightto+="<option value='origin'>Flight To</option>";
    $.getJSON("sonicstar/php/json.php",function(data){
    
        $.each(data,function(index,item) 
        {
            if ($('#round_departure_location').val()==item.name) {
              
               console.log($('#round_departure_location').val());
               console.log($('#round_arrival_location').val());
               round_submit.attr("disabled", true);
              
            }else if($('#round_departure_location').val()!=item.name){

                if ($('#round_departure_location').val()=="origin") {
                    roundflightto+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
                    round_submit.attr("disabled", true);
                } else {
                    roundflightto+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
                }
            }
        });

    
        $("#round_arrival_location").html(roundflightto); 
    
    });
   
    var departure = $("#round_departure_location" ).val();
    console.log(departure);
    arr.val(departure);
    roundcondition();
    
    console.log(departure+"round");
});

roundtoCity.on("change",function(){
        // let $boxval = $("#round_arrival_location").val();
      
        if ($("#round_departure_location" ).val()==$("#round_arrival_location").val()) {
             var items="";
        items+="<option value='origin'>Flight From</option>";
        $.getJSON("sonicstar/php/json.php",function(data){
        
            $.each(data,function(index,item) 
            {
                if ($('#round_arrival_location').val()==item.name) {
                  
                    items+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
                   round_submit.attr("disabled", true);
                  
                }else{
    
                    if ($('#round_arrival_location').val()=="origin") {
                        items+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
                        round_submit.attr("disabled", true);
                    } else {
                        items+="<option value='"+item.name+"'>"+item.name+"&nbsp;("+item.short_code+")</option>";
                    }
                   
                }
          
         
                
            });
    
            $("#round_departure_location").html(items); 
        
        });
     
        }

       
        var arrvie = $( "#round_arrival_location" ).val();
        console.log(arrvie+"arrive");
        dep2.val(arrvie);
      
        roundcondition();
   
    });


    $( document ).ready(function() {

        var total=$("#round_total_quantity").val();
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
                $("#round_child_quantity").val(currentVal - 1)
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
    
            console.log("s");
            round_submit.attr("disabled", true);
          
        }else{
            round_submit.attr("disabled", false);
        }
    
    }