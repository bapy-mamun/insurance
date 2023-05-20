import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ModifierProp, mapModifiers } from "../../../libs/component";
import "./index.scss";

type InheritedProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "onClick"
> &
  Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "type" | "onClick" | "disabled"
  >;

export interface ButtonProps extends InheritedProps {
  modifiers?: ModifierProp<"primary" | "secondary">;
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  modifiers,
  children,
  href,
  target,
  type,
  onClick,
  disabled,
  className: additionalClassName = "",
  id,
}) => {
  if (href) {
    const componentClassName = mapModifiers(
      "a-button",
      modifiers,
      disabled && "disabled"
    );
    const className = `${componentClassName} ${additionalClassName}`.trim();

    return (
      <a
        href={href}
        target={target}
        className={className}
        id={id}
        onClick={onClick}
      >
        <div className="a-button__label">{children}</div>
      </a>
    );
  } else {
    const componentClassName = mapModifiers("a-button", modifiers);
    const className = `${componentClassName} ${additionalClassName}`.trim();

    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={className}
        id={id}
      >
        <div className="a-button__label">{children}</div>
      </button>
    );
  }
};
