const CompanyModel = require('../models/company-model');

class CompanyController {
    async searchCompany(company, res) {
        const companySearch = await CompanyModel.searchCompany(company, res);
        
        if (companySearch.length === 0) {                                    
            const newCompany = {
                name: company
            }

            const registerCompany = await CompanyModel.registerCompany(newCompany, res);
            
            return registerCompany[0];
        } else {
            return companySearch[0];
        }
    }

    async searchInfoCompany(req, res) {
        const id = req.params.id_company;
        const searchInfoCompany = await CompanyModel.searchInfoCompany(id, res);        
    }
}

module.exports = new CompanyController;