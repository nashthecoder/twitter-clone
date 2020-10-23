import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className='widgets_searchIcon'/>
                <input placeholder='Search Twitter' type='text'/>
            </div>
            <div className='widgets__widgetContainer'>
                <h2>What's happening</h2>

                <TwitterTweetEmbed />

                <TwitterTimelineEmbed />

                <TwitterShareButton />

            </div>
            
        </div>
    )
}

export default Widgets;
