const dotenv = require("dotenv");

dotenv.config();

const {
  ENV,
  PORT
} = process.env;

const configuration = {
  env : ENV,
  port : PORT
};

export {
  configuration
};
