import { StaticImageData } from "next/image";

export default interface ModalInstructionStep { 
    title: string;
    description: string;
    images: StaticImageData[];
}