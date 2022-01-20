const jwt = require('jsonwebtoken');
// require('dotenv).config();

const secret = 'Thisisasecret' // 'process.env.SESSION_SECRET';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        console.log(token);
        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch (error) {
            console.log(error);
        }

        return req;
    },
    //removed firstName from variables listed ({ firstName, email, _id })
    signToken: function ({ firstName, lastName, dateOfBirth, email, _id, shotOne, shotTwo, booster }) {
        const payload = { firstName, lastName, dateOfBirth, email, _id, shotOne, shotTwo, booster };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};