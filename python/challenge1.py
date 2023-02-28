#Find the maximum value in an array using reduce.

from functools import reduce

arr = [4, 2, 8, 5, 1]
max_val = reduce(lambda a, b: a if a > b else b, arr)
print(max_val)
