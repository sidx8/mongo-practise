const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
 .then(()=> console.log('connected to MongoDB...'))
 .catch(err => console.error('could not connect to MongoDB...'));

 const courseSchema = new mongoose.Schema({
     name: String,
     author: String,
     tags: [ String ],
     date: { type: Date, default: Date.now },
     isPublished: Boolean
 });
 
 const Course = mongoose.model('Course', courseSchema);

 async function createCourse() {
 const course = new Course({
     name: 'Angular Course',
     author: 'sid',
     tags: ['Angular', 'frontend'],
     isPublished: true
 });
  const result = await course.save();
  console.log(result);
}
  
 // CONDITIONAL OPERATORS
  //eq (equal)
  //ne (not eqaul)
  //gt (greater than)
  //gte (greater than or equal to)
  //lt (less than)
  //in
  //nin (not in)

  // LOGICAL OPERATOR

async function getCourse(){
   const course = await Course
    .find({author: 'sid' , isPublished: true})
    .limit(10)
    .sort({name: 1})
    .select({name: 1, tags: 1})
    .count();
    console.log(course);
};

getCourse();

get