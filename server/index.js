require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const sequelize = require('./db');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandlingMiddleware');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;



const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`server run on port ${PORT}`));
    } catch (error) {
        
    }
}

start();

