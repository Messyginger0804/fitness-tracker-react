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

export const getRoutinesByUser = async () => {
    try {
        const response = await fetch(
            `${api}/users/:username/routines`, {
            headers: {
                'Content-Type': 'application/json',
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