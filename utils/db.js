import { MongoClient } from 'mongodb';

// Environment variables with default values
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_DATABASE = process.env.DB_DATABASE || 'files_manager';
const url = `mongodb://${DB_HOST}:${DB_PORT}`;

/**
 * MongoDB class perfoming operations
 */
class DBClient {
  constructor() {
    this.db = null;
    this.usrCollection = null;
    this.filessCollection = null;
    this.init();
  }

  /**
   * Initializes the MongoDB connection and sets up collections
   */
  async init() {
    try {
      const client = await MongoClient.connect(url, { useUnifiedTopology: true });
      this.db = client.db(DB_DATABASE);
      this.usrCollection = this.db.collection('users');
      this.filessCollection = this.db.collection('files');
      console.log('Connected successfully to MongoDB server');
    } catch (error) {
      console.log(`Error connecting to MongoDB: ${error.message}`);
    }
  }

  /**
   * Checks if MongoDB connection is alive
   * @return {boolean} True if alive otherwise false
   */
  isAlive() {
    return Boolean(this.db);
  }

  /**
   * Returns number of documents in the users collection
   * @return {Promise<number>} Number of documents in users collection
   */
  async nbUsers() {
    if (!this.usrCollection) return 0;
    try {
      return await this.usrCollection.countDocuments();
    } catch (error) {
      console.log(`Error counting users: ${error.message}`);
      return 0;
    }
  }

  /**
   * Returns the number of documents in the 'files' collection
   * @return {Promise<number>} Number of documents in the 'files' collection
   */
  async nbFiles() {
    if (!this.filessCollection) return 0;
    try {
      return await this.filessCollection.countDocuments();
    } catch (error) {
      console.log(`Error counting files: ${error.message}`);
      return 0;
    }
  }
}

const dbClient = new DBClient();
export default dbClient;
