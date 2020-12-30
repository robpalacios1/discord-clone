import React, {useEffect, useState} from 'react'
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import { selectUser } from '../features/userSlice'

/** ICON */
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

/** Component */
import ChatHeader from './ChatHeader'
import Message from './Message';

/***** CSS *****/
import './Chat.css'
import db from './firebase';



const Chat = () => {

    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('channels')
        .doc(channelId)
        .collection('message')
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user
        })
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName}/>
            <div className="chat__messages">
                {messages.map((Message) => (
                    <Message />
                ))}
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input
                        value={input}
                        disabled={!channelId}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`Message #${channelName}`}
                    />
                    <button
                        className="chat__inputButton"
                        disabled={!channelId}
                        type="submit"
                        onClick={sendMessage}
                    >
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
