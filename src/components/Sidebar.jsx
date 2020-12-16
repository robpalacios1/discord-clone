import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>I am a Sidebar</h2>
            <div className="sidebar__top">
                <h3>Roberto Palacios</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__channel">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
