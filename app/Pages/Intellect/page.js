"use client";
import NavBar from "@/app/comps/nav";
import React, {useState, useEffect}  from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import predefinedTasks from './Tasks.json';




const PositionedElement = ({ x, y, children }) => {
  const style = {
    position: 'absolute',
    top: `${y}px`, 
    left: `${x}px`, 
  };

  return <div style={style}>{children}</div>;
};

const IntellectPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]); // Tasks added to the MIDDLE BOX
  const [completedTasks, setCompletedTasks] = useState(0);
  const [middleBoxTasks, setMiddleBoxTasks] = useState([]); // State to hold tasks in MIDDLE BOX
  const [manualTaskTitle, setManualTaskTitle] = useState('');
  const [manualTaskDescription, setManualTaskDescription] = useState('');


  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = middleBoxTasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }; // Toggle completion
      }
      return task;
    });
    setMiddleBoxTasks(updatedTasks);
    // Update completed tasks count
    setCompletedTasks(updatedTasks.filter(task => task.completed).length);
  };




  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

    // Function to delete a task
  const deleteTask = (taskId) => {
    setMiddleBoxTasks(middleBoxTasks.filter(task => task.id !== taskId));
  };

  // Function to mark a task as completed
  const completeTask = (taskId) => {
    const updatedTasks = middleBoxTasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setMiddleBoxTasks(updatedTasks);
    // Update completed tasks count
    setCompletedTasks(updatedTasks.filter(task => task.completed).length);
  };

  const handleOverlayClick = () => {
    setShowTaskForm(false);
  };
  
  const handleFormClick = (event) => {
    event.stopPropagation(); // Prevents the click from bubbling up to the overlay
  };

  const addTaskToMiddleBox = (task) => {
    setMiddleBoxTasks([...middleBoxTasks, task]);
    // Optionally, close the task form overlay after adding a task
    setShowTaskForm(false);
  };


  const addPredefinedTask = (predefinedTask) => {
    setTasks([...tasks, predefinedTask]);
    // Optionally, close the task form overlay after adding a task
    setShowTaskForm(false);
  };

  const addManualTask = () => {
    const newTask = {
      title: manualTaskTitle,
      description: manualTaskDescription
    };
    // Add the new task to middleBoxTasks
    setMiddleBoxTasks([...middleBoxTasks, newTask]);
    // Reset form fields
    setManualTaskTitle('');
    setManualTaskDescription('');
    // Close the task form
    setShowTaskForm(false);
  };

  

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
    zIndex: 1, // Ensure this is below the task form
  };
  
  const taskFormStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '70%',
    height: '100%',
    backgroundColor: '#fff', // Your desired background color
    zIndex: 2, // Ensure this is above the overlay
    padding: '20px', // Add some padding for the form content
    boxSizing: 'border-box', // To include padding in width calculation
    height: '100%', // Take full available height
    maxHeight: '100vh', // Max height to viewport height
    overflowY: 'auto', // Enable vertical scrolling
    padding: '20px',
  };

  const taskItemStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#f9f9f9',
  };

  const progressBarContainerStyle = {
    height: '20px',
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: '5px',
    margin: '10px 0',
  };
  
  const progressBarFillerStyle = (completedPercent) => ({
    height: '100%',
    width: `${completedPercent}%`,
    backgroundColor: completedPercent === 100 ? '#4caf50' : '#2196f3', // Green when full, blue otherwise
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 0.5s ease-in-out',
  });


  // Calculate progress
  const totalTasks = middleBoxTasks.length;
  const completedTasksCount = middleBoxTasks.filter(task => task.completed).length;
  const completedPercent = totalTasks > 0 ? (completedTasksCount / totalTasks) * 100 : 0;




  return (
    <div className=" min-h-screen bg-[#303633]">
      {/* Top */}
      <div className="pag">
      <NavBar />
      </div>
      {/* End top */}
      {/* Bottom */}
      <div>
        <PositionedElement x={20} y={137}>
          <div className="bg-[#EDF0DA] w-[60px] h-[350px] rounded-2xl font-thin italic  border border-black hover:shadow-md ">



          <div className=" transition duration-500 hover:-translate-y-0.5">
          <PositionedElement x={9} y={277}>
              <div className="bg-black w-[40px] h-[40px] rounded-full shadow-lg shadow-black">
              </div>
            </PositionedElement>

            <PositionedElement x={12} y={282}>
            <div>
              {/*Settings*/}
              <Link href="./Settings">
              {isMounted && (
              <Icon icon="arcticons:settings" color="white" width="35" height="30" />
              )}
              </Link>
            </div>
            </PositionedElement >
            </div>

            



            <div className=" transition duration-500 hover:-translate-y-0.5">
            <PositionedElement x={10} y={31}>
            <div className="bg-black w-[40px] h-[40px] rounded-full shadow-lg shadow-black">
            </div>
            </PositionedElement>

            <PositionedElement x={15} y={35}>
            <div> 
              <Link href="/">
            {isMounted && (
             <Icon icon="iconamoon:home-thin"  color="white" width="30" height="30" />
            )}
              </Link>
            </div>
            </PositionedElement>
            </div>




            <div className=" transition duration-500 hover:-translate-y-0.5">
            <PositionedElement x={9} y={155}>
              <div className="bg-black w-[40px] h-[40px] rounded-full shadow-lg shadow-black">
              </div>
            </PositionedElement>

            <PositionedElement x={10} y={155}>
            <div>
            {isMounted && (
             <Icon icon="ph:plus-thin" color="white" width="40" height="40" onClick={toggleTaskForm} />
            )}
            </div>
            </PositionedElement>
            </div>

            {/* Task Form (conditionally rendered) */}

            {showTaskForm && (
              <div>
                <div style={overlayStyle} onClick={handleOverlayClick}>
                <div style={taskFormStyle} onClick={handleFormClick}>
                <div className="input task item">
                <input
                  type="text"
                  placeholder="Task Title"
                  value={manualTaskTitle}
                  onChange={(e) => setManualTaskTitle(e.target.value)}
                  // Add state and onChange handler for title
                  />
                  <textarea
                    placeholder="Task Description"
                    value={manualTaskDescription}
                    onChange={(e) => setManualTaskDescription(e.target.value)}
                    // Add state and onChange handler for description
                  />
                  <button onClick={addManualTask}>Add Task</button>
                  </div>
                  <div className="predefined contrast">
                    {/* List of predefined tasks */}
                    {predefinedTasks.map(task => (
                      <div key={task.id} style={taskItemStyle} onClick={() => addTaskToMiddleBox(task)}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                      </div>
                    ))}

                  </div>
                  
          
                </div>
                </div>
              </div>
                )}



          </div>
        </PositionedElement>
      </div>


      <div>
        <PositionedElement x={117} y={520}>
          <div style={{ letterSpacing: '15px' }} className="bg-[#EDF0DA] w-[1044px] h-[60px] rounded-2xl text-[40px] flex justify-center items-center font-thin border border-black">
            Intellect
          </div>
        </PositionedElement>
      </div>

      <div className="MIDDLE BOX text-white">
  <PositionedElement x={105} y={125}>
    <div className="bg-black w-[1065px] h-[375px] rounded-2xl font-thin italic bg-opacity-90 border border-[#EDF0DA]">
      {middleBoxTasks.map((task, index) => (
        <div key={task.id || index} style={{ /* Add some styles here */ }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => toggleTaskCompletion(task.id)}>
            {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          {/* Other task details */}
        </div>
      ))}
      {/* Milestone Tracker */}
      <div>
        Milestone Progress: {completedTasks} / 10
        <div style={progressBarContainerStyle}>
          <div style={progressBarFillerStyle(completedPercent)}>
            <span style={{ padding: '5px', color: 'white' }}>
              {`${completedPercent.toFixed(0)}%`}
            </span>
          </div>
        </div>
      </div>
    </div>
  </PositionedElement>
</div>

      <PositionedElement x={1205} y={285}>
      <div className="relative group transition duration-500 hover:translate-x-0.5">
      <Link href="/Pages/Physical">
        <div className="bg-black w-[50px] h-[50px] rounded-full shadow-lg shadow-black"></div>
        {isMounted && (
          <div className="absolute inset-0 flex justify-center items-center">
            <Icon icon="arcticons:next-player" color="white" width="35" height="35" />
          </div>
        )}
        </Link>
      </div>
    </PositionedElement>


      {/* End bottom */}
    </div>

  );
};

export default IntellectPage;