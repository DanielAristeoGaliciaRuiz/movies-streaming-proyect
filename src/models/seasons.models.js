const { DataTypes } = require("sequelize");

const db = require("../utils/database");
const Series = require("./series.models");

const Seasons=db.define('seasons',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      synopsis: {
        type: DataTypes.TEXT,
        allowNull: false
    },
      seasonNumber: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 1
      },
      realiseYear: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      seriesId: {
        type: DataTypes.UUID,
        references: {
            model: Series,
            key: 'id'
        }
    },
      coverUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      trillerUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      }
})

module.exports=Seasons