
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./db/db.json");
const db = low(adapter);

const allDataDb = db.value();
const dataInDB = allDataDb.allData;
// Set some defaults
db.defaults({ allData: {} }).write();

module.exports = {
    db,
    dataInDB
}