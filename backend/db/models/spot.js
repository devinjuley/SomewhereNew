'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    title: DataTypes.STRING,
    details: DataTypes.STRING,
    aboutThisSpace: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {});
  Spot.associate = function (models) {
    Spot.hasMany(models.Image, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true })
    Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true })
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Spot;
};