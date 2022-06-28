import React from "react";
import { Header } from "../components/Header";
import Catalog from "../features/Catalog";
import ChatBox from "../features/ChatBox";

function Home() {
    const [user, setUser] = React.useState<{ name: string }>();

    return (
        <div>
            <Header
                user={user}
                onLogin={() => setUser({ name: "Jane Doe" })}
                onLogout={() => setUser(undefined)}
                onCreateAccount={() => setUser({ name: "Jane Doe" })}
            />
            <Catalog />
            <ChatBox />
        </div>
    );
}

export default Home;
