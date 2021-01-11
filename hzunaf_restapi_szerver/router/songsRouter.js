function songsRouter(szerver, fs) {
    const DataBaseLocation = './database/songs.json'

    function readFile(CallbackMethod, returnJson = false, DatabaseUtvonal = DataBaseLocation, kodolas = 'utf8') {
        fs.readFile(DatabaseUtvonal, kodolas, (err, data) => {
            if (err) {
                throw err;
            }
            CallbackMethod(returnJson ? JSON.parse(data) : data);
        });
    }

    function writeFile (NewData, CallbackMethod, DatabasePath = DataBaseLocation, kodolas = 'utf8') {
        fs.writeFile(DatabasePath, NewData, kodolas, (err) => {
            if (err) {
                throw err;
            }
            CallbackMethod();
        });
    }

    function json2array(json){
        let result = [];
        let keys = Object.keys(json);
        keys.forEach(function(key){
            let tmp = json[key];
            tmp.id = key;
            result.push(tmp);
        });
        return result;
    }

    //vissza adja összes zene számot a json adatbázisból
    szerver.get('/allsong', (req, res) => {
        fs.readFile(DataBaseLocation, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            console.log("get kérés érkezett /allsong")
            let raw = JSON.parse(data)
            res.send(json2array(raw));
        });
    });

    //Keresés adott id-val rendelkező zeneszámra
    szerver.put('/find/:id', (req, res) => {
        console.log("Zeneszám keresése");
        console.log(req.body);
        readFile(data => {
                const SongID = req.params["id"];
                console.log(SongID);

                if (data[SongID] === undefined) {
                    console.log("az elem nem létezik");
                    console.log(SongID);
                    res.status(400).send('SONG DOES NOT EXIST');
                }
                else {
                    res.send(data[SongID]);
                }
            },
            true);
    });

    //Új zeneszám hozzása
    szerver.post('/add', (req, res) => {
        console.log("Új zene szám hozzáadása");
        console.log(req.body);
        readFile(data => {
                const CreateNewSongID= Object.keys(data).length + 1;

                console.log("Új ID: ");
                console.log(CreateNewSongID);

                data[CreateNewSongID.toString()] = req.body;

                writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send('OK');
                });
            },
            true);
    });

    //adot zeneszám törlés id alapján
    szerver.delete('/delete/:id', (req, res) => {
        console.log("Zeneszám törlése");
        console.log(req.body);
        readFile(data => {
                const SongID = req.params["id"];
                if (data[SongID] === undefined) {
                    console.log("az elem nem létezik");
                    console.log(SongID);
                    res.status(400).send('SONG DOES NOT EXIST');
                }
                else {
                    delete data[SongID]
                    writeFile(JSON.stringify(data, null, 2), () => {
                        res.status(200).send('OK');
                    });
                }
            },
            true);
    });

    //Id alapján frissíti a zeneszámot
    szerver.put('/update/:id', (req, res) => {
        console.log("Zeneszám firsítése");
        console.log(req.body);
        readFile(data => {
                const SongID = req.params["id"];
                data[SongID] = req.body;
                writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send('OK');
                });
            },
            true);
    });

}
module.exports = songsRouter;