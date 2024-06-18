const promesse1 = new promise(
    
    (resolve, reject) =>
    {
        resolve(2)

    }
)
promesse1.then((result) => {
  console.log(result);
});