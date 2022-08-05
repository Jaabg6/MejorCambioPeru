const { dataInDB , db } = require("./db.js");

const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  allowEIO3: true, // false by default
});

// console.log(dataInDB);
// buscarPrecios is a private function, if you want to use it, you need create that function in ./cheerio.js
// I dont share this because if you are watching this code, you know that im frontend developer, so the server is not important here
const { buscarPrecios } = require("./cheerio.js");
    
async function startScraping() {

  io.emit("server:sendData", dataInDB); // send data from db to client, this make the client to render the data faster
  
  const data = await buscarPrecios(); // return some like [casasDeCambio, grupoSunat, bancosTradicionales, dateTime]

  db.get("allData").assign(data).write(); //save data to db

}

io.on("connection", (socket) => {


  startScraping();

  io.emit("server:event-frontend");
});

module.exports = {
  app,
  server
}
