{
    async function squareAsync(n: number): Promise<number>{
        if(n <0 ){
            console.error("Error: Negative number not allowed")
        }
        
        return new Promise((resolve,reject) => {
            setTimeout(() => { resolve(n * n)}, 1000);
          });
    }

    squareAsync(4).then(console.log)
    squareAsync(-3).catch(console.error);

}