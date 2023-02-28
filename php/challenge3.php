<?php 

//Calculate the average of an array of floats using array_reduce.

$arr = [2.0, 4.0, 6.0, 8.0];
$avg = array_reduce($arr, function($a, $b) { return $a + $b; }, 0) / count($arr);
echo $avg;
