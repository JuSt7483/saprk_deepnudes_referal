import React from 'react'
import "./ModalLayout.scss"
import { useModal } from '@/shared/hooks/useModal'
import { ExitIcon } from '../../svg'

interface ModalLayoutProps {
    children: React.ReactNode;
    exitIcon?: boolean;
    variant?: "default" | "corner"
}

const ModalLayout = ({ children, exitIcon = true, variant = "default" }: ModalLayoutProps) => {
    const { closeModal } = useModal();

    return (
        <div className={`modal__layout modal__layout--${variant}`} onClick={() => { closeModal(); }}>
            <dialog open className={`modal modal--${variant}`} onClick={(e) => { e.stopPropagation(); }}>
                {children}
                {exitIcon &&
                    <div className={`icon modal__exit modal__exit--${variant}`} onClick={() => { closeModal(); }}>
                        <ExitIcon />
                    </div>
                }
            </dialog>
        </div>
    )
}

export default ModalLayout