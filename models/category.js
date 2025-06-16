module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    CategoryID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    CategoryName: DataTypes.STRING,
    IsActive: { type: DataTypes.BOOLEAN, defaultValue: true }
  }, {
    tableName: 'Categories', timestamps: false
  });

  Category.associate = models => {
    Category.hasMany(models.Product, { foreignKey: 'CategoryID' });
  };

  return Category;
};