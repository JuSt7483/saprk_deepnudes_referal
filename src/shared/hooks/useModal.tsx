"use client";

import { useContext } from "react";
import ModalContextProps from "../interfaces/ModalContext/ModalContextProps";
import { ModalContext } from "@/app/[locale]/context/ModalContext";

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};