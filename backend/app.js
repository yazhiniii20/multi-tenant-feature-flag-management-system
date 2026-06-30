const express = require('express');
const cors = require('cors');
const app = express();
const organizationRoutes = require('./routes/organizationRoutes.js');

app.use(cors());
app.use(express.json());

app.use("/api/organizations",organizationRoutes);

app.get('/',(req,res)=>{
    res.send("Feature flag management app is running");
});

module.exports = app;