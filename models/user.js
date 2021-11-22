'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.listItem)
    }
  };
  user.init({
    name: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true
      }
    },
   email: {
     type: DataTypes.STRING, allowNull: false,
     validate: {
      notNull: true
    }
   },
    password: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};