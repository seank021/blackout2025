const Signup = ({ setIsLoggedIn }) => {
    return (
        <div className="container-col p-4">
            <h1>My Page</h1>
            <p>Welcome to your profile!</p>
            <button
                onClick={() => {
                    localStorage.removeItem('accessToken');
                    setIsLoggedIn(false);
                }}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#FF4D4D',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Log Out
            </button>
        </div>
    )
}

export default Signup;
