module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    EventID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    VenueID: {type: DataTypes.INTEGER,
      allowNull: false},
    ContactID: {type: DataTypes.INTEGER,
      allowNull: false},
    ProjectID: {type: DataTypes.INTEGER,
      allowNull: false},
    ClientID: {type: DataTypes.INTEGER,
      allowNull: false},
    Name: {type: DataTypes.STRING,
      allowNull: false},
    Description: DataTypes.TEXT,
    StartDate: {type: DataTypes.DATE,allowNull: false},
    EndDate: DataTypes.DATE,
    EventLogo: DataTypes.STRING,
    EventHeader: DataTypes.STRING,
    EventThumbnail: DataTypes.STRING,
    IsActive: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false }
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