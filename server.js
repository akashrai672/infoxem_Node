const express = require("express");
const router = require('./Routes/api');
require('./core/db');
const app = express();
const port=3000;
app.use(express.json());
app.use('/api',router)
app.listen(port,()=>{
    console.log(`serer Listening on port no ${port} `);
});