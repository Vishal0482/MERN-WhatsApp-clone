import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Mic } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import '../assets/CSS/Chat.css';
import axios from './axios'

function Chat() {

    const [inputMsg, setInputMsg] = useState('');
    const [allMsg, setAllMsg] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await axios.get("/messages/sync");
            setAllMsg(response.data);
            return response;
        }

        fetchPosts();
    }, [inputMsg]);

    // console.log(allMsg)

    const sendMessage = (e) => {
        e.preventDefault();

        async function update() {
            const response = await axios.post("/messages/new", {
                name: "xyz",
                message: inputMsg,
                timestamp: new Date().toUTCString(),
                received: false
            })
            if (response.status === 201) {
                console.log("message sent");
            }
            // console.log(response)
        }
        update();

        setInputMsg('');
    }
    return (
        <div className="chat" >
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton >
                        <SearchOutlined />
                    </IconButton>
                    <IconButton >
                        <AttachFile />
                    </IconButton>
                    <IconButton >
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {allMsg.map((data) =>
                    <p key={data._id} className={data.received === false ? "chat__message" : "chat__message chat__recevier"} >
                        <span className="chat__name">{data.name}</span>
                        {data.message}
                        <span className="chat__timestamp">
                            {data.timestamp}
                        </span>
                    </p>
                )}

                {/* <p className=" chat__message chat__recevier" >
                    <span className="chat__name">Vishal </span>
                    This is message

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p> */}

            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input type="text"
                        value={inputMsg}
                        onChange={e => setInputMsg(e.target.value)}
                        placeholder="Type a message" />

                    <button
                        onClick={sendMessage}
                        type="submit">
                        Send a message
                    </button>
                </form>

                <Mic />
            </div>
        </div>
    )
}

export default Chat
