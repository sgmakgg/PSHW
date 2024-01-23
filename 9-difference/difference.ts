interface IA{
    a:number;
    b:string;
}

interface IB {
    a:number;
    c: boolean;
}

let a: IA = {a:5, b:''};
let b: IB = {a:10, c:true};

type requiredPair = Record<string | number | symbol, any>;

function difference<First  extends requiredPair,
                    Second extends requiredPair>(firstArg: First, secondArg: Second): requiredPair{
    type diffType = Omit<typeof firstArg, keyof typeof secondArg>;

    let firstArgsKeys = Object.keys(firstArg);
    let secondArgsKeys = Object.keys(secondArg);

    let resultObjKeys = firstArgsKeys.filter( element => secondArgsKeys.indexOf(element) < 0);
    let answer: any = {};

    for (let i = 0; i < resultObjKeys.length; i++) {
        const key = resultObjKeys[i];
        answer[key] = firstArg[key];
    }

    return answer as diffType;
}

console.log(difference(a, b));