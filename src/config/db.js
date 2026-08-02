
const mongoose = require("mongoose");
console.log("MONGO_URI exists:", !!process.env.MONGO_URI);
console.log("JWT exists:", !!process.env.JWT_SECRET);

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("✅ MongoDB Connected");

    } catch (error) {

        console.error("❌ Database Connection Failed");
        console.error(error.message);

        process.exit(1);

    }
};

module.exports = connectDB;