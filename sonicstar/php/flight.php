<div class="tab">
  <button class="tablinks aa" onclick="openTab(event, 'one')">One Way</button>
  <button class="tablinks" onclick="openTab(event, 'round')">Round Trip</button>
</div>

<div id="one" class="tabcontent" style="display:block">
  	<form class="form-inline" action="http://localhost:8000/search" method="GET">
		<input name="flight_count" value="1" id="flight_count" type="hidden">
		<input type="hidden" name="page" value="0" >
		<input type="hidden" name="flight_status" value="oneway">
		<div class="form-group col-md-12 col-lg-3">
			<select class="select2class" id="onedept" name="departure_location[]">
				<option value="origin" >Flight From</option>
				<?php
					if ($city1->num_rows > 0) {
														
						while($row = $city1->fetch_assoc()) {
						// var_dump($row["name"]);
						echo "<option>".$row["name"]."</option>";
						}
					}  
				?>
			</select>
		</div>
		<i class="fa fa-long-arrow-right d-icon"></i>
		<div class="form-group col-md-12 col-lg-3">
			<select class="select2class" id="onearr" name="arrival_location[]">
			<option value="origin" selected>Flight To</option>
			<?php
					if ($city2->num_rows > 0) {
														
						while($row = $city2->fetch_assoc()) {
						// var_dump($row["name"]);
						echo "<option>".$row["name"]."</option>";
						}
					}  
				?>
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
				<input type="hidden" id="total_quantity" name="total_quantity[]" class=" input-number" value="1" min="1" max="9">
			</div>
				<br>
				<div id="demo" class="view-passenger collapse">
					<div class="input-group">
						<div class="row">
							<div class="input-group name-holder">
								<div class="col-3">
									<span class="name">Adult</span>
								</div>
								<div class="col-9">
									<input type='button' value='-' class='minus' field='quantity' />
									<input type='text' name='quantity' value='0' class='qty' readonly/>
									<input type='button' value='+' class='plus' field='quantity' />
								</div>
							</div>
							<div class="input-group name-holder">
								<div class="col-3">
									<span class="name">Child</span>
								</div>
								<div class="col-9">
									<input type='button' value='-' class='child_minus' field='child_quantity' />
									<input type='text' name='child_quantity' value='0' class='qty' readonly/>
									<input type='button' value='+' class='child_plus' field='child_quantity' />
								</div>
							</div>
							<div class="input-group name-holder">
								<div class="col-3">
									<span class="name">infant</span>
								</div>
								<div class="col-9">
									<input type='button' value='-' class='infant_minus' field='infant_quantity' />
									<input type='text' name='infant_quantity' value='0' class='qty' readonly/>
									<input type='button' value='+' class='infant_plus' field='infant_quantity' />
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
				<label class="form-check-label" for="radio1">
					<input type="radio" class="form-check-input" id="radio1" name="nationality" value="citizen" checked>Citizen
				</label>
				</div>
				<div class="form-check-inline">
				<label class="form-check-label" for="radio2">
					<input type="radio" class="form-check-input" id="radio2" name="nationality" value="forigenr">Forienger
				</label>
				</div>
			</div>
		</div>
		<div class="form-group col-3">
		<button type="submit" class="btn-search float-right">Search</button>
		</div>
	</form>
	</div>

	<div id="round" class="tabcontent">
	<form class="form-inline" action="http://localhost:8000/search" method="GET">
		<input name="flight_count" value="2" id="flight_count" type="hidden">
		<input name="flight_status" value="roundtrip" type="hidden">
		<input name="page" value="0" id="flight_count" type="hidden">
			<div class="form-group col-md-12 col-lg-3">

				<select class="select2class locations0" id="round_departure_location" name="departure_location[]" required>
				<option value="origin" selected>Flight From</option>
				<?php
						if ($city3->num_rows > 0) {
															
							while($row = $city3->fetch_assoc()) {
							// var_dump($row["name"]);
							echo "<option>".$row["name"]."</option>";
							}
						}  
					?>
				</select>
				<input type="hidden" id="dep2" required name="departure_location[]">
			</div>
			<i class="fa fa-exchange d-icon"></i>
			<div class="form-group col-md-12 col-lg-3">
				<select class="select2class locations0" id="round_arrival_location" name="arrival_location[]" required>
				<option value="origin" selected>Flight To</option>
				<?php
						if ($city4->num_rows > 0) {
															
							while($row = $city4->fetch_assoc()) {
							// var_dump($row["name"]);
							echo "<option>".$row["name"]."</option>";
							}
						}  
					?>
				</select>
				<input  type="hidden" id="arr2" required  name="arrival_location[]" >
			</div>
			<div class="form-group col-md-12 col-lg-3">
				<input type="text" name="departure_date[]"  value="" class="form-control " id="departure_date" placeholder="Date">
				<input type="hidden"  name="departure_date[]" value="" class="form-control" id="return_date" placeholder="Date">
			</div>
			<div class="form-group col-md-12 col-lg-2">
			<div class="passenger">
					<div class="btn btn-light btn-passenger" data-toggle="collapse" 
					data-target="#demo">
					
					Adult <input type="number" name="adult_quantity[]" id="adult_quantity" value="1" >, 
					Child <input type="number" name="child_quantity[]" id="child_quantity" value="0">, 
					Infant <input type="number" name="infant_quantity[]" id="infant_quantity" value="0" >
					<input type="hidden" id="total_quantity" name="total_quantity[]" class=" input-number" value="1" min="1" max="9">
				</div>
					<br>
					<div id="demo" class="view-passenger collapse">
						<div class="input-group">
							<div class="row">
								<div class="col-12">
									<div class="input-group name-holder">
										<span class="name">Adult</span>
										<input type='button' value='-' class='minus' field='quantity' />
										<input type='text' name='quantity' value='0' class='qty' />
										<input type='button' value='+' class='plus' field='quantity' />
									</div>
								</div>
								<div class="col-12">
									<div class="input-group name-holder">
										<span class="name">Child</span>
										<input type='button' value='-' class='child_minus' field='child_quantity' />
										<input type='text' name='child_quantity' value='0' class='qty' />
										<input type='button' value='+' class='child_plus' field='child_quantity' />
									</div>
								</div>
								<div class="col-12">
									<div class="input-group name-holder">
										<span class="name">infant</span>
										<input type='button' value='-' class='infant_minus' field='infant_quantity' />
										<input type='text' name='infant_quantity' value='0' class='qty' />
										<input type='button' value='+' class='infant_plus' field='infant_quantity' />
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
					<label class="form-check-label" for="radio1">
						<input type="radio" class="form-check-input" id="radio1" name="nationality" value="L" checked>Citizen
					</label>
					</div>
					<div class="form-check-inline">
					<label class="form-check-label" for="radio2">
						<input type="radio" class="form-check-input" id="radio2" name="nationality" value="F">Forienger
					</label>
					</div>
				</div>
			</div>
			<div class="form-group col-3">
			<button type="submit" class="btn-search float-right">Search</button>
			</div>
		</form>
</div>
        