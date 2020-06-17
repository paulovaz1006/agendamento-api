const jwt = require('jsonwebtoken');

class LoginController {
    login(req, res) {
        const token = LoginController.generateTokenJwt(req.user);

        if (token) {
            res.set('Autorizathion', token);
            res.status(200).json({token:token})
        }
    }

    static generateTokenJwt(user) {
        const payload = {
            id: user.id_user
        }

        const token = jwt.sign(payload, process.env.JWT_KEY);

        return token;
    }
}

module.exports = new LoginController;