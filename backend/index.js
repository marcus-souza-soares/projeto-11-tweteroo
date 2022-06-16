import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

const usuarios = []

server.get("/sign-up", (req, res) => {
    res.send('oiii');
});

server.post("/sign-up", (req, res) => {
    usuarios.push(req.body);
    res.send(usuarios);
});

server.get("/tweets", (req, res) => {
    
});

server.listen(5000);
