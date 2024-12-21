'use client';

import React, { useState, useEffect, MouseEventHandler } from 'react'
import QuestionProps from '@/shared/interfaces/Accordion/QuestionProps';
import { PlusIcon } from '../UI/svg';
import "./Accordion.scss"

interface QuestionExtendedProps extends QuestionProps {
    is_expanded: boolean;
    variant: "instruction" | "faq" | "welcome"
    customClickEvent: MouseEventHandler<HTMLSpanElement> | undefined;
}

const Question = ({ title, info, is_expanded, customClickEvent, variant, id }: QuestionExtendedProps) => {
    const [expanded, setExpanded] = useState<boolean>(is_expanded)

    useEffect(() => {
        setExpanded(is_expanded)
    }, [is_expanded]);

    return (
        <article className={`accordion-question accordion-question--variant-${variant}`} onClick={customClickEvent}>
            <div className={`accordion-question__header accordion-question__header--variant-${variant}`}>
                <span className='accordion-question__title'>
                    {variant === "instruction" &&
                        <div className="accordion-question__title-number">
                            0{id}
                        </div>
                    }
                    <div className="accordion-question__title-text">
                        {title}
                    </div>
                </span>
                <button className={`accordion-question__button accordion-question__button--variant-${variant} ${expanded ? "accordion-question__button--expanded accordion-question__button--expanded-" + variant : ""} `} onClick={customClickEvent}>
                    <PlusIcon />
                </button>
            </div>
            {expanded && <p className={`accordion-question__text accordion-question__text--variant-${variant}`}>{info}</p>}
        </article>
    )
}

export default Question