import React, { useState } from "react";
import './contactus.css';
import Nav from "../menu";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required.";
        if (!formData.email.trim()) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email address.";
        }
        if (!formData.message.trim()) errors.message = "Message is required.";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            setFormErrors({});
            setIsSubmitted(true);
            console.log("Form submitted:", formData);
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div className="contact-us-page">
            <Nav className="NavBar"/>
            <h1>Contact our friendly team</h1>
            <h3>Let us know how we can help</h3>
            {isSubmitted && <p className="success-message">Thank you for contacting us! We'll get back to you soon.</p>}
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={formErrors.name ? "error-input" : ""}
                    />
                    {formErrors.name && <p className="error-text">{formErrors.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={formErrors.email ? "error-input" : ""}
                    />
                    {formErrors.email && <p className="error-text">{formErrors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={formErrors.message ? "error-input" : ""}
                    ></textarea>
                    {formErrors.message && <p className="error-text">{formErrors.message}</p>}
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
