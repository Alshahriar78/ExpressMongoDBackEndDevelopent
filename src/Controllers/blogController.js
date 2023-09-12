exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Blog Controllers Create information"});

};

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Blog Controllers Read information"});
};

exports.delete = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Blog Controllers Delete information"});
};

exports.update = async (req, res) => {
    res.status(200).json({status:"success", data: "Can Blog Controllers Update information"});
};