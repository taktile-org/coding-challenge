// Implement map

function map(xs, f) {
    const result = []
    for (let i = 0; i < xs.length; i++) {
        result.push(f(xs[i]))
    }
    return result
}
const lst = [1, 2, 3, 4, 5]
const res = map(lst, (x) => x * 2)
console.log(res)
  