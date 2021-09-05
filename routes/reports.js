const reportsRoutes = (app, fs) => {
    // variables
    const dataPath = './data/reports.json';

    // helper methods
    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
    ) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
            throw err;
        }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = 'utf8'
        ) => {
            fs.writeFile(filePath, fileData, encoding, err => {
                if (err) {
                    throw err;
            }
            callback();
        });
    };
    
    
    
    // READ
    app.get('/reports', (req, res) => {
        readFile(data => {
            res.send(data)
        }, true)
    })
}
module.exports = reportsRoutes
