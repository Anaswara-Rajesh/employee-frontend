import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const api = axios.create({
  baseURL: API_URL,
});

export const createEmployee = (data) => api.post('/employee', data);
export const getEmployees = (department) => api.get('/employee', { params: { department } });
export const updateEmployee = (id, data) => api.put(`/employee/${id}`, data);
export const deleteEmployee = (id) => api.delete(`/employee/${id}`);
export const employeeLogin = (data) => api.post('/auth/login', data);
export const getEmployeeByUserName = (username) => api.get(`/employee/username/${username}`);

export const uploadProfilePicture = async (formData) => {
  try {
    const response = await api.post(`/employee/${formData.get('id')}/profile-picture`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}
