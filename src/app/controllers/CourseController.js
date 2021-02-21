const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongose')

class SiteController {
    //[GET] /show
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    //[GET] /create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /store
    store(req, res, next) {
        // res.json(req.body);

        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });

    }

    //[GET] /edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next);
    }

    //[PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/store/courses'))
            .catch(next)
    }
}

module.exports = new SiteController();