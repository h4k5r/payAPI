import {NextPage} from "next";
import React, {useEffect} from "react";
import classes from "../styles/Price.module.css";
import planCardInterface from "../data/planData";
import {planCardsData} from "../data/planData";
import {useDispatch} from "react-redux";
import {UiActions} from "../store/ui-slice";

const Price: NextPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(UiActions.closeMobileNav())
    })
    return (
        <section className={classes.pricing}>
            <p className={classes.pricing__title}>Pricing</p>
            <div className={classes.planCards__container}>
                {planCardsData.map((value, index) => {
                    return <PlanCard key={index} planTitle={value.planTitle}
                              planDescription={value.planDescription}
                              planPrice={value.planPrice}
                              planFeatures={value.planFeatures}
                              notAvailableFeatures={value.notAvailableFeatures}/>
                })}
            </div>
        </section>

    )
}



const PlanCard: React.FC<planCardInterface> = (props) => {
    const {planTitle, planDescription, planPrice, planFeatures,notAvailableFeatures} = props
    return (
        <div className={classes.planCard}>
            <p className={classes.planeCard__title}>{planTitle}</p>
            <p className={classes.planCard__description}>{planDescription}</p>
            <p className={classes.planCard__price}>${planPrice}</p>
            <div className={classes.planCard__featureContainer}>
                {planFeatures.map((planFeature, index) => {
                    return <p key={index} className={classes.planCard__feature}>✓&nbsp;&nbsp;&nbsp;&nbsp;<span>{planFeature}</span></p>
                })}{notAvailableFeatures.map((notAvailableFeature, index) => {
                    return <p key={index} className={classes.planCard__notAvailable__feature}>✗&nbsp;&nbsp;&nbsp;&nbsp;<span>{notAvailableFeature}</span></p>
                })}
            </div>
        </div>
    )
}
export default Price;