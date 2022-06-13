import * as React from "react";
import NavLogo from "./nav-logo";
import NavLeft from "./nav-left";
import NavRight from "./nav-right";
import iconMenu from "../../assets/icons/menu.svg";
import NavDropdown from "./nav-dropdown";
import { Button } from "../../components";

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="py-4 lg:my-4">
      <ul className="flex items-center justify-between gap-x-10 relative">
        <NavLogo />
        <li className="flex-1 hidden lg:flex items-center ml-4">
          <NavLeft />
          <NavRight />
        </li>
        <li className="lg:hidden">
          <Button rounded onClick={toggleDropdown}>
            <img src={iconMenu} alt="" className="w-5" />
          </Button>
        </li>
        <NavDropdown
          isOpen={isDropdownOpen}
          close={() => setIsDropdownOpen(false)}
        />
      </ul>
    </nav>
  );
}

export default Nav;
