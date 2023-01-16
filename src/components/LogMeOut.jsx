import React from "react";

const LogMeOut = ({ setToken }) => {

    return (
        <div className="logout-bar">
            <button className="logout-button" type="logout" onClick={(() => {
                try {
                    localStorage.removeItem('token');
                    setToken(null);
                } catch (error) {
                    console.error(error);
                }
            })}>Log Out</button>
        </div>
    );
};

export default LogMeOut