import React, { HTMLAttributes } from 'react'
import "./Heading.scss"
import { Link } from '@/i18n/routing';

interface IBreadcrump {
    href?: string;
    title: string;
}
interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
    breadcrump?: IBreadcrump[];
    children?: string;
}

const Heading = ({ breadcrump = [], children }: HeadingProps) => {
    return (
        <div className="heading">
            {/* <ul className="heading__breadcrump">
                <Link className="heading__breadcrump-item" href={"/"}>
                    Home
                </Link>
                {breadcrump?.map((s, index) => (
                    <>
                        {!s.href ?
                            <li className="heading__breadcrump-item" key={`description_${index}`}>
                                {s.title}
                            </li> :
                            <Link className="heading__breadcrump-item" key={`description_${index}`} href={s.href}>
                                {s.title}
                            </Link>
                        }
                    </>
                ))}
            </ul> */}
            <h1 className="heading__title">
                {children}
            </h1>
        </div>
    )
}

export default Heading