module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    OrderItemID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    OrderID: {type: DataTypes.INTEGER,
      allowNull: false},
    ProductID: {type: DataTypes.INTEGER,
      allowNull: false},
    Quantity: {type: DataTypes.INTEGER,
      allowNull: false},
    UnitPrice: {type: DataTypes.DECIMAL(10, 2), allowNull: false}
  }, {
    tableName: 'OrderItems', timestamps: false
  });

  OrderItem.associate = models => {
    OrderItem.belongsTo(models.Order, { foreignKey: 'OrderID' });
    OrderItem.belongsTo(models.Product, { foreignKey: 'ProductID' });
  };

  return OrderItem;
};