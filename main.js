const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const { Usuario } = require('./models/user');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sincronizando o banco de dados...
sequelize.sync({ force: true }).then(() => {
  console.log('Banco de dados sincronizado');
});

// CRIANDO USUARIOS
app.post('/usuarios', async (req, res) => {
  try {
    const { nome, email, telefone, senha } = req.body;
    const newUser = await Usuario.create(nome, email, telefone, senha );
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ler usuário por ID
app.get('/', async (req, res) => {
    res.status(200).send("Bem-vindo a minha API")
});

// Ler usuário por ID
app.get('/usuarios/:id', async (req, res) => {
  try {
    const user = await Usuario.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Ler todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const users = await Usuario.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Atualizar usuário
app.put('/usuarios/:id', async (req, res) => {
    try {
      const { nome, email, telefone, senha } = req.body;
      const userId = parseInt(req.params.id, 10);

      const updatedUser = await Usuario.update(userId, { nome, email, telefone, senha });
      
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Excluir usuário
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const user = await Usuario.delete(req.params.id);
    if (user) {
      await user.destroy();
      res.status(200).send();
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando no http://localhost:${port}/`);
});
