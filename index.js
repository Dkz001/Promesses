const promesse1 = new Promise(
    
    (resolve, reject) =>
    {
        const y = Math.round(Math.random() * 10)
        resolve(2)

    }
)
promesse1.then(
    (result) => { return result * 2 }
).then(
    (result) => {return result * 2}
).then
    (
    result => console.log(result)
)