import React from 'react'

/** Materia-Ui */
import { Avatar } from "@material-ui/core"

/** CSS */
import './Message.css'

const Message = ({ timestamp, user, message }) => {
    return (
        <div className="message">
            <Avatar src={user.photo}/>
            <div className="message__ingo">
                <h4>
                    {user.displayName}
                    <span className="message__timestamp">
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
