const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('exemplo', 'root', 'roottheo', {
    dialect: 'mysql' 
});

class Produto extends Model { }

Produto.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Produto'
});
Produto.sync({ alter: true });

module.exports = Produto;
