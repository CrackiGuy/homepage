<?php
    $servername = "localhost";
    $database="sonicstar_db";
    $username="root";
    $password='';
    
    // Create connection
    
    $conn = mysqli_connect($servername, $username, $password, $database);

        
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
        }
    
    $sql = "SELECT * from cr_manage_attributes WHERE parent_id  = 70 AND status = 1 ";

    
    $sql2 =  "SELECT dest.id, dest.title, dest.short_desc, city.short_desc as title_mya FROM `cr_manage_attributes` as dest
                 INNER JOIN `cr_manage_attributes` as city ON `dest`.`title`=`city`.`title` AND `city`.`parent_id`=70
                 WHERE `dest`.`parent_id`=89 AND `dest`.`status`='1'  GROUP BY `dest`.`title` ORDER BY `city`.`id`";
 
     $result1 = $conn->query($sql);
     $result2 = $conn->query($sql2);
 
    //  return json_encode($result1);

    //  return json_encode($result2);

    //  $city1=mysqli_query($conn,$mysql);
     $data = array();
 
               if ($result2->num_rows > 0) {
                                                         
                         while($row = $result2->fetch_assoc()) {
                             $data[] = $row; 
                         }
                     }  
     echo json_encode($data);
?>