import { MenuProps, Dropdown } from "antd";
import { Link, usePathname } from "@/i18n/routing"
import {ArrowDown, ArrowExpandIcon, CheckCirle24Icon, CheckSquare2Icon} from "../UI/svg";
import { locales } from "@/shared/data/locales";
import { useLocale } from "next-intl";
import {useModal} from "@/shared/hooks/useModal";
import ModalLanguage from "@/components/ModalLanguage/ModalLanguage";
import Button from "@/components/UI/primitives/Button/Button";

interface LanguageSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "inverted" | "square" | "footer"
}

const LanguageSelector = ({ variant = "default", ...props }: LanguageSelectorProps) => {
    const pathname = usePathname();
    const locale = useLocale();
    const { openModal } = useModal();

    const items: MenuProps['items'] = locales.map((item, index) => {
        return {
            key: `${index}`,
            label: (
                <Link href={pathname} locale={item.locale} className={`language__link ${item.locale === locale ? "language__link--active": ""}`}>
                    <span className="icon language__link-icon">
                        {item.icon}
                    </span>
                    <span className="language__link-title">
                        {item.title}
                    </span>
                    {item.locale === locale &&
                        <span className="icon language__link-icon">
                            <CheckCirle24Icon />
                        </span>
                    }
                </Link>
            ),
        }
    })

    const currentLocale = locales.find((value) => value.locale === locale);

    if(variant === "default")
        return (
            <button onClick={() => openModal(<ModalLanguage/>)}
                    className={`language language--${variant} ${props.className ? props.className : ""}`}>
                <div
                    className={`icon language__icon language__icon--${variant}`}>
                    {currentLocale?.icon}
                </div>
                <div className="language__text">
                    {currentLocale?.locale?.toUpperCase()}
                </div>
                <div className="icon language__icon-down">
                    <ArrowDown/>
                </div>
            </button>
        )

    if(variant === "square")
        return (
            <button onClick={() => openModal(<ModalLanguage/>)}
                    className={`language language--${variant} ${props.className ? props.className : ""}`}>
                <div
                    className={`icon language__icon language__icon--${variant} ${pathname === '/' ? "language__icon--main" : ""}`}>
                    {currentLocale?.icon}
                </div>
            </button>
        )

    if(variant === "footer")
        return (
            <Button onClick={() => openModal(<ModalLanguage/>)} color={"green3"} className={`language language--${variant}`} iconLeft={
                <div
                    className={`icon language__icon language__icon--square ${pathname === '/' ? "language__icon--main" : ""}`}>
                    {currentLocale?.icon}
                </div>
            } iconRight={<ArrowExpandIcon/>}>
                {currentLocale?.title}
            </Button>
        )
    // return (
    //     <Dropdown trigger={["click"]} menu={{ items }} placement="bottom" overlayClassName={`language__dropdown`}>
    //         <button onClick={() => openModal(<LanguageSelector />)} className={`language language--${variant} ${props.className ? props.className : ""}`}>
    //             <div className={`icon language__icon language__icon--${variant} ${pathname === '/' ? "language__icon--main" : ""}`}>
    //                 {currentLocale?.icon}
    //             </div>
    //             <div className="language__text">
    //                 {currentLocale?.locale?.toUpperCase()}
    //             </div>
    //             <div className="icon language__icon-down">
    //                 <ArrowDown />
    //             </div>
    //         </button>
    //     </Dropdown>
    // )
}

export default LanguageSelector;