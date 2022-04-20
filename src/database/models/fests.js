'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fests.init({
    fullName: DataTypes.STRING,
    date: DataTypes.STRING,
    amountPeople: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fests',
  });
  return fests;
};
