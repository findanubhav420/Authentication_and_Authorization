const { createUserServices, getJWTServices } = require('../services/authServices');

// let jwtToken;

const createUserControllers = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await createUserServices(username, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

const getJWTControllers = async (req, res) => {
  try {
    const { username, password } = req.body;
    const jwtToken = await getJWTServices(username, password);
    res.send(jwtToken);
  } catch (err) {
    res.status(400).json({
      status: 'fail jwttoken',
      message: err,
    });
  }
};

const validateJWTControllers = (req, res) => {
  res.status(200).json('Validated JWT Token');
};

module.exports = {
  createUserControllers, getJWTControllers, validateJWTControllers,
};
