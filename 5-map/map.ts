import {sha256} from "./hash.js"

interface IBacketValue {
    key: string;
    value: string
}

class MyMap{
    map: any = {};

    get(key: string): IBacketValue[] | undefined{
        let hash: string = sha256(key);
        if(hash in this.map){
            return this.map[hash].filter((key: string) => {return key === key});
        }
        return undefined;
    };

    set(value: IBacketValue): void{
        let hash: string = sha256(value.key);
        if(hash in this.map){
            this.map[hash].push(value);
        }
        else{
            this.map[hash] = [value];
        }
    };
     delete(key: string): void{
         let hash: string = sha256(key);
         if(hash in this.map){
             let newArr = this.map[hash].filter((obj: IBacketValue) => {return obj.key !== key});

             if (newArr.length === 0){
                this.clear(hash);
             }
             else this.map[hash] = [newArr];
         }
     };

    clear = (hash: string): void =>{
        delete this.map[hash];
    };
}

// let map = new MyMap();
// map.set({key: 'London', value: '21'});
// map.set({key: 'London', value: '1'});
// map.set({key: 'Tokyo', value: '2'});
// map.set({key: 'WSS', value: '33'});
//
//
// console.log(map.map);
//
// map.delete('London');
//
// console.log(map.map);


