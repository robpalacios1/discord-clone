import React from 'react'

/*****ICONS*****/
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon  from '@material-ui/icons/Search';
import HelpRoundedIcon  from '@material-ui/icons/Help';
import SendRoundedIcon from '@material-ui/icons/SendRounded'

/*****CSS*****/
import './ChatHeader.css'

const Chatheader = ({ channelName }) => {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">#</span>
                    {channelName}
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatHeader__search">
                    <input placeholder="Search" />
                        <SearchRoundedIcon />
                </div>

                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default Chatheader
