const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.get('/test', (req, res) => {
    res.json({
        msg: 'Users routes works'
    });
});

//API routes
router.use("/api",apiRoutes);


module.exports = router;