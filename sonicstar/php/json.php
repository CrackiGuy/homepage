
 <?php
    // $servername = "localhost";
    // $database="sonicstar_db";
    // $username="root";
    // $password='';
    
    // // Create connection
    
    // $conn = mysqli_connect($servername, $username, $password, $database);
    
    // // Check connection
    
    // if (!$conn) {
    // die("Connection failed: " . mysqli_connect_error());
    // }

    
    // $mysql="SELECT * from short_codes";
    // $city1=mysqli_query($conn,$mysql);
    // $data = array();

  	//         if ($city1->num_rows > 0) {
														
	// 					while($row = $city1->fetch_assoc()) {
    //                         $data[] = $row; 
	// 					}
	// 				}  
    // echo json_encode($data);


   
?>   
 <?php
    $servername = "localhost";
    $username = "root";
    $password = '';

try {
    $conn = new PDO("mysql:host=$servername;dbname=sonicstar_db", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * from short_codes");
    $stmt->execute();
    $data = array();

    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    if ($result) {
        while ($r = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $r; 
        }
        echo json_encode($data);
    }else{
        echo "sorry bro";
    }
        
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
?> 
