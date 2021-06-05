// route/api/profile.jsconst express = require( 'express' );
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');
const url = require('url');
const express = require('express');
const router = express.Router();

/**
* PROFILE IMAGE STORING STARTS
*/

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: 'us-east-2'
});

const s3 = new aws.S3(
    // {
    //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    //     Bucket: 'haggle-project-three',
    //     region: 'us-east-2',
    // }
);

/**
* Single Upload
*/

const profileImgUpload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'haggle-project-three',
        acl: 'public-read',
        key: function (req, file, cb) {
            cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
        }
    }),
    limits: { fileSize: 5000000 }, // In bytes: 2000000 bytes = 2 MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('profileImage');

/**
 * Check File Type
 * @param file
 * @param cb
 * @return {*}
 */

function checkFileType(file, cb) {
    console.log('checking file type');
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype); if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

/**
 * @route POST api/profile/business-img-upload
 * @desc Upload post image
 * @access public
 */

router.post('/single-upload', (req, res) => {
    console.log('Route-Single');
    profileImgUpload(req, res, (error) => {
        console.log('call being made');
        console.log('requestOkokok', req.file);
        //console.log('error', error);
        if (error) {
            console.log('errors', error);
            res.json({ error: error });
        } else {
            // If File not found
            if (req.file === undefined) {
                console.log('Error: No File Selected!');
                res.json('Error: No File Selected');
            } else {
                // If Success
                const imageName = req.file.key;
                const imageLocation = req.file.location;
                // Save the file name into database into profile model
                res.json({
                    image: imageName,
                    location: imageLocation
                });
            }
        }
    });
});
// End of single profile upload

/**
 * BUSINESS GALLERY IMAGES
 * MULTIPLE FILE UPLOADS
*/

// Multiple File Uploads ( max 4 )

const uploadsBusinessGallery = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'haggle-project-three',
        acl: 'public-read',
        key: function (req, file, cb) {
            cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
        }
    }),
    limits: { fileSize: 5000000 }, // In bytes: 2000000 bytes = 2 MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).array('galleryImage', 4);

/**
* @route POST /api/profile/business-gallery-upload
* @desc Upload business Gallery images
* @access public
*/

router.post('/multiple-file-upload', (req, res) => {
    uploadsBusinessGallery(req, res, (error) => {
        console.log('files', req.files);
        if (error) {
            console.log('errors', error);
            res.json({ error: error });
        } else {
            // If File not found
            if (req.files === undefined) {
                console.log('Error: No File Selected!');
                res.json('Error: No File Selected');
            } else {
                // If Success
                let fileArray = req.files,
                    fileLocation; const galleryImgLocationArray = [];
                for (let i = 0; i < fileArray.length; i++) {
                    fileLocation = fileArray[i].location;
                    console.log('filenm', fileLocation);
                    galleryImgLocationArray.push(fileLocation)
                }
                // Save the file name into database
                res.json({
                    filesArray: fileArray,
                    locationArray: galleryImgLocationArray
                });
            }
        }
    });
});

// We export the router so that the server.js file can pick it up

module.exports = router;