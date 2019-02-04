const express = require('express')

module.exports = function(server){
    //Definir URL base
    const router = express.Router()
    server.use('/api', router)

    //Rotas do Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleServices')
    BillingCycle.register(router, '/billingCycles')
}