/* jshint indent: 2 */
/* 
数据库的映射数据模型
*/
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,// 是否允许为NULL
      primaryKey: true, // 主键
      autoIncrement: true// 是否自增
    },
    name: {
      type: DataTypes.STRING(50), // 最大长度为50的字符串
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'user'
  })
}
