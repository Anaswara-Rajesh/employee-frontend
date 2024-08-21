
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const api = axios.create({
  baseURL: API_URL,
});

export const createEmployee = (data) => api.post('/employee', data);
export const getEmployees = (department) => api.get('/employee', { params: { department } });
export const updateEmployee = (id, data) => api.put(`/employee/${id}`, data);
export const deleteEmployee = (id) => api.delete(`/employee/${id}`);

