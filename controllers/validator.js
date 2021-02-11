const Joi = require('joi')

const validator = {

    validNewAccount: (req, res, next) => {
        const schema = Joi.object({
        name: Joi.string().trim().required().min(2).max(15),
        lastname: Joi.string().trim().required().min(2).max(20),
        username: Joi.string().trim().required().min(2).max(15),
        email: Joi.string().trim().required().email({ tlds: {allow: false} }),
        password: Joi.string().trim().required().pattern(/(?=.*\d)/).min(5),
        URLpic: Joi.string().uri(),
        country: Joi.string().trim().required().min(2).max(15)
    })

    const validation = schema.validate(req.body, {abortEarly: false})

    if (!validation.error) {
        next()
    } else {
        res.json({success: false, errores: ['Hubo un error en los datos, verifique.']})
    }

}

}

module.exports = validator