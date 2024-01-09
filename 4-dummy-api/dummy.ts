const url: string = 'https://dummyjson.com/users';

getDummyUsers(url);

async function getDummyUsers(url:string): Promise<void>{
    try{
        let response: Response = await fetch(url);

        let result: IUser = await response.json();
        console.log(result);
    }
    catch (err: unknown) {
        console.log(err);
    }
}
