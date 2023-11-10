import api from "./api.js";

export const getAccountInfo = async (usedCompanyCount, companyLimit) => {
    const response = await api.get('/account/info', {
        usedCompanyCount,
        companyLimit
    });

    return response.data;
}