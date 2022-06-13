import { CardCoverProps } from "../../utils/types";

function CardCover({ src, alt, className = "", ...props }: CardCoverProps) {
  return (
    <div {...props} className={`${className} h-60`}>
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
}

export default CardCover;
