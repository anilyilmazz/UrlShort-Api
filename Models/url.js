const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize(process.env.DB, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {} //removed ssl
});

class Url extends Model {}

Url.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      shorturl: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isDeleted: {
        type: DataTypes.BOOLEAN
      }
}, {
  sequelize,
  modelName: 'Url',
  tableName: 'Url',
  freezeTableName: true,
})

module.exports = Url;