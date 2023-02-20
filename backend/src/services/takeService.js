const { v4: uuid } = require("uuid");
const Take = require("../database/Take");

const getAllTakes = (filterParams) => {
  try {
    const allTakes = Take.getAllTakes(filterParams);
    return allTakes;
  } catch (error) {
    throw error;
  }
};

const getOneTake = (takeId) => {
  try {
    const take = Take.getOneTake(takeId);
    return take;
  } catch (error) {
    throw error;
  }
};

const createNewTake = (newTake) => {
  const takeToInsert = {
    ...newTake,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdTake = Take.createNewTake(takeToInsert);
    return createdTake;
  } catch (error) {
    throw error;
  }
};

const updateOneTake = (takeId, changes) => {
  try {
    const updatedTake = Take.updateOneTake(takeId, changes);
    return updatedTake;
  } catch (error) {
    throw error;
  }
};

const deleteOneTake = (takeId) => {
  try {
    Take.deleteOneTake(takeId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTakes,
  getOneTake,
  createNewTake,
  updateOneTake,
  deleteOneTake,
};