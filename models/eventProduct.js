module.exports = (sequelize, DataTypes) => {
  const EventProduct = sequelize.define('EventProduct', {
    EventProductID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    EventID: DataTypes.INTEGER,
    ProductID: DataTypes.INTEGER,
    IsActive: { type: DataTypes.BOOLEAN, defaultValue: true }
  }, {
    tableName: 'EventProducts', timestamps: false
  });

  EventProduct.associate = models => {
    EventProduct.belongsTo(models.Event, { foreignKey: 'EventID' });
    EventProduct.belongsTo(models.Product, { foreignKey: 'ProductID' });
  };

  return EventProduct;
};