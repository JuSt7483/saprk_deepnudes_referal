import React from 'react'
import ModalLayout from '../UI/primitives/Modal/ModalLayout'
import "./ModalRules.scss"
import Button from '../UI/primitives/Button/Button'
import { useModal } from '@/shared/hooks/useModal'
import ModalInstruction from '../ModalInstruction/ModalInstruction'

const ModalRules = () => {
    const { openModal } = useModal()
    return (
        <ModalLayout>
            <div className="modalrules">
                <div className="modalrules__heading">
                    RULES
                </div>
                <div className="modalrules__description">
                    By clicking on Accept you automatically agree to the above terms
                </div>
                <ol className="modalrules__list">
                    <li className="modalrules__list-item">
                        You must be 18+ to use this website
                    </li>
                    <li className="modalrules__list-item">
                        You can&apos;t use others photos without their permission and persons under 18 years of age.
                    </li>
                    <li className="modalrules__list-item">
                        You are solely responsible for the images you generate
                    </li>
                </ol>
                <Button className='modalrules__button' onClick={() => {
                    openModal(<ModalInstruction />)
                }}>Accept</Button>
            </div>
        </ModalLayout>
    )
}

export default ModalRules