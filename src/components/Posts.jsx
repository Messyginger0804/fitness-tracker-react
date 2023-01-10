import React, { useState, useEffect } from "react";
import { deletePost, sendMessage } from "../api/auth";
import api from "../api/auth";


const Posts = ({posts, setPosts, token, userId}) => {
    const [message, setMessage] = useState('');
    const [postId, setPostId] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch(api,{
            headers: {
                'Authorization':`Bearer ${token}`
            }
        })
            .then(result => result.json())
            .then(
                (result) => {
                    setPosts(result.data.posts);
                    console.log(result.data.posts);
                },
            (error) => {
                console.log(error);
            }
            )
    }, [])

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <div className="posts-container">
                {filteredPosts.map(posts => (
                <div key={posts._id} className="single-item-card">
                    <div className="header-info">
                    <p className="seller">Seller: {posts.author.username}</p>
                    <p className="post-title">Title: {posts.title}</p>
                    <p className="post-price">Price: {posts.price}</p>
                    </div>
                    <div>
                        <p className="post-desc">Description: {posts.description}</p>
                            { userId === posts.author._id &&
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    console.log(posts._id);
                                    deletePost(token, posts._id, setPosts);
                                }}>
                                    <button type="submit">Delete Post</button>
                                </form>
                            }
                            { ((token) && (userId !== posts.author._id && postId !== posts._id)) &&
                                <form onSubmit={ async (e) => {
                                    e.preventDefault();
                                    setPostId(posts._id);
                                }}>
                                    <button type="submit">Send Message</button>
                                </form>
                            }
                            { (userId !== posts.author._id && postId === posts._id) &&
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    console.log(message);
                                    sendMessage(token, postId, message);
                                    setMessage('');
                                    setPostId('');
                                }}>
                                    <input
                                        placeholder="Send message to seller..."
                                        value={message}
                                        type="text"
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></input>
                                    <button type="submit">Send</button>
                                </form>
                            }
                    </div>
                </div>
                ))}
           
            <input
                className="search"
                placeholder="Search for posts by Title"
                value={searchTerm}
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
            ></input></div>
         </>
    )
}

export default Posts