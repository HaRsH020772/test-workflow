let app = require("./app");

// Configuring the server
app.listen(process.env.PORT, () => {
    console.log(`Server is up & running on port ${process.env.PORT}`);
});