import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handlerFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value })
  }

  const handlerLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value })
  }

  const handlerEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value })
  }

  const hadleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={hadleSubmit}>
        {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}

        <input
          onChange={handlerFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}

        <input
          onChange={handlerLastNameInputChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}

        <input
          onChange={handlerEmailInputChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
