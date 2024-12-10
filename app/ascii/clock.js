const asciiDigits = {
    '0': ["_____",
          "|   |",
          "|   |",
          "|   |",
          "|___|"],
    '1': ["    ",
          "   |",
          "   |",
          "   |",
          "   |"],
    '2': ["_____",
          "    |",
          "____|",
          "|    ",
          "|____"],
    '3': ["_____",
          "    |",
          "____|",
          "    |",
          "_____"],
    '4': ["     ",
          "|   |",
          "|___|",
          "    |",
          "    |"],
    '5': ["_____",
          "|    ",
          "|____",
          "    |",
          "____|"],
    '6': ["_____",
          "|    ",
          "|____",
          "|   |",
          "|___|"],
    '7': ["_____",
          "    |",
          "    |",
          "    |",
          "    |"],
    '8': ["_____",
          "|   |",
          "|___|",
          "|   |",
          "|___|"],
    '9': ["_____",
          "|   |",
          "|___|",
          "    |",
          "    |"],
    ':': [" ",
          "o",
          " ",
          "o",
          " "]
    };

// Endpoint pour "/clock"
function clock(app) {
    app.get('/clock', (req, res) => {
        res.setHeader('Content-Type', 'text/plain'); // Réponse en texte brut
        res.setHeader('Cache-Control', 'no-cache'); // Désactiver la mise en cache

        const interval = setInterval(() => {
            res.write('\x1b[2J\x1b[H');
            const now = new Date();
            const time = now.toTimeString().split(' ')[0]; // Format HH:MM:SS
            const ascii = ["", "", "", "", ""];
            for (let i = 0; i < time.length; i++) {
                const digit = asciiDigits[time[i]];
                for (let j = 0; j < 5; j++) {
                    ascii[j] += digit[j] + "  ";
                }
            }
            res.write(`${ascii.join('\n')}\n`);
        }, 1000); // Envoyer l'heure toutes les secondes

        req.on('close', () => {
            clearInterval(interval); // Nettoyer quand la connexion est fermée
        });
    });
}

module.exports = clock;