require('dotenv').config();
const axios = require('axios');

const SLACK_URL = process.env.SLACK_URL;

const arrayDrink = [
    'Beba água agora!',
    'Hora de beber água!',
    'hora de hidratar-se!',
    'Tô te lembrando pra bebê mais água!',
    'Hora da áaaaaaaguaaaaaaaa!',
    'Bebi ai man!',
    ':sweat_drops: :sweat_drops: :sweat_drops: :sweat_drops:',
    'Mete água no estomago ai! :goiano:',
    '65% do corpo humano é agua. Entao bebe ai pra chegar a 65,1%',
    'Bebe, bebe, bebe, mas bebe com vontade',
    'Tem gente que é ruim até pra beber água',
    'Do portugûes: Água, do inglês: water, do espahol: agua, do italiano: acqua, do russo: вода',
    'Tô até vendo você só ler e ignorar',
    'Uma pessoa normal tem que dormir 8 horas por dia, beber 3 litros de água e ter uma vida sexual ativa. Eu bebo água!',
    'Até no fundo do poço poda ter sombra e água fresca',
    'Hoje vou beber tanta água, que vou acabar mergulhando nos meus próprios pensamentos',
    'Quem nunca bebeu água na xícara porque estava com preguiça de lavar a louça?',
    'Só não chuto o balde, porque pode haver água dentro',
    'Quando alguns pingos de água caírem na brisa do teu rosto, tocar os teus lábios e cair não chão. Deixe tudo como está e corre que é chuva',
    'Quando preciso de você, você foge igual água. sai vazado',
    'Beber água é tão delicioso que dá água na boca',
    'Você não é óleo, pra não juntar-se com a água',
    'Melhor cantada: Garota, se beleza fosse água, você seria um oceano',
    'Bebendo água? Não, não, estou cheirando o copo!',
    'Se colocar água no gelo, o gelo fica aguado ou a água fica gelada?',
    'O carro movido a hidrogênio vai ser um grande divisor de águas',
    'Sortudo é o copo, que beija na minha boca todo dia quando vou beber água',
    'Um homem pergunta ao outro: Você toma água? Não, não, eu injeto direto na veia',
    'O vinho mais caro não serve pra nada quando a sede é de água',
    'As moléculas de água quando congelam viram duréculas?',
    'Uma dica para você que ta na seca: bebe água',
    'Se existisse um país chamado água, só teria três estados',
    'Se corpo é 70% água, então eu não estou gordo, estou inundado',
    'Tá ignorando porque? bebe aí',
    'Bebe até ficar encharcado',
    'Hidrate-se!',
    'Sou um lembrete chato, mas ajudo você melhorar a sua saúde',
    'Hora de beber água molhada :)',
    'Drink water now',
    'Quanto menos água você bebe mais gafes comete',
    'Pocotó pocotó pocotó pocotó, minha aguinha pocotó',
    'Vou mandando um beijinho, pra filhinha e pra vovó, só não posso esquecer, da minha aguinha pocotó, pocotó pocotó pocotó pocotó, minha aguinha pocotó',
    'O jumento e o cavalinho, eles nunca andam só, quando sai pra passear, leva uma aguinha pocotó',
    'Bilu bilu bilu, bilu tetéia, água é mió do que geléia',
    'Vamos brincar de burro bebe água?',
    'No alto daquele cume, plantei uma roseira, só pra ver você, beber água da torneira. Achou que ía ser outra coisa né?',
    'Era uma casa muito engraçada, não tinha teto, não tinha água',
    'Se fosse pinga você bebia né?',
    'Se fosse cerveja você bebia né?',
    'Se fosse whisky você bebia né?',
    'Se fosse vinho você bebia né?',
    'Se fosse caipirinha você bebia né?',
    'Cuba livre você toma né? Água que é bom neca',
    'Se fosse uma 51 você bebia né?',
    'Bebida alcólica você toma, água que é bom você não quer',
    'Se fosse batida você tomava, água que é bom você não toma',
    'Se fosse champanhe você mandava pra dentro né? pilantra',
    'Água é melhor que conhaque, Y/N?',
    'Pensa que é vodka e manda pra dentro',
    'Pensa que é licor e manda pra dentro',
    'Água, aguinha, aguão, bebo puro e até com limão',
    'Esquece o black label, água é mió',
    'Água é melhor que RedLabel?',
    'Se fosse smirnoff você bebia né? seu pinguço',
    'Bebe água agora e bacardi mais tarde',
    'Pensa que é Jack Daniels e bebe com a mesma vontade',
    'Se fosse martini você bebia né? Deus tá vendo rapaz',
    'Se fosse um Ballantines você bebia né? tem vergonha não? mete água no estômago aí sô',
    'Se fosse José Cuervo você bebia né? Água que é bom você não quer',
    'Se fosse tequila você bebia né? Humpf, Acha que eu não sei',
    'Ler e não beber não adianta',
    'Se eu fosse um peixinho e soubesse nadar, beberia toda água lá do fundo do mar',
    'Se eu fosse um peixinho e soubesse nadar, eu ía beber água para me hidratar',
    'Se eu fosse um peixinho e soubesse nadar, bebia muita água até eu desmaiar',
    'Se eu fosse um peixinho e soubesse nadar, aah porta me lá',
    'Bebeu água?, não! Tá com sede?, tô! Olha, olha, olha, olha a água mineral, água mineral, água mineral',
    'Águas que movem moinhos, são as mesmas águas que encharcam o chão',
    'Terra! Planeta Água',
    'Água que nasce na fonte serena do mundo, e que abre um profundo grotão',
    'Água é uma gota de chuva, é uma gota de nuvem, é uma gota de água pra viver',
    'De gotinha em gotinha, brilha no orvalho da manhã, de gotinha em gotinha, limpa o oceano de amanhã',
    'Chove chuva, chove sem parar...',
    'São as águas de março fechando o verão, é a promessa de vida no teu coração',
    'Vocẽ sabia que beber água de forma regular previne problemas de saúde e até fica mais bonito?',
    'A quantidade de água que consumimos tem um papel fundamental desde o controle da temperatura até o bom funcionamento do sistema circulatório',
    'A água tem um papel regulador de muitas funções de nosso organismo',
    'Deixe uma garrafinha de água sempre por perto',
    'A água sem nenhum aditivo pode ter um papel importante para regular a pressão sanguínea',
    'Você sabia que as cãibras aparecem quando há um desequilíbrio hidroelétrico em nossos músculos?',
    'Beber água regularmente ajuda manter o equilíbrio hidroelétrico e o bom funcionamento das células musculares',
    'Beber água protege o coração',
    'Seu intestino não está funcionando muito bem? Uma boa dica é comer mais fibras e ingerir mais água também',
    'Beber muita água é a principal maneira de se proteger da formação de um cálculo no rim',
    'A ingestão continua de água faz com que nossos rins trabalhem constantemente devido ao maior volume de sangue. E isso acontece sem sobrecarregar os rins, mantendo sua função de "limpar" o sangue eficiente',
    'A água é fundamental para que ocorra um bom transporte de nutrientes em nosso organismo',
    'Manter o organismo hidratado é essencial para que os olhos fiquem protegidos de lesões. Os olhos são órgãos muitos sensíveis a desidratação',
    'Manter o organismo com níveis de água elevados, protege os olhos de ressecamento que podem levar a problemas oculares como inflamações e infecções',
    'As vitaminas C e do complexo B são hidrossolúveis, ou seja, só são absorvidas pelo organismo com a presença de água',
    'A falta de ingestão de água deixa a pele flácida e sem viço',
    'Beber água favorece a excreção de toxinas, substâncias que prejudicam a pele',
    'O consumo de água é vital para o bom funcionamento do organismo',
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
    '> O coração ingrato assemelha-se ao deserto que sorve com avidez a água do céu e não produz coisa alguma.',
    '> O amor é um mergulho nas profundas águas da paixão',
    '> Pra que se deve ferver a água antes de bebê-la? Porque não dá pra ferver depois de beber!  Chiquinha - Chaves'
]

const randomDrink = arrayDrink[Math.floor(Math.random() * arrayDrink.length)];

axios.post(SLACK_URL, {
    text: `<!here>\n${randomDrink}`
});