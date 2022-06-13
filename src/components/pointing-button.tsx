import { PointingButtonProps } from "../utils/types";
import iconArrow from "../assets/icons/arrow.svg";

function PointingButton({
  variant = "primary",
  direction = "left",
  className = "",
  ...props
}: PointingButtonProps) {
  const classNames = [
    {
      primary: "bg-blue-200 hover:bg-blue-400 focus:bg-blue-300",
      secondary: "bg-red-200 hover:bg-red-400 focus:bg-red-300",
    }[variant],
    "px-4 py-2 transition",
    className,
  ];

  const iconClassName = {
    up: "-rotate-90",
    right: "rotate-180",
    down: "rotate-90",
    left: "",
  }[direction];

  return (
    <button {...props} className={classNames.join(" ")}>
      <img src={iconArrow} alt="" className={iconClassName} />
    </button>
  );
}

export default PointingButton;
