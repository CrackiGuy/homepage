<div class="tab">
  <button class="tablinks aa" onclick="openTab(event, 'one')">One Way</button>
  <button class="tablinks" onclick="openTab(event, 'round')">Round Trip</button>
</div>

<div id="one" class="tabcontent" style="display:block">
	<form class="form-inline" action="https://www.sonicstartravel.com/flight/public/search" method="GET">
		<input name="flight_count" value="1" id="flight_count" type="hidden">
		<input type="hidden" name="page" value="0" >
		<input type="hidden" name="flight_status" value="oneway">
		<div class="form-group col-md-12 col-lg-3">
			<select class="select2class" id="box1" name="departure_location[]">
			
				
			</select>
		</div>
		<i class="fa fa-long-arrow-right d-none d-lg-block"></i>
		<div class="form-group col-md-12 col-lg-3">
			<select class="select2class" id="box2" name="arrival_location[]">
		
			<!--  -->
			</select>
		</div>
		<div class="form-group col-md-12 col-lg-3">
			<input type="text" name="departure_date[]" class="form-control" id="one-date" placeholder="Date">
		</div>
		<div class="form-group col-md-12 col-lg-2">
			<div class="passenger">
				<div class="btn btn-light btn-passenger" data-toggle="collapse" 
				data-target="#demo">
				
				Adult <input type="number" name="adult_quantity[]" id="adult_quantity" value="1" readonly>, 
				Child <input type="number" name="child_quantity[]" id="child_quantity" value="0" readonly>, 
				Infant <input type="number" name="infant_quantity[]" id="infant_quantity" value="0" readonly>
				<input type="hidden" id="total_quantity" name="total_quantity[]" class="input-number" value="1" min="1" max="9">
			</div>
				<br>
				<div id="demo" class="view-passenger collapse ggwp">
					<div class="input-group ggwp">
						<div class="row ggwp">
							<div class="input-group name-holder ggwp">
								<div class="col-5 ggwp">
									<span class="name ggwp"><i class="fa fa-male"></i>Adult</span>
								</div>
								<div class="col-7 ggwp">
									<button class='minus ggwp' field='quantity'><i class="fa fa-minus ggwp"></i></button>
									<input type='number' name='quantity' value='1' class='qty_adult ggwp' readonly/>
									<button class='plus ggwp' field='quantity' ><i class="fa fa-plus ggwp"></i></button>
								</div>
							</div>
							<div class="input-group name-holder ggwp">
								<div class="col-5 ggwp">
									<span class="name ggwp"><i class="fa fa-female ggwp"></i>Child</span>
								</div>
								<div class="col-7 ggwp">
									<button class='child_minus ggwp' field='child_quantity' ><i class="fa fa-minus ggwp"></i></button>
									<input type='number' name='child_quantity' value='0' class='qty' readonly/>
									<button class='child_plus ggwp' field='child_quantity' ><i class="fa fa-plus ggwp"></i></button>
								</div>
							</div>
							<div class="input-group name-holder ggwp">
								<div class="col-5 ggwp">
									<span class="name ggwp"><i class="fa fa-child ggwp"></i>infant</span>
								</div>
								<div class="col-7 ggwp">
									<button class='infant_minus ggwp' field='infant_quantity' ><i class="fa fa-minus ggwp"></i></button>
									<input type='number' name='infant_quantity' value='0' class='qty' readonly/>
									<button class='infant_plus ggwp' field='infant_quantity' ><i class="fa fa-plus ggwp"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12" style="height:35px;"></div>
		<div class="form-group col-9">
			<div class="radio-view">
			<div class="form-check-inline">
				<label class="form-check-label" for="radio2">
					<input type="radio" class="form-check-input" id="radio2" name="nationality" value="F" checked>Forienger
				</label>
				</div>
				<div class="form-check-inline">
				<label class="form-check-label" for="radio1">
					<input type="radio" class="form-check-input" id="radio1" name="nationality" value="L" >Citizen
				</label>
				</div>
				
			</div>
		</div>
		<div class="form-group col-3">
		<button type="submit" id="onewaysubmit" class="btn-search float-right">Search</button>
		</div>
	</form>
