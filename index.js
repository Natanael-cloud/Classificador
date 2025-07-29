// ✅ Lista com nomes de heróis mitológicos
const herois = [
  "Atena",       // Deusa da sabedoria e guerra estratégica (XP: 950)
  "Thor",        // Deus do trovão na mitologia nórdica (XP: 1500)
  "Anúbis",      // Deus egípcio dos mortos (XP: 3200)
  "Kali",        // Deusa hindu da destruição e renascimento (XP: 5400)
  "Maui",        // Herói semideus da mitologia polinésia (XP: 6800)
  "Hércules",    // Herói grego com força sobre-humana (XP: 7900)
  "Amaterasu",   // Deusa japonesa do sol (XP: 9200)
  "Quetzalcóatl" // Deus asteca do vento e sabedoria (XP: 10500)
];

// ✅ Lista com os pontos de experiência (XP) correspondentes aos heróis acima
const xps = [950, 1500, 3200, 5400, 6800, 7900, 9200, 10500];

/*
 Função para classificar o nível do herói de acordo com sua quantidade de XP
Ela recebe como parâmetro um valor de XP e retorna uma string com o nome do nível
*/
function classificarNivel(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp <= 2000) return "Bronze";
  else if (xp <= 5000) return "Prata";
  else if (xp <= 7000) return "Ouro";
  else if (xp <= 8000) return "Platina";
  else if (xp <= 9000) return "Ascendente";
  else if (xp <= 10000) return "Imortal";
  else return "Radiante";
}

//  Estrutura de repetição para percorrer todos os heróis e seus respectivos XP
for (let i = 0; i < herois.length; i++) {
  const nome = herois[i]; // Acessa o nome do herói
  const xp = xps[i];      // Acessa o XP correspondente ao herói
  const nivel = classificarNivel(xp); // Chama a função para descobrir o nível

  //  Exibe a mensagem com o nome e o nível do herói
  console.log(`O Herói de nome ${nome} está no nível de ${nivel} (XP: ${xp})`);
}
