<?php

//Implement reduceRight using array_reduce and array_reverse.

function reduce_right($xs, $z, $f) {
    return array_reduce(array_reverse($xs), function($acc, $x) use ($f) {
        return $f($x, $acc);
    }, $z);
}

$lst = [1, 2, 3];
$res = reduce_right($lst, 0, function($x, $y) { return $x + $y; });
echo $res;