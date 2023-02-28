//Implement flatMap

function flatMap(xs, f) {
    const result = []
    for (let i = 0; i < xs.length; i++) {
        const mapped = f(xs[i])
        for (let j = 0; j < mapped.length; j++) {
            result.push(mapped[j])
        }
    }
    return result
}
const lst = [1, 2, 3]
const res = flatMap(lst, (x) => [x, x * 2])
console.log(res)
