'use strict';
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Comment = sequelize.define('Comment', {

    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    userID: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "User",
        id: "id"
      }
    },
    activityID: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Activity",
        id: "id"
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: 'comments',
    timestamps: true
  });
};