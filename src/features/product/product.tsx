import { Card, CardBody, CardCover } from "../../components";
import { Therapist } from "../../utils/types";
import { getBadgeClassName } from "./product-utils";

/**
 * The default product, in other words a therapist's card.
 */
function Product({
  id,
  name,
  tags,
  experience,
  fields,
  languages,
  fee,
}: Therapist) {
  return (
    <Card>
      <CardCover
        src={`https://source.unsplash.com/random/400x400/?id=${id}`}
        alt={name}
      />
      <CardBody>
        <div className="flex justify-between overflow-auto gap-2">
          {tags.map((tag, index) => (
            <span key={index} className={`badge ${getBadgeClassName(index)}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xs font-bold truncate">
            {name} &#8729;{" "}
            <span className="font-normal text-2xs">{experience}</span>
          </div>
          <div className="truncate text-2xs">{fields.join(" | ")}</div>
        </div>
        <div className="flex">
          <div className="flex-1 truncate text-2xs opacity-80">
            {languages.join(", ")}
          </div>
          <div className="font-bold text-xs">{fee}</div>
        </div>
      </CardBody>
    </Card>
  );
}

export default Product;
