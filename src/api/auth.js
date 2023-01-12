const api = 'https://fitnesstrac-kr.herokuapp.com/api';

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(
            `${api}/users/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({

                    username,
                    password,

                }),
            }
        );
        console.log(response)
        const { token } = await response.json();
        return token;
    } catch (error) {
        console.error(error);
    }
};

export const login = async (username, password) => {
    try {
        const response = await fetch(
            `${api}/users/login`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
        const {token} = await response.json();
        return token;
    } catch (error) {
        console.error(error);
    }
};

// export const submitRoutines = async (title, desc, price, location, deliver, { token, routines, setRoutines }) => {
//     try {
//         console.log(token);
//         const response = await fetch(
//             `${api} / routines`
//             {
//             method: 'POST',
//                 headers: {
//                 'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`
//             },
//             body: JSON.stringify({
//                 routines: {
//                     title: `${title}`,
//                     description: `${desc}`,
//                     price: `${price}`,
//                     location: `${location}`,
//                     willDeliver: `${deliver}`
//                 }
//             }),}
//             );
//         const reply = await fetch(api)
//         const rep = await reply.json();
//         setRoutines(rep.routines);
//         const { success } = await response.json();
//         return success;
//     } catch (error) {
//         console.error(error);
//     }
// }

export const deletePost = async (token, postId, setPosts) => {
    try {
        const var3 = await fetch(api, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const var4 = await var3.json();
        const reply = await fetch(api)
        const rep = await reply.json();
        setPosts(rep.data.posts);
        return var4.success;
    } catch (error) {
        console.error(error);
    }
}

export const getUserId = async (token) => {
    try {
        const var1 = await fetch(`${api}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const var2 = await var1.json();
        // console.log(var2.data.posts);
        // console.log(var2.data.messages);
        // console.log(var2.data._id);
        return var2._id;
    } catch (error) {
        console.error(error);
    }
}

// export const getAllActivities = async (token) => {
//     try {
//         const response = await fetch(`${api}/activities`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'Authorization': `Bearer ${token}`
//             },
//         });
//         const {
//             data: { activities },
//         } = await response.json();
//         return activities;
//     } catch (err) {
//         console.error("Whelp, guess I can't find those posts. Sorry bout that", err)
//     }
// }



export const sendMessage = async (token, postId, message) => {
    try {
        const var5 = await fetch(api, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content: `${message}`
                }
            })
        })
        const var6 = await var5.json();
        console.log(var6.success);
        console.log(var6.data.message._id);
        console.log(var6.data.message.content);
        console.log(var6.data.message.post);
        console.log(var6.data.message.fromUser);
    } catch (error) {
        console.error(error);
    }
}
export default api