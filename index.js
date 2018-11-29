require('dotenv').config();
const axios = require('axios');

const SLACK_URL = "https://hooks.slack.com/services/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"; //process.env.SLACK_URL;

let arrayDrink = [
    'Beba água agora!',
    'Hora de beber água!',
    'Tô te lembrando pra bebê mais água!',
    'Hora da áaaaaaaguaaaaaaaa!',
    'Bebi ai man!',
    ':sweat_drops: :sweat_drops: :sweat_drops: :sweat_drops:',
    'Mete água no estomago ai! :goiano:',
    '65% do corpo humano é agua. Entao bebe ai pra chegar a 65,1%'
]

let randomDrink = arrayDrink[Math.floor(Math.random() * arrayDrink.length)];

axios.post(SLACK_URL, {
    text: "<!here> " + randomDrink
});