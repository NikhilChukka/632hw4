import React, { useState } from 'react';
import Header from './header';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function Newhomework() {
  sessionStorage.clear();
  const navigate = useNavigate();
  const [homeworkData, setHomeworkData] = useState({
    title: '',
    description: '',
    questions: [''],
    scores : ['']
  });
  const [show, setShow] = useState(false);

  const handleClose = () => {

    setShow(false);
    console.log(homeworkData); 
    window.sessionStorage.setItem('title',homeworkData.title)
    window.sessionStorage.setItem('Description',homeworkData.description)
    for (let i = 0; i < homeworkData.questions.length; i++){
        window.sessionStorage.setItem(i,homeworkData.questions[i])
    }
    navigate('/');
  }
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHomeworkData({ ...homeworkData, [name]: value });
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...homeworkData.questions];
    newQuestions[index] = value;
    setHomeworkData({ ...homeworkData, questions: newQuestions });
  };

  const handleAddQuestion = () => {
    setHomeworkData({ ...homeworkData, questions: [...homeworkData.questions, ''],scores:[...homeworkData.scores] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(homeworkData); 

  };

  return (
   
    <div >
         <Header/>
         <div className="container">
      <h2>New Homework</h2>
     
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" className="form-control" id="title" name="title" value={homeworkData.title} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control" id="description" name="description" value={homeworkData.description} onChange={handleChange} />
        </div>
        <div className="mb-3">
           
          {homeworkData.questions.map((question, index) => (
            <div className="input-group mb-3" key={index}>
              Question &nbsp;&nbsp;&nbsp;<input
                type="text"
                className="form-control"
                value={question}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
              />
             &nbsp;&nbsp;&nbsp;
             Score  &nbsp;&nbsp;&nbsp;<input type='number'/>
             
              {index === 0 && (
                <button className="btn btn-outline-primary" type="button" onClick={handleAddQuestion}>Add Question</button>
              )}
            </div>
          ))}
        </div>
       
        <Button variant="primary" onClick={handleShow}>
        Post Homework
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post a New Homework</Modal.Title>
        </Modal.Header>
        <Modal.Body>Successfully Posted the Homework</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    

     
    </div>
    </div>
  );
}

export default Newhomework;
