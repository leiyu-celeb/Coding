


// Promise.resolve(1)
// .then(res => {
//     console.log(res);
//     return 2
// }).then(res => {
//     console.log(res);
//     return Promise.reject('error');
// }).then(res => {
//     console.log(res);
//     return 111
// }).catch(err => {
//     console.log(err);
//     return 'err'
// }).finally(val => {
//     console.log(val);
// })


Promise.resolve()
    .then(() => {
        return Promise.reject('then');
    })
   .catch((error) => {
        console.log(error);
        return 'error';
    })
    .then((value) => {
        console.log('done', value);
        return 'then1';
    }).then(value => {
        console.log(value);
    })