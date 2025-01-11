import { useEffect, useState } from "react";
import '../../../src/globals.css';

const Mypage = ({ onLogin }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        setIsLoggedIn(accessToken ? true : false);
    }, []);

    if (!isLoggedIn) {
        return (
            <div className="container-col p-4">
                <h1>Login / Sign Up</h1>
                <p>Please log in or sign up to access your profile.</p>
                <button
                    onClick={() => {
                        localStorage.setItem("accessToken", "dummyToken"); // dummy token
                        setIsLoggedIn(true);
                        onLogin();
                    }}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Log In
                </button>
            </div>
        );
    }

    return (
        <div className="container-col p-4">
            <h1>My Page</h1>
            <p>Welcome to your profile!</p>
            <button
                onClick={() => {
                    localStorage.removeItem("accessToken");
                    setIsLoggedIn(false);
                    onLogin();
                }}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#FF4D4D",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Log Out
            </button>
        </div>
    );
}

export default Mypage;
