const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
   if (req.url === "/home") {
      res.write('index.html');
      res.end();
   } 
    if (req.url === "/about") {
      res.write("This is about page.");
      res.end();
   } else {
      res.write("Not Found!");
      res.end();
   }
});
server.listen(PORT);
console.log(`Server is running on PORT: ${PORT}`);