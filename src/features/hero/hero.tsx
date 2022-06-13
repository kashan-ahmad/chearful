import HeroCard from "./hero-card";
import portraitCover from "../../assets/portraits/cover.png";
import { Ellipse, PointingButton } from "../../components";

function Hero() {
  return (
    <div className="relative md:flex items-center justify-center gap-6 lg:mt-10 lg:h-100">
      <PointingButton variant="secondary" className="hidden md:block" />
      <div className="relative flex-1">
        <div className="hidden lg:block w-92 xl:translate-x-10 2xl:translate-x-14">
          <img src={portraitCover} alt="" />
        </div>
        <div className="hidden lg:flex absolute top-0 w-full justify-center">
          <Ellipse className="rotate-180 translate-y-6 2xl:-translate-x-5 opacity-70" />
        </div>
        <HeroCard />
      </div>
      <PointingButton direction="right" className="hidden md:block" />
    </div>
  );
}

export default Hero;
