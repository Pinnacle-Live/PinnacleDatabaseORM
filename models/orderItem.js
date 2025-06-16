module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    OrderItemID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    OrderID: DataTypes.INTEGER,
    ProductID: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER,
    UnitPrice: DataTypes.DECIMAL(10, 2)
  }, {
    tableName: 'OrderItems', timestamps: false
  });

  OrderItem.associate = models => {
    OrderItem.belongsTo(models.Order, { foreignKey: 'OrderID' });
    OrderItem.belongsTo(models.Product, { foreignKey: 'ProductID' });
  };

  return OrderItem;
};