const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {
}

/* The ProductTag model is defined as a sequelize model.

The ProductTag model has three columns: id, product_id, and tag_id.

The ProductTag model has two foreign keys: product_id and tag_id.

The ProductTag model has a primary key of id.

The ProductTag model has timestamps disabled.

The ProductTag model has table name set to product_tag.

The ProductTag model has underscored set to true.

The ProductTag model has modelName set to product_tag. */
ProductTag.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            references: {
                model: 'product',
                key: 'id'
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag',
    }
);

module.exports = ProductTag;
