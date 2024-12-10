function epiquote(app, axios, cheerio, he) {
    app.get('/epiquote' , async (req, res) => {
        res.setHeader('Content-Type', 'text/plain'); // Réponse en texte brut
        res.setHeader('Cache-Control', 'no-cache'); // Désactiver la mise en cache

        const { data } = await axios.get("https://epiquote.fr/random"); // Récupère le HTML de la page
        const $ = cheerio.load(data);

        let blockquoteText = $('blockquote').first().find('p').eq(1).html();
        let people = $('blockquote').first().find('p').first().text().trim();
        if (blockquoteText) {
            blockquoteText = blockquoteText.replace(/<br\s*\/?>/g, '\n').trim(); // Remplace <br> par \n
            blockquoteText = he.decode(blockquoteText); // Décodage des caractères HTML
        }
        res.write('----------------------------------------\n' + blockquoteText + '\n\n\t    ' + people + '\n----------------------------------------\n');
        res.end();
    });
}

module.exports = epiquote;