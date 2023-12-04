import React, { useState } from 'react';

function Modules() {
  const [modules, setModules] = useState([
    {
      id: 1,
      name: 'Gen Math',
      expanded: false,
      activities: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
      quizzes: ['Quiz 1', 'Quiz 2'],
    },
    {
      id: 2,
      name: 'Earth and Life Science',
      expanded: false,
      activities: ['Ecosystems', 'Earth Structure'],
      quizzes: ['Quiz 1'],
    },
    {
      id: 3,
      name: 'Reading and writing',
      expanded: false,
      activities: ['Comprehension', 'Vocabulary'],
      quizzes: ['Quiz 1', 'Quiz 2', 'Quiz 3'],
    },

  ]);

  const toggleModule = (moduleId) => {
    setModules(
      modules.map((module) =>
        module.id === moduleId ? { ...module, expanded: !module.expanded } : module
      )
    );
  };
  const goBack = () => {
    window.history.back(); 
  };

  return (
    <div className="student-modules">
      <h2>Student Modules</h2>
      <div className="module-list">
        {modules.map((module) => (
          <div key={module.id} className="module-item" onClick={() => toggleModule(module.id)}>
            <h3>{module.name}</h3>
            {module.expanded && (
              <div className="module-details">
                <h4>Activities:</h4>
                <ul>
                  {module.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
                <h4>Quizzes:</h4>
                <ul>
                  {module.quizzes.map((quiz, index) => (
                    <li key={index}>{quiz}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
        ))}
         <button className="back-button" onClick={goBack}>
        Back to Previous Page
      </button>
      </div>

      <style jsx>{`
        .student-modules {
          font-family: Arial, sans-serif;
          padding: 40px;

        }

        .module-list {
          display: grid;
          grid-gap: 10px;
        }

        .module-item {
          background-color: rgb(40, 138, 177);
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
        }

        .module-details {
          margin-top: 15px;
          padding: 15px;
          background-color: white;
          border-radius: 5px;
        }

        .module-details h4 {
          margin-top: 0;
        }

        ul {
          padding-left: 20px;
        }
        .back-button {
            position: absolute;
            bottom: 50px;
            margin-bottom: 10px;
            padding: 5px 10px;
            background-color: #ccc;
            border: none;
            border-radius: 3px;
            cursor: pointer;
          }
  
          .back-button:hover {
            background-color: #ddd;
          }
        
      `}</style>
    </div>
  );
}

export default Modules;
