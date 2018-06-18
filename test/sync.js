const doSync = (sth, time) => new Promise(resolve => {
    setTimeout(() => {
        console.log(sth + '用了' + time + '毫秒')
        resolve();
    }, time)
})

const doAsync = (sth, time, cb) => {
    setTimeout(() => {
        console.log(sth + '用了' + time + '毫秒')
        cb && cb()
    }, time)
}

const doElse = (sth) => {
    console.log(sth);
}

const Scott = { doAsync, doSync };
const Meizi = { doAsync, doSync, doElse };

;(async () => {
    console.log('case1: 妹子来到门口');
    await Scott.doSync('Scott 刷牙', 1000)
    console.log('啥也没干, 一直等');
    await Meizi.doSync('妹子洗澡', 2000)
    console.log('妹子去帮别的了');

    console.log('case3： 妹子来到门口');
    Scott.doAsync('Scott刷牙', 1000, () => {
        console.log('卫生间通知妹子来洗澡');
        Meizi.doAsync('妹子洗澡', 2000)        
    })
    Meizi.doElse('妹子去忙别的了')
})()