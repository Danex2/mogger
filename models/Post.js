module.exports = (sequelize, type) => {
  return sequelize.define("post", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: type.STRING,
    imgLink: type.STRING,
    head: type.STRING,
    shoulder: type.STRING,
    chest: type.STRING,
    back: type.STRING,
    wrists: type.STRING,
    hands: type.STRING,
    waist: type.STRING,
    legs: type.STRING,
    feet: type.STRING,
    weapon: type.STRING,
    weapon2: type.STRING,
    notes: type.STRING,
    class: type.STRING, // class and armor type will be mandatory for filtering by class or armor type
    armorType: type.STRING
  });
};
