<?php 

//Implement reduceLeft using array_reduce.

function reduce_left($xs, $z, $f) {
    return array_reduce($xs, function($acc, $x) use ($f) {
        return $f($acc, $x);
    }, $z);
}

$lst = [1, 2, 3];
$res = reduce_left($lst, 0, function($x, $y) { return $x + $y; });
echo $res;
