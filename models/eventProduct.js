module.exports = (sequelize, DataTypes) => {
  const EventProduct = sequelize.define('EventProduct', {
    EventProductID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    EventID: {type: DataTypes.INTEGER,
      allowNull: false},
    ProductID: {type: DataTypes.INTEGER,
      allowNull: false},
    IsActive: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false }
  }, {
    tableName: 'EventProducts', timestamps: false
  });

  EventProduct.associate = models => {
    EventProduct.belongsTo(models.Event, { foreignKey: 'EventID' });
    EventProduct.belongsTo(models.Product, { foreignKey: 'ProductID' });
  };

  return EventProduct;
};