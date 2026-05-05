import React from "react";

function EmployeeList({ employees, onDelete, onEdit }) {
  return (
    <div>
      <h3>Employee List</h3>

      {employees.map((emp) => (
        <div key={emp._id} style={{ marginBottom: "10px" }}>
          <strong>{emp.name}</strong> | {emp.email} | {emp.position} | ₹{emp.salary}

          <br />

          <button onClick={() => onEdit(emp)}>Edit</button>
          <button onClick={() => onDelete(emp._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;