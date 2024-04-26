// GPACalculator.js 

import React, { useState } from 'react'; 
import './GPACalculator.css'; 
import CourseForm from './CourseForm'; 
import CourseList from './CourseList'; 
<<<<<<< HEAD
import  Header  from './header';
=======
import Header from './header'

>>>>>>> ebb866d (commit)
const gradePoints = { 
	'A+': 4.0, 
	'A': 4.0, 
	'A-': 3.7, 
	'B+': 3.3, 
	'B': 3.0, 
	'B-': 2.7, 
	'C+': 2.3, 
	'C': 2.0, 
	'C-': 1.7, 
	'D+': 1.3, 
	'D': 1.0, 
	'D-': 0.7 
}; 

const GPACalculator = () => { 
const [courses, setCourses] = useState([]); 

const handleAddCourse = (newCourse) => { 
	setCourses([...courses, newCourse]); 
}; 

const handleDeleteCourse = (index) => { 
	const updatedCourses = courses.filter((course, i) => i !== index); 
	setCourses(updatedCourses); 
}; 

const calculateGPA = () => { 
	let totalGradePoints = 0; 
	let totalCreditHours = 0; 
	
	console.log(courses)
	courses.forEach((course) => { 
		console.log(course.grade)
		console.log(course.creditHours)
<<<<<<< HEAD
	totalGradePoints = totalGradePoints + course.creditHours; 
	//totalCreditHours += course.creditHours; 
	}); 
	console.log(totalCreditHours)
	return totalCreditHours; 
=======
	totalGradePoints = totalGradePoints + Number(course.creditHours); 
	//totalCreditHours += course.creditHours; 

	}); 
	console.log(totalGradePoints)
	return totalGradePoints; 
>>>>>>> ebb866d (commit)
}; 

return ( 
	<>
	<Header/>
	<div className='container'> 
<<<<<<< HEAD
	<h1>GPA Calculator</h1> 
	<div className="section"> 
		<CourseForm onAddCourse={handleAddCourse} /> 
		<CourseList courses={courses} onDeleteCourse={handleDeleteCourse} calculateGPA={calculateGPA} /> 
=======
	<h1>Total Score</h1> 
	<div className="section"> 
		<CourseForm onAddCourse={handleAddCourse} /> 
		<CourseList courses={courses} onDeleteCourse={handleDeleteCourse} calculateGPA={calculateGPA} /> 
		<button type="button" class="btn btn-success">Submit Score</button>
>>>>>>> ebb866d (commit)
	</div> 
	</div> 
	</>
); 
}; 

export default GPACalculator; 
