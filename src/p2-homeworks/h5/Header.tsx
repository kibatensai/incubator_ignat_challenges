import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "./Routes";
import style from './Header.module.css'

function Header() {

    const onMouseOverNavBarReveal = () => {

    }

    return (
        <div className={style.nav_container}>
        <div className={style.nav_bar} onMouseOver={ () => onMouseOverNavBarReveal}>
            <NavLink to={PATH.PRE_JUNIOR} className={style.nav_link} activeClassName={style.current}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={style.nav_link} activeClassName={style.current}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={style.nav_link} activeClassName={style.current}>Junior +</NavLink>
        </div>
        </div>
    );
}

export default Header;
