import api from "./auth";

export const fetchRoutines = async () => {
    try {
        const response = await fetch(
            `${api}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        );
        const data = await response.json();

        return data

    } catch (error) {
        console.error(error)
    }
}

export const getRoutinesByUser = async (username) => {
    try {
        const response = await fetch(
            `${api}/users/${localStorage.getItem('username')}/routines`, {

            method: 'GET',

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        }
        );
        const data = await response.json();
        console.log('look here----', data)
        return data

    } catch (error) {
        console.error(error)
    }
}
