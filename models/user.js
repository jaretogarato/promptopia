import { Schema, model, models } from 'mongoose'
import { stringify } from 'postcss'

const UserSchema = new Schema({
	email: {
		type: String,
		unique: [true, 'Email already exists!'],
		required: [true, 'Email is required!'],
	},
	username: {
		type: String,
		required: [true, 'Username is required!'],
		match: [
			/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-aA-A0-9._]+(?<![_.])$/,
			'Username invalid; it should contain 8-20 alphanumeric characters and be unique.',
		],
	},
	image: {
		type: String,
	},
})
