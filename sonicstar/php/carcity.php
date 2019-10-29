
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

    
    $mysql = "SELECT * from cr_manage_attributes WHERE parent_id  = 70 AND status = 1";
    $carcity=mysqli_query($conn,$mysql);
    $data = array();

  	        if ($carcity->num_rows > 0) {
														
						while($row = $carcity->fetch_assoc()) {
                            $data[] = $row; 
						}
				}  
    echo json_encode($data);
   
   
?>