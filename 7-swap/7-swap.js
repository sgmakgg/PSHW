"use strict";
const obj = {
    a: 1,
    b: 2
};
function swapKeyValue(obj) {
    let result = {};
    for (let key in obj) {
        const newKey = obj[key];
        result[newKey] = key;
    }
    return result;
}
console.log(swapKeyValue(obj));
