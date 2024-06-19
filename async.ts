async function test() {
    return await new Promise(
       (resolve) =>setTimeout(() => {resolve ('n') }, 2000 ))
}


test().then(
    (value) => { console.log(value)}
)














// une foction async retourne tjr une promesse