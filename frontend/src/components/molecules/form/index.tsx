import './index.scss';

import React from 'react';

import { Button } from '../../atoms/button';

const Form = () => {
  return (
    <form className="m-form">
      <p className="m-form__title">Buy Insurance</p>

      <fieldset className="m-form__formGroup">
        <label>Full Name</label>
        <input
          id="formName"
          className="m-form__formInput"
          name="name"
          type="text"
          required
          // onChange={this.handleChange}
          // value={this.state.name}
        />
      </fieldset>

      <fieldset className="m-form__formGroup">
        <label>Email</label>
        <input
          id="formEmail"
          className="m-form__formInput"
          name="email"
          type="email"
          required
          // onChange={this.handleChange}
          // value={this.state.email}
        />
      </fieldset>

      <fieldset className="m-form__formGroup">
        <label>Phone</label>
        <input
          id="formSubject"
          className="m-form__formInput"
          name="subject"
          type="text"
          required
          // onChange={this.handleChange}
          // value={this.state.subject}
        />
      </fieldset>

      <div className="m-form__formGroup">
        <label>Insurance</label>
        <select className="m-form__formInput">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="m-form__formGroup">
        <label>Price</label>
        <input className="m-form__formInput" type="text" />
      </div>
      <div className="m-form__submit">
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default Form;
