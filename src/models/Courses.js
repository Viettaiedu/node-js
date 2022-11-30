const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Courses = new Schema({
  name: {type : String, require : true},
  description: {type : String ,},
  image: {type:String},
  video: {type : String ,  require : true},
  level: {type : String },
  deletedAt:{type : Date,default:null},
  slug: {type:String ,slug : "name" ,unique : true},
} , {
  timestamps : true
});
Courses.plugin(mongooseDelete , { deletedAt:true, overrideMethods: true } )

  module.exports = mongoose.model("Courses" ,Courses);