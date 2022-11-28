const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Courses = new Schema({
    name: {type : String, require : true},
    description: {type : String ,},
    image: {type:String},
    video: {type : String ,  require : true},
    level: {type : String },
    slug: {type:String ,slug : "name" ,unique : true},
  } , {
    timestamps : true
  });

  module.exports = mongoose.model("Courses" ,Courses);