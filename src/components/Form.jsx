
'use client'
import React, { useState } from 'react';

export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      companyName: '',
      message: ''
    });  };
  return (
    <form onSubmit={submitForm}>
  <label htmlFor="name">Name</label>
  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required/>

  <label htmlFor="email">Email</label>
  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required/>

  <label htmlFor="companyName">Company</label>
  <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange}/>

  <label htmlFor="message">Message</label>
  <textarea name="message" id="message" value={formData.message} onChange={handleChange}></textarea>

  <button type='submit'>Submit</button>
</form>

  )
}
