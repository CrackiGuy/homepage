
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

    
    $mysql="SELECT * from short_codes";
    $city1=mysqli_query($conn,$mysql);
    $data = array();

  	        if ($city1->num_rows > 0) {
														
						while($row = $city1->fetch_assoc()) {
                            $data[] = $row; 
						}
					}  
    echo json_encode($data);
   
   
?>