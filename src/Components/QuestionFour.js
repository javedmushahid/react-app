import React,{useEffect, useState} from "react";

import io from 'socket.io-client';

const QuestionFour = () => {

        const [socket, setSocket] = useState(null);
        const [message, setMessage] = useState('');
        const [receivedMessages, setReceivedMessages] = useState([]);

        useEffect(() => {
            const socketInstance = io('http://localhost:3000');

            socketInstance.on('connect', () => {
                console.log('Connected to Socket.IO server');
            });

            socketInstance.on('message', (data) => {
                console.log('Received message:', data);
                setReceivedMessages((prevMessages) => [...prevMessages, data]);
            });

            socketInstance.on('disconnect', () => {
                console.log('Disconnected from Socket.IO server');
            });

            setSocket(socketInstance);

            return () => {
                socketInstance.disconnect();
            };
        }, []);

        const handleMessageChange = (event) => {
            setMessage(event.target.value);
        };

        const sendMessage = () => {
            if (socket && message.trim() !== '') {
                socket.emit('message', message);
                setMessage('');
            }
        };

        return <>
            <div>
                <h1>Socket.IO Example</h1>

                <div>
                    <input type="text" value={message} onChange={handleMessageChange} />
                    <button onClick={sendMessage}>Send</button>
                </div>

                <ul>
                    {receivedMessages.map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
            </div>
        </>
    };


export default QuestionFour;
