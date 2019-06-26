const auth = (req, res, next) => {
    const { authorization } = req.headers
    
    if (authorization){
        const enconded = authorization.split(' ')[1]
        const credentials = Buffer.from(enconded, 'base64').toString()
        const user = credentials.split(':')[0]
        const password = credentials.split(':')[1]

        if(user === 'admin' && password === 'root'){
            return next()
        }
    }

    res.sendStatus(401)
}

module.exports = auth