jQuery(function() {
    get_destination($("#car_city_daily").val());
    //Start Manage Car list page
    jQuery(".call_ajax").on('click, change', function() {
        carlist();
    });
    if (jQuery("#listss").length > 0) {
        carlist();
    }
    //Car Search module
    $(".book_now_btn").click(function() {
        $("#frm_daily").submit();
    });
    $('#EditPickUp, #multiLocations').on('hidden.bs.modal', function(e) {
        $('#daily_dropoff_time').timepicker({
            minTime: $("#daily_pickup_time").val(),
            maxTime: '11:30pm'
        });
        $('#daily_dropoff_time').val($("#daily_pickup_time").val());
        var pickup_date = $("#daily_pickup_date").val();
        // Stoneland IT Solution
        // $("#daily_dropoff_date").val(pickup_date);

    });
    $(".refine_search").click(function() {
        var selected_rent_type = $("#selected_rent_type").val();
        //alert(selected_rent_type);
        if (selected_rent_type == 36) {
            var car_city_daily = $("#car_city_daily").val();
            if ($("#daily_dropoff_date").val() < $("#daily_pickup_date").val()) {
                $("#daily_dropoff_date").val($("#daily_pickup_date").val());
            }
            if ($("#daily_dropoff_date").val() == $("#daily_pickup_date").val()) {
                resetSummary();
            }
            var data1 = $('#frm_daily').serialize();
        } else if (selected_rent_type == 37) {
            resetSummary();
            var car_city_daily = $("#car_city_weekly").val();
            var data1 = $('#frm_weekly').serialize();
        } else if (selected_rent_type == 38) {
            resetSummary();
            var car_city_daily = $("#car_city_monthly").val();
            var data1 = $('#frm_monthly').serialize();
        }
        var cpage = 1;
        jQuery.ajax({
            type: 'POST',
            url: SITE_URL + 'ajax_cars',
            dataType: 'json',
            data: data1 + "&rent_type=" + selected_rent_type + "&cpage=" + cpage,
            success: function(resultData) {
                setupCarlisting(resultData);
                slider_image();
            }
        });
    });
    //END Manage Car list page
    //Start Manage Each Hours per day IN City
    $(document).on("change", ".required-time", function() {
        if ($(this).val() != '') {
            jQuery(this).removeClass("error-time");
        }
    });
    $(document).on("change", "#daily_pickup_date,#daily_dropoff_date", function() {
        if (($("#daily_pickup_date").val() != '' && $("#daily_dropoff_date").val() != '') && ($("#daily_dropoff_date").val() > $("#daily_pickup_date").val())) {
            if ($('#city').is(':checked')) {
                DailyHoursManage();
            }
            if ($('#Highway').is(':checked')) {
                DailyLocationManage(false, 0);
            }
        } else {
            //$('#sbt_daily').removeAttr('disabled');
            //$('.refine_search').removeAttr('disabled');
        }
        if ($("#daily_dropoff_date").val() < $("#daily_pickup_date").val()) {
            $("#daily_dropoff_date").val($("#daily_pickup_date").val());
        }

    });
    //Stoneland IT Solution
    $(document).on("click", "#refilter_btn", function() {
        if (($("#daily_pickup_date").val() != '' && $("#daily_dropoff_date").val() != '') && ($("#daily_dropoff_date").val() > $("#daily_pickup_date").val())) {
            if ($('#city').is(':checked')) {
                DailyHoursManage();
            }
            if ($('#Highway').is(':checked')) {
                DailyLocationManage(false, 0);
            }
        } else {
            //$('#sbt_daily').removeAttr('disabled');
            //$('.refine_search').removeAttr('disabled');
        }

        // if($("#daily_dropoff_date").val()<$("#daily_pickup_date").val()){
        //     $("#daily_dropoff_date").val($("#daily_pickup_date").val());
        // }
    });
    $(document).on("change", ".manage-time", function() {
        var pickid = $(this).attr("id");
        var pickVal = $(this).val();
        $('#dropoff_' + pickid).timepicker({
            minTime: pickVal
        });
    });
    $(".applyDays").click(function() {
        var error = true;
        jQuery(".required-time").each(function() {
            if (jQuery(this).val() == '') {
                jQuery(this).addClass("error-time");
                error = false;
            }
        });
        if (!error) {
            alert("Please fill empty fields...");
            return error;
        }
        var data1 = $('#frm_daily_hours').serialize();
        //console.log(data1);
        jQuery.ajax({
            type: 'POST',
            url: SITE_URL + 'set-multidays',
            dataType: 'json',
            data: data1 + "&pickup_date=" + $("#daily_pickup_date").val(),
            success: function(resultData) {
                $("#frm_daily").submit();
            }
        });
    });
    //END  Manage Each Hours per day IN City
    $(".applymultiDestination").click(function() {
        $("#daily_pickup_time").val($("#daily_pickup_time_pop").val());
        $("#daily_dropoff_time").val($("#daily_dropoff_time_pop").val());
        var data1 = $('#frm_daily_multi_dest').serialize();
        console.log(data1);
        jQuery.ajax({
            type: 'POST',
            url: SITE_URL + 'set-multi-destinations',
            dataType: 'json',
            data: data1,
            success: function(resultData) {
                // console.log(resultData);return false;
                $("#frm_daily").submit();
            }
        });
    });
    function isairport(val){
        // alert();
        if ($(val).is(':checked')) {
            $.get(BASE_URL+"/cities?airport=1",function(data){
                var obj=$.parseJSON(data);
                var html='';
                $.each(obj,function(k,v){
                    html+="<option value='"+v.id+"' "+(v.id==SELECTED_CITY?'selected':'')+">"+v.title+"</option>";
                });
                $('#car_city_daily').html(html);
            });

            $(".each-day-hourly").hide('slow');
            $(".in_city_highway").hide('slow');
            $("#desitanted-location").hide('slow');
            if ($(val).val() == 'pickup') {
                $('#dropoff').prop('checked', false);
                $(".air_dropoff").hide('slow');
                $(".air_pickup").show('slow');
            }
            if ($(val).val() == 'dropoff') {
                $('#pickup').prop('checked', false);
                $(".air_pickup").hide('slow');
                $(".air_dropoff").show('slow');
            }
        } else {
            $.get(BASE_URL+"/cities",function(data){
                var obj=$.parseJSON(data);
                var html='';
                $.each(obj,function(k,v){
                    html+="<option value='"+v.id+"' "+(v.id==SELECTED_CITY?'selected':'')+">"+v.title+"</option>";
                });
                $('#car_city_daily').html(html);
            });
            $(".each-day-hourly").show('slow');
            if ($("#Highway").is(':checked')) {
                $("#desitanted-location").show('slow');
            } else {
                $("#desitanted-location").hide('slow');
            }
            $(".in_city_highway").show('slow');
            $(".air_dropoff").show('slow');
            $(".air_pickup").show('slow');
        }
    }
    $(".airport_active").click(function() {
        isairport(this);
    });


        isairport('.airport_active');
    // if ($('.airport_active').is(':checked')) {
    // }

    if(ISFROMMAIN=="airport"){
        $(".airport_active").attr('checked',true);
       isairport($(".airport_active"));
    }
    $("#Highway").click(function() {
       get_destination($("#car_city_daily").val());
        $("#desitanted-location").slideToggle("slow");
        var pickup = new Date($("#daily_pickup_date").val());
        var dropdate = new Date($("#daily_dropoff_date").val());
        if (pickup < dropdate) {
            DailyLocationManage(false, 0);
        } else {
            //$('#sbt_daily').removeAttr('disabled');
        }
    });
    $("#city").click(function() {
        var pickup = new Date($("#daily_pickup_date").val());
        var dropdate = new Date($("#daily_dropoff_date").val());
        if (pickup < dropdate) {
            DailyHoursManage();
        } else {
            //$('#sbt_daily').removeAttr('disabled');
        }
        $("#desitanted-location").slideUp("slow");
    });
    $("#daily_pickup_date").datepicker({
        beforeShow: function() {
            if ($("#pickup").is(':checked')) {
                $("#daily_dropoff_date").val($("#daily_pickup_date").val());
            }
            $(this).datepicker('option', 'minDate', new Date());
            if ($('#daily_dropoff_date').val() === '') $(this).datepicker('option', 'minDate', 0);
        }
    });
    $("#daily_dropoff_date").datepicker({
        beforeShow: function() {
            $(this).datepicker('option', 'minDate', $('#daily_pickup_date').val());
            if ($('#daily_pickup_date').val() === '') $(this).datepicker('option', 'minDate', 0);
        },
        onSelect: function(date) {
            if ($("#dropoff").is(':checked')) {
                $("#daily_pickup_date").val($("#daily_dropoff_date").val());
            }
            var drop = new Date(date);
            var pickup = new Date($("#daily_pickup_date").val());
            var city = $("input[name='daily[incity]']:checked").val();
            if (pickup < drop && city == 'in_city') {
                DailyHoursManage();
            } else if (pickup < drop && city == 'highway') {
                // DailyLocationManage(false, 0);
                // console.log("hi highway");
                var step = parseInt($(this).attr("id"));
                var dest_text = $("#" + step + "_destination option:selected").text();
                //alert(dest_text);
                jQuery.ajax({
                    type: 'POST',
                    url: SITE_URL + 'get-cityby-destination',
                    dataType: 'json',
                    data: "dest_text=" + dest_text,
                    success: function(resultData) {
                        DailyLocationManage(resultData, step);
                    }
                });
            } else {
            }
            if($("#daily_dropoff_date").val()==$("#daily_pickup_date").val()){
                $('#sbt_daily').show();
            }else{
                $('#sbt_daily').hide();
            }
        }
    });
    $("#weekly_pickup_date").datepicker({
        minDate: 0
    });
    $("#monthly_pickup_date").datepicker({
        minDate: 0
    });
    $("#datepicker5").datepicker();
    $("#datepicker6").datepicker();
    $("#datepicker7").datepicker();
    $("#datepicker8").datepicker();
    $(".datepicker").datepicker();
    if ($(".timepicker").length > 0) {
        $('.timepicker').timepicker();
        //$('#daily_pickup_time').timepicker();
        //$('#daily_dropoff_time').timepicker();
    }
    $(document).on("change", "#daily_pickup_time", function() {
        if ($("#daily_pickup_date").val() == $("#daily_dropoff_date").val()) {
            var fromtm_val = ($(this).val());
            var droptime = $('#daily_dropoff_time').val();
            if (timeToSeconds(fromtm_val) > timeToSeconds(droptime)) {
                $('#daily_dropoff_time').val(fromtm_val);
            }
            $('#daily_dropoff_time').timepicker({
                minTime: fromtm_val,
                maxTime: '11:30pm'
            });
        }
    });
    $(document).on("change", "#selecting-day .timepicker", function() {
        var fromtm_id = ($(this).attr("id"));
        var fromtm_val = ($(this).val());
        var droptime = $('#dropoff_' + fromtm_id).val();
        if (timeToSeconds(fromtm_val) > timeToSeconds(droptime)) {
            $('#dropoff_' + fromtm_id).val(fromtm_val);
        }
        $('#dropoff_' + fromtm_id).timepicker({
            minTime: fromtm_val,
            maxTime: '11:30pm'
        });
    });
    //Set MultiDestinations in popup
    $(document).on("change", ".changeDestination", function() {
        var step = parseInt($(this).attr("id"));
        var dest_text = $("#" + step + "_destination option:selected").text();
        //alert(dest_text);
        jQuery.ajax({
            type: 'POST',
            url: SITE_URL + 'get-cityby-destination',
            dataType: 'json',
            data: "dest_text=" + dest_text,
            success: function(resultData) {
                DailyLocationManage(resultData, step);
            }
        });
    });
});

