module.exports = (sequelize, type) => {
  return sequelize.define('post', {
    id: {
      type: type.INTEGER,
      autoIncrement: true
    },
    imgLink: type.STRING,
    head: type.STRING,
    shoulder: type.STRING,
    chest: type.STRING,
    back: type.STRING,
    wrist: type.STRING,
    hands: type.STRING,
    waist: type.STRING,
    legs: type.STRING,
    feet: type.STRING,
    weapon: type.STRING,
    weapon2: type.STRING,
    notes: type.STRING,
    class: type.STRING
  });
};
