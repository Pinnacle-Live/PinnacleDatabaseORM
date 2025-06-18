module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    ProductID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    VenueID: {type: DataTypes.INTEGER,
      allowNull: false},
    CategoryID: {type: DataTypes.INTEGER,
      allowNull: false},
    ParentProductID: DataTypes.INTEGER,
    Name: {type: DataTypes.STRING,
      allowNull: false},
    Description: DataTypes.TEXT,
    ProductImage: DataTypes.STRING,
    Type: DataTypes.STRING,
    MaxQuantity: DataTypes.INTEGER,
    Price: DataTypes.DECIMAL(10, 2),
    IsTaxable: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
    IsActive: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false }
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