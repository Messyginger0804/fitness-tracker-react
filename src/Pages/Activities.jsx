
import React, { useState, useEffect } from "react";
import { fetchActivities } from "../api/activities";



const Activities = ({ token, userId }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activities, setActivities] = useState([]);
    console.log(activities)

    useEffect(() => {

        const getActivities = async () => {
            try {
                const activities = await fetchActivities();
                setActivities(activities);
            } catch (error) {
                console.error(error);
            }
        }
        getActivities();
    }, [])
    const filteredActivities = activities.filter(activity => activity.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <div className="activities-container">
                <input
                    className="search"
                    placeholder="Search for activities by name"
                    value={searchTerm}
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                ></input></div>
            {filteredActivities.map(activities => (
                <div key={activities?.id} className="single-item-card">
                    <div className="header-info">
                        <p className="name">Name: {activities?.name}</p>
                    </div>
                    <div>
                        <p className="routine-desc">Description: {activities?.description}</p>
                        {userId === activities.id &&
                            <form onSubmit={async (e) => {
                                e.preventDefault();

                                deleteRoutine(token, activities?.id, setActivities);
                            }}>
                                <button type="submit">Delete routine</button>
                            </form>
                        }
                       
                    </div>
                </div>
            ))}

        </>
    )
}



export default Activities;