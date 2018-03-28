const server = require('./server.js');
const port = 3333;

server.listen(port, () => {
  console.log(`Magic is happening on port ${port}`);
});
