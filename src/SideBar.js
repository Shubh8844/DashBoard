import React, { useEffect } from "react";
import "./SideBar.css";
import data from "./EmployeeData.json";
export default function SideBar() {
  const datafound = data.employees;
  return (
    <div className="sidebar">
      {datafound.map((sdata) => (
        <h5>{sdata.name}</h5>
      ))}
    </div>
  );
}
