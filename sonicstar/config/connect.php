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

    $cr_articles = "SELECT * from cr_articles WHERE cat_id = 48 AND status = 1 LIMIT 8";
    $result = mysqli_query($conn, $cr_articles);

    $mysql="SELECT * from short_codes";
    $city1=mysqli_query($conn,$mysql);
    $city2=mysqli_query($conn,$mysql);
    $city3=mysqli_query($conn,$mysql);
    $city4=mysqli_query($conn,$mysql);

?>