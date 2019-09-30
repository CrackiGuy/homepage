var roundfromCity = $("#round_departure_location");
var roundtoCity = $("#round_arrival_location");
// var submit=$("#round_departure_location");
var dep2=$("#dep2");
var arr=$("#arr2");
$( document ).ready(function() {

    roundtoCity.attr("disabled", true);
    // submit.attr("disabled",true);
    

});

roundfromCity.on("change",function(){

    roundtoCity.attr("disabled", false);

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

    
    console.log(departure);
});

roundtoCity.on("change",function(){
        let $boxval = $("#round_arrival_location").val();

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
        console.log(arrvie);
   
    });

