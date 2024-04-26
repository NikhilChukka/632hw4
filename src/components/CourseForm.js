// CourseForm.js 

import React, { useState } from 'react'; 

const CourseForm = ({ onAddCourse }) => { 
	const [courseName, setCourseName] = useState(''); 
	const [creditHours, setCreditHours] = useState(0); 
<<<<<<< HEAD
	const [grade, setGrade] = useState('A+'); 
=======
	const [grade, setGrade] = useState('100'); 
>>>>>>> ebb866d (commit)

	const handleAddCourse = () => { 
		if (courseName && creditHours > 0 && grade) { 
			const newCourse = { 
				courseName, 
				creditHours, 
				grade, 
			}; 

			onAddCourse(newCourse); 
			setCourseName(''); 
			setCreditHours(0); 
			
		} else { 
			alert('Please enter valid course details.'); 
		} 
	}; 

	return ( 
		<div className="section1"> 
			<div> 
				<p>Assignment</p> 
				<input 
					type="text"
					value={courseName} 
					onChange={(e) => setCourseName(e.target.value)} 
				/> 
			</div> 
			<div> 
				<p>Score</p> 
				<input 
					type="number"
					
					onChange={(e) => setCreditHours(Number(e.target.value))} 
				/> 
			</div> 
			<div> 
				<p>Name</p> 
				<input type="text" size="30" onChange={(e) => setGrade(e.target.value)} /> 
				 
			</div> 
			<div> 
				<p style={{ opacity: 0 }}>-</p> 
				<button onClick={handleAddCourse}>Add</button> 
			</div> 
		</div> 
	); 
}; 

export default CourseForm; 
