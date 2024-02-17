module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('event', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      date: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      time: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      petAllowed: {
        type: DataTypes.BOOLEAN
        // allowNull defaults to true
      },
      organizer: {
        type: DataTypes.STRING
        // allowNull defaults to true
      }, 
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
       type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    },
    
    }, {
      freezeTableName: true, // Prevent table name change to plural
      timestamps: true, // Add createdAt and updatedAt fields
    });
    
    return Event;
};
