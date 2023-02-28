//Implement filter

function filter(xs, f) {
    const result = []
    for (let i = 0; i < xs.length; i++) {
        if (f(xs[i])) {
            result.push(xs[i])
        }
    }
    return result
}
const lst = [1, 2, 3, 4, 5]
const res = filter(lst, (x) => x % 2 === 0)
console.log(res)