function setpagination(page) {
    //alert(page);
    jQuery("#cpage").val(page);
    carlist();
}

function timeToSeconds(time) {
    time = time.split(':');
    var hours = time[0];
    var min = time[1].substring(0, 2);
    var period = time[1].substring(2, 4);
    if (period == 'pm') {
        hours = (parseInt(hours) + parseInt(12));
    }
    return ((hours * 3600) + (min * 60));
}
//Start Car List Page
function carlist() {
    var fuel_type = jQuery("#fuel_type_id").val();
    var ordering = jQuery("#ordering").val();
    var no_of_passanger = jQuery("#no_of_passenger_id").val();
    var selected_rent_type = $("#selected_rent_type").val();
    //alert(selected_rent_type);
    if (selected_rent_type == 36) {
        var car_city = $("#car_city_daily").val();
    } else if (selected_rent_type == 37) {
        var car_city = $("#car_city_weekly").val();
    } else if (selected_rent_type == 38) {
        var car_city = $("#car_city_monthly").val();
    }
    var cpage = $("#cpage").val();
    //var fuel_type = jQuery("#fuel_type_id").val();
    // var car_type = jQuery('input[name=car_type]:checked').map(function() {
    //     return $(this).val();
    // }).get().join(",");
    var car_type = $('#car_type :selected').val();
    var car_company = $('#car_company :selected').val();
    console.log(selected_rent_type);
    jQuery.ajax({
        type: 'POST',
        url: SITE_URL + 'ajax_cars',
        dataType: 'json',
        data: {
            fuel_type: fuel_type,
            no_of_passanger: no_of_passanger,
            car_city: car_city,
            rent_type: selected_rent_type,
            car_type: car_type,
            car_company: car_company,
            order_by: ordering,
            cpage: cpage
        },
        async: false,
        success: function(resultData) {
            setupCarlisting(resultData);
            slider_image();
        }
    });
}

