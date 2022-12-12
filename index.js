const express = require("express")
require("./dbConnect")
const Product = require("./models/Product")
const multer = require("multer")
const path = require("path")

const app = express()

app.use(express())

app.use(express.json())

// upload a image in server... using below code and save a img file name in database.... 
app.use("/public", express.static("public"))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })


// Api for Product and images...
app.post("/product",
    upload.fields(
        [
            { name: 'img', maxCount: 1 }
        ]
    ), async (req, res) => {
        try {
            var data = new Product(req.body)
            if (req.files && req.files.img)
                data.img = req.files.img[0].originalname
            await data.save()
            res.send({ result: "Done", message: "Data Inserted Successfully" })
        } catch (error) {
            console.log(error);
            res.status(500).send({ result: "Fail", message: "Internal Server Error" })
        }
    })


const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`);
})