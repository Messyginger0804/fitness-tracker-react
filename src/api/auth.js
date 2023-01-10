const cohort = '2211-ftb-et-web-ft';

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(
            `https://strangers-things.herokuapp.com/api/${cohort}/users/register/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: {
                        username,
                        password,
                    },
                }),
            }
        );
        const {
            data: { token },
        } = await response.json();
        return token;
    } catch (error) {
        console.error(error);
    }
};

export const login = async (username, password) => {
    try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/login`, 
        {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username,
                password
              }
            })
          });
        const {
            data: { token },
        } = await response.json();
        return token;
    } catch (error) {
        console.error(error);
    }
};

export const submitPost = async (title, desc, price, location, deliver, {token, posts, setPosts}) => {
    try {
        console.log(token);
        const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post:{
                    title: `${title}`,
                    description: `${desc}`,
                    price: `${price}`,
                    location: `${location}`,
                    willDeliver: `${deliver}`
                }
            }),
        });
        const reply = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts`)
        const rep = await reply.json();
        setPosts(rep.data.posts);
        const { success } = await response.json();
        return success;
    } catch (error) {
        console.error(error);
    }
}

export const deletePost = async (token, postId, setPosts) => {
    try {
        const var3 = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts/${postId}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
        const var4 = await var3.json();
        const reply = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts`)
        const rep = await reply.json();
        setPosts(rep.data.posts);
        return var4.success;
    } catch (error) {
        console.error(error);
    }
}

export const getUserId = async (token) => {
    try {
        const var1 = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/me`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          })
        const var2 = await var1.json();
        console.log(var2.data.posts);
        console.log(var2.data.messages);
        console.log(var2.data._id);
        return var2.data._id;
    } catch (error) {
        console.error(error);
    }
}



export const sendMessage = async (token, postId, message) => {
    try {
        const var5 = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts/${postId}/messages`, {
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