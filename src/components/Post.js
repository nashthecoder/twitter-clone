import React from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import './Post.css';

function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar,
}) {
    
    return (
        <div className='post'>
            <div className='post__avatar'>
            <Avatar src='https://avatars1.githubusercontent.com/u/15178823?s=460&u=37b7e0864e67a10698025f3abc5c12a287fa1f53&v=4'/>
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            NashTheCoder <span>
                            <VerifiedUserRoundedIcon className='post__badge' />
                            </span>
                        </h3>
                    </div>
                    <div className='.post__headerDescription'>
                        <p> I built a #TwitterClone using React & Firebase</p>
                    </div>
                </div>
                <img src='https://media.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif' alt="" />
            </div>
            
        </div>
    )
}

export default Post;
