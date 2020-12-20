const multer = require('multer');

 const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        if(!file) 
        //const isValid = MIME_TYPE_MAP[file.mimetype];
       // let error = new Error("Invalid mime type");
        // if(isValid) {
        //     error = null;
        // }
        cb(null , "./cv");
    },
    filename: (req,file,cb) => {
       const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = 'pdf';

        cb(null, name + '-'+Date.now()+'.'+ext);
    }
});

module.exports = multer({storage: storage}).single("file");