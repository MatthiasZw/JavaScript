<?php

if( $_GET['wunsch'] ) {
	if( empty( $_GET['wunsch'] ) ) {
		echo '{keine Eingabe}';
		exit;
	} else {
		$wunsch = $_GET['wunsch'];
	}
	
	$fp = fopen( 'zuordnung_plz_ort.csv', 'r' );
	if( !$fp ) {
		echo 'Datei "zuordnung_plz_ort.csv" wurde nicht gefunden!';
		exit;
	}
	
	$headers = fgetcsv( $fp, 0, "," );
	$ort = $headers[1];
	$plz = $headers[2];
	$bl = $headers[3];
	
	$plz_array = array();
	
	while( ( $plzort = fgetcsv( $fp, 0, "," ) ) !== FALSE ) {
		if( preg_match( "/^$wunsch/i", $plzort[1] ) || preg_match( "/^$wunsch/", $plzort[2] ) ) {
			 $plz_array[] = array( 
				$ort => $plzort[1],
				$plz => $plzort[2],
				$bl => $plzort[3]
			); 
		} 	
    }
	
	echo json_encode( $plz_array );
	
	fclose( $fp );
}

?>