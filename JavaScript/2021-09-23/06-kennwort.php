<?php
if(isset($_GET['q'])){
    $pw = $_GET['q'];
    $zahl = 1;

    //Zeichenlänge midestens 8 
    if(strlen($pw)>=8){
        $zahl = strlen($pw)-8;
    }else{
        echo $zahl;
        exit;
    }

    //Mindestens 1 KLeinbuchstabe
    if(preg_match('/[a-z]+/', $pw)){
        $zahl += 5;
    } //Mindestens 1 Großbuchstabe
    if(preg_match('/[A-Z]+/', $pw)){
        $zahl += 5;
    } //Mindestens 1 Ziffer
    if(preg_match('/[0-9]+/', $pw)){
        $zahl += 5;
    } //Mindestens 1 Sonderzeichen
    if(preg_match('/[.,:-_!?()=<>]+/', $pw)){
        $zahl += 5;
    }

    echo $zahl;
}
