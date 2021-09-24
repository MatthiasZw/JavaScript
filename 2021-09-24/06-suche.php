<?php
if(isset($_GET['s'])){

    $xmlDoc = new DOMDocument();
    $xmlDoc->load('06-suche.xml');
    $absatz = $xmlDoc->getElementsByTagName('absatz');
    $suche = $_GET['s'];

    //echo  '<pre>', var_dump( $absatz->item(0)->nodeValue ), '</pre>';

    if(strlen($suche)>0){
        for($i = 0; $i <($absatz->length); $i++){
            $absText = $absatz->item($i)->nodeValue;
            if(preg_match("/$suche/i", $absText)){
                echo "<p>$absText</p>";
            }
        }
    }

}