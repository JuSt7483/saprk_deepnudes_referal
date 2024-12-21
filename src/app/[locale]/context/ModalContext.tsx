"use client";

import ModalContextProps from '@/shared/interfaces/ModalContext/ModalContextProps';
import { createContext, useState, ReactNode, FC } from 'react';

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [isModalClosing, setIsModalClosing] = useState<boolean>(false)

  const openModal = (content: ReactNode) => setModalContent(content);
  const closeModal = (animation?: boolean) => {
    if(!animation) return setModalContent(null);
    setIsModalClosing(true);

    const timeout = setTimeout(() => {
      setModalContent(null);
      setIsModalClosing(false);
    }, 300)

    return () => {
      clearTimeout(timeout)
    }
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalContent, isModalClosing }}>
      {children}
    </ModalContext.Provider>
  );
};