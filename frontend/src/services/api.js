import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/employees"
});

// CREATE
export const createEmployee = (data) => API.post("/", data);

// READ
export const getEmployees = () => API.get("/");

// UPDATE
export const updateEmployee = (id, data) => API.put(`/${id}`, data);

// DELETE
export const deleteEmployee = (id) => API.delete(`/${id}`);