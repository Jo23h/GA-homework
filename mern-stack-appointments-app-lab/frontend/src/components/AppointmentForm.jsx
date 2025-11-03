import { useState, useEffect } from 'react';

const AppointmentForm = ({ editAppointment, onCreate, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    purpose: '',
    company: '',
    person: '',
    address: '',
    dateTime: '',
    comments: ''
  });

  useEffect(() => {
    if (editAppointment) {
      setFormData({
        title: editAppointment.title,
        type: editAppointment.type,
        purpose: editAppointment.purpose,
        company: editAppointment.company,
        person: editAppointment.person,
        address: editAppointment.address,
        dateTime: editAppointment.dateTime,
        comments: editAppointment.comments
      });
    }
  }, [editAppointment]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (editAppointment) {
      await onUpdate(formData, editAppointment._id);
    } else {
      await onCreate(formData);
    }
    
    setFormData({
      title: '', type: '', purpose: '', company: '',
      person: '', address: '', dateTime: '', comments: ''
    });
  };

  return (
    <section>
      <h2>{editAppointment ? 'Edit appointment' : 'No appointment found - add new appointment'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='type'>Type:</label>
          <input
            type='text'
            id='type'
            name='type'
            value={formData.type}
            onChange={handleChange}
            placeholder='e.g., date? lunch?'
          />
        </div>
        <div>
          <label htmlFor='purpose'>Purpose:</label>
          <input
            type='text'
            id='purpose'
            name='purpose'
            value={formData.purpose}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='company'>Company:</label>
          <input
            type='text'
            id='company'
            name='company'
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='person'>Person:</label>
          <input
            type='text'
            id='person'
            name='person'
            value={formData.person}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='dateTime'>Date & Time:</label>
          <input
            type='datetime-local'
            id='dateTime'
            name='dateTime'
            value={formData.dateTime}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            value={formData.comments}
            onChange={handleChange}
          />
        </div>
        <button type='submit'> Update </button>
      </form>
    </section>
  );
};

export default AppointmentForm;