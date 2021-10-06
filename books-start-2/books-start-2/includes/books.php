<?php
include( 'db-connect.php' );
$sql = 'SELECT * FROM items WHERE isbn = ' . $_GET['isbn'];
/* Die Variable $con enthält die Verbindungskennung zum mySQL-Server */
$result = mysqli_query( $con, $sql );
$detailArray = mysqli_fetch_array( $result, MYSQLI_ASSOC );
echo json_encode( $detailArray );