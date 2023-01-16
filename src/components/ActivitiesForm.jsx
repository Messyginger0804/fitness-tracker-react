import React, { useState } from "react";

import { createActivity } from "../api/auth";





const ActivitiesForm = (token, activities, setActivities) => {
  const [Name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); //Stop it from disappearing immediately

    createActivity(

      Name,
      desc,
      token);
    // // console.log(
    //   "Name: " + Name,
    //   "description: " + desc,
    // ); //Show me what was typed
    setName(''); //clear the username after it's submitted
    setDesc(''); //clear password after submission (Note: if no value assigned below then password stays!
  };
  return (
    <div id='submit-form-container'>
      <form className="submitForm" onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input className="input" type='text' name='name' value={Name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor='desc'>Description:</label>
        <input className="input" type='text' name='description' value={desc} onChange={(event) => setDesc(event.target.value)} />
        <button className="input" type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ActivitiesForm;