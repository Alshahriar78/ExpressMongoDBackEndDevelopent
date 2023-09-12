exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Common Controllers Create information"});

};

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Common Controllers Read information"});
};

exports.delete = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Common Controllers Delete information"});
};

exports.update = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Common Controllers Update information"});
};