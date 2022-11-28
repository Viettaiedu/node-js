const { query } = require("express");
const Courses = require("../../models/Courses");

const { handleToObject } = require("../../util/mongosee");
class CoursesController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", {
          course: handleToObject(course),
        })
      )
      .catch(next);
  }
  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formDate = req.body;
    formDate.image = `https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`;
    const course = new Courses(formDate);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Courses.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: handleToObject(course),
        })
      )
      .catch(next);
  }
  // [PUT] /courses/:id
  update(req, res, next) {
    const option = {
      returnDocument: query.returnDocument='after'
    }
    Courses.findOneAndUpdate(req.params.id ,req.body, option )
    .then(() => res.redirect('/me/stored/courses'))
    .catch(next)
  }
}

module.exports = new CoursesController();
