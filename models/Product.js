// import important parts of sequelize library
const {Model, DataTypes} = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {
}

// set up fields and rules for Product model
/* The Product model is defined with the following columns:

id: The primary key of the table.
product_name: The name of the product.
price: The price of the product.
stock: The number of items in stock.
category_id: The id of the category the product belongs to. */
Product.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            // allowNull: false
        },
        product_name: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;
