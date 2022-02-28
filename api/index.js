const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const port = process.env.PORT || 5000;
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const fileRoutes = require('./routes/file-upload-routes');

// middleware
dotenv.config();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    const whitelist = process.env.WHITELIST?.split(' ');
    const origin = (req.headers.origin ? req.headers.origin : req.referer);
    //console.log(`whitelist: ${whitelist}`);
    //console.log(`origin: ${origin}`);	
    if (whitelist.includes(origin)) {
		//console.log('Setting Access-Control-Allow-Origin header');
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});
app.use(morgan("common"));
app.use('/images', express.static(path.join(__dirname, 'images')));
require('./database')();

// set up routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use('/api/files', fileRoutes.routes);

app.listen(port, () => {
    console.log(`Server is listening on PORT: ${port}`)
})