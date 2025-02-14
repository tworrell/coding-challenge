// load up our shiny new route for  the reports
const reportsRoutes = require('./reports');

const appRouter = (app, fs) => {
    // we've added in a default route here that handles empty routes
    // at the base API url
    app.get('/', (req, res) => {
        res.send('This is the main development api-server for the reports')
    })

    reportsRoutes(app, fs)
};

module.exports = appRouter;