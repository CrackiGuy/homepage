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
        <div class="container">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#fligt">Air Ticketing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#car">Car Rental</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#air">Airport Transfer</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tour">Tour Packages</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#visa">Visa Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#hotel">Hotel Booking</a>
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content t-border">
                <div id="home" class="container tab-pane active"><br>
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
                            <form class="form-inline" action="#search">
                                <select class="select2class" name="state">
                                    <option value="AL">Alabama</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                <i class="fa fa-exchange d-icon"></i>
                                <select class="select2class" name="state">
                                    <option value="AL">Alabama</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="date" placeholder="Date">
                                </div>
                                <div class="passenger">
                                    <button class="btn btn-light btn-passenger" data-toggle="collapse" data-target="#demo">Adult 1, Child 0, Infant
									0</button>
                                    <br>
                                    <div id="demo" class="view-passenger collapse">
                                        aaa
                                    </div>
                                </div>
                                <button type="submit" class="btn-search">Search</button>
                            </form>
                        </div>
                        <div class="tab-pane inner fade" id="round">
                            <form class="form-inline" action="#search">
                                <div class="form-group">
                                    <select class="form-control" id="from">
									<option>Hello Man</option>
									<option>Hello Man</option>
									<option>Hello Man</option>
									<option>Hello Man</option>
									<option>Hello Man</option>
								</select>
                                </div>
                                <i class="fa fa-exchange d-icon"></i>
                                <div class="form-group">
                                    <select class="form-control" id="from">
									<option>Hello Man</option>
									<option>Hello Man</option>
									<option>Hello Man</option>
									<option>Hello Man</option>
									<option>Hello Man</option>
								</select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="date" placeholder="Date">
                                </div>
                                <button class="btn btn-passenger">Adult 1, Child 0, Infant 0</button>

                                <button type="submit" class="btn-search">Search</button>
                            </form>
                        </div>
                    </div>
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
        </footer>
        <a href="https://www.messenger.com/t/2360944740816813/" class="float" target="_blank">
            <img src="sonicstar/img/messenger.png" alt="messager" />
        </a>
        <!-- Bootstrap core JavaScript -->
        <script src="sonicstar/vendor/jquery/jquery-3.2.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
        <script src="sonicstar/vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="sonicstar/js/main.js"></script>
    </body>

    </html>