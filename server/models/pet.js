'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pet.init({
    pet_id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement:true
    },
    name: {
     type: DataTypes.STRING,
     allowNull:false,
    },
    birth_date: {
     type: DataTypes.SMALLINT,
     allowNull:false,
    },
    health_issues: {
     type: DataTypes.STRING,
     allowNull:false,
    },
    comments: {
     type: DataTypes.STRING,
     allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Pet',
    tableName: 'pets',
    timestamps: false
  });
  return Pet;
};