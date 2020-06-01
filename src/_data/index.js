const getSongs = () => {
  const data = require(`./songs.json`);
  return data;
};

module.exports = {
  getSongs,
};
