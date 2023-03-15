const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const animalSchema = new Schema(
	{
		image: String,
		sex: {
			type: String,
			enum: ["Male", "Female"],
		},
		species: {
			type: String,
			enum: ["Dog", "Cat"],
		},
		color: String,
		aggressive: {
			type: Boolean,
			default: false,
		},
		vaccinated: {
			type: Boolean,
			default: false,
		},
		available: {
			type: Boolean,
			default: true,
		},
		name: String,
		dob: String,
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
);

const Animal = model("Animal", animalSchema);

module.exports = Animal;
