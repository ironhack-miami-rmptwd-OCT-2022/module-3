const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const locationSchema = new Schema(
	{
		street: String,
		city: String,
		state: String,
		zip: Number,
		name: String,
		animals: {
			type: [
				{
					type: Schema.Types.ObjectId,
					ref: "Animal",
				},
			],
		},
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
);

const Location = model("Location", locationSchema);

module.exports = Location;
