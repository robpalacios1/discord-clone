import React from 'react'

/** Materia-Ui */
import { Avatar } from "@material-ui/core"

/** CSS */
import './Message.css'

const Message = () => {
    return (
        <div className="message">
            <Avatar />
            <div className="message__ingo">
                <h4>robpalacios11
                    <span className="message__timestamp">this is a timestamp</span>
                </h4>
                <p>This is a Message</p>
            </div>
        </div>
    )
}

export default Message
