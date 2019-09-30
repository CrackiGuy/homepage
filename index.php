<?php
    include('sonicstar/config/connect.php');
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="keywords" content="sonicstar,SonicStarTravel,flight,Airticket,Car,Rental" />
        <meta name="author" content="Nay Lin Aung" />

        <title>Sonicstar</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" />        
        <link rel="stylesheet" href="sonicstar/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="sonicstar/css/main.css" />

    </head>
    <body>
        <div class="header">
            <img src="sonicstar/img/logo.png" alt="Sonicstar" />
        </div>
        <br>
        <div class="container">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs head" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#fligt">
                        <i class="fa fa-plane" aria-hidden="true"></i>
                        <span class="d-none d-lg-inline"> Air Ticketing</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#car">
                        <i class="fa fa-car" aria-hidden="true"></i>
                        <span class="d-none d-lg-inline">Car Rental</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tour">
                        <i class="fa fa-flag" aria-hidden="true"></i>
                        <span class="d-none d-lg-inline">Tour Packages</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#visa">
                        <i class="fa fa-globe" aria-hidden="true"></i>
                        <span class="d-none d-lg-inline">Visa Services</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#hotel">
                        <i class="fa fa-bed" aria-hidden="true"></i>
                        <span class="d-none d-lg-inline">Hotel Booking</span></a>
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content t-border">
                <div id="fligt" class="container tab-pane active"><br>
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="pill" href="#one">One Way</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="pill" href="#round">Round Trip</a>
                        </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div class="tab-pane inner active" id="one">
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
                                <i class="fa fa-exchange d-icon"></i>
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
                                        
                                        Adult <input type="number" name="adult_quantity[]" id="adult_quantity" value="1" >, 
                                        Child <input type="number" name="child_quantity[]" id="child_quantity" value="0">, 
                                        Infant <input type="number" name="infant_quantity[]" id="infant_quantity" value="0" >, 
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
                                <div class="form-group col-8">
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
                                <div class="form-group col-4">
                                <button type="submit" class="btn-search float-right">Search</button>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane inner fade" id="round">
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
                                        Infant <input type="number" name="infant_quantity[]" id="infant_quantity" value="0" >, 
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
                                <div class="form-group col-8">
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
                                <div class="form-group col-4">
                                <button type="submit" class="btn-search float-right">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="car">
                    
                </div>
            </div>
        </div>
        <br><br>
        <div class="container">
            <div class="welcome">Welcome to Myanmar</div>
            <div class="row">
                <div class="col-6">
                    <div class="container card-view">
                        <figure>
                            <img src="sonicstar/img/myanmar.jpg" alt="Myanmar" style="width:100%;height: 150px;padding:0;" />
                            <div class="centered">About Myanmar</div>
                        </figure>
                    </div>
                </div>
                <div class="col-6">
                    <div class="container card-view">
                        <figure>
                            <img src="sonicstar/img/service.jpg" alt="Serives" style="width:100%;height: 150px;" />
                            <div class="centered">Our Services</div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="welcome">Our Tour Packages</div>
            <div id="carousel-example" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner row w-100 mx-auto" role="listbox">
                   <?php
                        $i = 1;
                        if (mysqli_num_rows($result) > 0) 
                        {
                            while($row = mysqli_fetch_assoc($result)) {
                                $item_class = ($i == 1) ? 'item active' : 'item';
                        ?>
                        <div class="carousel-item col-12 col-sm-6 col-md-6 col-lg-3 <?php echo $item_class; ?>">
                            <div class="car-box-inner">
                                <img class="car-image"
                            src="https://www.sonicstartravel.com/car_rental/uploads/article/<?php echo $row['featured_img']; ?>"
                            class="img-fluid mx-auto d-block"
                            alt="img1"
                            />
                            <div class="car-details pa">
                            <a
                                href="https://www.sonicstartravel.com/car_rental/attractive-places/<?php echo $row['id']; ?>"
                            >
                                Package Details
                            </a>
                            <h5><b></b><?php echo $row['title']; ?></b></h5>
                            </div>
                            </div>
                            
                        </div>
                        <?php
                        $i++;
                            }
                        }
                        ?>
                </div>
                <a class="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <footer>
            <div class="container upper">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="accept">We accept</div>
                        <div class="payment">
                            <img src="sonicstar/img/Visa Card.png" alt="Visa" />
                            <img src="sonicstar/img/Master Card.png" alt="Master" />
                            <img src="sonicstar/img/Union Pay Card.png" alt="Uninon" />
                            <img src="sonicstar/img/MPU.png" alt="mpu" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="accept">Subscribe our news</div>
                        <form id="my-form" action="/" method="post">
                            <input type="email" name="email" aria-label="Recipient's username" aria-describedby="basic-addon2" id="subscribe" placeholder="Enter your email" />
                            <button type="submit" class="btn btn-info" id="btn-sub">
                Subscribe
              </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="row bottom">
                <div class="col-lg-3 col-md-3 col-sm-12">
                    <div class="social">
                        <img src="sonicstar/img/social/facebook.png" alt="facebook" onclick=" window.open('https://www.facebook.com/SonicStarTravel/','_blank')" />
                        <img src="sonicstar/img/social/instagram.png" alt="instagram" onclick=" window.open('https://www.instagram.com/info.sonicstar/','_blank')" />
                    </div>
                    <div class="follow">Follow Us</div>
                </div>
                <div class="col-lg-6 col-md-5 col-sm-12 footer-txt">
                    The best travel services provider in Myanmar
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="cert">
                        <img src="sonicstar/img/cert/iso1.png" alt="iso" />
                        <img src="sonicstar/img/cert/IATA.png" alt="iata" />
                        <img src="sonicstar/img/cert/UMTA.png" alt="umta" />
                    </div>
                </div>
            </div>
            <?php
            $conn->close();

    ?>
        </footer>
        <a href="https://www.messenger.com/t/2360944740816813/" class="float" target="_blank">
            <img src="sonicstar/img/messenger.png" alt="messager" />
        </a>
        <!-- Bootstrap core JavaScript -->
        <script src="sonicstar/vendor/jquery/jquery-3.2.1.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
        <script src="sonicstar/vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="sonicstar/js/main.js"></script>
        <script src="sonicstar/js/custom.js"></script>
        <script src="sonicstar/js/round.js"></script>
    </body>

    </html>