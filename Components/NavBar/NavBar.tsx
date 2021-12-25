import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import classes from "./NavBar.module.css";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {UiActions} from "../../store/ui-slice";

const NavBar: React.FC<{}> = () => {
    const isMobileNavOpen = useSelector<RootState>(state => state.uiReducer.isMobileNavOpen);
    const dispatch = useDispatch();
    const onBurgerClick = () => {
        dispatch({type: UiActions.toggleMobileNav});
    };
    return (
        <>
            {isMobileNavOpen && <MobileNav/>}
            <div className={classes.backgroundCircle__Container}>
                <svg height="800" width="800" className={classes.backgroundCircle}>
                    <circle cx="400" cy="400" r="400" fill="#cbcbcb "/>
                </svg>
            </div>
            <div className={classes.overAllContainer}>
                <div className={classes.burgerContainer} onClick={onBurgerClick}>
                    <div className={classes.burgerLine}>x</div>
                    <div className={classes.burgerLine}>x</div>
                    <div className={classes.burgerLine}>x</div>
                </div>
                <nav className={classes.navBar}>
                    <NavLeftContainer/>
                    <div className={classes.navButtonContainer}>
                        <NavButton/>
                    </div>
                </nav>
            </div>
        </>

    );
}
export const MobileNav: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const onModalClick = () => {
        dispatch({type: UiActions.closeMobileNav});
    };
    return <>
        <div className={classes.mobileNav}>
            <div className={classes.mobileNav__modal} onClick={onModalClick}>
            </div>
                <div className={classes.mobileNavContainer} >
                    <ul className={classes.mobileNav__linkList}>
                        <p>Menu</p>
                        <li><Link href={"/price"}>Pricing</Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                    </ul>
                </div>


        </div>

    </>
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
        router.push("/contact");
    }
    return (
        <>
            <button className={classes.navButtonMain} onClick={onDemoClickHandler}>Schedule A demo</button>
        </>
    );
}
export default NavBar;
