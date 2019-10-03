<?php

    $sql = "SELECT city.title FROM  `cr_manage_attributes` as city INNER JOIN `airport_locations` as airport ON `city`.`id` = `airport`.`city_id`";
   $sql2 =  "SELECT dest.id, dest.title, dest.short_desc, city.short_desc as title_mya FROM `cr_manage_attributes` as dest
                INNER JOIN `cr_manage_attributes` as city ON `dest`.`title`=`city`.`title` AND `city`.`parent_id`=70
                WHERE `dest`.`parent_id`=89 AND `dest`.`status`='1'  GROUP BY `dest`.`title` ORDER BY `city`.`id`";

    $result1 = $conn->query($sql);
    $result2 = $conn->query($sql2);
?>
<br>
<div class="tab">
  <button class="tablinks-car aa" onclick="openCar(event, 'airport')">Airport Transfer</button>
  <button class="tablinks-car" onclick="openCar(event, 'daily')">Daily Rent</button>
</div>

<div id="airport" class="tabcontent-car" style="display:block">
	<form class="form-inline" action="https://www.sonicstartravel.com/car_rental/cars" method="post" id="frm_daily">
   <input type="hidden" name="rent_type" value="36" id="daily_rent_type" />
    <div class="form-group col-12">
      <div class="radio-view">
      <div class="form-check-inline">
        <label class="pickup" for="radio2">
          <input type="radio" name="daily[airport]" id="pickup" class="airport_active" value="pickup" checked />Pick Up
        </label>
        </div>
        <div class="form-check-inline">
        <label class="dropoff" for="radio1">
            <input type="radio" name="daily[airport]" id="dropoff"  class="airport_active"  value="dropoff"/>Drop Off
          </label>
        </div>
      </div>
    </div>
    <div class="form-group col-md-12 col-lg-3">
      <select name="car_city" id="car_city_daily1" class="select2class">
        <option value="default" selected="selected">Pickup City</option>
        <?php foreach ($result1 as $city) { ?>
              <option value="<?php echo $city['id']; ?>"><?php echo $city['title']; ?></option>
        <?php } ?>
      </select>
    </div>
    <div class="form-group col-md-12 col-lg-3">
            <input type="text" class="car-date" name="daily[pickup_date]" id="daily_pickup_date" placeholder="Pick Up Date">
            <input type="hidden" class="car-date" id="daily_pickup_date" name="daily[pickup_date]" placeholder="Pick Up Date">
            <input type="text" class="car-date" id="daily_dropoff_date" name="daily[dropoff_date]" placeholder="Drop Off Date">
            <input type="hidden" class="car-date" id="daily_dropoff_date" name="daily[dropoff_date]" placeholder="Drop Off Date">
    </div>
    <div class="form-group col-md-12 col-lg-3">
      <button type="submit" id="onewaysubmit" class="btn-search float-right">Search</button>
    </div>
	</form>
</div>
<div id="daily" class="tabcontent-car">
	<form class="form-inline" action="https://www.sonicstartravel.com/car_rental/cars" method="post" id="frm_daily">
		<input name="flight_count" value="1" id="flight_count" type="hidden">
		<input type="hidden" name="page" value="0" >
		<input type="hidden" name="flight_status" value="oneway">
		<div class="form-group col-12">
				<div class="radio-view">
				<div class="form-check-inline in_city_highway" id="incity" >
          <label class="dropoff" for="city">
             <input type="radio" name="daily[incity]" id="city" value="in_city" checked="" />In City
          </label>
					</div>
					<div class="form-check-inline">
            <label class="dropoff" for="highway">
               <input type="radio" name="daily[incity]" id="Highway" value="highway"/>High Way
            </label>
					</div>

				</div>
			</div>
			<div class="form-group col-md-12 col-lg-3">
        <select name="car_city" id="car_city_daily" class="select2class">
          <option value="default" selected="selected">Pickup City</option>
          <?php foreach ($result1 as $city) { ?>
            <option value="<?php echo $city['id']; ?>"><?php echo $city['title']; ?></option>
          <?php } ?>
        </select>
      </div>
			<div id="dest" class="form-group col-md-12 col-lg-3">
					<select name="daily[destination]" id="destination" class="select2class" >
            <option value="default" selected="selected">Destination</option>
            <?php foreach ($result2 as $city) { ?>
                <option value="<?php echo $city['id']; ?>"><?php echo $city['title']; ?></option>
              <?php } ?>
            </select>
			</div>
			<div class="form-group col-md-12 col-lg-3">
        <input type="text" class="car-date"  id="pickupdate" placeholder="Pick Up Date">
	        <input type="hidden" class="car-date" name="daily[pickup_date]" id="daily_pickup_date1" placeholder="Pick Up Date">
          <input type="hidden" class="car-date" id="daily_dropoff_date1" name="daily[dropoff_date]" placeholder="Drop Off Date" >
	    </div>

			<div class="container">
        <br>
        <button type="submit" id="onewaysubmit" class="btn-search float-right">Search</button>
			</div>
	</form>
</div>
