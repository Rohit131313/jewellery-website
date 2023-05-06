const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const multer = require('multer');
var uploadModel1 = require("./models/uploadrings");
var uploadModel2 = require("./models/uploadnecklace");
var uploadModel3 = require("./models/uploadbracelets");
var uploadModel4 = require("./models/uploadearrings");
var uploadModel5 = require("./models/uploadmixed");
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/models"));
app.use(express.static(__dirname + "/views"));

//Storage Setting
let multer_storage_config1 = multer.diskStorage({
    destination: './public/uploadrings', //directory (folder) setting
    filename: (req, file, cb) => {
        cb(null, file.originalname) // file name setting
    }
})

let multer_storage_config2 = multer.diskStorage({
    destination: './public/uploadnecklace', //directory (folder) setting
    filename: (req, file, cb) => {
        cb(null, file.originalname) // file name setting
    }
})

let multer_storage_config3 = multer.diskStorage({
    destination: './public/uploadbracelets', //directory (folder) setting
    filename: (req, file, cb) => {
        cb(null, file.originalname) // file name setting
    }
})

let multer_storage_config4 = multer.diskStorage({
    destination: './public/uploadearrings', //directory (folder) setting
    filename: (req, file, cb) => {
        cb(null, file.originalname) // file name setting
    }
})

let multer_storage_config5 = multer.diskStorage({
    destination: './public/uploadmixed', //directory (folder) setting
    filename: (req, file, cb) => {
        cb(null, file.originalname) // file name setting
    }
})

//Upload Setting
var uploader1 = multer({
    storage: multer_storage_config1,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == 'image/jpeg' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/gif'

        ) {
            cb(null, true)
        }
        else {
            cb(null, false);
            cb(new Error('Only jpeg,  jpg , png, and gif Image allow'))
        }
    }
});

var uploader2 = multer({
    storage: multer_storage_config2,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == 'image/jpeg' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/gif'

        ) {
            cb(null, true)
        }
        else {
            cb(null, false);
            cb(new Error('Only jpeg,  jpg , png, and gif Image allow'))
        }
    }
});

var uploader3 = multer({
    storage: multer_storage_config3,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == 'image/jpeg' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/gif'

        ) {
            cb(null, true)
        }
        else {
            cb(null, false);
            cb(new Error('Only jpeg,  jpg , png, and gif Image allow'))
        }
    }
});

var uploader4 = multer({
    storage: multer_storage_config4,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == 'image/jpeg' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/gif'

        ) {
            cb(null, true)
        }
        else {
            cb(null, false);
            cb(new Error('Only jpeg,  jpg , png, and gif Image allow'))
        }
    }
});

var uploader5 = multer({
    storage: multer_storage_config5,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == 'image/jpeg' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/gif'

        ) {
            cb(null, true)
        }
        else {
            cb(null, false);
            cb(new Error('Only jpeg,  jpg , png, and gif Image allow'))
        }
    }
});

// app.post("/uploads", uploader.single("custom_files"), function (req, res, next) {
//     var imageFile = req.file.filename;

//     var imageDetails = new uploadModel({
//         imagename: imageFile
//     });
//     imageDetails.save()
//         .then((doc) => {
//             imageData.exec(function(err,data){
//                 if(err) throw err;
//                 res.render('rings', { title: 'Upload File', records:data ,success: success });
//             })

//         })
//         .catch((err) => {
//             throw err;
//         });

//     // res.send(req.file);
//     // console.log(path.join(__dirname+"/uploads/myfile"));
// })


// SINGALE IMAGE UPLODING
// app.post('/singlepost', upload.single('single_input'), (req, res)=>{
//     req.file
//     uploadModel.findOne({Picture:req.file.filename})
//     .then((a)=>{
//         if(a){
//             console.log("Your Image Dulicate, Please Try anoter Images")
//         }
//         else{
//             uploadModel.create({Picture:req.file.filename})
//                 .then((x)=>{
//                     res.redirect('/view')

//                 })
//                 .catch((y)=>{
//                     console.log(y)
//                 })
//         }
//     })


