
<?php
    $servername = "localhost";
    $database="sonicstar_db";
    $username="root";
    $password='';
    
    // Create connection
    
    $conn = mysqli_connect($servername, $username, $password, $database);
    
    // Check connection
    
    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }

    
    $mysql = "SELECT city.id,city.title FROM  `cr_manage_attributes` as city INNER JOIN `airport_locations` as airport ON `city`.`id` = `airport`.`city_id`";
    $airport=mysqli_query($conn,$mysql);
    $data = array();

  	        if ($airport->num_rows > 0) {
														
						while($row = $airport->fetch_assoc()) {
                            $data[] = $row; 
						}
				}  
    echo json_encode($data);
   
   
?>