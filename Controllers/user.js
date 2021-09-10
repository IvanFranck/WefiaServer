const bcrypt = require('bcrypt');
const User = require ('../Models/user');
const jwt = require("jsonwebtoken");


/**
 * Create a new user
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} res 
 */
exports.signUp = (req, res) => {
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
                birthDay: req.body.birthDay,
                birthPlace: req.body.birthPlace,
                profilePicture: req.body.profilePicture,
                password: hash,
                mailAddress: req.body.mailAddress
            })
            user.save().then(
                () => {
                    res.status(201).json(
                        {message : "user created successfully !"}
                    );
                }
            ).catch( 
                error => {
                    res.status(400).json(
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
 * @param {HTTPResponse} res 
 */
exports.logIn = (req, res) => {
    User.userModel.findOne({ mailAddress: req.body.mailAddress}).then(
        user => {
            if (!user){
                res.status(401).json({
                    error: new Error("user not found !")
                });
            }
            bcrypt.compare(req.body.password, user.password).then(
                valid => {
                    if (!valid) {
                        return res.status(401).json({
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
                    res.status(200).json({
                        userId: user._id,
                        token: token
                    });
                }
            ).catch(
                error => {
                    res.status(500).json({error})
                }
            );
        }
    ).catch(
        error => {
            res.status(500).json({error});
        }
    );
};

/**
 * Get one user by passing its ID
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} res 
 */
exports.getOneUser = (req, res) => {
    User.userModel.findOne({ _id: req.params.id }).then(
        user => {
            if (!user){
                res.status(401).json({
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