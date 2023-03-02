import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import SimpleComponent from "./simpleComponent";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const [auth, setAuth] = useState();
    const handleLogin = () => {
        if (!isAuth) {
            localStorage.setItem("auth");
            setAuth(true);
            console.log("вошёл");
        }
    };
    const handleLogOut = () => {
        if (auth) {
            localStorage.removeItem("auth");
            setAuth(false);
            console.log("вышел");
        }
    };
    return (
        <>
            <CardWrapper>
                <SimpleComponent
                    {...props}
                    onLogOut={handleLogOut}
                    onLogin={handleLogin}
                    isAuth={isAuth}
                />
            </CardWrapper>
        </>
    );
};
export default withFunctions;
