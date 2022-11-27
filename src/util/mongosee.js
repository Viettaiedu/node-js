
module.exports = {
    handleMongoseeToObject: function(mongosee) {
            return mongosee.map(course => course.toObject());
    },
    handleToObject: function (mongosee) {
        return mongosee ? mongosee.toObject() : mongosee
    }
}