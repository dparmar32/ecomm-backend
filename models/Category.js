const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {
}

/* The Category model is defined with two columns, id and category_name. */
Category.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            // allowNull: false
        },
        category_name: {
            type: DataTypes.STRING,
            // allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }
);

module.exports = Category;
