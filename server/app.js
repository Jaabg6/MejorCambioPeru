const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  allowEIO3: true, // false by default
});
// buscarPrecios is a private function, if you want to use it, you need create that function in ./cheerio.js
// I dont share this because if you are watching this code, you know that im frontend developer, so the server is not important here
const { buscarPrecios } = require("./cheerio.js");
    
async function startScraping() {
  const data = await buscarPrecios(); // return some like [casasDeCambio, grupoSunat, bancosTradicionales]
  io.emit("server:sendData", data);
}


// function sendData(Alldata){
//   io.emit("server:sendData", Alldata)
// }

io.on("connection", (socket) => {
  console.log("conectado en backend");

  startScraping();

  io.emit("server:event-frontend");
});

module.exports = {
  app,
  server
}
