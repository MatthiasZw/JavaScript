<?php
if ( isset($_GET['wunsch'])){
    $wunsch = $_GET['wunsch'];

    // Die Textdatei zum lesen öffnen

    $fp = fopen('telefonbuch.txt', 'r');

    // Hat das Öffnen nicht funktioniert
    if(!$fp) {
        //Rückgabe einer Meldung 
        echo 'Die Date "telefonbuch.txt" wurde nicht gefunden!';

        // Abbruch des Skripts
        exit;
    }

    // SO lange das Dateiende nicht erreicht ist, durchlaufe die Schleife
    while (!feof($fp)) {
        //Aktueller Zeileninhalt wird in die variable $Zeile geschrieben

        $zeile = fgets($fp);

        //Prüfung ob der ANfang der aktuellen Zeile mit den Eingegebnen Zeichen übersinstimmt

        if(preg_match("/^$wunsch/i", $zeile)){
            echo $zeile;
        }
    }

    //Textdatei schließen
    fclose($fp);

}