</div>
<div id="round" class="tabcontent">
	<form class="form-inline" action="https://www.sonicstartravel.com/flight/public/search" method="GET">
		<input name="flight_count" value="2" id="flight_count" type="hidden">
		<input name="flight_status" value="roundtrip" type="hidden">
		<input name="page" value="0" id="flight_count" type="hidden">
			<div class="form-group col-md-12 col-lg-3">

				<select class="select2class locations0" id="round_departure_location" name="departure_location[]" required>
				
				</select>
				<input type="hidden" id="dep2" required name="departure_location[]">
			</div>
			<i class="fa fa-exchange d-none d-lg-block"></i>
			<div class="form-group col-md-12 col-lg-3">
				<select class="select2class locations0" id="round_arrival_location" name="arrival_location[]" required>
				
				</select>
				<input  type="hidden" id="arr2" required  name="arrival_location[]" >
			</div>
			<div class="form-group col-md-12 col-lg-3">
				<input type="text" class="form-control" id="round_trip" placeholder="Date" required>
				<input type="hidden"  name="departure_date[]" value="" class="form-control" id="departure_date" placeholder="Date">
				<input type="hidden"  name="departure_date[]" value="" class="form-control" id="return_date" placeholder="Date">
			</div>
			<div class="form-group col-md-12 col-lg-2">
			<div class="passenger">
					<div class="btn btn-light btn-passenger" data-toggle="collapse" 
					data-target="#roundquantity">
					
					Adult <input type="number" name="adult_quantity[]" id="round_adult_quantity" value="1" readonly>, 
					Child <input type="number" name="child_quantity[]" id="round_child_quantity" value="0" readonly>, 
					Infant <input type="number" name="infant_quantity[]" id="round_infant_quantity" value="0" readonly>
					<input type="hidden" id="round_total_quantity" name="total_quantity[]" class="input-number" value="1" min="1" max="9">
				</div>
					<br>
					<div id="roundquantity" class="view-passenger collapse">
						<div class="input-group">
							<div class="row ggwp">
									<div class="input-group name-holder ggwp">
										<div class="col-5 ggwp">
											<span class="name ggwp"><i class="fa fa-male ggwp"></i>Adult</span>
										</div>
										<div class="col-7 ggwp">
											<button id='round_adult_minus' field='round_quantity' class="ggwp"><i class="fa fa-minus ggwp"></i></button>
											<input type='number' name='round_quantity' value='1' class='qty_adult ggwp' readonly />
											<button id='round_adult_plus' field='round_quantity' class="ggwp"><i class="fa fa-plus ggwp"></i></button>
										</div>
									</div>
									<div class="input-group name-holder ggwp">
										<div class="col-5 ggwp">
											<span class="name ggwp"><i class="fa fa-female ggwp"></i>Child</span>
										</div>
										<div class="col-7 ggwp">
											<button class='round_child_minus ggwp' field='round_child_quantity'><i class="fa fa-minus ggwp"></i></button>
											<input type='number' name='round_child_quantity' value='0' class='qty ggwp' readonly />
											<button class='round_child_plus ggwp' field='round_child_quantity'><i class="fa fa-plus ggwp"></i></button>
										</div>
									</div>
									<div class="input-group name-holder ggwp">
										<div class="col-5 ggwp">
											<span class="name ggwp"><i class="fa fa-child ggwp"></i>infant</span>
										</div>
										<div class="col-7 ggwp">
											<button class='round_infant_minus ggwp' field='round_infant_quantity'><i class="fa fa-minus ggwp"></i></button>
										<input type='number' name='round_infant_quantity' value='0' class='qty ggwp' readonly />
										<button class='round_infant_plus ggwp' field='round_infant_quantity'><i class="fa fa-plus ggwp"></i></button>
										</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12" style="height:35px;"></div>
			<div class="form-group col-9">
				<div class="radio-view">
				<div class="form-check-inline">
					<label class="form-check-label" for="radio2">
						<input type="radio" class="form-check-input" id="radio2" name="nationality" value="F" checked>Forienger
					</label>
					</div>
					<div class="form-check-inline">
					<label class="form-check-label" for="radio1">
						<input type="radio" class="form-check-input" id="radio1" name="nationality" value="L" >Citizen
					</label>
					</div>
					
				</div>
			</div>
			<div class="form-group col-3">
			<button type="submit" id="round_submit" class="btn-search float-right">Search</button>
			</div>
	</form>
</div>
        