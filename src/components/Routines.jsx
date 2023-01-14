import React, { useState, useEffect } from "react";
// import { deleteRoutine, sendMessage } from "../api/auth";
import { fetchRoutines } from "../api/routines";




const Routines = ({ token, userId }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [routines, setRoutines] = useState([]);
    console.log(routines)

    useEffect(() => {

        const getRoutine = async () => {
            try {
                const routines = await fetchRoutines()
                setRoutines(routines);
            } catch (error) {
                console.error(error)
            }
        }
        getRoutine();
    }, [])

    const filteredroutines = routines.filter(routine => routine.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <><input
            className="search"
            placeholder="Search"
            value={searchTerm}
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
            <div className="routines-container">
                {filteredroutines.map(routines => (
                    <div key={routines?.id} className="single-item-card">
                        <div className="header-info">
                            <p className="creator">Name: {routines?.creatorName}</p>
                            <p className="routine-name">Routine Name: {routines?.name}</p>
                            <p className="routine-goal">Routine's Goal: {routines?.goal}</p>
                        </div>
                        <div>
                            <p className="routine-desc">Description: {routines?.description}</p>
                            {userId === routines.id &&
                                <form onSubmit={async (e) => {
                                    e.preventDefault();

                                    deleteRoutine(token, routines?.id, setRoutines);
                                }}>
                                    <button type="submit">Delete routine</button>
                                </form>
                            }

                        </div>
                    </div>
                ))}

                <input
                    className="search"
                    placeholder="Search for routines by name"
                    value={searchTerm}
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                ></input></div>
        </>
    )
}

export default Routines