import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

const usuarios = [];
const tweets = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    }
];

server.post("/sign-up", (req, res) => {
    usuarios.push(req.body);
    res.send("OK");
});

server.get("/tweets", (req, res) => {
    tweets.length > 10 ? res.send(tweets.slice(tweets.length-10)) : res.send(tweets); 
});

server.post("/tweets", (req, res) => {
    const tweet = req.body;
    usuarios.forEach(user => {
        if(user.username === tweet.username){
            tweets.push({
                ...tweet,  avatar: user.avatar
            })
        }
    })
    res.send("OK");
});

server.listen(5000);