//     //res.send(req.file.filename)
// })


//mULTIPLE IMAGE UPLODING

app.post('/urings', uploader1.array('custom_files1', 8), (req, res) => {
    req.files.forEach((multiple_image1) => {

        uploadModel1.findOne({ Picture: multiple_image1.filename })
            .then((a) => {
                if (a) {
                    // Update the existing image record
                    a.Picture = multiple_image1.filename;
                    a.save()
                        .then(() => {
                            console.log("Image updated successfully");
                            res.redirect('/rings');
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    }
                // if (a) {
                //     console.log("Your Image Dulicate, Please Try anoter Images")
                // }
                else {
                    // console.log("Picture: multiple_image.filename");
                    uploadModel1.create({ Picture: multiple_image1.filename })

                        .then((x) => {
                            res.redirect('/rings')
                        })
                        .catch((y) => {
                            console.log(y)
                        })
                }
            })
            .catch((b) => {
                console.log(b)
            })




    })
})

app.get('/rings', (req, res) => {
    uploadModel1.find({})
        .then((x) => {
            res.render('rings', { x })
            console.log(x)
        })
        .catch((y) => {
            console.log(y)
        })


})

app.post('/unecklace', uploader2.array('custom_files2', 8), (req, res) => {
    req.files.forEach((multiple_image2) => {

        uploadModel2.findOne({ Picture: multiple_image2.filename })
            .then((a) => {
                if (a) {
                    console.log("Your Image Dulicate, Please Try anoter Images")
                }
                else {
                    // console.log("Picture: multiple_image.filename");
                    uploadModel2.create({ Picture: multiple_image2.filename })

                        .then((x) => {
                            res.redirect('/necklace')
                        })
                        .catch((y) => {
                            console.log(y)
                        })
                }
            })
            .catch((b) => {
                console.log(b)
            })




    })
})

app.get('/necklace', (req, res) => {
    uploadModel2.find({})
        .then((x) => {
            res.render('necklace', { x })
            console.log(x)
        })
        .catch((y) => {
            console.log(y)
        })


})

app.post('/ubracelets', uploader3.array('custom_files3', 8), (req, res) => {
    req.files.forEach((multiple_image3) => {

        uploadModel3.findOne({ Picture: multiple_image3.filename })
            .then((a) => {
                if (a) {
                    console.log("Your Image Dulicate, Please Try anoter Images")
                }
                else {
                    // console.log("Picture: multiple_image.filename");
                    uploadModel3.create({ Picture: multiple_image3.filename })

                        .then((x) => {
                            res.redirect('/bracelets')
                        })
                        .catch((y) => {
                            console.log(y)
                        })
                }
            })
            .catch((b) => {
                console.log(b)
            })




    })
})

app.get('/bracelets', (req, res) => {
    uploadModel3.find({})
        .then((x) => {
            res.render('bracelets', { x })
            console.log(x)
        })
        .catch((y) => {
            console.log(y)
        })


})

app.post('/uearrings', uploader4.array('custom_files4', 8), (req, res) => {
    req.files.forEach((multiple_image4) => {

        uploadModel4.findOne({ Picture: multiple_image4.filename })
            .then((a) => {
                if (a) {
                    console.log("Your Image Dulicate, Please Try anoter Images")
                }
                else {
                    // console.log("Picture: multiple_image.filename");
                    uploadModel4.create({ Picture: multiple_image4.filename })

                        .then((x) => {
                            res.redirect('/earrings')
                        })
                        .catch((y) => {
                            console.log(y)
                        })
                }
            })
            .catch((b) => {
                console.log(b)
            })




    })
})

app.get('/earrings', (req, res) => {
    uploadModel4.find({})
        .then((x) => {
            res.render('earrings', { x })
            console.log(x)
        })
        .catch((y) => {
            console.log(y)
        })


})

app.post('/umixed', uploader5.array('custom_files5', 8), (req, res) => {
    req.files.forEach((multiple_image5) => {

        uploadModel5.findOne({ Picture: multiple_image5.filename })
            .then((a) => {
                if (a) {
                    console.log("Your Image Dulicate, Please Try anoter Images")
                }
                else {
                    // console.log("Picture: multiple_image.filename");
                    uploadModel5.create({ Picture: multiple_image5.filename })

                        .then((x) => {
                            res.redirect('/mixed_collection')
                        })
                        .catch((y) => {
                            console.log(y)
                        })
                }
            })
            .catch((b) => {
                console.log(b)
            })




    })
})

app.get('/mixed_collection', (req, res) => {
    uploadModel5.find({})
        .then((x) => {
            res.render('mixed_collection', { x })
            console.log(x)
        })
        .catch((y) => {
            console.log(y)
        })


})

require("./db/conn");

const Users = require("./models/orders");//"insidethis" or ./start or get by console.log
const Popups = require("./models/popups");
const Customer=require("./models/contactus");

const port = process.env.PORT || 4500;

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
// console.log(path.join(__dirname,"../public"));

const views_path = path.join(__dirname, "../templates/views");
// console.log(path.join(__dirname,"../templates/views"));
app.set("views", views_path);

const partials_path = path.join(__dirname, "../templates/partials");
// console.log(path.join(__dirname,"../templates/partials"));
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.set("view engine", "hbs");

app.get("/rings", (req, res) => {
    imageData.exec(function (err, data) {
        if (err) throw err;
        res.render("rings", { records: data });
    });
});//we have to render the file not res.send() or res.sendFile() because they are hbs or ejs file

app.get("/bracelets", (req, res) => {
    res.render("bracelets");
})

app.get("/earrings", (req, res) => {
    res.render("earrings");
})

app.get("/mixed_collection", (req, res) => {
    res.render("mixed_collection");
})

app.get("/necklace", (req, res) => {
    res.render("necklace");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/about", (req, res) => {
    res.render("about");
})

// create a new user in our database(From Rest API)(CURD operation)
app.post("/index", async (req, res) => {
    try {
        const registerUsers = new Users({
            fname: req.body.fname,//req.body as we see in postman we write data in body to enter data
            cnumber: req.body.cnumber,//leftside wala name hum code mai use karenga aur right side wala is from order.js
            email: req.body.email,
            badd: req.body.badd,
            sadd: req.body.sadd,
            typej: req.body.typeje,
            metal: req.body.metal,
            size: req.body.size,
            budget: req.body.budget,
            special_requests: req.body.special_requests
        })

        const registered = await registerUsers.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post("/contact", async (req, res) => {
    try {
        const registerCustomer = new Customer({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            message: req.body.message,
        })

        const registeredCustomer = await registerCustomer.save();
        res.status(201).render("contact");
    } catch (error) {
        res.status(400).send(error);
    }
})

// app.post("/index",async (req,res)=>{
//     try{
//         const popupUsers = new Popups({
//             pemail:req.body.pemail
//         })
//         const popuped= await popupUsers.save();
//         res.status(201).render("index");
//     }catch (error){
//         res.status(400).send(error);
//     }
// })

app.get("/login", (req, res) => {
    res.render("login");
})

// login check
app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Popups.findOne({ email: email });
        if (useremail.password === password) {
            res.status(201).render("adminrings");
        }
        else {
            res.send("invalid login details");
        }
    } catch (error) {
        res.status(400).send("invalid login ")
    }
})

app.get("/index", (req, res) => {
    res.render("index");
})

app.get("/adminbracelets", (req, res) => {
    res.render("adminbracelets");
})

app.get("/adminearrings", (req, res) => {
    res.render("adminearrings");
})

app.get("/adminrings", (req, res) => {
    res.render("adminrings");
})

app.get("/adminmixed_collection", (req, res) => {
    res.render("adminmixed_collection");
})

app.get("/adminnecklace", (req, res) => {
    res.render("adminnecklace");
})

app.get("/", (req, res) => {//if  index.html file present in project 
    //then index.html will come on starting page of website otherwise 
    //excution of starting page come on this get request
    res.render("index")
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`)
});