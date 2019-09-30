$("#carousel-example").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $(".carousel-item")
                    .eq(i)
                    .appendTo(".carousel-inner");
            } else {
                $(".carousel-item")
                    .eq(0)
                    .appendTo(".carousel-inner");
            }
        }
    }
});
$(document).ready(function() {
    $('.select2class').select2({ width: '100%' });
});
$(document).ready(function() {
    $("#my-form").submit(function(e) {
        e.preventDefault();
        $.ajax({
            //insert.php calls the PHP file
            url: "insert_sub_email.php",
            method: "post",
            data: $("form").serialize(),
            dataType: "text",
            success: function(strMessage) {
                $("#message").text(" Your Email is subscribed ");
                $("#my-form")[0].reset();
            }
        });
    });
});


//Datepicker
var startDate = '';
var endDate = '';

$(function() {
    $('#round_trip').daterangepicker({
        opens: 'right',
        minDate: moment(),
        locale: {
            format: 'DD MMM YYYY'
        }
          
    }).on('apply.daterangepicker', function (e, picker) {
        var startDate = picker.startDate.format('DD MMM YYYY');
        var endDate = picker.endDate.format('DD MMM YYYY');
      
        $("#departure_date").val(startDate);
        $("#return_date").val(endDate);
        console.log(startDate);
        console.log(endDate);
    });
    // $('#departure_date').daterangepicker()
    $('#one-date').daterangepicker({
        singleDatePicker: true,
        opens: 'right',
        minDate: moment(),
        showDropdowns: true,
        showWeekNumbers: true,
        locale: {
            format: 'D MMMM YYYY'
        }
    });
});
// $(document).ready(function() {
//     $('#qty_input').prop('disabled', true);
//     $('#plus-btn').click(function() {
//         $('#qty_input').val(parseInt($('#qty_input').val()) + 1);
//     });
//     $('#minus-btn').click(function() {
//         $('#qty_input').val(parseInt($('#qty_input').val()) - 1);
//         if ($('#qty_input').val() == 0) {
//             $('#qty_input').val(1);
//         }

//     });
// });