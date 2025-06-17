module.exports = (sequelize, DataTypes) => {
  const ContactInfo = sequelize.define('ContactInfo', {
    ContactID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: DataTypes.STRING,
    Title: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Department: DataTypes.STRING,
    IsActive: { type: DataTypes.BOOLEAN, defaultValue: true },
    isPrimary: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  }, {
    tableName: 'ContactInfo', timestamps: false
  });

  ContactInfo.associate = models => {
    ContactInfo.hasMany(models.Venue, { foreignKey: 'ContactID' });
    ContactInfo.hasMany(models.Event, { foreignKey: 'ContactID' });
    ContactInfo.hasMany(models.VenueContact, { foreignKey: 'ContactID' });
  };

  return ContactInfo;
};