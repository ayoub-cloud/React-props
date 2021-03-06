import React from "react";
import "./App.css";
import Profile from "./profile/profile";

function App() {
    const styleObject = {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        color: "blue",
        fontSize: "50px",
        backgroundColor: "yellow",
        fontFamily: " Papyrus",
        padding: "10px",
    };
    const handleName = (name) => {
        alert(`this is ${name}`);
    };
    return (
        <div style={styleObject} className="App">
            <Profile
                handleName={handleName}
                FullName="Ayoub Mejri"
                Bio="taking a bootcamp session in Full-Stack js in Go My Code !"
                Profession="Web Developer"
            >
                <div>
                    <img
                        style={{ height: "250px", width: "250px" }}
                        src="https://previews.123rf.com/images/leolintang/leolintang1701/leolintang170100122/69631766-hacker-man-with-vendetta-mask-hacking-binary-system-security-code-on-the-virtual-screen.jpg"
                        alt="hk"
                    />
                </div>
            </Profile>
        </div>
    );
}

export default App;
