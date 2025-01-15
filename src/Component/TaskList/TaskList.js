import React, { useState, useEffect } from "react";
import { CiStar, CiBellOn, CiCalendar } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import "./TaskList.css";

function TaskList({ layout }) {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const storedCompletedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || [];
    setTasks(storedTasks);
    setCompletedTasks(storedCompletedTasks);
  }, []);

  const handleAddTask = () => {
    if (newTask.trim()) {
      const updatedTasks = [{ text: newTask, important: false }, ...tasks];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setNewTask("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleCompleteTask = (index) => {
    const taskToComplete = tasks[index];
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const updatedCompletedTasks = [...completedTasks, taskToComplete.text];
    setTasks(updatedTasks);
    setCompletedTasks(updatedCompletedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    localStorage.setItem(
      "completedTasks",
      JSON.stringify(updatedCompletedTasks)
    );
  };

  const handleUncompleteTask = (index) => {
    const taskToUncomplete = completedTasks[index];
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    const updatedTasks = [
      ...tasks,
      { text: taskToUncomplete, important: false },
    ];
    setCompletedTasks(updatedCompletedTasks);
    setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    localStorage.setItem(
      "completedTasks",
      JSON.stringify(updatedCompletedTasks)
    );
  };

  const handleDeleteTask = (index, isCompleted) => {
    if (isCompleted) {
      const updatedCompletedTasks = completedTasks.filter(
        (_, i) => i !== index
      );
      setCompletedTasks(updatedCompletedTasks);
      localStorage.setItem(
        "completedTasks",
        JSON.stringify(updatedCompletedTasks)
      );
    } else {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };

  const handleEditTask = (index, isCompleted) => {
    const taskText = isCompleted ? completedTasks[index] : tasks[index].text;
    const updatedText = prompt("Edit Task:", taskText);

    if (updatedText !== null && updatedText.trim() !== "") {
      if (isCompleted) {
        const updatedCompletedTasks = completedTasks.map((task, i) =>
          i === index ? updatedText : task
        );
        setCompletedTasks(updatedCompletedTasks);
        localStorage.setItem(
          "completedTasks",
          JSON.stringify(updatedCompletedTasks)
        );
      } else {
        const updatedTasks = tasks.map((task, i) =>
          i === index ? { ...task, text: updatedText } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      }
    }
  };

  return (
    <div className="task-list">
      <div className="header">
        <h2>To Do</h2>
      </div>
      <div className="topTask">
        <div className="addcenter">
          <input
            type="text"
            placeholder="Add Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown} // Add this line to handle Enter key
          />
        </div>
        <div className="addingTask">
          <div className="calIcon">
            <CiBellOn />
            <CiCalendar />
          </div>
          <div>
            <button className="add-task-btn" onClick={handleAddTask}>
              Add Task
            </button>
          </div>
        </div>
      </div>
      <div className={` ${layout ? "tasks" : "block"}`}>
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            <input type="checkbox" onChange={() => handleCompleteTask(index)} />
            <span>{task.text}</span>
            <span className="star">
              <span onClick={() => handleEditTask(index, false)}>Edit</span>{" "}
              {/* Add this */}
              <MdDelete
                className="delete-icon"
                onClick={() => handleDeleteTask(index, false)} // Delete from active tasks
              />
              <CiStar />
            </span>
          </div>
        ))}
      </div>
      <h3>Completed</h3>
      <div className="completed-tasks">
        {completedTasks.map((task, index) => (
          <div className="completed-task" key={index}>
            <input
              type="checkbox"
              checked
              onChange={() => handleUncompleteTask(index)}
            />
            <span>{task}</span>
            <span className="star">
              <span onClick={() => handleEditTask(index, true)}>Edit</span>{" "}
              {/* Add this */}
              <MdDelete
                className="delete-icon"
                onClick={() => handleDeleteTask(index, true)}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
