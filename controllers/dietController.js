const Diet = require('../models/Diet');

const getDiets = async (req, res) => {
  try {
    const diets = await Diet.find();
    res.json(diets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addDiet = async (req, res) => {
  const { date, calories, nutrients } = req.body;

  try {
    const newDiet = new Diet({ date, calories, nutrients });
    await newDiet.save();
    res.status(201).json(newDiet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getDiets, addDiet };
