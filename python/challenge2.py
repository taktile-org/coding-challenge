#Implement reduceRight using reduce and reversed.

from typing import List
from functools import reduce

def reduce_right(xs: List, z, f):
    return reduce(lambda acc, x: f(x, acc), reversed(xs), z)

lst = [1, 2, 3]
res = reduce_right(lst, 0, lambda x, y: x + y)
print(res)
