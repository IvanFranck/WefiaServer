const bcrypt = require('bcrypt');
const User = require ('../Models/user');
const jwt = require("jsonwebtoken");


/**
 * Create a new user
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} rest 
 */
exports.signUp = (req, rest) => {
    /**  hash entered password, 8 is the salt - the max is 10 and it provides the most secure password
     *  and take more time to hash password
    */
    bcrypt.hash(req.body.password, 8).then(
        hash =>{
            const user = new User.userModel({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,
                location: req.body.location,
                birthdayDate: req.body.birthdayDate,
                birthdayPlace: req.body.birthdayPlace,
                profilePicture: req.body.profilePicture,
                password: hash,
                mailAddress: req.body.mailAddress
            })
            user.save().then(
                () => {
                    rest.status(201).json(
                        {message : "user created successfully !"}
                    );
                }
            ).catch( 
                error => {
                    rest.status(400).json(
                        {error}
                    );
                }
            )
        }
    );
};


/**
 * compare user credentials for log in
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} rest 
 */
exports.logIn = (req, rest) => {
    User.userModel.findOne({ mailAddress: req.body.mailAddress}).then(
        user => {
            if (!user){
                rest.status(401).json({
                    error: new Error("user not found !")
                });
            }
            bcrypt.compare(req.body.password, user.password).then(
                valid => {
                    if (!valid) {
                        return rest.status(401).json({
                            error: new Error("Incorrect password !")
                        });
                    }
                    /** 
                     * create token for authentification
                     * {userId: user_id} is payload
                     * 'NEVER_GIVE_UP' is the token secret
                     * and the last parameter is the token config. We set expiration period to 24 hours
                    */
                    const token = jwt.sign(
                        {userId: user._id},
                        "NEVER_GIVE_UP",
                        { expiresIn: '24h'}
                    )
                    rest.status(200).json({
                        userId: user._id,
                        token: token
                    });
                }
            ).catch(
                error => {
                    rest.status(500).json({error})
                }
            );
        }
    ).catch(
        error => {
            rest.status(500).json({error});
        }
    );
};

/**
 * Get on user by passing its ID
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} rest 
 */
exports.getOneUser = (req, rest) => {
    User.userModel.findOne({ _id: req.params.id }).then(
        user => {
            if (!user){
                rest.status(401).json({
                    error: new Error("user not found !")
                });
            }
            res.status(200).json({
                userId: user._id,
                message: "user found !"
            });
        }
    ).catch(
        error => {
            res.status(401).json({error});
        }
    );
};