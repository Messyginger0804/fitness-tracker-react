import React, { useState, useEffect } from "react";
import api from "../api/auth";

const RoutinesView = ({ token }) => {
    const [personalRoutines, setpersonalRoutines] = useState([]);

    useEffect(() => {
        fetch(
            `${api}/:username/routines`
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(result => result.json())
            .then(
                (result) => {
                    setpersonalRoutines(result.data.routines);
                    console.log(result.data.routines);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])

    return (
        <div className="personal-routines-container">
            <h3>My routines:</h3>
            {personalRoutines.map(routines => (
                <div key={routines._id} className="single-item-card">
                    <div className="header-info">
                        <p className="routine-title">Title: {routines.title}</p>
                        <p className="routine-price">Price: {routines.price}</p>
                    </div>
                    <div className="routine-body">
                        <p className="routine-desc">Description: {routines.description}</p>
                        <p>Messages:</p>
                        {routines.messages.map(messages => (
                            <div key={messages._id} className="messages">
                                <p>{messages.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RoutinesView;