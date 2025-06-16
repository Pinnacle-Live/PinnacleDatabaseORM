module.exports = (sequelize, DataTypes) => {
  const VenueContact = sequelize.define('VenueContact', {
    VenueContactID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    VenueID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Venues',
        key: 'VenueID'
      },
      onDelete: 'NO ACTION'
    },
    ContactID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ContactInfo',
        key: 'ContactID'
      },
      onDelete: 'NO ACTION'
    }
  }, {
    tableName: 'VenueContact',
    timestamps: false
  });

  VenueContact.associate = models => {
    VenueContact.belongsTo(models.Venue, {
      foreignKey: 'VenueID',
      onDelete: 'NO ACTION'
    });

    VenueContact.belongsTo(models.ContactInfo, {
      foreignKey: 'ContactID',
      onDelete: 'NO ACTION'
    });
  };

  return VenueContact;
};
