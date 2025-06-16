module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    ProductID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    VenueID: DataTypes.INTEGER,
    CategoryID: DataTypes.INTEGER,
    ParentProductID: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Description: DataTypes.TEXT,
    ProductImage: DataTypes.STRING,
    Type: DataTypes.STRING,
    MaxQuantity: DataTypes.INTEGER,
    Price: DataTypes.DECIMAL(10, 2),
    IsTaxable: { type: DataTypes.BOOLEAN, defaultValue: true },
    IsActive: { type: DataTypes.BOOLEAN, defaultValue: true }
  }, {
    tableName: 'Products', timestamps: false
  });

  Product.associate = models => {
    Product.belongsTo(models.Venue, { foreignKey: 'VenueID' });
    Product.belongsTo(models.Category, { foreignKey: 'CategoryID' });
    Product.belongsTo(models.Product, { foreignKey: 'ParentProductID', as: 'Parent' });
    Product.hasMany(models.EventProduct, { foreignKey: 'ProductID' });
  };

  return Product;
};