// src/repositories/userRepository.js

// Simula um banco de dados em memória
let users = [];
let currentId = 1;

class UserRepository {
  // Cria um novo usuário
  create(user) {
    const newUser = { id: currentId++, ...user };
    users.push(newUser);
    return newUser;
  }

  // Retorna todos os usuários
  findAll() {
    return users;
  }

  // Busca usuário por ID
  findById(id) {
    return users.find(user => user.id === id);
  }

  // Atualiza usuário existente
  update(id, updatedUser) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser, id: id };
      return users[index];
    }
    return null;
  }

  // Deleta usuário por ID
  delete(id) {
    const initialLength = users.length;
    users = users.filter(user => user.id !== id);
    // Retorna true se algum usuário foi deletado
    return users.length < initialLength;
  }
}

// Exporta uma instância do repositório
module.exports = new UserRepository();
