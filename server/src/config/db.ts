import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    // Use environment variable MONGODB_URI if present, otherwise fallback to a connection string.
    const uri = process.env.MONGODB_URI || 'mongodb+srv://ashrafdalal123_db_user:CGgIsAIefQCxp90S@cluster0.1fdnwwe.mongodb.net/?appName=Cluster0';
    await mongoose.connect(uri);

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ Database Connection Failed:", error);
    process.exit(1);
  }
};

export default connectDB;