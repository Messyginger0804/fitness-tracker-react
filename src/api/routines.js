const api = 'https://fitnesstrac-kr.herokuapp.com/api';

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