type User = {
    name: string,
    age: number,
    skills: string[]
}

const user: User = {
    name: 'YourName',
    age: 100500,
    skills: ['typescript', 'javascript']
}

type Keys = keyof User;
type Values = (typeof user)[Keys];

function pickObjectKeys<T  extends {[index: string]: Values}>(userObj: T, keys: Array<string>) {
    const keysArr = [...keys] as const;
    type requiredTypeTemplate = (typeof keysArr)[number];

    type RequiredType<T> = {
        [Property in keyof T as requiredTypeTemplate]: T[Property];
    }

    type requiredObjType = RequiredType<User>;

    let result: requiredObjType = {};

    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = userObj[keys[i]];
    }

   return result;
}

console.log(pickObjectKeys(user, ['name', 'skills']));