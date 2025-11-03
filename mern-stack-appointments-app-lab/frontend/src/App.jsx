import { useContext, useState, useEffect } from 'react';
import * as appointmentService from './services/AppointmentService';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import './App.css';

const App = () => {

  const [appointments, setAppointments] = useState([]);
  const [editAppointment, setEditAppointment] = useState(null);

  useEffect(() => {
    fetchAppointments()
  }, []);

  const fetchAppointments = async() => {
    try{
      const fetchedAppointments = await appointmentService.getAllAppointments();
      setAppointments(fetchedAppointments);
    } catch (error){
      console.log(error);
    }
  };

  const handleCreate = async (formData) =>{
    try{
      await appointmentService.createAppointment(formData);
      await fetchAppointments();
      setEditAppointment(null);
    } catch (error){
      console.log(error);
    }
  };

  const handleEdit = (appointment) => {
    setEditAppointment(appointment);
  };

  const handleUpdate = async (formData, id) => {
    try{
      await appointmentService.updateAppointment(formData, id);
      await fetchAppointments();
      setEditAppointment(null);
    }catch (error){
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try{
      await appointmentService.deleteAppointment(id);
      const fetchedAppointments = await appointmentService.getAllAppointments();
      setAppointments(fetchedAppointments);
    } catch(error){
      console.log(error);
    }
  };

  return (
    <>
      <h1>Appointment Tracker</h1>
    
      <AppointmentForm 
        editAppointment={editAppointment}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
      />
    
      <AppointmentList 
        appointments={appointments}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App