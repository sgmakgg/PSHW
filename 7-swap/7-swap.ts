const obj: Record<string, number> ={
    a: 1,
    b: 2
}

function swapKeyValue(obj: Record<string, number>): Record<number, string> {
    let result: Record<number, string> = {};
    for (let key in obj) {
        const newKey = obj[key];
        result[newKey] = key;
    }

    return result;
}

console.log(swapKeyValue(obj));