const Courses = require('../../models/Courses');
const { handleMongoseeToObject } = require("../../util/mongosee");

class MeController {
    storedCourses(req,res,next) {
        Courses.find({})
            .then(courses => res.render('me/stored-courses', {
                courses : handleMongoseeToObject(courses)
            }))
            .catch(next);
    }

    trashCourses(req,res,next) {
        Courses.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses : handleMongoseeToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController();