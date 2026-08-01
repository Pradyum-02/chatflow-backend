const logger = (message) => {

    console.log(
        `[${new Date().toLocaleString()}] ${message}`
    );

};

module.exports = logger;