const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongose');

class MeController {
    //[Get] /Me/store/courses
    storeCourses(req, res, next) {
        let courseQuery = Course.find({});

        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            });
        }


        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/store-courses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }

    //[Get] /Me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }
}

module.exports = new MeController();