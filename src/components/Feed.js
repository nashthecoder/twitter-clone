import React from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';

function Feed() {
    
    return (
        <div className='feed'>
            {/* Header */}
            <div className='feed__header'>
            <h2>Home</h2>
            </div>
            
             {/* TweetBox */}
             <TweetBox />
             <h2>Tweet Box</h2>
             {/* Posts */}
             <Post />

        </div>
    )
}

export default Feed;
