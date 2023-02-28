//Implement reduceLeft

function reduceLeft(xs, z, f) {
    for (let i = 0; i < xs.length; i++) {
        z = f(z, xs[i])
    }
    return z
}
const lst = [1, 2, 3, 4, 5]
const res = reduceLeft(lst, 0, (x, y) => x + y)
console.log(res)
  