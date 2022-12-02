'use strict';
const { DataTypes, Sequelize } = require('sequelize');

//seqeulize define also returns model hence no return statement 
module.exports = (sequelize) => {
  const Event = sequelize.define('Event', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false, 
    },
    userId:{
      type: DataTypes.UUID,
      primaryKey: true,
      references: {
        model: 'users',
        id: "id"
      }
    },
    eventTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'eventTypes',
        key:'id'        
      }
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    recurring: {
      type: DataTypes.STRING,
      defaultValue: ""
    }
  }, {
    tableName: "events" 
  });
  Event.associate = function(model) {

    Event.hasMany(model.Comment, {
      foreignKey:"commentId",
    })

    Event.belongsTo(model.EventType)

    Event.belongsTo(model.User)

    Event.belongsToMany(model.User, {
      through: "Attending",
      foreignKey: "userId",
      as: "Attendees"
    })

    Event.belongsToMany(model.User, {
      through: "EventLikes",
      foreignKey: "userId",
      as: "eventLiked"
    })
  }
}