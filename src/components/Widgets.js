import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className='widgets_searchIcon'/>

            </div>
            
        </div>
    )
}

export default Widgets;
