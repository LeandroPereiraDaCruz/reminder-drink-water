require('dotenv').config();
const axios = require('axios');

const SLACK_URL = process.env.SLACK_URL;

let arrayDrink = [
    'Beba água agora!',
    'Hora de beber água!',
    'Tô te lembrando pra bebê mais água!',
    'Hora da áaaaaaaguaaaaaaaa!',
    'Bebi ai man!',
    ':sweat_drops: :sweat_drops: :sweat_drops: :sweat_drops:',
    'Mete água no estomago ai! :goiano:',
    '65% do corpo humano é agua. Entao bebe ai pra chegar a 65,1%',
    '> Jamais se desespere em meio as sombrias aflições de sua vida, pois das nuvens mais negras cai água límpida e fecunda.',
    '> Por vezes sentimos que aquilo que fazemos não é senão uma gota de água no mar. Mas o mar seria menor se lhe faltasse uma gota.',
    '> Só percebemos o valor da água depois que a fonte seca.',
    '> Dinheiro é como água do mar: quanto mais você toma, maior é sua sede. O mesmo se aplica à fama.',
    '> As falhas dos homens eternizam-se no bronze. As suas virtudes escrevemos na água.',
    '> Toma conselhos com o vinho, mas toma decisões com a água.',
    '> A riqueza influencia-nos como a água do mar. Quanto mais bebemos, mais sede temos.',
    '> Quem nunca altera a sua opinião é como a água parada e começa a criar répteis no espírito.',
    '> O homem que só bebe água tem algum segredo que pretende ocultar dos seus semelhantes.',
    '> É mais fácil separar a água do vinho que a hipocrisia da verdade no julgamento das ações humanas.',
    '> Do mesmo modo que o metal enferruja com a ociosidade e a água parada perde sua pureza, assim a inércia esgota a energia da mente.',
    '> Quem quer matar a sede não procura entender a fórmula da água.',
    '> Não pense que não há crocodilos só porque a água está calma.',
    '> Não jogue fora o balde velho até que você saiba se o novo segura água.',
    '> Uma paixão tão completamente centrada em si recusa o resto do mundo tal como a água límpida e calma filtra todas as matérias estranhas.',
    '> Eu componho de acordo com as circunstâncias em que estou envolvido, seja de ácido ou na água.',
    '> A água turva não mostra os peixes ou conchas em baixo; o mesmo faz a mente nublada.',
    '> O coração ingrato assemelha-se ao deserto que sorve com avidez a água do céu e não produz coisa alguma.'
]

let randomDrink = arrayDrink[Math.floor(Math.random() * arrayDrink.length)];

axios.post(SLACK_URL, {
    text: "<!here> " + randomDrink
});