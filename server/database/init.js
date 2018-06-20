const mongoose = require('mongoose');
const db = 'mongodb://127.0.0.1:27017/yossef-study';

mongoose.Promise = global.Promise;

exports.connect = () => {
    let maxConnectTimes = 0;

    return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true)
        }
        mongoose.connect(db);
        mongoose.connection.on('disconnected', () => {
            maxConnectTimes++;
            if (maxConnectTimes < 5) {
                mongoose.connect(db);
            } else {
                throw new Error('数据库挂了吧');
            }
        })
        mongoose.connection.on('error', () => {
            maxConnectTimes++;
            if (maxConnectTimes < 5) {
                mongoose.connect(db);
            } else {
                throw new Error('数据库挂了吧');
            }
        })
        mongoose.connection.once('open', () => {
            const Dog = mongoose.model('Dog', {name: String});
            const dog = new Dog({name: '阿尔法'});
            dog.save().then(() => {
                console.log('存储成功');
            });
            resolve();
            console.log('数据库连接成功');
        })
    })
}