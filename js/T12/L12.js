// const { forwardRef } = require("react");

// function add(a, b) {
//     return a - b
// }
// console.log(add(1000, 7));


               //Рест
function dodatok(...args) {
    // const args = Array.from(arguments)
    // console.log(args); 
    // console.log(arguments);
    let result = 0;
    for (let i = 0; i < args.length; i += 1) {
        result += args[i]
    }
    return result
}
console.log(dodatok(1000, 7 , 993));
console.log(dodatok(993, 7));
console.log(dodatok(1942, 30303, 256, 64, 128, 7, 300, 7000));
