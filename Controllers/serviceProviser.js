const bcrypt = require('bcrypt');
const ServiceProvider = require ('../Models/serviceProvider');
const jwt = require("jsonwebtoken");


/**
 * Create a new service provider
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} res 
 */
exports.signUp = (req, res) => {
    /**  hash entered password, 8 is the salt - the max is 10 and it provides the most secure password
     *  and take more time to hash password
    */
    bcrypt.hash(req.body.password, 8).then(
        hash =>{
            const serviceProvider = new ServiceProvider({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,
                location: req.body.location,
                birthdayDate: req.body.birthdayDate,
                birthdayPlace: req.body.birthdayPlace,
                profilePicture: req.body.profilePicture,
                password: hash,
                mailAddress: req.body.mailAddress,
                photoCNI: req.body.photoCNI,
                services: req.body.services,
                experience: req.body.experience,
                description: req.body.description
            })
            serviceProvider.save().then(
                () => {
                    res.status(201).json(
                        {message : "service Provider created successfully !"}
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
 * compare service Provider credentials for log in
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} res 
 */
exports.logIn = (req, res) => {
    ServiceProvider.findOne({ mailAddress: req.body.mailAddress}).then(
        serviceProvider => {
            if (!serviceProvider){
                res.status(401).json({
                    error: new Error("service Provider not found !")
                });
            }
            bcrypt.compare(req.body.password, serviceProvider.password).then(
                valid => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error("Incorrect password !")
                        });
                    }
                    /** 
                     * create token for authentification
                     * {serviceProviderId: serviceProvider_id} is payload
                     * 'NEVER_GIVE_UP' is the token secret
                     * and the last parameter is the token config. We set expiration period to 24 hours
                    */
                    const token = jwt.sign(
                        {serviceProviderId: serviceProvider._id},
                        process.env.TOKEN_SECRET_WORD,
                        { expiresIn: '24h'}
                    )
                    res.status(200).json({
                        serviceProviderId: serviceProvider._id,
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
 * Get on serviceProvider by passing its ID
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} res 
 */
exports.getOneServiceProvider = (req, res) => {
    ServiceProvider.findOne({ _id: req.params.serviceProviderId }).then(
        serviceProvider => {
            if (!serviceProvider){
                res.status(401).json({
                    error: new Error("service Provider not found !")
                });
            }
            res.status(200).json({
                serviceProviderId: serviceProvider._id,
                message: "service Provider found !"
            });
        }
    ).catch(
        error => {
            res.status(401).json({error});
        }
    );
};

/**
 * Get all service providers 
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} res 
 */
 exports.getAllServiceProviders = (req, res) => {
    ServiceProvider.find().then(
        servicesProviders => res.status(200).json(servicesProviders)
    ).catch(
        error => res.status(400).json({error})
    );
};