function setupCarlisting(resultData) {
    jQuery("#listss").html('');
    jQuery("#paging").html('');
    //console.log(resultData);
    var features = [];
    var car_model = '';
    var carname = '';
    var listrow = '';
    var cpage = resultData.cpage;
    var pages = resultData.recordsFiltered;
    if (resultData.list.length > 0) {
        jQuery.each(resultData.list, function(index, element) {
            var listrow = '';
            carname = element.carname;
            car_url = "car/" + element.car_id + "-" + carname.replace(/\s/g, '-').toLowerCase();
            car_demol_img = element.car_demol_img;
            listrow = '<div class="listing-box"><div class="car-image-box">';
            listrow += '<ul class="imageGallery">';
            carimg_url = BASE_URL + 'uploads/car/thumb/350X250/';
            carimg_url2 = BASE_URL + 'uploads/car/thumb/72X54/';
            carimg_url1 = BASE_URL + 'uploads/car/';
            if (element.images != null) {
                jQuery.each(element.images, function(imgind, image) {
                    //listrow += '<li><img src="<?php echo base_url('uploads/car/')?>'+image+'"></li>';
                    listrow += '<li class="img-itm1" data-thumb="' + carimg_url2 + image + '" data-src="' + carimg_url1 + image + '">';
                    listrow += '<img class="img-itm" src="' + carimg_url + image + '"></li>';
                });
            }
            /* listrow += '<li><img src="<?php //echo base_url('public/front/')?>images/small2.png"></li>';
             listrow += '<li><img src="<?php //echo base_url('public/front/')?>images/small3.png"></li>';*/
            listrow += '</ul>';
            listrow += '<div class="car-logo">';
            listrow += '<img title="' + element.supplier + '" alt="' + element.supplier + '" src="' + BASE_URL + '/uploads/user/' + element.profile_image + '" />';
            listrow += '<div>'+element.supplier+'</div>';

            listrow += '</div>';
            // listrow += '</div>';
            listrow += '</div>';
            //Car Info
            listrow += '<div class="car-info"><h4>' + FEATURES_TEXT + '</h4><ul>';

            jQuery.each(element.features, function(find, feature) {
                //alert(feature.title);
                listrow += '<li>' + feature + '</li>';
            });
            listrow += '</ul>';
            //rating section
            //alert(element.rating);
            // rating="";
            listrow += '<div class="retaing-box"><label>' + RATING_TEXT + ' : </label>';
            // rating += '<div class="retaing-box"><label>' + RATING_TEXT + ' : </label>';
            for (var ii = 0; ii < 5; ii++) {
                if (element.rating > ii) {
                    listrow += '<i class="fa fa-star" aria-hidden="true"></i>';
                    // rating+= '<i class="fa fa-star" aria-hidden="true"></i>';
                } else {
                    listrow += '<i class="fa fa-star-o" aria-hidden="true"></i>';
                    // rating+= '<i class="fa fa-star-o" aria-hidden="true"></i>';
                }
            }
            listrow += '</div>';
            if(element.num_of_reviews>0){
                listrow += '<div><a class="btn btn-default btn-block" data-toggle="modal" data-target="#modal-default" onclick="get_rating(\''+element.car_id+'\',\''+element.rating+'\',\''+element.supplier+'\',\''+element.carname+'\')">Reviews ('+element.num_of_reviews+')</a></div>';
            }
            //Rating section end
            //Discount alert
            if (element.discount_on_car > 0) {
                listrow += '<div class="retaing-box car-discount"><label>' + element.discount_on_car + '%  </label> ' + DISCOUNT_TEXT + '</div>';
            }
            //Discount alert
            listrow += '</div>';
            //Car Info END
            listrow += '<div class="car-packages">';

            //All Inclusive Package Info
            if (element.premium.length > 1) {
                listrow += '<div class="package-box"><div class="basic-package-innr"><h4>' + INCLUSIVE_PACKAGE_TEXT + '</h4>';
                listrow += '<ul>';
                jQuery.each(element.premium, function(pricesind, inclusive) {
                    //alert(feature.title);
                    listrow += '<li>' + inclusive + '</li>';
                });
                listrow += '</ul>';
                listrow += '</div>';
                listrow += '<div class="book-now-btns"><span class="price-box">' + element.price_default_inclusive + '</span><a href="' + SITE_URL + car_url + '/inc">' + BOOK_NOW_TEXT + '</a></div>';
                listrow += '</div>';
            }
            //All Inclusive Package Info END
            if (element.basic.length > 1) {
                //Basic Package Info
                listrow += '<div class="package-box"><div class="basic-package-innr"><h4>' + BASIC_PACKAGE_TEXT + '</h4>';
                listrow += '<ul>';
                jQuery.each(element.basic, function(pricesind, bs) {
                    //alert(feature.title);
                    listrow += '<li>' + bs + '</li>';
                });
                listrow += '</ul>';

                listrow += '</div>';
                listrow += '<div class="book-now-btns"><span class="price-box">' + element.price_default_basic + '</span><a href="' + SITE_URL + car_url + '">' + BOOK_NOW_TEXT + '</a></div>';
                listrow += '</div>';
                //Basic Package Info END
            }
            listrow += ' </div></div>';
            jQuery("#listss").append(listrow);
        });
    } else {
        jQuery("#listss").append('<div class="alert alert-warning"><strong>Warning!</strong> ' + CAR_NOT_FOUND_MSG + '</div>');
    }
    var prev = (cpage > 1) ? (cpage - 1) : 1;
    var next = (cpage < pages) ? (parseInt(cpage) + 1) : cpage;
    var paging = '';
    paging += '<ul><li><a href="javascript:void(0);" onclick="return setpagination(' + prev + ');"><i class="fa fa-arrow-left" aria-hidden="true"></i></a></li>';
    for (var ii = 1; ii <= pages; ii++) {
        if (ii == cpage) {
            paging += '<li><a href="javascript:void(0);" class="current pagin">' + ii + '</a></li>';
        } else {
            paging += '<li><a href="javascript:void(0);" onclick="return setpagination(' + ii + ')" class="pagin" id="page_' + ii + '">' + ii + '</a></li>';
        }
    }
    paging += '<li><a href="javascript:void(0);" onclick="return setpagination(' + next + ');"><i class="fa fa-arrow-right" aria-hidden="true"></i></a></li></ul>';
    if (pages > 1) {
        jQuery("#paging").append(paging);
        jQuery("#listss").append(listrow);
    }
}
function rating_html(name,rating,text){
    var html ='<div class="row">'+
                    '<div class="col-md-6">'+
                        '<h5><b>'+name+'</b></h5>'+
                    '</div>'+
                    '<div class="col-md-6 text-right review-rating-box">'+rating+'</div>'+
                    '<div class="col-md-12">'+
                        '<p>'+text+'</p>'+
                    '</div>'+
                '</div><hr/>';
    return html;
}
function get_rating(car_id,avg_rate,supplier_name,car_model){
    rating="";
    for (var ii = 0; ii < 5; ii++) {
        if (avg_rate > ii) {
            rating += '<i class="fa fa-star" aria-hidden="true"></i>';
        } else {
            rating += '<i class="fa fa-star-o" aria-hidden="true"></i>';
        }
    }
    $('#avg_rate').html(rating+" ("+avg_rate+")");
    $('#supplier_name').html("("+supplier_name+")");
    $('#car_model').html("("+car_model+")");
    $.post('rating/'+car_id,function(data){
        var obj=$.parseJSON(data);
        var html="";
        var rating="";
        $.each(obj,function(k,v){
            for (var ii = 0; ii < 5; ii++) {
                if (v.rating > ii) {
                    rating += '<i class="fa fa-star" aria-hidden="true"></i>';
                } else {
                    rating += '<i class="fa fa-star-o" aria-hidden="true"></i>';
                }
            }
            html += rating_html(v.user_lname,rating,v.comment);
            rating="";
        });
        // console.log(data);
        $('#review-body').html(html);

    });
}
if (jQuery(".imageGallery").length > 0) {
    slider_image();
}

