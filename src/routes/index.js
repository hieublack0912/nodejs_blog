const newsRouter = require('./news');
const meRouter = require('./me');
const courseController = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', courseController);
    app.use('/', siteRouter);
}

module.exports = route;