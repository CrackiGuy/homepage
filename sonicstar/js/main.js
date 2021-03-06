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

$(document).ready(function() {

    $("#one_date").val(moment().add('days', 1).format('L'));


});



//Datepicker
var startDate = '';
var endDate = '';

$(function() {

    $('#round_trip').daterangepicker({
        opens: 'right',
        minDate: moment().add('days', 1),
        startDate: moment().add('days', 1),
        endDate: moment().add('days', 1),
        autoUpdateInput: true,
        autoApply: true,
        locale: {
            format: 'D MMM YYYY'
        }

    }).on('apply.daterangepicker', function(e, picker) {
        var startDate = picker.startDate.format('MM/DD/YYYY');
        var endDate = picker.endDate.format('MM/DD/YYYY');

        $("#departure_date").val(startDate);
        $("#return_date").val(endDate);
    });

    $('#one-date').daterangepicker({
        singleDatePicker: true,
        opens: 'right',
        minDate: moment().add('days', 1),
        showDropdowns: true,
        autoUpdateInput: true,
        locale: {
            format: 'D MMMM YYYY'
        }
    }, function(choosen_date) {

        $("#one_date").val(choosen_date.format('MM/DD/YYYY'));

    });

    $('#daily_pickup_date').daterangepicker({
        singleDatePicker: true,
        opens: 'right',
        minDate: moment(),
        autoUpdateInput: false,
    }, function(chosen_date) {
        $('#daily_pickup_date').val(chosen_date.format('DD MMM YYYY'));
    });
    $('#daily_pickup_date1').daterangepicker({
        singleDatePicker: true,
        opens: 'right',
        minDate: moment(),
        showDropdowns: true,
        autoUpdateInput: false,
    }, function(chosen_date) {
        $('#daily_pickup_date1').val(chosen_date.format('DD MMM YYYY'));
    });
});
$(document).ready(function() {
    $('#qty_input').prop('disabled', true);
    $('#plus-btn').click(function() {
        $('#qty_input').val(parseInt($('#qty_input').val()) + 1);
    });
    $('#minus-btn').click(function() {
        $('#qty_input').val(parseInt($('#qty_input').val()) - 1);
        if ($('#qty_input').val() == 0) {
            $('#qty_input').val(1);
        }

    });
});
$(document).click(function(e) {

    if (!$(e.target).is('.ggwp')) {
        $('.collapse').collapse('hide');
    } else {
        on('overlay');
        on('overlay1');
    }
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" aa", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " aa";
    off('overlay');
    off('overlay1');
}

function openCar(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-car");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-car");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" aa", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " aa";
}
// Car
$("#daily_dropoff_date").hide();
$("#dest").hide();
$("#highwaysearch").hide();
$("#airport_dropoff").hide();


$("#pickup").click(function() {
    if ($(this).is(":checked")) {
        $("#daily_pickup_date").show();
        $("#daily_dropoff_date").hide();

    } else {
        $("#daily_pickup_date").hide();
        $("#daily_dropoff_date").show();

    }
});

$("#dropoff").click(function() {
    if ($(this).is(":checked")) {
        $("#daily_pickup_date").hide();
        $("#daily_dropoff_date").show();
        $("#airport_dropoff").show();
        $("#airport_pickup").hide();
    } else {
        $("#daily_pickup_date").show();
        $("#daily_dropoff_date").hide();
    }
});

$("#Highway").click(function() {
    if ($(this).is(":checked")) {
        $("#dest").show();
        $("#highwaysearch").show();
        $("#citysearch").hide();

    } else {
        $("#dest").hide();
        $("#citysearch").show();

    }
});

$("#city").click(function() {
    if ($(this).is(":checked")) {
        $("#dest").hide();

    } else {
        $("#dest").hide();

    }
});


$('#daily_dropoff_date').daterangepicker({
    singleDatePicker: true,
    opens: 'right',
    minDate: moment(),
    showDropdowns: true,
    autoUpdateInput: false,
}, function(chosen_date) {
    $('#daily_dropoff_date').val(chosen_date.format('DD MMM YYYY'));
});

$('#daily_dropoff_date1').daterangepicker({
    singleDatePicker: true,
    opens: 'right',
    minDate: moment(),
    showDropdowns: true,
    autoUpdateInput: false,
}, function(chosen_date) {
    $('#daily_dropoff_date1').val(chosen_date.format('DD MMM YYYY'));
});
// $('#departure_date').daterangepicker()
// $('#one-date').daterangepicker({
//     singleDatePicker: true,
//     opens: 'right',
//     minDate: moment(),
//     showDropdowns: true,
//     locale: {
//         format: 'D MMMM YYYY'
//     }
// });

function on(str) {
    document.getElementById(str).style.display = "block";
}

function off(str) {
    document.getElementById(str).style.display = "none";
}