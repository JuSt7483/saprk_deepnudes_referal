"use client";

import { useFormatter, useTranslations } from "next-intl";
import { PricingCardProps } from "@/shared/interfaces/Pricing/PricingCardsProps";
import "./PricingCard.scss"
import { DiamondGoldIcon, HangerIcon } from "../UI/svg";
import Button from "../UI/primitives/Button/Button";

const PricingCard = ({ title, price, description, benefits, isPopular = false, diamonds = 15, currency = "usd" }: PricingCardProps) => {
    const format = useFormatter()
    const t = useTranslations("PricingCard");
    
    return (
        <li className={`pricing-card__item ${isPopular ? "pricing-card--popular" : ""}`}>
            <div className="pricing-card__info">
                <div className={`pricing-card__title ${isPopular ? "pricing-card__title--popular" : ""}`}>
                    {title}
                </div>
                {/*<div className="pricing-card__diamonds">*/}
                {/*    <div className="pricing-card__diamonds-icon icon">*/}
                {/*        <DiamondGoldIcon />*/}
                {/*    </div>*/}
                {/*    <div className="pricing-card__diamonds-counter">*/}
                {/*        {diamonds}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            {/*<div className={`pricing-card__price`}>*/}
            {/*    {format.number(price, {style: 'currency', currency: currency})}*/}
            {/*</div>*/}
            <ul className="pricing-card__description">
                {description?.map((s, index) => (
                    <li className="pricing-card__list-item" key={`description_${index}`}>
                        {s}
                    </li>
                ))}
            </ul>
            <hr className="pricing-card__hr"></hr>
            <div className="pricing-card__list-wrapper">
                <ul className="pricing-card__list">
                    {benefits?.map((s, index) => (
                        <li className="pricing-card__list-item" key={`benefits_${index}`}>
                            {s}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pricing-card__button-wrapper">
                <Button disableIcons={true} color={isPopular ? "green1" : "gray"} iconLeft={<HangerIcon />} className="pricing-card__button">
                    Buy for {format.number(price, {style: 'currency', currency: currency})}
                </Button>
            </div>
            <div className={`pricing-card__circle`}></div>
        </li>
    )
}

export default PricingCard;