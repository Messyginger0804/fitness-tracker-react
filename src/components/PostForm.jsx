import React, { useState } from "react";
import { submitPost } from "../api/auth";




const PostForm = (token, posts, setPosts) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [deliver, setDeliver] = useState(false);
    
    const handleSubmit = (event) => {
      event.preventDefault(); //Stop it from disappearing immediately
      submitPost(
        title,
        desc,
        price,
        location,
        deliver,
        token);
      console.log(
        "title: " + title, 
        "description: " + desc, 
        "price: " + price, 
        "location: " + location, 
        "delivery: " + deliver); //Show me what was typed
      setTitle(''); //clear the username after it's submitted
      setDesc(''); //clear password after submission (Note: if no value assigned below then password stays)
      setPrice('');
      setLocation('');
      setDeliver(false);
    };

    return (
      <div id='submit-form-container'>
        <form className="submitForm" onSubmit={handleSubmit}>
          <label htmlFor='title'>Item Name:</label>
          <input className="input" type='text' name='title' value={title} onChange={(event) => setTitle(event.target.value)} />
          <label htmlFor='desc'>Description:</label>
          <input className="input" type='text' name='description' value={desc} onChange={(event) => setDesc(event.target.value)}/>
          <label htmlFor='price'>Price:</label>
          <input className="input" type='text' name='price' value={price} onChange={(event) => setPrice(event.target.value)}/>
          <label htmlFor='price'>Location (Optional):</label>
          <input className="input" type='text' name='location' value={location} onChange={(event) => setLocation(event.target.value)}/>
          <button className="input"  type='submit'>Submit</button>
        </form>
      </div>
    )
  }

  export default PostForm;