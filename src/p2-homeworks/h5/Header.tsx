import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "./Routes";

function Header() {
    return (
        <div>
            // add NavLinks
            <NavLink to='/'>Home</NavLink>
            <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>Junior +</NavLink>
        </div>
    );
}

export default Header;
