const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const UsuarioDB = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha:{
    type: DataTypes.STRING,
    allowNull: false,
  }
});


class UsuarioClass{
  create = async (nome, email, telefone, senha) => {
    return await UsuarioDB.create({ nome, email , telefone , senha});
  };
  

  get = async (id) => {
    return await UsuarioDB.findByPk(id);
  };
  
  getAll = async () => {
    return await UsuarioDB.findAll();
  };
  

  update = async (id, updatedFields) => {
    var US = await this.get(id);
    if (US) {
      return await US.update(updatedFields);
    }
    return null;
  };
  

  delete = async (id) => {
    const US = await this.get(id);
    if (US) {
      return await US.destroy();
    }
    return null;
  };
}


const Usuario = new UsuarioClass()
module.exports = { Usuario };
