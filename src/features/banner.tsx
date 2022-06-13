import { ComponentPropsWithoutRef } from "react";
import { Button, Ellipse } from "../components";
import coverFamily from "../assets/portraits/family.jpg";

function Banner({ className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className="mt-10 lg:mt-20 xl:mt-32 relative">
      <div
        {...props}
        className={`bg-[#393858] py-6 lg:py-10 relative overflow-hidden ${className}`}
      >
        <div className="container mx-auto">
          <div className="text-2xl lg:text-4xl text-white">
            <span className="text-blue-300 font-bold">Join our</span>
            <br />
            Therapist family.
          </div>
          <Button variant="filled" className="mt-4">
            Join now
          </Button>
        </div>
        <Ellipse className="absolute bottom-0 right-0 translate-y-32 sm:right-2/4 sm:translate-x-64 sm:translate-y-24 xl:translate-x-76 xl:translate-y-24 rotate-180 sm:-rotate-90 sm:opacity-80 xl:scale-125" />
        <Ellipse className="absolute bottom-0 right-0 translate-x-32 sm:right-2/4 sm:translate-x-44 sm:translate-y-10 xl:translate-x-48 xl:translate-y-8 rotate-180 sm:rotate-180 sm:opacity-60 xl:scale-125" />
        <Ellipse
          variant="secondary"
          className="absolute bottom-0 right-0 translate-x-20 translate-y-20 sm:right-2/4 sm:translate-x-2/4 sm:translate-y-24 rotate-180 sm:rotate-180 xl:scale-125"
        />
      </div>
      <img
        src={coverFamily}
        alt=""
        className="hidden md:block h-40 lg:h-56 absolute top-0 right-2/4 translate-x-80 -translate-y-4 lg:translate-x-116 lg:-translate-y-8"
      />
    </div>
  );
}

export default Banner;
