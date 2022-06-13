import { Button, Ellipse } from "../../components";
import badgeAppStore from "../../assets/badges/app-store.png";
import badgePlayStore from "../../assets/badges/play-store.png";

function HeroCard() {
  return (
    <div className="relative overflow-hidden bg-blue-100 flex-1 lg:absolute lg:w-132 lg:right-0 lg:-translate-y-64 xl:-translate-x-10 2xl:-translate-x-14 lg:drop-shadow-2xl">
      <Ellipse className="absolute top-0 right-0 translate-x-8 lg:translate-x-8 -translate-y-24 lg:-translate-y-12 rotate-180" />
      <Ellipse
        variant="secondary"
        className="absolute top-0 right-0 translate-x-20 lg:translate-x-16 -translate-y-20 lg:-translate-y-6 z-10 rotate-180"
      />
      <Ellipse className="absolute top-0 right-0 translate-x-28 lg:translate-x-16 -translate-y-8 lg:translate-y-10" />
      <div className="p-4 py-10 lg:p-6 flex flex-col gap-4 w-fit">
        <h1 className="text-2xl lg:text-4xl font-bold">
          <span className="text-blue-600">Mental Health</span>
          <span className="opacity-70">
            ,<br />
            Built around you.
          </span>
        </h1>
        <div className="flex max-w-sm">
          <input
            type="text"
            placeholder="Search specialist, clinic, & mental problems"
            className="px-2 text-2xs w-0 flex-1"
          />
          <Button variant="filled">Find</Button>
        </div>
        <div className="pl-2 lg:pl-4 border-l-4 border-blue-600 flex flex-col gap-1 mt-4">
          <div className="font-bold text-blue-800 text-xs">Download Now</div>
          <p className="text-2xs">
            The top-rated app for stress, anxiety, and depression with over 3
            million users.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#">
              <img src={badgeAppStore} alt="" className="h-8" />
            </a>
            <a href="#">
              <img src={badgePlayStore} alt="" className="h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
