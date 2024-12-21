import { AbstractIntlMessages, createTranslator } from "next-intl";

import Image1_1 from '../../../public/Images/ModalInstruction/1_1.png'
import Image1_2 from '../../../public/Images/ModalInstruction/1_2.png'
import Image2_1 from '../../../public/Images/ModalInstruction/2_1.png'
import Image2_2 from '../../../public/Images/ModalInstruction/2_2.png'
import Image3_1 from '../../../public/Images/ModalInstruction/3_1.png'
import Image3_2 from '../../../public/Images/ModalInstruction/3_2.png'
import Image4_1 from '../../../public/Images/ModalInstruction/4_1.png'
import Image4_2 from '../../../public/Images/ModalInstruction/4_2.png'
import ModalInstructionStep from "@/shared/interfaces/ModalInstruction/ModalInstructionStep";


const ModalInstructionData = (locale: string, messages: AbstractIntlMessages): ModalInstructionStep[] => {
    const t = createTranslator({locale: locale, messages});

    return [
        {
            title: t('ModalInstruction.steps.1.title'),
            description: t('ModalInstruction.steps.1.description'),
            images: [Image1_1, Image1_2]
        },
        {
            title: t('ModalInstruction.steps.2.title'),
            description: t('ModalInstruction.steps.2.description'),
            images: [Image2_1, Image2_2]
        },
        {
            title: t('ModalInstruction.steps.3.title'),
            description: t('ModalInstruction.steps.3.description'),
            images: [Image3_1, Image3_2]
        },
        {
            title: t('ModalInstruction.steps.4.title'),
            description: t('ModalInstruction.steps.4.description'),
            images: [Image4_1, Image4_2]
        }
    ]
}

export default ModalInstructionData;