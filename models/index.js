// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});

// Categories have many Products - https://sequelize.org/v4/manual/tutorial/associations.html#creating-elements-of-a-belongsto-has-many-or-hasone-association
Category.hasMany(Product, {
    foreignKey: 'categroy_id',
    onDelete: 'SET Null'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: ProductTag,
    // as: 'tag',
    foreignKey: 'product_id',
    onDelete: 'SET Null'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    // as: 'products',
    foreignKey: 'tag_id',
    onDelete: 'SET Null'
})
module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};
