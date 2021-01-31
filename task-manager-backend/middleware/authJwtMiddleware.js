const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const config = require('../config');


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const Users = await mongoose.model('Users')
                const user = await Users.findOne({userId: payload.userId});


                if(user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch(e) {
                console.log(e)
            }
            
        })
    )
}