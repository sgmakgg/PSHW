type InitialType = Record<string, number>;
type ResultType = Record<number, string>;

const obj: InitialType ={
    a: 1,
    b: 2
}

function swapKeyValue(obj: InitialType): ResultType {
    let result: ResultType = {};
    for (let key in obj) {
        const newKey = obj[key];
        result[newKey] = key;
    }

    return result;
}

console.log(swapKeyValue(obj));