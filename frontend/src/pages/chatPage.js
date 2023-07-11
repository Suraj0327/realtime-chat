import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
    const [chats, setChat] = useState([]);

    const fetchChats = async () => {
        const { data } = await axios.get('/api/chat');
        setChat(data);
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div>
            {chats.map((chat) => (
                <div key={chat.id}>
                    <p>Username: {chat.username}</p>
                    <p>Name: {chat.name}</p>
                    <img src={chat.avatar} alt="Avatar" />
                </div>
            ))}
        </div>
    );
};

export default Chatpage;
