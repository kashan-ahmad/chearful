import * as React from "react";
import { NavDropdownProps } from "../../utils/types";
import dropdownItems from "./nav-dropdown-items";

function NavDropdown({ isOpen, close }: NavDropdownProps) {
  const dropdownRef = React.createRef<HTMLLIElement>();
  const itemStyle = "px-4 py-2 hover:bg-blue-400 focus:bg-blue-300";

  React.useEffect(() => {
    // The dropdown is closed if the user clicks outside of it.
    window.addEventListener("mousedown", (e) => {
      if (
        // If the reference ain't null
        dropdownRef.current &&
        // and the reference is not the one that was clicked
        !dropdownRef.current.contains(e.target as Node)
      ) {
        close();
      }
    });

    return () => window.removeEventListener("mousedown", () => {});
  }, [dropdownRef]);

  return (
    <li
      ref={dropdownRef}
      className={`flex-col absolute top-0 right-0 p-4 gap-2 text-center text-white bg-blue-500 text-sm z-50 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      {/* If the item is a horizontal rule, insert an `hr` element.
       Otherwise, insert a hyperlink with the corresponding text. */}
      {dropdownItems.map((item, index) =>
        item === "hr" ? (
          <hr key={index} />
        ) : (
          <a key={index} href="#" className={itemStyle}>
            {item}
          </a>
        )
      )}
      {/* A better option would be to assign props to each item itself, but I'm short on time. */}
      <a href="#" onClick={close} className={itemStyle}>
        Back
      </a>
    </li>
  );
}

export default NavDropdown;
