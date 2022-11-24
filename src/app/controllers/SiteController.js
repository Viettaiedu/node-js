const mongoose = require('mongoose');
const Courses = require('../../models/Courses');
const {handleMongoseeToObject} = require('../../util/mongosee')
class SiteController {
    home(req,res,next) {
          Courses.find({})
            .then(courses => res.render("home" , {
                courses : handleMongoseeToObject(courses)
            }))
            .catch(next);
        // res.send("đsa");
    }
    search(req,res) {
        res.render("Search");
    }
}

module.exports = new SiteController;