
$("#onewaysubmitform").submit(function (e) {
    e.preventDefault();
    var from_original = $("#box1").val();
        var to_original = $("#box2").val();
        if (from_original == "origin" ||  from_original == null ) {
    
            // submit.attr("disabled", true);
            // $("#box1").css("border-color", "yellow");
            // $("#alertcolor").css("border-style", "solid");
            // // $("#box1").css("border-style", "solid");
            // // $("#box1").css("border-color", "yellow");
            // $("#alertcolor").css('border-color', 'yellow');
            $("#box1").siblings(".select2-container").css('border-bottom', '2px solid red');
        }else{
            $("#box1").siblings(".select2-container").css('border-bottom', '2px solid green');
        }
         if(to_original == "origin" || to_original == null){
   
            $("#box2").siblings(".select2-container").css('border-bottom', '2px solid red');
        }   
        if(from_original != "origin" ||  from_original != null || to_original != "origin" || to_original != null){
            alert(2321);
                        $("#onewaysubmit").submit();
        }
});