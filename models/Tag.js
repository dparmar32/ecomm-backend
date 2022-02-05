const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {
}

/* The `Tag` model is defined with two columns, `id` and `tag_name`. */
Tag.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tag_name: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
    }
);

module.exports = Tag;
