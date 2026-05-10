const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Đã kết nối tới MongoDB thành công!');
    } catch (error) {
        console.error('Lỗi kết nối MongoDB:', error);
        process.exit(1);
    }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1);
  }

};

module.exports = connectDB;