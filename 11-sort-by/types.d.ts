declare module "sort-by" {
    function sortBy<T>(...args: string[]):(propA: T, propB: T) => number;
    export  = sortBy;
}