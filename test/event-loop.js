setImmediate(() => {
    console.log('阶段三 immediate回调1');
})
setImmediate(() => {
    console.log('阶段三 immediate回调2');
})
setImmediate(() => {
    console.log('阶段三 immediate回调3');
})

setTimeout(() => {console.log('定时器回调1');}, 0);
setTimeout(() => {
    console.log('定时器回调2');
    process.nextTick(() => {
        console.log('nextTick回调2');
    })
}, 0);
setTimeout(() => {console.log('定时器回调3');}, 0);
setTimeout(() => {console.log('定时器回调4');}, 0);