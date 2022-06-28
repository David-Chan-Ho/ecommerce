import React, { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import {
    Avatar,
    Box,
    Button,
    Container,
    Experts,
    Header,
    Message,
    Messages,
} from "./ChatBox.styles";
import Toggle from "./Toggle";

const data = [
    {
        id: "1",
        text: "Hello, how can I help you?",
        user: "1",
        role: "Admin",
        avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
        id: "2",
        text: "I need help finding my order!",
        user: "2",
        role: "Customer",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: "3",
        text: "Have you tried looking for it outside?",
        user: "1",
        role: "Admin",
        avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    },
];

function Chat() {
    const [show, setShow] = useState(true);
    const [isConnect, setIsConnect] = useState(true);
    const [messages, setMessages] = useState(data);

    const onShow = () => setShow(!show);

    const onConnect = () => {
        setTimeout(() => {
            setIsConnect(true);
        }, 5000);
    };

    const renderConnectMenu = (
        <>
            <Header>
                Our team of experts is ready to help you!
                <Experts>
                    <Avatar src="https://randomuser.me/api/portraits/women/73.jpg" />
                    <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" />
                    <Avatar src="https://randomuser.me/api/portraits/women/74.jpg" />
                </Experts>
                👋
            </Header>

            <button onClick={onConnect}>Connect</button>
        </>
    );

    const renderMessages = (
        <>
            <Messages>
                {messages.map((m) => (
                    <Message key={`chat-${m.id}`} role={m.role}>
                        {m.text}
                    </Message>
                ))}
            </Messages>

            <form>
                <input type="text" />{" "}
                <Button>
                    <RiSendPlane2Fill />
                </Button>
            </form>
        </>
    );

    return (
        <Container>
            <Box show={show}>
                {isConnect ? renderMessages : renderConnectMenu}
            </Box>

            <Toggle show={show} onClick={onShow} />
        </Container>
    );
}

export default Chat;
