class UserController {
    constructor(userService) {
        this.userService = userService;
    };

    create = (req, res) => {
        const usuario = req.body;

        this.userService.create(usuario);

        return res.status(200).json(usuario);
    };

    listAll = (req, res) => {
        return res.json(this.userService.listAll());
    };
}

module.exports = UserController;