import React, { useState, useEffect } from "react";

const cohort = '2211-ftb-et-web-ft';

const PostView = ({token}) => {
    const [personalPosts, setPersonalPosts] = useState([]);

    useEffect(() => {
        fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/me`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(result => result.json())
            .then(
                (result) => {
                    setPersonalPosts(result.data.posts);
                    console.log(result.data.posts);
                },
            (error) => {
                console.log(error);
            }
            )
    }, [])

    return (
        <div className="personal-posts-container">
            <h3>My Posts:</h3>
            {personalPosts.map(posts => (
            <div key={posts._id} className="single-item-card">
                <div className="header-info">
                  <p className="post-title">Title: {posts.title}</p>
                  <p className="post-price">Price: {posts.price}</p>
                </div>
                <div className="post-body">
                    <p className="post-desc">Description: {posts.description}</p>
                    <p>Messages:</p>
                    {posts.messages.map(messages => (
                        <div key={messages._id} className="messages">
                            <p>{messages.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            ))}
        </div>
    );
};

export default PostView;