function slider_image() {
    jQuery('.imageGallery').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        addClass: 'img-item',
        thumbItem: 3,
        slideMargin: 0,
        enableDrag: false,
        currentPagerPosition: 'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '.imageGallery .lslide'
            });
        }
    });
}
//END Car List Page
//Open Popup for In City with Daily when customer choose multiple days
function DailyHoursManage() {
    if (jQuery("#frm_daily .refine_search").length > 0) {
        //jQuery("#frm_daily .refine_search").attr('disabled','disabled');
    }
    //jQuery('#sbt_daily').attr('disabled','disabled');
    jQuery.ajax({
        type: 'POST',
        url: SITE_URL + 'set_dates',
        dataType: 'json',
        data: "pickup_date=" + $("#daily_pickup_date").val() + "&drop_date=" + $("#daily_dropoff_date").val(),
        success: function(resultData) {
            $("#selecting-day").html('');
            var i = 1;
            var rowdata = '';
            //console.log(resultData.counts);
            if (resultData.counts != '0') {
                jQuery.each(resultData.dates, function(index, element) {
                    if (i == 1) {
                        element.from = (element.from != '') ? element.from : jQuery("#daily_pickup_time").val();
                        element.to = (element.to != '') ? element.to : '6:00pm';
                    } else if (resultData.counts == i) {
                        element.from = (element.from != '') ? element.from : '8:00am';
                        element.to = (element.to != '') ? element.to : jQuery("#daily_dropoff_time").val();
                    } else {
                        element.from = (element.from != '') ? element.from : '8:00am';
                        element.to = (element.to != '') ? element.to : '6:00pm';
                    }
                    rowdata = '<div class="loation-box">';
                    rowdata += '<label>' + element.date + '</label>';
                    rowdata += '<div class="pickup-location-input">';
                    rowdata += '<div class="time-box left" title="' + FROM_TIME_TEXT + '">';
                    rowdata += '<label>' + FROM_TIME_TEXT + '</label><input type="text" class="timepicker manage-time required-time" id="' + i + '" name="pickup_time[from][]" placeholder="' + FROM_TIME_TEXT + '" required="required" value="' + element.from + '">';
                    rowdata += '</div>';
                    rowdata += '<div class="time-box" title="' + TO_TIME_TEXT + '">'
                    rowdata += '<label>' + TO_TIME_TEXT + '</label><input type="text" class="timepicker required-time" id="dropoff_' + i + '" name="pickup_time[to][]" placeholder="' + TO_TIME_TEXT + '" required="required" value="' + element.to + '">'
                    rowdata += '</div>'
                    rowdata += '</div>';
                    rowdata += '</div>';
                    $("#selecting-day").append(rowdata);
                    $('.timepicker').timepicker();
                    i++;
                });
                //$('#EditPickUp').modal('show');
                $('#EditPickUp').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            } else {
                var pickup_date = $("#daily_pickup_date").val();
                $("#daily_dropoff_date").val(pickup_date);
            }
        }
    });
}
//End each day hours pop-up
//Start MultiDestination Selection for Highway with multday trip
//Open Popup for Highway with Daily when customer choose multiple days
function DailyLocationManage(datanewcity, step) {
    if (jQuery("#frm_daily .refine_search").length > 0) {
        //jQuery("#frm_daily .refine_search").attr('disabled','disabled');
    }
    //jQuery('#sbt_daily').attr('disabled','disabled');
    // console.log($("#1_destination option:selected").text());
    // console.log(step);
    if (step > 0) {
        if (datanewcity == '1') {
            var car_city_daily = $("#from_" + step).val();
            var city_text = $("#city_" + step).text(); //
        } else {
            var car_city_daily = datanewcity.id;
            var city_text = datanewcity.title;
        }
        step = step + 1;
        var pickupCity = $("#car_city_daily option:selected").text();
        var dest_id = '';
        var dest_text = '';
        var daily_pickup_date = $("#from_date_" + step).text();
        //alert(daily_pickup_date);
    } else {
        step = 0;
        var car_city_daily = $("#car_city_daily").val();
        var pickupCity = $("#car_city_daily option:selected").text();
        var dest_id = $("#destination").val();
        var dest_text = $("#destination option:selected").text();
        var city_text = $("#car_city_daily option:selected").text();
        var daily_pickup_date = $("#daily_pickup_date").val();
        $("#pickup_date_id").val(daily_pickup_date);
    }
    $("#daily_pickup_time_pop").val($("#daily_pickup_time").val());
    $("#daily_dropoff_time_pop").val($("#daily_dropoff_time").val());
    $('#daily_dropoff_time_pop').timepicker({
        minTime: $("#daily_pickup_time").val(),
        maxTime: '11:30pm'
    });
    var daily_dropoff_date = $("#daily_dropoff_date").val();
    var postdata = {
        pickup_date: daily_pickup_date,
        drop_date: daily_dropoff_date,
        car_city_daily: car_city_daily,
        dest_id: dest_id,
        dest_text: dest_text,
        city_text: city_text,
        step: step,
        pickupCity: pickupCity
    };
    jQuery.ajax({
        type: 'POST',
        url: SITE_URL + 'set-destinations',
        dataType: 'json',
        data: postdata,
        success: function(resultData) {
            if (step == 0) {
                $("#multi_locations").html('');
            } else {
                for (var j = step; j <= (step + resultData.counts); j++) {
                    $("#row_" + j).remove();
                }
            }
            // console.log(resultData);
            setLocationPerDay(resultData, step); // setup row HTML for each day with set destination
            //$('#multiLocations').modal('show');
            $('#multiLocations').modal({
                backdrop: 'static',
                keyboard: false
            });
        }
    });
}

