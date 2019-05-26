const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/mongo-exercises')
  .then(() => console.log('connected to mongoDB'))
  .catch(err => console.error('could not connect to mongoDB....'));

 const courseSchema = new mongoose.Schema({
     name: String,
     author: String,
     tags: [ String ],
     date: {type: Date},
     isPublished: Boolean,
     price: Number
 });

 const Course = mongoose.model('Course', courseSchema);
 
 async function getCourse()
  {
    return await Course
   .find({isPublished: true, tags: 'backend'})
   .sort({name: 1})
   .select({name: 1,author: 1})
 
  }
async function displaycourses()
{
  const courses = await getCourse();
  console.log(courses);
}

displaycourses();