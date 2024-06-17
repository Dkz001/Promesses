const promesse2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Première promesse résolue');
    }, 1000);
});

promesse2.then((value) => {
    console.log(value); // Affiche : "Première promesse résolue"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Deuxième promesse résolue');
        }, 1000);
    });
}).then((value) => {
    console.log(value); // Affiche : "Deuxième promesse résolue"
}).catch((error) => {
    console.error(error);
});