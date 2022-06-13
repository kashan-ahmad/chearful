import { Button } from "../../../components";
import { ProductGridProps } from "../../../utils/types";
import ProductGridHeader from "./product-grid-header";
import therapists from "../../../utils/therapists";
import therapistDomains from "../../../utils/therapist-domains";
import Product from "../product";
import blogs from "../../../utils/blogs";
import ProductBlog from "../product-blog";

function ProductGrid({ product = "therapists" }: ProductGridProps) {
  return (
    <div className="mt-10 xl:mt-20 flex flex-col gap-4">
      <ProductGridHeader
        nextButtonProps={{
          direction: "right",
        }}
        prevButtonProps={{
          variant: "secondary",
        }}
      >
        {product === "therapists" ? (
          <div>
            Top <span className="font-bold">Practitioner</span>
          </div>
        ) : (
          <div className="font-bold">Popular Blogs</div>
        )}
      </ProductGridHeader>
      {product === "therapists" && (
        <div className="flex gap-2 overflow-auto flex-nowrap">
          {therapistDomains.map((domain, index) => (
            <Button key={index} variant="secondary" rounded>
              {domain}
            </Button>
          ))}
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {product === "therapists" &&
          therapists.map((therapist, index) => (
            <Product {...therapist} key={index} />
          ))}
        {product === "blogs" &&
          blogs.map((blog, index) => <ProductBlog {...blog} key={index} />)}
      </div>
    </div>
  );
}

export default ProductGrid;
