require('dotenv').config();
const axios = require('axios');

const SLACK_URL = process.env.SLACK_URL;

axios.post(SLACK_URL, {
    text: "<!here> Beba água agora!"
});
