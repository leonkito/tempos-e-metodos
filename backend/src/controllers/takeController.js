const takeService = require("../services/takeService");

const getAllTakes = (req, res) => {
  const { mode } = req.query;
  try {
    const allTakes = takeService.getAllTakes({ mode });
    res.send({ status: "OK", data: allTakes });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneTake = (req, res) => {
  const {
    params: { takeId },
  } = req;
  if (!takeId) {
    res
      .status(400)
      .send({
        status:"FAILED",
        data:{error:"Parameter ':takeId' can not be empty"}
      })
  }
  try {
    const take = takeService.getOneTake(takeId);
    res.send({ status: "OK", data: take });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewTake = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode
  ) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'mode'",
        },
      });
    return;
  }
  const newTake = {
    name: body.name,
    mode: body.mode,
  };
  try {
    const createdTake = takeService.createNewTake(newTake);
    res.status(201).send({ status: "OK", data: createdTake });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneTake = (req, res) => {
  const {
    body,
    params: { takeId },
  } = req;
  if (!takeId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':takeId' can not be empty" },
      });
  }
  try {
    const updatedTake = takeService.updateOneTake(takeId, body);
    res.send({ status: "OK", data: updatedTake });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneTake = (req, res) => {
  const {
    params: { takeId },
  } = req;
  if (!takeId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':takeId' can not be empty" },
      });
  }
  try {
    takeService.deleteOneTake(takeId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllTakes,
  getOneTake,
  createNewTake,
  updateOneTake,
  deleteOneTake,
};