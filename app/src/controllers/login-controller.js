const jwt = require('jsonwebtoken');

class LoginController {
    login(req, res) {
        const token = LoginController.generateTokenJwt(req.user);

        if (token) {
            delete req.user['password'];
            
            res.set('Autorizathion', token);
            res.status(200).json({token:token, user: req.user})
        } else {
            res.status(500).json({message:'Usuário não encontrado'});
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