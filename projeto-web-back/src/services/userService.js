// src/services/userService.js

const userRepository = require("../Repositories/userRepository");

class UserService {
  // Cria um novo usuário com validação de negócio
  createUser(userData) {
    // Verifica se os campos obrigatórios existem
    if (!userData.name || !userData.email) {
      throw new Error("Nome e email são obrigatórios.");
    }

    return userRepository.create(userData);
  }

  // Retorna todos os usuários
  getAllUsers() {
    return userRepository.findAll();
  }

  // Retorna um usuário pelo ID
  getUserById(id) {
    const user = userRepository.findById(parseInt(id));
    if (!user) {
      throw new Error("Usuário não encontrado.");
    }
    return user;
  }

  // Atualiza um usuário existente
  updateUser(id, userData) {
    // Validações de negócio antes de atualizar
    if (!userData.name && !userData.email) {
      throw new Error(
        "Pelo menos um campo (nome ou email) deve ser fornecido para atualização."
      );
    }

    const updatedUser = userRepository.update(parseInt(id), userData);
    if (!updatedUser) {
      throw new Error("Usuário não encontrado para atualização.");
    }

    return updatedUser;
  }

  // Deleta um usuário pelo ID
  deleteUser(id) {
    const deleted = userRepository.delete(parseInt(id));
    if (!deleted) {
      throw new Error("Usuário não encontrado para exclusão.");
    }

    return { message: "Usuário deletado com sucesso." };
  }
}

// Exporta uma instância do serviço
module.exports = new UserService();
