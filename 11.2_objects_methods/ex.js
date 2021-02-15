const school = { 
  teachers: [
  {
  id: 1,
  name: "Pinchas",
  subjects: ["chemistry", "biology", "physics"], 
  students: [],
  capacityLeft: 3,
  }, 
  {
  id: 2,
  name: "Williams",
  subjects: ["history", "ethics"], 
  students: [],
  capacityLeft: 2,
  },
],

  students: [
  {
  id: 10,
  name: "Jennifer", 
  age: 20,
  }, {
  id: 11,
  name: "Howard", 
  age: 23,
  },
  {
  id: 12,
  name: "Old-Timmy", 
  age: 86,
  }, 
  {
  name: "Houston",
  age: 21, },
  ], 
};

// console.log(school)

// 1. A method called “assignStudent” that takes two arguments, a student’s id and a subject.
// Assign all of the students to the first available teacher who teaches that subject and who is not in full capacity. 
// If all of the teachers are in full capacity log to the console “Sorry, no available teachers left”.

school.assignStudent = function (studentsId , subject) {
  let teacher = this.teachers.filter(a => a.subjects.includes(subject))
  teacher = teacher[0]

  let student = this.students.filter(a => a.id === studentsId)
  student = student[0]

  let teacherIndex = this.teachers.indexOf(teacher)
  if (this.teachers[teacherIndex].capacityLeft !== 0){
    this.teachers[teacherIndex].students.push(student)
    this.teachers[teacherIndex].capacityLeft--
  }
  else{
    console.log('Sorry, no available teachers left')  
  }

  console.log('teacher :')
  console.log(teacher.name)
  console.log('students :')
  console.log(this.teachers[teacherIndex].students)
  console.log('capacity left :')
  console.log(this.teachers[teacherIndex].capacityLeft)
};

// school.assignStudent(11 , 'history')

// 2. A method called “assignTeachersSubject” that takes two arguments, the teacher’s id, a new subject.
// Assign the new subject to that particular teacher if that subject doesn’t exist in their array of subjects

school.assignTeachersSubject = function (teacherId , newSubject) {
  let teacher = this.teachers.filter(a => a.id === teacherId)
  teacher = teacher[0]

  let teacherIndex =  this.teachers.indexOf(teacher)

  if (!this.teachers[teacherIndex].subjects.includes(newSubject)){

    this.teachers[teacherIndex].subjects.push(newSubject)
    console.log(this.teachers[teacherIndex].subjects)
  }

};

// school.assignTeachersSubject(1 , 'עברית')


// 3. Create a new method of anything you want

school.mySchool = function (studentID , free) {
  let student = this.students.filter(a => a.id === studentID)
  student = student[0]

  let studentIndex =  this.students.indexOf(student)
  this.students[studentIndex].isFree = free

  console.log('This student :')
  console.log(student)
  console.log('Is free to choose if he should go to school :')
  console.log(this.students[studentIndex].isFree)
};

// school.mySchool(11 , true)

console.log(school)