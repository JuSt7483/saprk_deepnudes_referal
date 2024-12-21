import { StaticImageData } from "next/image";

export default interface InstructionStep { 
    title: string;
    description: string;
    image: StaticImageData;
    alt?: string;
}