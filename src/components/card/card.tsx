import { CardProps } from "../../utils/types";

function Card({ children, className = "", ...props }: CardProps) {
  return (
    <article
      {...props}
      tabIndex={0}
      className={`rounded-md overflow-hidden group hover:shadow-md focus:shadow cursor-pointer transition border-2 border-transparent hover:border-2 focus:border-2 hover:border-blue-500 focus:border-blue-400 ${className}`}
    >
      {children}
    </article>
  );
}

export default Card;
