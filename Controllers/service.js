const Service = require("../Models/service");


exports.createService = (req, res) => {
    const service = new Service({
        wording: req.body.wording
    });

    service.save().then(
        () => {
            res.status(201).json({
                message: "service created successfully !"
            });
        }
    ).catch(
        error => res.status(400).json({error})
    );
};


exports.getAllServices = (req, res) => {
    Service.find().then(
        services => res.status(200).json(services)
    ).catch(
        error => res.status(404).json({error})
    )
};


exports.getOneService = (req, res) => {
    Service.findOne({_id: req.params.serviceId}).then(
        service => res.status(200).json(service)
    ).catch(
        error => res.status(404).json({error})
    );
};


exports.modifyService = (req, res) => {
    const service = new Service({
        _id: req.params.serviceId,
        wording: req.body.wording
    });

    Service.updateOne({ _id: req.params.serviceId }, service).then(
        () => res.status(201).json({message: "service modified successfully !"})
    ).catch(
        error => res.status(400).json({error})
    );
}