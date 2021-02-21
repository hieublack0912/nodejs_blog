const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongose');

class MeController {
    //[Get] /Me/store/courses
    storeCourses(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('me/store-courses', {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }
}

module.exports = new MeController();