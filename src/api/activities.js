
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