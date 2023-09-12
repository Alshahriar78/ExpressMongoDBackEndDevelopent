exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Message Controllers Create information"});

};

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Message Controllers Read information"});
};

exports.delete = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Message Controllers Delete information"});
};

exports.update = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Message Controllers Update information"});
};