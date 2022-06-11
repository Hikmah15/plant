/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const tf = require('@tensorflow/tfjs-node');
const path = require('path');
const {getImage} = require('../utils/loadImage');
const {downloadModel} = require('../utils/Models');
const potato = require('../datahandler/allium');
let modelfile = null;

const labels = [
    'Memiliki bunga dan buah dengan biji',
    'Akar berupa umbi',
    'Tinggi bisa mencapai 1,5 meter',
    'Berbentuk seperti bola lampu dengan berukuran besar',
    'Mengenai daun, mereka sangat berdaging, lebar, panjang dan setengah tegak'
];

const argMax = (array) => {
    return [].reduce.call(array, (m, c, i, arr) => c > arr[m] ? i : m, 0);
};

const getAlliumHandler = (req, res) => {
    try {
        return res.status(200).json({
            status: 'success',
            data: {
                potato,
            },
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

const predictAlliumHandler = (req, res) => {
    try {
        return res.status(200).json({
            status: 'success',
            model: 'model',
            disease: 'disease',
            prediction: 'prediction',
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

const deleteAlliumHandler = (req, res) => {
    try {
        if (potato.length < 1) throw Error('potato entry already cleared');
        potato.splice(0, corn.length);
        return res.status(200).json({
            status: 'success',
            message: 'all data cleared',
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

module.exports = {getAlliumHandler, predictAlliumHandler, deleteAlliumHandler};
