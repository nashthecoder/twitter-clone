import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from '../firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
  
    const sendTweet = (e) => {
      e.preventDefault();

        db.collection('posts').add({
            displayName: 'Naijeria Toweett',
            username: 'nashthecoder',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:'https://avatars1.githubusercontent.com/u/15178823?s=460&u=37b7e0864e67a10698025f3abc5c12a287fa1f53&v=4',
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://avatars1.githubusercontent.com/u/15178823?s=460&u=37b7e0864e67a10698025f3abc5c12a287fa1f53&v=4'/>
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    placeholder="What's happening?" type='text'/>             
                </div>
                <input 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type='text'
                /> 
                <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox;
