/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const tf = require('@tensorflow/tfjs-node');
const path = require('path');
const {getImage} = require('../utils/loadImage');
const {downloadModel} = require('../utils/Models');
const tomato = require('../datahandler/daisy');
let modelfile = null;

const labels = [
    'Memiliki kelopak berbentuk melingkar dan bersusun.',
    'Ukuran mahkota bunga berbeda-beda',
    'Memiliki beragam warna, sepert putih, merah, dan ungu hingga kebiruan.',
    'Adanya warna kuning di bagian tengah kelopaknya.',
    'Tumbuhan ini memiliki tinggi mulai dari 30 hingga 70 cm.'
];

const getdaisyHandler = (req, res) => {
    try {
        return res.status(200).json({
            status: 'success',
            data: {
                tomato,
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

const predictdaisyHandler = (req, res) => {
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
const deletedaisyHandler = (req, res) => {
    try {
        if (tomato.length < 1) throw Error('tomato entry already cleared');
        tomato.splice(0, corn.length);
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

const argMax = (array) => {
    return [].reduce.call(array, (m, c, i, arr) => c > arr[m] ? i : m, 0);
};

module.exports = {getdaisyHandler, predictdaisyHandler, deletedaisyHandler};
