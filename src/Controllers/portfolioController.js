exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Portfolio Controllers Create information"});

};

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Portfolio Controllers Read information"});
};

exports.delete = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Portfolio Controllers Delete information"});
};

exports.update = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Portfolio Controllers Update information"});
};