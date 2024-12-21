import React from 'react';
import "./Button.scss";
import ArrowRightIcon from "./assets/Arrow Right.svg"
import { Link } from '@/i18n/routing';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'small' | 'arrow';
  size?: 'M' | 'S' | 's' | 'm';
  color?: 'green1' | 'white' | 'gray' | 'green2' | 'orange' | 'green3';
  children?: React.ReactNode;
  iconLeft?: any;
  iconRight?: any;
  disableIcons?: boolean;
  href?: string;
}

const ButtonContent: React.FC<ButtonProps> = ({ variant = 'primary', size = 'M', iconLeft, iconRight, color = 'green1', disableIcons = false, children, className, ...props }) => {
  if(variant === 'primary')
    return (
      <button
        {...props}
        className={`button button--variant-primary button--size-${size} button--color-${color} ${className ? className : ""}`}
      >
        {!disableIcons && <div className={`button__icon button__icon--${size} button__part button__part--primary`}>{iconLeft || " "}</div>}
        <div className="button__part button__part--primary">
          {children}
        </div>
        {!disableIcons && <div className={`button__icon button__icon--${size} button__part button__part--primary`}>{iconRight || " "}</div>}
      </button>
    );
  else if(variant === 'secondary')
  {
    return (
      <button
        {...props}
        className={`button button--variant-secondary button--size-secondary button--color-${color} ${className ? className : ""}`}
      >
        {iconLeft && !disableIcons && <div className="button__icon button__part button__part--secondary">{iconLeft}</div>}
        <div className="button__part button__part--secondary">
          {children}
        </div>
        {iconRight && !disableIcons && <div className="button__icon button__part button__part--secondary">{iconRight}</div>}
      </button>
    )
  }
  else if(variant === 'small')
  {
    return (
      <button
        {...props}
        className={`button button--variant-small button--size-small button--color-${color} ${className ? className : ""}`}
      >
        <div className="button__part button__part--small">
          {children}
        </div>
        {iconRight && !disableIcons && <div className="button__icon button__part button__part--small">{iconRight}</div>}
      </button>
    )
  }
  else if(variant === 'arrow')
    {
      return (
        <button
          {...props}
          className={`button button--variant-arrow button--size-arrow button--color-${color}`}
        >
          <div className="button__part button__part--arrow button__icon">
            <ArrowRightIcon />
          </div>
        </button>
      )
    }
};

const Button = (props: ButtonProps) => {
  if (props.href) {
    return (
      <Link href={props.href} passHref legacyBehavior>
        <ButtonContent {...props} />
      </Link>
    );
  }
  return <ButtonContent {...props} />;
}

export default Button;