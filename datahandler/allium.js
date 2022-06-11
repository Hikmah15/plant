const path = require('path');
const {readFileUtil, writeFileUtil} = require('../utils/datawrite');
const cornfile = path.join(__dirname, '..', 'database', 'alliumdata.json');

const readFile = () => {
    try {
        const parsedjson = readFileUtil(alliumfile);
        return parsedjson;
    } catch (err) {
        console.log(err);
        return;
    }
};

const writeFile = (arr) => {
    try {
        writeFileUtil(arr, alliumfile);
        return;
    } catch (err) {
        console.log(err);
        return;
    }
};

module.exports = {writeFile, readFile};
