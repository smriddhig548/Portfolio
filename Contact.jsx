import { useState } from 'react';
import Reveal from '../components/Reveal';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required.';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitted(false);

      // Simulated send delay — replace with a real API call if you add a backend
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, 900);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <section className="contact-page">
      <Reveal>
        <h1>Contact Me</h1>
        <p className="contact-intro">
          Have a project, internship opportunity, or just want to talk data and AI?
          Send me a message below.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-info">
          <h2>Details</h2>
          <p>
            <span className="info-label">Email</span>
            <a href="mailto:smriddhigupta28@gmail.com">smriddhigupta28@gmail.com</a>
          </p>
          <p>
            <span className="info-label">Phone</span>
            <a href="tel:+4917663139220">+49 176 63139220</a>
          </p>
          <p>
            <span className="info-label">Location</span>
            Hamburg, Germany
          </p>
        </Reveal>

        <Reveal className="contact-form-col">
          {submitted && (
            <div role="status" className="success-message">
              Thanks for your message — I'll get back to you soon!
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="error-message" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="error-message" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="error-message" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;