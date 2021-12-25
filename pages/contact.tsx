import {NextPage} from "next";
import {ClientLogo} from "./index";
import classes from "../styles/Contact.module.css";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {UiActions} from "../store/ui-slice";

const Contact:NextPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(UiActions.closeMobileNav())
    })
    return (
        <section className={classes.contact}>
            <p>
                Submit a help request and <br/>
                we will get in touch shortly.
            </p>
            <div className={classes.contact__container}>
                <form className={classes.contact__form}>
                    <input type={"text"} placeholder={"Name"}/>
                    <input type={"email"} placeholder={"Email"}/>
                    <input type={"text"} placeholder={"Company Name"}/>
                    <input type={"text"} placeholder={"Title"}/>
                    <input type={"text"} placeholder={"Message"}/>
                </form>
                <div className={classes.clients__container}>
                    <p>Join the Thousands of innovators already <br/>building with us.</p>
                    <ClientLogo/>
                </div>
            </div>

        </section>
    );
}
export default Contact;