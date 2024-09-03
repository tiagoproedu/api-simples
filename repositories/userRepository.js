class UserRepository {
    usuarios = [];
    create = (user) => {
        this.usuarios.push(user);
    };

    listAll = () => {
        return this.usuarios;
    }
}

module.exports = UserRepository;