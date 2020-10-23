import React from 'react';
import './TweetBox.css';
import { Avatar, Button, Input } from '@material-ui/core';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://avatars1.githubusercontent.com/u/15178823?s=460&u=37b7e0864e67a10698025f3abc5c12a287fa1f53&v=4'/>
                    <input placeholder="What's happening?" type='text'/>             
                </div>
                <input 
                    className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type='text'
                /> 
                <Button className='tweetBox__tweetButton'>
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox;
