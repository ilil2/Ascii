function help(app) {
    app.get('/help', (req, res) => {
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Cache-Control', 'no-cache');
        
        res.write("You can try : \n");
        res.write("  - /h4ck3r : to simulate a h4ck3r\n");
        res.write("  - /epiquote : to get a random epiquote\n");
        res.write("  - /clock : to display a clock\n");
        res.write("  - /epita : to display the epita logo\n");
        res.end();
    });
}

module.exports = help;