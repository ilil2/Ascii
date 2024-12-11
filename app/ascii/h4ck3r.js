function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function k4ck3r(app) {
    app.get('/h4ck3r' , (req, res) => {
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Cache-Control', 'no-cache');
        res.write('\x1b[2J\x1b[H');
        res.write('\x1b[32m');
        const interval = setInterval(() => {
            const rand = Math.floor(Math.random() * 10);
            if (rand == 0) {
                const ip = Math.floor(Math.random() * 256) + ':' + Math.floor(Math.random() * 256) + ':' + Math.floor(Math.random() * 256) + ':' + Math.floor(Math.random() * 256);
                res.write("connected to " + ip + "\n");
            }
            else if (rand == 1) {
                res.write("hacking the mainframe");
                for (let i = 0; i < 3; i++) {
                    res.write('.');
                    sleep(1000);
                }
                res.write('\n');
            }
            else if (rand == 2) {
                res.write("downloading the database\n");
            }
            else if (rand == 3) {
                res.write("cracking the firewall\n");
            }
            else if (rand == 4) {
                res.write("sending the virus\n");
            }
            else if (rand == 5) {
                res.write("hacking the NSA\n");
            }
            else if (rand == 6) {
                res.write("hacking the FBI\n");
            }
            else if (rand == 7) {
                res.write("hacking the CIA\n");
            }
            else if (rand == 8) {
                res.write("hacking the KGB\n");
            }
            else if (rand == 9) {
                res.write("hacking the MI6\n");
            }
        }, Math.floor(Math.random() * 1000) + 500);

        req.on('close', () => {
            clearInterval(interval); // Nettoyer quand la connexion est fermée
        });
    });
}

module.exports = k4ck3r;