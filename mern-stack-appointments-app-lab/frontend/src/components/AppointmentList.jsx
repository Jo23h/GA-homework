import { useState } from 'react';
import AppointmentDetail from '../components/AppointmentDetail';

const AppointmentList = ({ appointments, onEdit, onDelete }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  if (selectedAppointment) {
    return (
      <AppointmentDetail 
        appointment={selectedAppointment}
        onClose={() => setSelectedAppointment(null)}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
  }

  return (
    <section>
      <h2>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments yet. Add one above!</p>
      ) : (
        <ul>
          {appointments.map(appointment => (
            <li key={appointment._id}>
              <h3>{appointment.title}</h3>
              <p>{appointment.type} - {new Date(appointment.dateTime).toLocaleDateString()}</p>
              <button onClick={() => setSelectedAppointment(appointment)}>View Details</button>
              <button onClick={() => onEdit(appointment)}>Edit</button>
              <button onClick={() => onDelete(appointment._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default AppointmentList;