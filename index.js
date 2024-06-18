const promesse1 = new Promise(
    
    (resolve, reject) =>
    {
        const y = Math.round(Math.random() * 10)
        if (y < 7)
        {
            setTimeout(() => {
              reject(y);
            }, 5000);
        }
        else
        {
            setTimeout(() => {
              resolve(y);
            }, 5000);
        }



    }
)
promesse1.then(
    (result) => { return result * 2 }
).then(
    
    (result) => {return result * -1}
).then(
    
    (result) => { return console.log(result); }
).catch
(
    () => {console.log('error')}
)

console.log("Result : ")