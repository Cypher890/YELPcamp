class ExpressError extends Error {
    constructor(message, statusCode){
        super()
    }
}


module.exports = ExpressError