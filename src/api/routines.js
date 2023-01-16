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

export const submitRoutinePost = async (Name, desc, { token, routines, setRoutines }) => {
    try {
        console.log(token);
        const response = await fetch(`${api}/routines`,
            {
                method: 'POST',
                headers:JSON.stringify( {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }),
                body: JSON.stringify({
                    post: {
                        id: `${id}`,
                        Name: `${Name}`,
                        routineName: `${routineName}`,
                        routineGoal: `${routineGoal}`,
                        description: `${desc}`,
                        isPublic: true
                }
                }),
            });
        const reply = await fetch(`${api}`)
        const rep = await reply.json();
        setRoutines(rep.data.routines);
        const { success } = await response.json();
        return success;
    } catch (error) {
        console.error(error);
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
        // console.log('look here----', data)
        return data

    } catch (error) {
        console.error(error)
    }
}
