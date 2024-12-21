import React, { useState } from 'react'
import ModalLayout from '../UI/primitives/Modal/ModalLayout'
import Image from 'next/image'
import ModalInstructionData from './ModalInstructionData';
import { useLocale, useMessages } from 'next-intl';
import "./ModalInstruction.scss"
import Button from '../UI/primitives/Button/Button';
import { ArrowRightIcon } from '../UI/svg';
import { useModal } from '@/shared/hooks/useModal';

const ModalInstruction = () => {
    const [step, setStep] = useState<number>(0);
    const locale = useLocale()
    const messages = useMessages()
    const data = ModalInstructionData(locale, messages);
    const currentStep = data[step!];
    const { closeModal } = useModal();

    return (
        <ModalLayout exitIcon={false}>
            <div className='modalinstruction'>
                <div className="modalinstruction__images">
                    <Image
                        alt="Bad"
                        src={currentStep.images[0]}
                        height={245}
                        width={0}
                        className='modalinstruction__images-item'
                    />
                    <Image
                        alt="Bad"
                        src={currentStep.images[1]}
                        height={245}
                        width={0}
                        className='modalinstruction__images-item'
                    />
                </div>
                <div className="modalinstruction__heading">
                    {currentStep.title}
                </div>
                <div className="modalinstruction__description">
                    <p>
                        {currentStep.description}
                    </p>
                </div>

                <div className="modalinstruction__points">
                    {[...new Array(data.length)].map((_, index) => (
                        <div key={index} className={`modalinstruction__points-item ${index === step ? "modalinstruction__points-item--active" : ""}`}></div>
                    ))}
                </div>

                {step === data.length - 1 ?
                    <Button onClick={() => closeModal()}>Close</Button> :
                    <Button onClick={() => setStep((prev) => prev + 1)} iconRight={<ArrowRightIcon />}>Next</Button>
                }
            </div>
        </ModalLayout>
    )
}

export default ModalInstruction