function setLocationPerDay(resultData, step) {
    if (step > 0) var i = step;
    else var i = 1;
    jQuery.each(resultData.dates, function(index, element) { //alert(element.date);
        var rowdata = '';
        if (i >= step) {
            rowdata += '<div class="highway-multiple-form" id="row_' + i + '">';
            rowdata += '<div class="highway-multiplw-left"><span id="from_date_' + i + '" >' + element.date + '</span>';
            rowdata += '<input type="hidden" name="from[]" id="from_' + i + '" value="' + element.from + '" />';
            rowdata += '<label id="city_' + i + '">' + element.from_title + '</label></div>';
            rowdata += '<div class="highway-multiplw-right">';
            rowdata += '<select name="to[]" id="' + i + '_destination" class="changeDestination select2">';
            if (element.to != '') {
                var j = 0;
                activeSelect2();
                jQuery.each(element.to, function(index1, element1) { //console.log(element.to_selected);
                    // console.log(element1.id);
                    // console.log();
                    if (element.to_selected == '' && j == 0) {
                        j = 1;
                        rowdata += '<option value="">' + SELECT_DESTINATION_TEXT + '</option>';
                    }
                    // if(element1.title!=''){
                    // console.log("---->"+element.to_selected);
                    if (element1.id == element.to_selected) {
                        rowdata += '<option value="' + element1.id + '" selected="selected">' + element1.title + '</option>';
                    } else {
                        rowdata += '<option value="' + element1.id + '">' + element1.title + '</option>';
                    }
                    // }
                });
            }
            rowdata += '</select>';
            rowdata += '</div>';
            if (step > 0) {
                var afteradd = (i - 1);
                $("#row_" + afteradd).after(rowdata);
            } else {
                $("#multi_locations").append(rowdata);
            }
        }
        i++;
    });
}

function resetSummary() {
    if (jQuery(".each-day-summary").length > 0) {
        jQuery(".each-day-summary").html('');
    }
    if (jQuery(".each-day-hourly").length > 0) {
        jQuery(".each-day-hourly").html('');
    }
    return true;
}

function activeSelect2() {
    $(".select2").select2();
}
//END MultiDestination Selection for Highway with multday trip
