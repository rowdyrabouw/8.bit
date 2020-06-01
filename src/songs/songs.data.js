const data = require("../_data");

module.exports = () => {
  return {
    rides: data.getSongs(),
  };
};
