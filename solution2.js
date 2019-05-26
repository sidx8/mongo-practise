const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('connected to mongodb....'))
    .catch(err => console.error('could not connect to mongodb...'));

const courseSchema = new mongoose.Schema({
     name: String,
     author: String,
     tags: [ String ],
     date: {type: Date},
     price: Number,
     isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses()
{
    return await Course
       .find({isPublished: true})
       .or([ {tags: 'frontend' }, {tags: 'backend' } ])
       .sort('-price')
       .select('name author price')
}

async function displaycourses(){
    const courses = await getCourses();
    console.log(courses);
}

displaycourses();