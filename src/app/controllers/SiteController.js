class SiteController {
    index(req, res) {
        //[Get] /home
        res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;