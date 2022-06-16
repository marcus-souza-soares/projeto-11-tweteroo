import express from 'express';

const server = express();

server.get("/sign-up", (req, res) => {
    res.send('oiii');
})
server.listen(5000);

