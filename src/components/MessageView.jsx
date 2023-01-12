import React, { useState, useEffect } from "react";

const cohort = '2211-ftb-et-web-ft';

const MessageView = ({ token }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(result => result.json())
            .then(
                (result) => {
                    setMessages(result.data.messages);
                    console.log(result.data.messages);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])

    return (
        <div className="post-messages">
            <h3>Sent/Received Messages:</h3>
            {messages.map(messages => (
                <div key={messages._id} className="single-item-card">
                    <div className="header-info">
                        <p className="message-item">Item: {messages.post.title}</p>
                        <p className="post-price">From User: {messages.fromUser.username}</p>
                    </div>
                    <div className="post-body">
                        <p className="post-message">Message: {messages.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageView;