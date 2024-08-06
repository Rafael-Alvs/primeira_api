const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite'
});

// Testa a conexão
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
}

testConnection();



module.exports = sequelize;
