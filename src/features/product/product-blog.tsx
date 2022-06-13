import { Card, CardBody, CardCover } from "../../components";
import { Blog } from "../../utils/types";
import { getBadgeClassName } from "./product-utils";
import iconCalendar from "../../assets/icons/calendar.svg";

function ProductBlog({ id, date, title, author, tags }: Blog) {
  return (
    <Card>
      <CardCover
        src={`https://source.unsplash.com/random/400x400/?id=${id}`}
        alt={title}
      />
      <CardBody>
        <div className="flex text-3xs opacity-80">
          <img src={iconCalendar} alt="" />
          {date}
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xs">{title}</div>
          <div className="text-2xs">
            by <span className="font-bold">{author}</span>
          </div>
        </div>
        <div className="flex overflow-auto gap-2">
          {tags.map((tag, index) => (
            <span key={index} className={`badge ${getBadgeClassName(index)}`}>
              {tag}
            </span>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductBlog;
