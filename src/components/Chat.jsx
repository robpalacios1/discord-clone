import React from 'react'

/** ICON */
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

/** Component */
import ChatHeader from './ChatHeader'

/***** CSS *****/
import './Chat.css'

const Chat = () => {
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat__messages">

            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input placeholder={`Message #TESTCHANNEL`} />
                    <button className="chat__inputButton" type="submit">
                        Send Message
                    </button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
