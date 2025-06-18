module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    VenueID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: {type: DataTypes.STRING,
      allowNull: false},
    VenueNumber: {type: DataTypes.INTEGER,
      allowNull: false},
    StreetAddress: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Country: DataTypes.STRING,
    Phone: DataTypes.STRING,
    VenueInfo: DataTypes.STRING,
    VenueLogo: DataTypes.STRING,
    VenueHeader: DataTypes.STRING,
    TaxRate: DataTypes.DECIMAL(10, 2),
    TechnologyFee: DataTypes.DECIMAL(10, 2),
    Labour: DataTypes.DECIMAL(10, 2),
    OnsiteFee: DataTypes.DECIMAL(10, 2),
    IsLabourTaxable: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
    OnsiteFeeAdded: DataTypes.INTEGER,
    ContactID: DataTypes.INTEGER,
    IsActive: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false }
  }, {
    tableName: 'Venues', timestamps: false
  });

  Venue.associate = models => {
    Venue.belongsTo(models.ContactInfo, { foreignKey: 'ContactID' });
    Venue.hasMany(models.Product, { foreignKey: 'VenueID' });
    Venue.hasMany(models.Event, { foreignKey: 'VenueID' });
    Venue.hasMany(models.VenueContact, { foreignKey: 'VenueID' });
  };

  return Venue;
};