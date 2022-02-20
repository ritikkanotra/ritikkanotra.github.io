<?php
    
    $host = "localhost";
    $user = "root";
    $password = "root";
    $db = "portfolio";

    $con = mysqli_connect($host, $user, $password, $db);

    if(!$con) {
        die("connection error");
    }

    $Name = $_POST["name"];
    $Email = $_POST["email"];
    $Tel = $_POST["tel"];
    $Subject = $_POST["subject"];
    $Message = $_POST["message"];

    $sql = "INSERT INTO messages (name, email, tel, subject, message) VALUES ('$Name', '$Email', '$Tel', '$Subject', '$Message');";

    if(mysqli_query($con, $sql)) {
    //    readfile("message_sent.html");
    }
    else {
        // die(mysqli_error($con));
        // echo "<h2>Message not sent. Try Again.</h2>";
       // readfile("message_failed.html");
    }

    mysqli_close($con);

    //header("refresh:3; url=index.html");

?>