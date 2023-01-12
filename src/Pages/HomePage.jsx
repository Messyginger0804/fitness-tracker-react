import React from 'react';
import Posts from '../components/Routines';
import LogMeOut from '../components/LogMeOut';
// import PostForm from '../components/PostForm';

const Home = ({ token, posts, setPosts, userId, setToken }) => {
    console.log(token, "testing mege")
    return (
        <>
            {token &&
                <LogMeOut
                    token={token}
                    setToken={setToken} />
            }
            {/* <Posts 
            token={ token } 
            posts={ posts } 
            setPosts={ setPosts }
            userId={ userId }
        /> */}
            {/* { token &&
        <PostForm 
            token={ token } 
            posts={ posts } 
            setPosts={ setPosts }
        />
    } */}
        </>
    );
};

export default Home;