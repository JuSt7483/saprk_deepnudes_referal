"use client";

import { useModal } from "@/shared/hooks/useModal";
import { useEffect } from "react";

const Modal: React.FC = () => {
  const { modalContent, closeModal } = useModal();

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if(e.key === "Escape") {
        closeModal()
      }
    }
    console.log("modal mounted")
    window.addEventListener('keydown', close)

    console.log("modal unmounted")
    return () => {
      window.removeEventListener('keydown', close);
      console.log("modal unmounted")
    }
  }, [])

  useEffect(() => {
    if(modalContent) {
      console.log("modal content mounted")
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      console.log("modal content unmounted")
    }
  }, [modalContent])

  if (!modalContent) return null;

  return (
    <>
      {modalContent}
    </>
  );
};

export default Modal;