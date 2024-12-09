//validate form inputs

const validateForm = (values) => {
    const errors = {};
    
    //validate name
    if (!values.name) {
        errors.name = "Name is required";
    } else if (values.name.length < 3) {
        errors.name = "Name must be at least 3 characters";
    }

    //validate email
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    }

    //validate message
    if (!values.message) {
        errors.message = "Message is required";
    } else if (values.message.length < 10) {
        errors.message = "Message must be at least 10 characters";
    }

    return errors;
};

export default validateForm;