import {NextPage} from "next";
import Image from "next/image";
import React from "react";
import classes from "../styles/About.module.css";
import statementDataInterface from "../data/statementData";
import {statementData} from "../data/statementData";
import image from "../images/annie-spratt-QckxruozjRg-unsplash.jpg";
import StatDataInterface from "../data/statData";
import { StatsData} from "../data/statData";

const About:NextPage = () => {
    const firstHalf = statementData.slice(0, statementData.length / 2);
    const secondHalf = statementData.slice(statementData.length / 2, statementData.length);

    return (
        <>
            <section className={classes.about}>
                <p className={classes.about__header}>
                    We empower innovators<br/>
                    be delivering access to the<br/>
                    financial system.
                </p>
                {
                    firstHalf.map((value, index) => {
                        return <Statement key={index} statementTitle={value.statementTitle} statementDescription={value.statementDescription}/>
                    })
                }
            </section>
            <AboutBanner/>
            <section className={classes.about}>
                {
                    secondHalf.map((value, index) => {
                        return <Statement key={index} statementTitle={value.statementTitle} statementDescription={value.statementDescription}/>
                    })
                }

            </section>
        </>

    )
}
const Statement:React.FC<statementDataInterface> = (props) => {
    const {statementTitle,statementDescription} = props
    return (
        <div className={classes.statement__container}>
            <p className={classes.statement__title}>{statementTitle}</p>
            <p className={classes.statement__description}>{statementDescription}</p>
        </div>
    )
}
const AboutBanner:React.FC<{}> = () => {
    return(
        <div>
            <div className={classes.banner}>
                <Image src={image} alt={"payAPI about"} className={classes.banner__image}/>
            </div>
            <div className={classes.stats__container}>
                {
                    StatsData.map((value, index) => {
                        return <Stat key={index} stat={value.stat} value={value.value}/>
                    })
                }
            </div>
        </div>
    )
}
const Stat:React.FC<StatDataInterface> = (props) => {
    return <div className={classes.stat}>
        <p className={classes.stat__title}>{props.stat}</p>
        <p className={classes.stat__value}>{props.value}</p>
    </div>
}
export default About;
