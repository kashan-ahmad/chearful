import { ButtonProps } from "../utils/types";

function Button({
  rounded = false,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classNames = [
    rounded ? "rounded-3xl text-xs px-4" : "text-2xs px-6",
    {
      primary:
        "bg-transparent border-2 border-blue-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white focus:bg-blue-400 focus:border-blue-400 focus:text-white transition",
      secondary:
        "bg-transparent border-2 border-indigo-200 hover:bg-indigo-800 hover:border-indigo-800 hover:text-white focus:bg-indigo-700 focus:border-indigo-700 focus:text-white transition",
      filled:
        "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-700 transition",
    }[variant],
    "py-2 h-8 flex items-center justify-center",
    className,
  ];

  return (
    <button {...props} className={classNames.join(" ")}>
      {children}
    </button>
  );
}

export default Button;
