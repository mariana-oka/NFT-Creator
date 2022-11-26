require("dotenv").config();
const { MongoClient } = require("mongodb");

const { 
  DATABASE_NAME,
  MONGO_URI, 
} = process.env;

class DatabaseConnection {
  constructor () {
    this.db = null;
    this.collections = {
      nfts: null,
      users: null,
    }
  }

  async connect() {
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    await client.connect();
  
    const db = client.db(DATABASE_NAME);
    this.db = db;
    
    this.nfts = db.collection("nfts");
    this.users = db.collection("users");
    
    console.log("Database client initialized");
  }
}

const db = new DatabaseConnection();

(async () => {
  await db.connect();
})();

module.exports = db;