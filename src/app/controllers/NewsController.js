class NewsController {
    index(req, res) {
        //[Get] /news
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('NEW DETAIL!!!');
    }
}

module.exports = new NewsController;