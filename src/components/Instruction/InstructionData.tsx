import InstructionStep from "@/shared/interfaces/Instruction/InstructionStep"
import { AbstractIntlMessages, createTranslator } from "next-intl";

import Step1_ios from '../../../public/Images/Instruction/ios/undress.app.png'
import Step2_ios from '../../../public/Images/Instruction/ios/undress app free.png'
import Step3_ios from '../../../public/Images/Instruction/ios/undress nude app.png'
import Step4_ios from '../../../public/Images/Instruction/ios/undress app safe.png'
import Step5_ios from '../../../public/Images/Instruction/ios/undress app nudes.png'

import Step1_android from '../../../public/Images/Instruction/android/clothes off app.png'
import Step2_android from '../../../public/Images/Instruction/android/clothoff.io app.png'
import Step3_android from '../../../public/Images/Instruction/android/nudify app free.png'
import Step4_android from '../../../public/Images/Instruction/android/deepnude app apk.png'
import Step5_android from '../../../public/Images/Instruction/android/nudifier app android.png'

const InstructionData = (locale: string, messages: AbstractIntlMessages, variant: "ios" | "android" ): InstructionStep[] => {
    const t = createTranslator({locale: locale, messages});

    if(variant === "ios") return [
        {
            title: t('Instruction.ios.steps.1.title'),
            description: t('Instruction.ios.steps.1.description'),
            image: Step1_ios,
            alt: "ai nudes sex"
        },
        {
            title: t('Instruction.ios.steps.2.title'),
            description: t('Instruction.ios.steps.2.description'),
            image: Step2_ios,
            alt: "nude remover"
        },
        {
            title: t('Instruction.ios.steps.3.title'),
            description: t('Instruction.ios.steps.3.description'),
            image: Step3_ios,
            alt: "cloth remover nude"
        },
        {
            title: t('Instruction.ios.steps.4.title'),
            description: t('Instruction.ios.steps.4.description'),
            image: Step4_ios,
            alt: "drawnude.io"
        },
        {
            title: t('Instruction.ios.steps.5.title'),
            description: t('Instruction.ios.steps.5.description'),
            image: Step5_ios,
            alt: "getnude.io"
        },
    ]
    else return [
        {
            title: t('Instruction.android.steps.1.title'),
            description: t('Instruction.android.steps.1.description'),
            image: Step1_android,
            alt: "drawnudes"
        },
        {
            title: t('Instruction.android.steps.2.title'),
            description: t('Instruction.android.steps.2.description'),
            image: Step2_android,
            alt: "draw nude"
        },
        {
            title: t('Instruction.android.steps.3.title'),
            description: t('Instruction.android.steps.3.description'),
            image: Step3_android,
            alt: "nude pictures online"
        },
        {
            title: t('Instruction.android.steps.4.title'),
            description: t('Instruction.android.steps.4.description'),
            image: Step4_android,
            alt: "fake nude online"
        },
        {
            title: t('Instruction.android.steps.5.title'),
            description: t('Instruction.android.steps.5.description'),
            image: Step5_android,
            alt: "ai nudes sex"
        },
    ]
}

export default InstructionData;