// import React, {useState, useEffect} from "react";
// import { getActivitiesByUser } from "../api/activities";

// const ActivitiesView = ({ token, userId }) => {
//     const [personalActivities, setpersonalActivities] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [activities, setActivities] = useState([]);

//     useEffect(() => {

//         const getUsersActivities = async () => {
//             try {
//                 const activities = await getActivitiesByUser()
//                 setpersonalActivities(activities);
//             } catch (error) {
//                 console.error(error)
//             }
//         }
//         getUsersActivities();
//     }, [])
//     return (
//         <div className="personal-activities-container">
//             {personalActivities.map(activities => (
//                 <div key={activities.id} className="single-item-card">
//                     <div className="header-info">
//                         <p className="activity-name">Name: {activities.name}</p>     
//                     </div>
//                     <div className="activity-body">
//                         <p className="activity-desc">Description: {activities.description}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ActivitiesView;