const MainPromise = require("../middlewares/main-promise");

// Services
exports.CheckRoute = MainPromise((req, res, next) => {

    console.log(`Remote Address : ${req.socket.remoteAddress}`);
    console.log(`Local Address : ${req.socket.localAddress}`);

    return res.status(200).json({
        message: "API working fine",
        success: true,
        localAddress: req.socket.localAddress,
        remoteAddress: req.socket.remoteAddress
    });
})