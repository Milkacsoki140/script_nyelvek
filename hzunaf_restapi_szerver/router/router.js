const songsRouter = require('./songsRouter');

const Router = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    songsRouter(app, fs);

};

module.exports = Router;