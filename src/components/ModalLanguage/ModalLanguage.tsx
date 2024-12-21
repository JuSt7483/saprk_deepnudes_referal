"use client";

import React from 'react';
import "./ModalLanguage.scss";
import ModalLayout from "@/components/UI/primitives/Modal/ModalLayout";
import Button from "@/components/UI/primitives/Button/Button";
import ModalInstruction from "@/components/ModalInstruction/ModalInstruction";
import {locales} from "@/shared/data/locales";
import {CheckCirle24Icon, CheckSquare2Icon} from "@/components/UI/svg";
import {Link, usePathname} from "@/i18n/routing";
import {useLocale} from "next-intl";

const ModalLanguage = () => {
    const locale = useLocale();
    const pathname = usePathname()
    return (
        <ModalLayout>
            <div className="modallanguage">
                <div className="modallanguage__heading">
                    CHOOSE LANGUAGE
                </div>
                <ul className="modallanguage__list">
                    {locales.map((item, index) => (
                        <Link key={index} href={pathname} locale={item.locale} className={`language__link ${item.locale === locale ? "language__link--active": ""}`}>
                            <span className="icon language__link-icon">
                                {item.icon}
                            </span>
                                    <span className="language__link-title">
                                {item.title}
                            </span>
                            {item.locale === locale &&
                                <span className="icon language__link-icon">
                                    <CheckSquare2Icon />
                                </span>
                            }
                        </Link>
                    ))}
                </ul>
            </div>
        </ModalLayout>
    );
};

export default ModalLanguage;