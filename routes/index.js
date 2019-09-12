const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//API routes
router.use("/api",apiRoutes);

//if no API routes are hit, send the React APP
router.use((req,res)=>{
    res.sendFile(path.join(_dirname,"../client/build/index.html"));
});

module.exports = router;