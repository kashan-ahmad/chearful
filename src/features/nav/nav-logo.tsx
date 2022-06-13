import iconLogo from "../../assets/logo.svg";

function NavLogo() {
  return (
    <li className="h-4 lg:h-5">
      <a href="#">
        <img src={iconLogo} alt="Chearful" className="h-full" />
      </a>
    </li>
  );
}

export default NavLogo;
