import React from 'react'

/***** CSS *****/
import './SidebarChannel.css'

const Sidebarchannel = ({ id, channelName }) => {
    return (
        <div className="sidebarChannel">
            <h4>
                <span className="sidebarChannel__hash">#</span>
                {channelName}
            </h4>
        </div>
    )
}

export default Sidebarchannel
