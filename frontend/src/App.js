import React, { useEffect, useState } from "react";
import EmployeeForm from "../../frontend/src/components/EmployeeForm";
import EmployeeList from "../../frontend/src/components/EmployeeList";

import {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee
} from "../../frontend/src/services/api";

function App() {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchData = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (data) => {
    if (selected) {
      await updateEmployee(selected._id, data);
      setSelected(null);
    } else {
      await createEmployee(data);
    }
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchData();
  };

  const handleEdit = (emp) => {
    setSelected(emp);
  };

  const clearSelection = () => {
    setSelected(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee CRUD (MERN)</h2>

      <EmployeeForm
        onSubmit={handleSubmit}
        selected={selected}
        clearSelection={clearSelection}
      />

      <hr />

      <EmployeeList
        employees={employees}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;