<?php

// Verbinding maken met MySQL database
$conn = new mysqli(
    "localhost",
    "root",
    "",
    "urenregistratiesysteem"
);

// Controleren of verbinding werkt
if ($conn->connect_error) {

    die("Connectie mislukt: " . $conn->connect_error);

}

// SQL query uitvoeren
$sql = "SELECT * FROM team_3";

// Query resultaat opslaan
$result = $conn->query($sql);

// Lege array maken
$data = [];

// Door alle resultaten heen lopen
while($row = $result->fetch_assoc()) {

    // Rij toevoegen aan array
    $data[] = $row;

}

// JSON terugsturen
echo json_encode($data);

?>