import React from 'react';
import Posts from '../components/Posts';
import LogMeOut from '../components/LogMeOut';
import PostForm from '../components/PostForm';

const Home = ({token, posts, setPosts, userId, setToken}) => {
  return (
    <>
    { token &&
        <LogMeOut
            token={ token } 
            setToken={ setToken }/>
    }
        <Posts 
            token={ token } 
            posts={ posts } 
            setPosts={ setPosts }
            userId={ userId }
        />
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