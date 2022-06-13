import { Button } from "../../components";
import iconFlag from "../../assets/icons/flag.svg";
import iconLanguage from "../../assets/icons/language.svg";
import iconArrowDown from "../../assets/icons/arrow-stickless.svg";

function NavRight() {
  return (
    <ul className="flex items-center gap-3">
      <li>
        <Button rounded>
          <img src={iconFlag} alt="" className="w-4" />
          <img src={iconArrowDown} alt="" className="w-4" />
        </Button>
      </li>
      <li>
        <Button rounded>
          <img src={iconLanguage} alt="" className="w-4" />
          En
          <img src={iconArrowDown} alt="" className="w-4" />
        </Button>
      </li>
      <li>
        <Button rounded>Sign up</Button>
      </li>
      <li>
        <Button variant="filled" rounded>
          Log in
        </Button>
      </li>
    </ul>
  );
}

export default NavRight;
