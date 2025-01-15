import React, { useState } from "react";
import Sidebar from "../SlideBar/Sidebar";
import TaskList from "../TaskList/TaskList";
import "./Main.css";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const [isblock, setIsBlock] = useState(true);
  const [view, setView] = useState("all");

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };
  const toggleLayout = () => {
    setIsBlock((prev) => !prev);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} toggleLayout={toggleLayout} />
      <div className="app">
        <Sidebar visible={isSidebarVisible} setView={setView} />
        <TaskList layout={isblock} view={view} />
      </div>
    </>
  );
};

export default Main;
