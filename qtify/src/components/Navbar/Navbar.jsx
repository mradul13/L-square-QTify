import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = ()=>{
    return (
    <div className={styles.wrapper}>
        <nav className={styles.navbar}>
            <div className={styles.logoWrapper}>
                <Logo id={styles.logo}></Logo>
            </div>
            <div className={styles.searchWrapper}>
                <SearchBox placeholder="Search an album of your choice">
                </SearchBox>
            </div>
            <Button
                text="Give Feedback"
                eventHandler={{ event: "onClick", handler: ()=>{} }}
            />
        </nav>
    </div>
    )
}

export default Navbar;