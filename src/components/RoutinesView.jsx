import React, { useState, useEffect } from "react";
import api from "../api/auth";
import { getRoutinesByUser } from "../api/routines";


const RoutinesView = ({ token, userId }) => {
    const [personalRoutines, setpersonalRoutines] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [routines, setRoutines] = useState([]);

    useEffect(() => {

        const getUsersRoutine = async () => {
            try {
                const routines = await getRoutinesByUser()
                setRoutines(routines);
            } catch (error) {
                console.error(error)
            }
        }
        getUsersRoutine();
    }, [])

    // 'Authorization': `Bearer ${token}`
    return (
        <div className="personal-routines-container">
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