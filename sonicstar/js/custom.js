var fromCity = $("#onedept");
var toCity = $("#onearr");
var submit=$("#onewaysubmit");

$( document ).ready(function() {

    toCity.attr("disabled", true);
    submit.attr("disabled",true);
    

});

fromCity.on("change",function(){

    toCity.attr("disabled", false);

    submit.attr("disabled",false);
});