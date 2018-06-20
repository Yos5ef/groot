const { readFile } = require('fs');
const EventEmitter = require('events');

class EE extends EventEmitter {}

const yy = new EE()

yy.on('event', () => {
    console.log('出大事了');
})

setTimeout(() => {
    console.log('0');    
}, 0);

setTimeout(() => {
    console.log('100');    
}, 100);

setTimeout(() => {
    console.log('200');    
}, 200);

readFile('../package.json', 'utf-8', data => {
    console.log('完成文件 1 读操作的回调');
})

readFile('../README.md', 'utf-8', data => {
    console.log('完成文件 2 读操作的回调');
})

setImmediate(() => {
    console.log('immediate立即回调');
})

process.nextTick(() => {
    console.log('process.nextTick 的回调');
})

Promise.resolve()
    .then(() => {
        yy.emit('event')
        process.nextTick(() => {
            console.log('process.nextTick的第二次回调');
        })
        console.log('Promise的第一次回调');
    })
    .then(() => {
        console.log('Promise的第二次回调');
    })