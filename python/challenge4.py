#Implement reduceLeft using reduce.

from typing import List
from functools import reduce

def reduce_left(xs: List, z, f):
    return reduce(f, xs, z)

lst = [1, 2, 3]
res = reduce_left(lst, 0, lambda x, y: x + y)
print(res)
