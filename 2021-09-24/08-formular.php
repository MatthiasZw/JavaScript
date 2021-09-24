<?php

if(isset($_POST['vorname'])){
    //Daten aus den übertragenen Formularfeldern lesen
    $vorname = $_POST['vorname'];
    $nachname = $_POST['nachname'];

    //Daten von Whitespace bereinigen und alles zu kleinschreibung ändern
    $vorname = trim(mb_strtolower($vorname, 'UTF-8'));
    $nachname = trim(mb_strtolower($nachname, 'UTF-8'));

    //Namen zusammenfügen
    $namenkomplett = $vorname . '  ' . $nachname;
    
    // Kompletten Namen zurück geben

    echo $namenkomplett;


    

}