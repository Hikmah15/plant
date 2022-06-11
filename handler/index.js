const getIndexHandler = async (req, res) => {
    try {
        const {name = 'Allium', keunggulan = 'cantik'} = req.query;
        console.log(`Nama tanaman itu ${name} dan keunggulan tanaman itu ${keunggulan}`);
        return res.status(200).json({
            status: 'success',
            message: `nama tanaman itu ${name} dan keunggulan tanaman itu ${keunggulan}`,
        });
    } catch (e) {
        console.log(e);
        return res.status(400).json({
            status: 'fail',
            message: e.message,
        });
    }
    return res.status(500).json({
        status: 'failed',
        message: 'internal server execption',
    });
};

module.exports = getIndexHandler;