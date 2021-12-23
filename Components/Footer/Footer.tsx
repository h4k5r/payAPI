import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {FinalCTA} from "../../pages";
import NavBar, {NavLeftContainer} from "../NavBar/NavBar";
import classes from "./Footer.module.css";
import {faFacebook, faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC<{}> = () => {
    return (
        <footer>
            <FinalCTA/>
            <div className={classes.footer__Container}>
                <NavLeftContainer/>
                <div className={classes.footer__SocialIcons}>
                    <FontAwesomeIcon icon={faFacebook} color={"white"}/>
                    <FontAwesomeIcon icon={faTwitter} color={"white"}/>
                    <FontAwesomeIcon icon={faLinkedin} color={"white"}/>
                </div>
            </div>
        </footer>
    )
}
export default Footer;