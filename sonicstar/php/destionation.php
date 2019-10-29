
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

    
    $mysql = "SELECT dest.id, dest.title, dest.short_desc, city.short_desc as title_mya FROM `cr_manage_attributes` as dest
                INNER JOIN `cr_manage_attributes` as city ON `dest`.`title`=`city`.`title` AND `city`.`parent_id`=70
                WHERE `dest`.`parent_id`=89 AND `dest`.`status`='1'  GROUP BY `dest`.`title` ORDER BY `city`.`id`";
    $destination=mysqli_query($conn,$mysql);
    $data = array();

  	        if ($destination->num_rows > 0) {
														
						while($row = $destination->fetch_assoc()) {
                            $data[] = $row; 
						}
				}  
    echo json_encode($data);
   
   
?>