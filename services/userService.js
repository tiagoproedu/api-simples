class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    };

    create = (user) => {
        this.userRepository.create(user);

        return user;
    };

    listAll = () => {
        const users = this.userRepository.listAll();
        return users;
    };
}

module.exports = UserService;