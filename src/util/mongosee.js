
module.exports = {
    handleMongoseeToObject: function(mongosee) {
            return mongosee.map(course => course.toObject());
    }
}