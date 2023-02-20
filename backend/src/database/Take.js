const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllTakes = (filterParams) => {
  try {
    let takes = DB.takes;
    if (filterParams.mode) {
      return DB.takes.filter((take) =>
        take.mode.toLowerCase().includes(filterParams.mode)
      );
    }
    // Other if-statements will go here for different parameters
    return takes;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneTake = (takeId) => {
  try {
    const take = DB.takes.find((take) => take.id === takeId);
    if (!take) {
      throw {
        status: 400,
        message: `Can't find take with the id '${takeId}'`,
      };
    }
    return take;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewTake = (newTake) => {
  try {
    const isAlreadyAdded =
      DB.takes.findIndex((take) => take.name === newTake.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Take with the name '${newTake.name}' already exists`,
      };
    }
    DB.takes.push(newTake);
    saveToDatabase(DB);
    return newTake;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneTake = (takeId, changes) => {
  try {
    const isAlreadyAdded =
      DB.takes.findIndex((take) => take.name === changes.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Take with the name '${changes.name}' already exists`,
      };
    }
    const indexForUpdate = DB.takes.findIndex(
      (take) => take.id === takeId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find take with the id '${takeId}'`,
      };
    }
    const updatedTake = {
      ...DB.takes[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.takes[indexForUpdate] = updatedTake;
    saveToDatabase(DB);
    return updatedTake;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneTake= (takeId) => {
  try {
    const indexForDeletion = DB.takes.findIndex(
      (take) => take.id === takeId
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${takeId}'`,
      };
    }
    DB.takes.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllTakes,
  createNewTake,
  getOneTake,
  updateOneTake,
  deleteOneTake,
};