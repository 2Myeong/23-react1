import React, { useState } from "react";
import Toolbar from "./Toolbar";

function landingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };
    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{padding: 16}}>띵규과 함께하는 리액트 공부!</div>
        </div>
    );
}
export default landingPage;