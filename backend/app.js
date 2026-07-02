const express = require('express');
const cors = require('cors');
const app = express();
const organizationRoutes = require('./routes/organizationRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

app.use(cors());
app.use(express.json());

app.use("/api/organizations",organizationRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);

app.get('/',(req,res)=>{
    res.send("Feature flag management app is running");
});

module.exports = app;