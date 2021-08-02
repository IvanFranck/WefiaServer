const Command = require ('../Models/command');

/**
 * Create new Command
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} rest 
 */

exports.createCommand = (req, rest) =>{

    const command = new Command({
        date: req.body.date,
        details: req.body.details,
        userId: req.params.userId,
        servcieProviderId: req.params.servcieProviderId
    });

    command.save().then(
        () => {
            rest.status(201).json({
                message: "command created sucessfully ! "
            });
        }
    ).catch(
        error => {
            rest.status(400).json({error});
        }
    );
};


/**
 * Modify a command
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} rest 
 */
exports.modifyCommand = (req, rest) => {
    const command = new Command ({
        _id: req.params.id,
        status: req.body.id,
        date: req.body.date,
        details: req.body.details,
        userId: req.body.userId,
        servcieProviderId: req.body.servcieProviderId
    });

    Command.updateOne({_id: req.params.id}, command).then(
        () => {
            rest.status(201).json({
                message: "Command modified successfully !"
            });
        }
    ).catch(
        error => {
            rest.status(400).json({error});
        }
    );
};

/**
 * get all commands
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} rest 
 */
exports.getAllCommands = (req, rest) => {
    Command.find().then(
        (commands) => {
            rest.status(200).json(commands);
        }
    ).catch(
        error => {
            rest.status(404).json({error});
        }
    );
};

/**
 * get one command
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} rest 
 */
 exports.getOneCommand = (req, rest) => {
    Command.findOne({
        _id: req.params.id
    }).then(
        (command) => {
            rest.status(200).json(command);
        }
    ).catch(
        error => {
            rest.status(404).json({error});
        }
    );
};