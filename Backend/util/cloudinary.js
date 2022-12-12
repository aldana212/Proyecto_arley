const cloudinaryModule = require("cloudinary");

const cloudinary = cloudinaryModule.v2;


cloudinary.config({
    cloud_name: 'dhvwprrzn',
    api_key: '431923577279622',
    api_secret: 'YVDwoheiTnK8nS6awuIc0ZhC44U',
})

module.exports = cloudinary;