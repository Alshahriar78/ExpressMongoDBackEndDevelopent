exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Product Controllers Create information"});

};

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Product Controllers Read information"});
};

exports.delete = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Product Controllers Delete information"});
};

exports.update = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Product Controllers Update information"});
};