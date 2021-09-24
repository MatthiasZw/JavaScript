<?php
if(isset($_GET['user'])){
    $user = $_GET['user'];
    $passwort = $_GET['passwort'];

    echo "$user mit dem Passwort $passwort wurde erkannt.";
}