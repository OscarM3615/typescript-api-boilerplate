import { Schema, model } from 'mongoose';

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		trim: true,
		unique: true
	}
}, { timestamps: true });

const UserModel = model('User', userSchema);

export default UserModel;
