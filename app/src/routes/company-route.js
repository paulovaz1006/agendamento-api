const passport = require('passport');
const CompanyController = require('../controllers/company-controller');

module.exports = app => {
    app.get('/company/:id_company', passport.authenticate('bearer', { session:false }), (req, res) => CompanyController.searchInfoCompany(req, res));    
}