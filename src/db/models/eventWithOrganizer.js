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
      organizerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },{
      freezeTableName: true, // Prevent table name change to plural
      autoTimeStamp: true, // Add createdAt and updatedAt fields
    });
    const Organizer = sequelize.define('organizer', {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },{
      freezeTableName: true, // Prevent table name change to plural
      autoTimeStamp: true, // Add createdAt and updatedAt fields
    });
    Event.belongsTo(Organizer, { as: 'organizer' });  // ****  เป็นแบบ one to many คือ 1 คนจัดงาน สามารถจัดงานได้หลายงาน
    Organizer.hasMany(Event, { as: 'events' }); // ****  เป็นแบบ one to many คือ 1 คนจัดงาน สามารถจัดงานได้หลายงาน
    // เวลาอ้างอิงถึงกัน จะเป็น organizerId ใน event และ id ใน organizer
    return Event;
  }