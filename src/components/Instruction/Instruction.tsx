'use client';

import React, { useState } from 'react'
import InstructionsRawData from './InstructionData';
import Image from 'next/image';
import { useLocale, useMessages, useTranslations } from 'next-intl';
import "./Instruction.scss"

interface InstructionProp {
    variant?: "ios" | "android";
}

const Instruction = ({ variant = "ios" }: InstructionProp) => {
    const locale = useLocale()
    const messages = useMessages()
    const InstructionsData = InstructionsRawData(locale, messages, variant);

    return (
        <ul className="instruction">
            {InstructionsData.map((step, index) => (
                <li 
                    className={`instruction__item`}
                    key={`instructionListItem_${index}`}
                >
                    <div className="instruction__info">
                        <div className="instruction__number">
                            {index + 1}
                        </div>
                        <div className="instruction__title">
                            {step.title}
                        </div>
                        <div className="instruction__description">
                            <p>
                                {step.description}
                            </p>
                        </div>
                    </div>
                    <Image 
                        src={step.image}
                        alt={step.alt || ""}
                        width={0}
                        height={0}
                        className='instruction__image'
                    />
                </li>
            ))}
        </ul>
    )
}

export default Instruction