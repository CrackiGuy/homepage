var roundfromCity = $("#round_departure_location");
var roundtoCity = $("#round_arrival_location");
var round_submit=$("#round_submit");
// var submit=$("#round_departure_location");
var dep2=$("#dep2");
var arr=$("#arr2");
$( document ).ready(function() {


    // submit.attr("disabled",true);
    var roundflightto="";
    roundflightto+="<option value='origin'>Flight To</option>";

    var roundflightfrom="";
    roundflightfrom+="<option value='origin'>Flight From</option>";
   $.getJSON("sonicstar/php/json.php",function(data){
   
       $.each(data,function(index,item) 
       {
        roundflightto+="<option value='"+item.name+"'>"+item.name+"</option>";
        roundflightfrom+="<option value='"+item.name+"'>"+item.name+"</option>";
       });
       $("#round_departure_location").html(roundflightfrom); 
       $("#round_arrival_location").html(roundflightto);
   
   });
   
   var today = moment().add('days', 1).format('DD MMM, YYYY');
   $("#departure_date").val(today);
   $("#return_date").val(today);
   roundtoCity.attr("disabled", true);
   round_submit.attr("disabled", true);   
 

});

roundfromCity.on("change",function(){

    roundtoCity.attr("disabled", false);
    roundcondition();

    var items="";
    items+="<option value='origin'>Flight To</option>";
    $.getJSON("sonicstar/php/json.php",function(data){
    
        $.each(data,function(index,item) 
        {
            if ($('#round_departure_location').val()==item.name) {
              
               console.log($('#round_departure_location').val());
               console.log($('#round_arrival_location').val());
               submit.attr("disabled", true);
              
            }else{
                items+="<option value='"+item.name+"'>"+item.name+"</option>";
            }
      
     
            
        });

        $("#round_arrival_location").html(items); 
    
    });

    var departure = $( "#round_departure_location" ).val();
    arr.val(departure);

    
    // console.log(departure);
});

roundtoCity.on("change",function(){
        // let $boxval = $("#round_arrival_location").val();
        roundcondition();

        // if ($boxval === "origin") {
            
        
        //     $('#round_departure_location option:eq(0)').prop('selected', true).trigger('change');

           
        // } else {
        //     $("#round_departure_location > option").each(function(ind) {
        //         let ele = $("#round_departure_location > option").eq(ind);
        //         if (ele.val() === $boxval) ele.attr("disabled", "disabled");
        //         else ele.removeAttr("disabled");
        //      });
        // }
        var arrvie = $( "#round_arrival_location" ).val();
    
        dep2.val(arrvie);
        // console.log(arrvie);
   
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