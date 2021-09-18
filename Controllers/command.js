const Command = require ('../Models/command');

/**
 * Create new Command
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} res 
 */

exports.createCommand = (req, res) =>{

    const command = new Command({
        date: req.body.date,
        details: req.body.details,
        userId: req.body.userId,
        servcieProviderId: req.body.servcieProviderId
    });

    command.save().then(
        () => {
            res.status(201).json({
                message: "command created sucessfully ! "
            });
        }
    ).catch(
        error => {
            res.status(400).json({error});
        }
    );
};


/**
 * Modify a command
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} res 
 */
exports.modifyCommand = (req, res) => {
    const command = new Command ({
        _id: req.params.id,
        status: req.body.id,
        date: req.body.date,
        details: req.body.details,
        userId: req.body.userId,
        servcieProviderId: req.body.servcieProviderId
    });

    Command.updateOne({_id: req.params.commandId}, command).then(
        () => {
            res.status(201).json({
                message: "Command modified successfully !"
            });
        }
    ).catch(
        error => {
            res.status(400).json({error});
        }
    );
};

/**
 * get all commands
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} res 
 */
exports.getAllCommands = (req, res) => {
    Command.find().then(
        (commands) => {
            res.status(200).json(commands);
        }
    ).catch(
        error => {
            res.status(404).json({error});
        }
    );
};

/**
 * get one command
 * @param {HTTPRequest} req 
 * @param {HTTPResponse} res 
 */
 exports.getOneCommand = (req, res) => {
    Command.findOne({
        _id: req.params.id
    }).then(
        (command) => {
            res.status(200).json(command);
        }
    ).catch(
        error => {
            res.status(404).json({error});
        }
    );
};