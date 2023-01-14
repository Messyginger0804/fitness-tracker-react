import React from 'react';
import Posts from '../components/Routines';
import LogMeOut from '../components/LogMeOut';
import Routines from '../components/Routines';
import PostForm from '../components/PostForm';

const Home = ({ token, posts, setPosts, userId, setToken }) => {
    return (
        <>
            {token &&
                <LogMeOut
                    token={token}
                    setToken={setToken} />
            }
            {/* <Routines 
            token={ token } 
            routines={ posts } 
            setPosts={ setPosts }
            userId={ userId }
        /> */}
            { token &&
        <PostForm 
            token={ token } 
            posts={ posts } 
            setPosts={ setPosts }
        />
    }
        </>
    );
};

export default Home;