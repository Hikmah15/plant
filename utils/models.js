const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

const downloadModel = async (
    bucketName = 'plant-t-models',
    fileName = 'plant_model.h5',
    destFileName = path.join(cwd, 'plant_model.h5')) => {
    const options = {
        destination: destFileName,
    };

    // Downloads the file
    await storage.bucket(bucketName).file(fileName).download(options);

    console.log(
        `gs://${bucketName}/${fileName} downloaded to ${destFileName}.`,
    );
};

module.exports = {downloadModel};