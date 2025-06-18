module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    CategoryID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    CategoryName: {type: DataTypes.STRING,
      allowNull: false},
    IsActive: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false }
  }, {
    tableName: 'Categories', timestamps: false
  });

  Category.associate = models => {
    Category.hasMany(models.Product, { foreignKey: 'CategoryID' });
  };

  return Category;
};