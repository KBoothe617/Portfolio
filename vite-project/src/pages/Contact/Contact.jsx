import { useState } from "react";
import validateForm from "./ValidateContactForm";
import "./Contact.css";

// Contact component
export default function Contact() {
    //state to store form data
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    //state to store form errors
    const [errors, setErrors] = useState({});

    //state to store form submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    console.log (isSubmitting);

    //handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(values));
        setIsSubmitting(true);
    };

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-control">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}