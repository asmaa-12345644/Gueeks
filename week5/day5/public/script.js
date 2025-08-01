const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const _ = require('lodash');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


const emojis = [
    { emoji: '😀', name: 'Grinning Face' },
    { emoji: '🐶', name: 'Dog Face' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🐱', name: 'Cat Face' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '🏆', name: 'Trophy' },
    { emoji: '🍎', name: 'Red Apple' },
    { emoji: '⚽', name: 'Soccer Ball' },
];


let currentGame = {};
let leaderboard = [];


function getRandomOptions(correctAnswer, count = 3) {
    const allNames = emojis.map(e => e.name);
    const incorrectOptions = _.without(allNames, correctAnswer);
    const shuffled = _.shuffle(incorrectOptions).slice(0, count);
    return _.shuffle([...shuffled, correctAnswer]);
}


app.get('/api/game/start', (req, res) => {
    const randomEmoji = _.sample(emojis);
    const options = getRandomOptions(randomEmoji.name);
    
    currentGame = {
        emoji: randomEmoji.emoji,
        correctAnswer: randomEmoji.name,
        options: options,
        score: 0,
        questionStartTime: Date.now()
    };
    
    res.json({
        emoji: currentGame.emoji,
        options: currentGame.options,
        score: currentGame.score
    });
});

app.post('/api/game/guess', (req, res) => {
    const { guess } = req.body;
    const isCorrect = guess === currentGame.correctAnswer;
    const timeTaken = (Date.now() - currentGame.questionStartTime) / 1000;
    
    if (isCorrect) {
       
        const timeBonus = Math.max(0, 10 - Math.floor(timeTaken));
        currentGame.score += timeBonus;
    }
    
    res.json({
        correct: isCorrect,
        correctAnswer: currentGame.correctAnswer,
        score: currentGame.score,
        timeTaken: timeTaken.toFixed(1)
    });
});

app.post('/api/game/end', (req, res) => {
    const { playerName } = req.body;
    
    if (playerName && currentGame.score > 0) {
        leaderboard.push({
            name: playerName,
            score: currentGame.score,
            date: new Date().toISOString()
        });
        
        
        leaderboard = _.orderBy(leaderboard, ['score'], ['desc']).slice(0, 10);
    }
    
    res.json({ success: true });
});

app.get('/api/leaderboard', (req, res) => {
    res.json(leaderboard);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});