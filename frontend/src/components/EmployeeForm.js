import React, { useState, useEffect } from "react";

function EmployeeForm({ onSubmit, selected, clearSelection }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    salary: ""
  });

  useEffect(() => {
    if (selected) {
      setForm(selected);
    }
  }, [selected]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", email: "", position: "", salary: "" });
  };

  return (
    <div>
      <h3>{selected ? "Update Employee" : "Add Employee"}</h3>

      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input name="position" value={form.position} onChange={handleChange} placeholder="Position" required />
        <input name="salary" value={form.salary} onChange={handleChange} placeholder="Salary" required />

        <button type="submit">
          {selected ? "Update" : "Add"}
        </button>

        {selected && (
          <button type="button" onClick={clearSelection}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default EmployeeForm;