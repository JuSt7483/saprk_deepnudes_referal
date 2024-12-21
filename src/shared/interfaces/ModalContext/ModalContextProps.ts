import { ReactNode } from "react";

export default interface ModalContextProps {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  modalContent: ReactNode | null;
  isModalClosing: boolean;
}