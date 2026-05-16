import React, { useState } from 'react';
import axios from 'axios';
import { FiMail } from 'lucide-react';
import './styles/contactForm.css';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://example.com/contact', formData);
      if (response.status === 200) {
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSuccessMessage('Error sending message.');
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage('Error sending message.');
    }
  };

  return (
    <div className="contact-form">
      <h2>Get in touch with Pri Kafe</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
        <label>Email:</label>
        <input type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
        <label>Message:</label>
        <textarea value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} />
        <button type="submit"><FiMail /> Send Message</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default ContactForm;