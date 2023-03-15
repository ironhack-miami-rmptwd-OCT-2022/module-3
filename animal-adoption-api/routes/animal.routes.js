const router = require("express").Router();
const Animal = require("../models/Animal.model");

router.get("/", (req, res) => {
	Animal.find()
		.then((animals) => {
			res.json({ success: true, animals });
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error finding animals",
				error: err,
			});
		});
});

router.get("/:animalId", (req, res) => {
	Animal.findById(req.params.animalId)
		.then((animal) => {
			res.json({ success: true, animal });
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error finding animal",
				error: err,
			});
		});
});

router.post("/", (req, res) => {
	Animal.create(req.body)
		.then((newlyCreatedAnimal) => {
			res.json({ success: true, animal: newlyCreatedAnimal });
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error creating animal",
				error: err,
			});
		});
});

router.put("/:animalId", (req, res) => {
	Animal.findByIdAndUpdate(req.params.animalId, req.body, { new: true })
		.then((updatedAnimal) => {
			res.json({ success: true, animal: updatedAnimal });
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error updating animal",
				error: err,
			});
		});
});

router.delete("/:animalId", (req, res) => {
	Animal.findByIdAndRemove(req.params.animalId)
		.then(() => {
			res.json({
				success: true,
				message: `Successfully removed animal ${req.params.animalId}`,
			});
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error deleting animal",
				error: err,
			});
		});
});

module.exports = router;
