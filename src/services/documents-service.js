import api from "./api.js";

//Тональность - tonality
//Количество документов к выдаче - limit

// Упоминания в бизнес-контексте - inBusinessNews - NULL !
// Признак максимальной полноты - maxFullness
//Главная роль в публикации - onlyMainRole (boolean)
//Публикации только с риск-факторами - onlyWithRiskFactors (boolean)
//Включать технические новости рынков - excludeTechNews (boolean)
//Включать анонсы и календари - excludeAnnouncements (boolean)
//Включать сводки новостей - excludeDigests (boolean)

export const getHistograms = async (filter) => {
    const { companyNumber, limit, startDate, endDate, onlyMainRole,
            tonality, onlyWithRiskFactors, maxFullness } = filter;
    const body = {
        issueDateInterval: {
            startDate: startDate,
            endDate: endDate
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: "company",
                        sparkId: null,
                        entityId: null,
                        inn: companyNumber,
                        maxFullness: maxFullness,
                        inBusinessNews: null
                    }
                ],
                onlyMainRole: onlyMainRole,
                tonality: tonality,
                onlyWithRiskFactors: onlyWithRiskFactors,

            },
        },
        attributeFilters: {
            excludeTechNews: true,
            excludeAnnouncements: true,
            excludeDigests: true
        },
        similarMode: "duplicates",
        limit: limit,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramType: [
            "totalDocuments",
            "riskFactors"
        ]
    };

    const response = await api.post('/objectsearch/histograms', body);

    return response.data
}
