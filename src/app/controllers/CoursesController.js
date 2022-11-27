const Courses = require("../../models/Courses");

const { handleToObject } = require("../../util/mongosee");
class CoursesController {
  show(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", {
          course: handleToObject(course),
        })
      )
      .catch(next);
  }

  create(req, res, next) {
      res.render('courses/create')
  }

  store(req, res, next) {
    const formDate = req.body;
    formDate.image = `https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`
    const course = new Courses(formDate);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch(error => {})
}
}

module.exports = new CoursesController();
