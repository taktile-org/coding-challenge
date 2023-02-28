//Implement reduceRight

function reduceRight(xs, z, f) {
    return xs.reduceRight((acc, x) => f(x, acc), z)
}
const lst = [1, 2, 3, 4, 5]
const res = reduceRight(lst, 0, (x, y) => x + y)
console.log(res)
  