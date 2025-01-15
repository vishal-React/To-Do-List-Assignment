import React from "react";
import { FaTasks, FaStar, FaCalendarAlt, FaClipboard } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuth } from "../Redux/AuthSlice";
import { IoLogOut } from "react-icons/io5";

function Sidebar({ visible, setView }) {
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("authState");
  };

  return (
    <div className={`sidebar ${visible ? "visible" : "hidden"}`}>
      <div className="profile">
        <img src="/asset/profile-photo.png" alt="Profile" />
        <h3>Hey, {user ? user.username : "Guest"}</h3>
      </div>
      <ul className="menu">
        <li onClick={handleLogout}>
          <IoLogOut /> Logout
        </li>
        <li onClick={() => setView("all")}>
          <FaTasks /> All Tasks
        </li>
        <li
          onClick={() => setView("today")}
          style={{
            backgroundColor: "#35793729",
          }}
        >
          <FaCalendarAlt /> Today
        </li>

        <li onClick={() => setView("important")}>
          <FaStar /> Important
        </li>
        <li>
          <FaClipboard /> Planned
        </li>
        <li>
          <FaClipboard /> Assigned to me
        </li>
        <li className="add-list">+ Add List</li>
      </ul>
      <div className="stats">
        <h4>Today Tasks</h4>
        <div className="chart">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path
              className="circle-bg"
              d="M18 2.0845a15.9155 15.9155 0 1 0 0 31.831 15.9155 15.9155 0 1 0 0-31.831"
            />
            <path
              className="circle"
              strokeDasharray="70, 100"
              d="M18 2.0845a15.9155 15.9155 0 1 0 0 31.831 15.9155 15.9155 0 1 0 0-31.831"
            />
          </svg>

          <span>11</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
