const express = require('express');
const app = express();


require('dotenv').config();
app.use(express.json());

const validateTweetLength = (req, res, next) => {
    const tweet = req.body.tweet;
    if (tweet.length <= 100) {
        next();
    }
    else {
        res.status(400).json({error: "TWEEEET too logn"})
    }
}

const tweets = [
    {
        tweet: "Hello World!",
        user: "Sahil",
        id: 1,
    },
    {
        id: 2,
        user: "Sid",
        tweet: "BUILD D WALL",
    }
]


app.get('/', (req, res) => {
  res.send('Hello World! YAAAAAAY!N');
});

app.get('/api/tweets', (req, res) => {
    res.send(tweets);
})

app.get('/api/tweets/:user', (req, res) => {
    var target = tweets.find(t => t.user === req.params.user);
    if (!target) {
        res.status(404).send('Tweeeeeet not found')
    }
    res.send(target)
})

app.post('/api/tweets', validateTweetLength, (req, res) => {
    var tweet = {
        id: tweets.length + 1,
        user: req.body.user,
        tweet: req.body.tweet
    }
    tweets.push(tweet)
    res.send(tweet)
})

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Listening on port ${port}!`));
