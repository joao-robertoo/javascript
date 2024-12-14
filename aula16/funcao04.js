function fatorial() {
    let fat = 1
    for(let c =2; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))