import { CardBodyProps } from "../../utils/types";

function CardBody({ children, className = "", ...props }: CardBodyProps) {
  return (
    <div
      {...props}
      className={`flex flex-col gap-4 p-4 border-2 border-t-0 ${className}`}
    >
      {children}
    </div>
  );
}

export default CardBody;
