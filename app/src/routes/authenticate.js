const localStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserController = require('../controllers/user-controller');

const verifyUser = (user) => {
    if (!user) {
        throw new Error('Usuário não encontrado');
    }
}

const verifyPassword = async (password, passwordHash) => {
    const validPassword = await bcrypt.compare(password, passwordHash);

    if (!validPassword) {
        throw new Error('E-mail ou senha inválidos');
    }
}

passport.use(
    new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false,
    }, async (email, password, done) => {
        try {
            const user = await UserController.searchEmail(email);
            verifyUser(user);
            await verifyPassword(password, user.password);
            done(null, user);
        } catch (error) {
            done(error)
        }
    })
)

passport.use(
    new BearerStrategy(
        (token, done) => {
            try {
                const payload = jwt.verify(token, process.env.JWT_KEY);
                done(null, payload)
            } catch (error) {
                done(error)
            }
        }
    )
)