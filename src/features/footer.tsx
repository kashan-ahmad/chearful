import logoWhite from "../assets/logo-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGoogle,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import links from "../utils/links";

function Footer() {
  return (
    <footer className="mt-10 bg-gray-600 pt-14 relative">
      <div className="bg-[#393858] text-white">
        <div className="container mx-auto py-5 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 items-center">
            <div className="flex flex-col gap-2 col-span-2">
              <img src={logoWhite} alt="Chearful" className="w-20" />
              <div className="text-3xs">
                Support your emotional well-being through therapy, groups, and
                workshops
              </div>
              <div className="flex items-center gap-2 text-2xs mt-4">
                <FontAwesomeIcon icon={faPaperPlane} />
                112233, Dubai, UAE
              </div>
              <div className="flex items-center gap-2 text-2xs my-2">
                <FontAwesomeIcon icon={faEnvelope} />
                contact@chearful.com
              </div>
              <div className="flex items-center gap-2 text-2xs">
                <FontAwesomeIcon icon={faPhone} />
                +9714-22552352
              </div>
              <div className="flex gap-3 mt-4 text-2xs">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
            {links.map((link, index) => (
              <div key={index} className="grid grid-cols-2">
                <div className="flex flex-col gap-4">
                  <a href="#" className="font-bold text-xs">
                    {link.title}
                  </a>
                  {link.anchors.map((anchor, index) => (
                    <a href="#" key={index} className="text-3xs">
                      {anchor}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute top-0 inset-x-0 justify-center">
        <div className="py-2 px-6 bg-white inline-block translate-y-8">
          <div className="flex items-center gap-4 text-2xs">
            <div className="flex items-center gap-1 divide-x-2 divide-solid">
              <FontAwesomeIcon icon={faPhone} className="pr-2" />
              <div className="flex flex-col gap-1 pl-2">
                <div className="text-3xs opacity-60">Emergency Call</div>
                +1122-22552352
              </div>
            </div>
            <div className="opacity-60 text-3sx">- or -</div>
            <div className="flex items-center gap-1 divide-x-2 divide-solid">
              <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
              <div className="flex flex-col gap-1 pl-2">
                <div className="text-3xs opacity-60">Emergency Call</div>
                contact@chearful.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
