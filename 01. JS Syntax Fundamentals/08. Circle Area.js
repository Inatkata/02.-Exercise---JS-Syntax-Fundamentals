function solve(input) {
    let inputType = typeof(input)
    if ( inputType === 'number') {
        let result = (Math.PI *(input*input))
        console.log(result.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}
