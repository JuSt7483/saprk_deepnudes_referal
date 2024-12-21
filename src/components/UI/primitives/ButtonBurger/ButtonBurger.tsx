interface BurgerButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    open?: boolean;
    variant?: "default" | "inverted";
}

const BurgerButton = ({ variant = "default", ...props }: BurgerButtonProps) => (
    <button {...props} className={`burger ${variant === "inverted" ? "burger--inverted" : ""} ${props.open ? "burger--open" : ""} ${props.className ? props.className : ""}`}>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
    </button>
)

export default BurgerButton;