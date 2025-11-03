import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/appointments';

export const getAllAppointments = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
}

export const getSpecificAppointment = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
}

export const createAppointment = async (appointmentData) => {
    const response = await axios.post(BASE_URL, appointmentData);
    return response.data;
}

export const updateAppointment = async (appointmentData, id) => {
    const response = await axios.put(`${BASE_URL}/${id}`, appointmentData);
    return response.data;
}

export const deleteAppointment = async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}`);
}