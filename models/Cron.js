const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ezuuid = require('ezuuid');

const schema = new Schema({
    uid: {
		type: String,
		required: true,
		unique: true,
	},
	jobType: {
		type: String,
		required: true,
		enum: [''],
	},
	published: {
		type: Boolean,
		required: true,
		default: false,
	},
	route: {
		type: String,
		required: true,
	},
	payload: {
		type: String,
		required: true,
	},
	dateCreated: {
		type: Date,
		required: true,
	}
});

schema.statics.push = function ({ payload, route, jobType }) {
    try {
		const uid = ezuuid();
        return await this.findOneAndUpdate({  })
            .lean();
        }
    catch (err) {
        return err;
    }
}

const name = mongoose.model('name', schema);

module.exports = name;
