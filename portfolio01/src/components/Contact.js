import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Please enter your name.';
    if (!email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!email.includes('@')) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (!message.trim()) newErrors.message = 'Please enter a message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>

      {submitted && <div className="success-msg">✓ Message sent successfully!</div>}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="field-group">
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => { setName(e.target.value); setErrors({...errors, name: ''}); }}
            className={errors.name ? 'error-input' : ''}
            aria-label="Your name"
            aria-required="true"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="field-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors({...errors, email: ''}); }}
            className={errors.email ? 'error-input' : ''}
            aria-label="Your email"
            aria-required="true"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="field-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            placeholder="Your message..."
            value={message}
            onChange={(e) => { setMessage(e.target.value); setErrors({...errors, message: ''}); }}
            className={errors.message ? 'error-input' : ''}
            aria-label="Your message"
            aria-required="true"
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
