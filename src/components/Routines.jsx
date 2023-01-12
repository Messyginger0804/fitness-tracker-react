import React, { useState, useEffect } from "react";
// import { deleteRoutine, sendMessage } from "../api/auth";
import api from "../api/auth";



const Routines = ({ routines, setRoutines, token, userId }) => {
    // const [message, setMessage] = useState('');
    const [routineId, setroutineId] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch(`${api}/routines`, {
            headers: {
                'Content-type': `application/json`
            }
        })
            .then(result => result.json())
            .then(
                (result) => {
                    setRoutines(result.data.routines);
                    console.log(result.data.routines);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])

    const filteredroutines = routines.filter(routine => routine.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <div className="routines-container">
                {filteredroutines.map(routines => (
                    <div key={routines._id} className="single-item-card">
                        <div className="header-info">
                            <p className="seller">Seller: {routines.author.username}</p>
                            <p className="routine-title">Title: {routines.title}</p>
                            <p className="routine-price">Price: {routines.price}</p>
                        </div>
                        <div>
                            <p className="routine-desc">Description: {routines.description}</p>
                            {userId === routines.author._id &&
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    console.log(routines._id);
                                    deleteRoutine(token, routines._id, setRoutines);
                                }}>
                                    <button type="submit">Delete routine</button>
                                </form>
                            }
                            {((token) && (userId !== routines.author._id && routineId !== routines._id)) &&
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    setroutineId(routines._id);
                                }}>
                                    <button type="submit">Send Message</button>
                                </form>
                            }
                            {(userId !== routines.author._id && routineId === routines._id) &&
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    console.log(message);
                                    sendMessage(token, routineId, message);
                                    setMessage('');
                                    setroutineId('');
                                }}>
                                    <input
                                        placeholder="Send message to seller..."
                                        value={message}
                                        type="text"
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></input>
                                    <button type="submit">Send</button>
                                </form>
                            }
                        </div>
                    </div>
                ))}

                <input
                    className="search"
                    placeholder="Search for routines by Title"
                    value={searchTerm}
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                ></input></div>
        </>
    )
}

export default Routines