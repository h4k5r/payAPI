import type {NextPage} from 'next'
import classes from '../styles/Home.module.css'
import {NavButton} from "../Components/NavBar/NavBar";
import Image from 'next/image';
import hero from '../Images/hero.png';
import React from "react";
import microsoft from '../Images/microsoft.svg';
import google from '../Images/google.svg';
import android from '../Images/android.svg';
import feature from '../Images/feature.png';
import moneybag from '../Images/moneyBag.svg';
import graph from '../Images/graph.svg';
import creditCard from '../Images/creditCard.svg';

const Home: NextPage = () => {
    return (
        <>
            <div className="main">
                <HeroSection/>
                <ClientsSection/>
                <FeaturesSection/>
            </div>
        </>
    )
}
const HeroSection: React.FC<{}> = () => {
    return <section className={classes.hero}>
        <div className={classes.hero__content}>
            <p>
                Start Building<br/>
                with our APis for<br/>
                absolutely free.
            </p>
            <CTAInput/>
        </div>
        <div className={classes.hero__imageContainer}>
            <Image src={hero} alt={"app hero image"}/>
        </div>
    </section>
}
const CTAInput: React.FC<{}> = () => {
    return <div className={classes.hero__contentInput_container}>
        <input type={"email"} placeholder={"Enter Email Address"}/>
        <NavButton/>
    </div>
}

const ClientsSection: React.FC<{}> = () => {
    return <section className={classes.clients}>
        <div className={classes.clients__backgroundCircle_Container}>
            <svg height="800" width="800" className={classes.clients__backgroundCircle}>
                <circle cx="400" cy="400" r="400" fill="#cbcbcb "/>
            </svg>
        </div>
        <div className={classes.clients__content_container}>
            <p className={classes.clients__content_heading}>
                Who we work with
            </p>
            <p className={classes.clients__content_text}>
                Today, millions of people around the world have successfully<br/>
                connected their accounts to apps they love using our API. We<br/>
                provide developers with tools they need to create easy and<br/>
                accessible experiences for their users.
            </p>
            <button className={classes.clients__button}>About Us</button>
        </div>
        <ClientLogo/>
    </section>
}
export const ClientLogo:React.FC<{}> = () => {
    return        <div className={classes.clients__logo_container}>
        <Image src={microsoft} className={classes.clients__logo_image} width={"200"} alt={"microsoft"}/>
        <Image src={google} className={classes.clients__logo_image} width={"200"} alt={"google"}/>
        <Image src={android} className={classes.clients__logo_image} width={"200"} alt={"android"}/>
    </div>
}

const FeaturesSection: React.FC<{}> = () => {

    return <section className={classes.feature}>
        <div className={classes.feature__backgroundCircle_Container}>
            <svg height="800" width="800" className={classes.feature__backgroundCircle}>
                <circle cx="400" cy="400" r="400" fill="#cbcbcb "/>
            </svg>
        </div>
        <div className={classes.feature__container}>
            <div className={classes.feature__image}>
                <div className={classes.feature__imageTerminal_container}>
                    <div className={classes.feature__imageTerminal_window}>
                        <div className={classes.feature__imageTerminal_buttonContainer}>
                            <div className={classes.feature__imageTerminal_buttonsClose}></div>
                            <div className={classes.feature__imageTerminal_buttonsMaximize}></div>
                            <div className={classes.feature__imageTerminal_buttonsMinimize}></div>
                        </div>
                    </div>
                    <div className={classes.feature__imageTerminal_code}>
                        <br/>
                        {"<script src=/static/js/2.409d9eca.chunk.js></script>"}
                        <br/>
                        {"<script src=\/static/js/main.0c00d949.chunk.js\></script>"}
                    </div>
                </div>
            </div>
            <div className={classes.feature__content}>
                <p className={classes.feature__content_title}>
                    Easy to implement
                </p>
                <p className={classes.feature__content_text}>
                    Our API comes with just a few lines of code. You&lsquo;ll be up
                    <br/>and running in no time. We built out documentation page to
                    <br/> integrate payments functionality with ease.
                </p>
            </div>
        </div>
        <div className={classes.feature__container}>
            <div className={classes.feature__content}>
                <p className={classes.feature__content_title}>
                    Simple UI and UX
                </p>
                <p className={classes.feature__content_text}>
                    Our pre-built form is easy to integrate in your app or
                    website&lsquo;s
                    <br/>check out flow and designed to optimize conversion.
                </p>
            </div>
            <div className={classes.feature__image}>
                <Image src={feature} alt={"app ui"}/>
            </div>
        </div>
        <SubFeatures/>
    </section>
}
const SubFeatures: React.FC<{}> = () => {
    return (
        <div className={classes.subFeature}>
            <div className={classes.subFeature__container}>
                <Image src={moneybag} className={classes.subFeature__image} alt={"money bag"}/>
                <p className={classes.subFeature__title}>Personal Finances</p>
                <p className={classes.subFeature__text}>
                    Consolidate your financial data from multiple sources <br/>
                    and categorize transactions upto 2 years of <br/>
                    history. Analyze reports to reconcile your activities in <br/>
                    your account.
                </p>
            </div>
            <div className={classes.subFeature__container}>
                <Image src={graph} className={classes.subFeature__image} alt={"graph"}/>
                <p className={classes.subFeature__title}>Banking &#38; Coverage</p>
                <p className={classes.subFeature__text}>
                    With our platform, you can speed up account<br/>
                    onboarding and support ongoing payments for<br/>
                    checking, savings, and credit cards, and brokerage<br/>
                    accounts.
                </p>
            </div>
            <div className={classes.subFeature__container}>
                <Image src={creditCard} className={classes.subFeature__image} alt={"credit card"}/>
                <p className={classes.subFeature__title}>Consumer Payments</p>
                <p className={classes.subFeature__text}>
                    It&lsquo;s easier to set up secure bank payments with us<br/>
                    through a flow designed with user experience <br/>
                    in mind. Customers could instantly authenticate<br/>
                    their account.
                </p>
            </div>
        </div>
    );
}

export const FinalCTA: React.FC<{}> = () => {
    return (
        <section className={classes.finalCta}>
            <p className={classes.finalCta__title}>Ready to start?</p>
            <div>
                <CTAInput/>
            </div>
        </section>
    );
}

export default Home
