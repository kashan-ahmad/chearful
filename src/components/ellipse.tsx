import { EllipseProps } from "../utils/types";

function Ellipse({
  variant = "primary",
  className = "",
  ...rest
}: EllipseProps) {
  const classNames = [
    {
      primary: "bg-gradient-to-b from-transparent via-blue-200 to-blue-200",
      secondary: "bg-gradient-to-b from-transparent via-red-200 to-red-200",
    }[variant],
    "rounded-full w-40 h-40",
    className,
  ];

  return <div className={classNames.join(" ")} {...rest} />;
}

export default Ellipse;
