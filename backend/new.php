<?php

include("./connection.php");

$query = $mysqli->prepare("SELECT * FROM `news`");
$query->execute();
$results = $query->get_result();

$response = [];

while($a = $results->fetch_assoc()){
    $response[] = $a;
}

echo json_encode($response);

?>