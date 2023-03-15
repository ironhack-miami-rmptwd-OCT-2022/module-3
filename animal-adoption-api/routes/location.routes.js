const router = require("express").Router();
const Location = require("../models/Location.model");

router.get("/", (req, res) => {
	Location.find()
		.then((locations) => {
			res.json({ success: true, locations });
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error finding locations",
				error: err,
			});
		});
});

router.get("/:locationId", (req, res) => {
	Location.findById(req.params.locationId)
		.populate("animals")
		.then((location) => {
			res.json({ success: true, location });
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error finding location",
				error: err,
			});
		});
});

router.post("/", (req, res) => {
	Location.create(req.body)
		.then((newlyCreatedLocation) => {
			res.json({ success: true, location: newlyCreatedLocation });
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error creating location",
				error: err,
			});
		});
});

router.put("/:locationId", (req, res) => {
	Location.findByIdAndUpdate(req.params.locationId, req.body, { new: true })
		.then((updatedLocation) => {
			res.json({ success: true, location: updatedLocation });
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error updating location",
				error: err,
			});
		});
});

router.put("/:locationId/:animalId", (req, res) => {
	Location.findById(req.params.locationId)
		.then((locationToUpdate) => {
			if (locationToUpdate.animals.includes(req.params.animalId)) {
				locationToUpdate.animals.pull(req.params.animalId);
			} else {
				locationToUpdate.animals.push(req.params.animalId);
			}

			locationToUpdate
				.save()
				.then((updatedLocation) => {
					res.json({ success: true, location: updatedLocation });
				})
				.catch((err) => {
					res.json({
						success: false,
						message: "Error updating animals for location",
						error: err,
					});
				});
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error finding locatino to updating",
				error: err,
			});
		});
});

router.delete("/:locationId", (req, res) => {
	Location.findByIdAndRemove(req.params.locationId)
		.then(() => {
			res.json({
				success: true,
				message: `Successfully removed location ${req.params.locationId}`,
			});
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error deleting location",
				error: err,
			});
		});
});

module.exports = router;
