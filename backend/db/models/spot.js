'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    address: {
      type:DataTypes.STRING,
    },
    city: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    state: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    country: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
    },
    price: {
      type:DataTypes.DECIMAL(10,2),
      allowNull:false,
    },
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, {foreignKey: 'userId'});
    Spot.hasMany(models.Review, {foreignKey: 'spotId'});
    Spot.hasMany(models.Image, {foreignKey: 'spotId'})

  };
  return Spot;
};