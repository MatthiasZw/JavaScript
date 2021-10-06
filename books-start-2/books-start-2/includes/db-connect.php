<?php
$con = mysqli_connect('localhost', 'root');
mysqli_set_charset($con, 'utf-8');
mysqli_query($con, 'SET NAMES \'utf8\'');
mysqli_select_db($con, 'books');