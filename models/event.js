module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    EventID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    VenueID: DataTypes.INTEGER,
    ContactID: DataTypes.INTEGER,
    ProjectID: DataTypes.INTEGER,
    ClientID: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Description: DataTypes.TEXT,
    StartDate: DataTypes.DATE,
    EndDate: DataTypes.DATE,
    EventLogo: DataTypes.STRING,
    EventHeader: DataTypes.STRING,
    EventThumbnail: DataTypes.STRING,
    IsActive: { type: DataTypes.BOOLEAN, defaultValue: true }
  }, {
    tableName: 'Events', timestamps: false
  });

  Event.associate = models => {
    Event.belongsTo(models.Venue, { foreignKey: 'VenueID' });
    Event.belongsTo(models.ContactInfo, { foreignKey: 'ContactID' });
    Event.hasMany(models.EventProduct, { foreignKey: 'EventID' });
  };

  return Event;
};