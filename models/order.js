module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    OrderID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    OrderDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    CustomerName: DataTypes.STRING,
    CustomerEmail: DataTypes.STRING,
    ClientID: DataTypes.INTEGER,
    CompanyName: DataTypes.STRING,
    BoothNumber: DataTypes.INTEGER,
    BoothDescription: DataTypes.STRING,
    BoothDiagram: DataTypes.STRING,
    OnsiteContactName: DataTypes.STRING,
    OnsiteContactEmail: DataTypes.STRING,
    OnsiteContactPhoneDomestic: DataTypes.STRING,
    OnsiteContactPhoneInternational: DataTypes.STRING,
    TaxExempt: DataTypes.STRING,
    OrderPDF: DataTypes.STRING,
    IsAccepted: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {
    tableName: 'Orders', timestamps: false
  });

  Order.associate = models => {
    Order.hasMany(models.OrderItem, { foreignKey: 'OrderID' });
  };

  return Order;
};