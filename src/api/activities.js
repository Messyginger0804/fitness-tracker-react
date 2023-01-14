
import api from "./auth";

export const fetchActivities = async () => {
    try {
        const response = await fetch(
            `${api}/activities`, {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        );
        const data = await response.json();

        return data;

    } catch (error) {
        console.error(error)
    }
}

// export const getActivitiesByUser = async (username) => {
//     try {
//         const response = await fetch(
//             `${api}/users/${localStorage.getItem('username')}/activities`, {

//             method: 'GET',

//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`
//             },
//         }
//         );
//         const data = await response.json();
//         console.log('look here----', data)
//         return data

//     } catch (error) {
//         console.error(error)
//     }
// }

