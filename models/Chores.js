const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    prop: String,
});

schema.statics.funkyFunc = function (param) {
    try {
        return await this.find({ param })
            .lean();
        }
    catch (err) {
        return err;
    }
}
