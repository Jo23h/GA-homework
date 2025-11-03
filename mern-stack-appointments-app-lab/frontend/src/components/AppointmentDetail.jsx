const AppointmentDetail = ({ appointment, onClose, onEdit, onDelete }) => {
  const handleDelete = () => {
    onDelete(appointment._id);
    onClose();
  };

  return (
    <section>
      <h2>Appointment Details</h2>
      <div>
        <p><strong>Title:</strong> {appointment.title}</p>
        <p><strong>Type:</strong> {appointment.type}</p>
        <p><strong>Date & Time:</strong> {new Date(appointment.dateTime).toLocaleString()}</p>
        <p><strong>Company:</strong> {appointment.company}</p>
        <p><strong>Person:</strong> {appointment.person}</p>
        <p><strong>Purpose:</strong> {appointment.purpose}</p>
        <p><strong>Address:</strong> {appointment.address}</p>
        <p><strong>Comments:</strong> {appointment.comments}</p>
      </div>
      <div>
        <button onClick={onClose}>Back to List</button>
        <button onClick={() => {
          onEdit(appointment);
          onClose();
        }}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </section>
  );
};

export default AppointmentDetail;