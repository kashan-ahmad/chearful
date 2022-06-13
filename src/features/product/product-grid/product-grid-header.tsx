import { PointingButton } from "../../../components";
import { ProductGridHeaderProps } from "../../../utils/types";

function ProductGridHeader({
  children,
  prevButtonProps,
  nextButtonProps,
  className = "",
  ...props
}: ProductGridHeaderProps) {
  return (
    <div
      {...props}
      className={`flex justify-between items-center ${className}`}
    >
      <div className="text-xl lg:text-2xl text-indigo-900">{children}</div>
      <div className="flex">
        {prevButtonProps && <PointingButton {...prevButtonProps} />}
        {nextButtonProps && <PointingButton {...nextButtonProps} />}
      </div>
    </div>
  );
}

export default ProductGridHeader;
