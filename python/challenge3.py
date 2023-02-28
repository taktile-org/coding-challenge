#Calculate the average of an array of floats using reduce.

from functools import reduce

arr = [2.0, 4.0, 6.0, 8.0]
avg = reduce(lambda a, b: a + b, arr) / len(arr)
print(avg)