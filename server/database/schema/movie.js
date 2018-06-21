const mogoose = require('mongoose');
const Schema = mongoose.Schema;
const Mixed = Schema.types.Mixed;

const MovieSchema = new Schema({
    doubanId: String,
    rate: Number,
    title: String,
    summary: String,
    video: String,
    poster: String,
    cover: String,
    videoKey: String,
    posterKey: String,
    coverKey: String,
    rawTitle: String,
    movieType: [String],
    pubdate: Mixed, 
    year: Number,
    tags: Array,
    mata: {
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
})
