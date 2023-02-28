<?php

// Find the maximum value in an array using array_reduce.

$arr = [4, 2, 8, 5, 1];
$max_val = array_reduce($arr, function($a, $b) { return $a > $b ? $a : $b; }, PHP_INT_MIN);
echo $max_val;