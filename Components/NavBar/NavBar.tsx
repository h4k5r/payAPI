import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import classes from "./NavBar.module.css";

const NavBar: React.FC<{}> = () => {
    return (
        <>
            <nav className={classes.navBar}>
                <NavLeftContainer/>
                <div>
                    <NavButton/>
                </div>
            </nav>
        </>
    );
}
export const NavLeftContainer: React.FC<{}> = () => {
    const router = useRouter();
    const onLogoClickHandler = () => {
        router.replace("/");
    }
    return <div className={classes.navLeftContainer}>
        <a className={classes.logo} onClick={onLogoClickHandler}>
            <span className={classes.logoSpan1}>pay</span>
            <span className={classes.logoSpan2}>api</span>
        </a>
        <ul className={classes.navLinksList}>
            <li><Link href={"/price"}>Pricing</Link></li>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
        </ul>
    </div>
}
export const NavButton: React.FC<{}> = () => {
    const router = useRouter();

    const onDemoClickHandler = () => {
        router.push("/demo");
    }
    return (
        <>
            <button className={classes.navButtonMain} onClick={onDemoClickHandler}>Schedule A demo</button>
        </>
    );
}
export default NavBar;