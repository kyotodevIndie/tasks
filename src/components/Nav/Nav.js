import React from "react";

import Logo from "../../assets/logo.svg";

import "./Nav.scss";

export default function Nav() {
    return (
        <div className="navContainer">
            <img src={Logo} alt="Logo" />
        </div>
    );
}
