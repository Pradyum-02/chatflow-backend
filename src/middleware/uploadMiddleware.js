const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({

    cloudinary,

    params: async (req, file) => ({

        folder: "chatflow",

        resource_type: "auto",

        public_id: `${Date.now()}-${file.originalname}`

    })

});

const upload = multer({

    storage,

    limits: {

        fileSize: 10 * 1024 * 1024 // 10 MB

    }

});

module.exports = upload;