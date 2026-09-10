import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

export default function Header() {
  const menus = ["About", "Skills", "Portfolio", "Contacts"];
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <header className="header container">
      <a href="/" className="header__logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#1f1f1f"
        >
          <path d="M240-294 54-480l186-186 42 42-143 144 143 144-42 42Zm172 133-58-18 195-620 57 17-194 621Zm308-133-42-42 143-144-143-144 42-42 186 186-186 186Z" />
        </svg>
      </a>
      <nav className="header__menu">
        <ul className="header__menu-list hidden-mobile">
          {menus.map((link, index) => {
            return (
              <MenuLink key={index} menu={link} scrollTo={link.toLowerCase()} />
            );
          })}
        </ul>
        {/* {isBurgerActive && ( */}
        <div
          className={
            isBurgerActive
              ? "header__overlay visible-mobile active"
              : "header__overlay visible-mobile"
          }
        ></div>
        <ul
          className={
            isBurgerActive
              ? "header__burger-menu active"
              : "header__burger-menu"
          }
        >
          {menus.map((menu, index) => (
            <li key={index} className="header__burger-item">
              <a className="header__burger-menu-link" href={"#" + menu.toLowerCase()} onClick={() => setIsBurgerActive(false)}>
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={isBurgerActive ? "burger-button visible-mobile active" : "burger-button visible-mobile"}
        onClick={() => setIsBurgerActive(!isBurgerActive)}
      >
        <span className="burger-button__line"></span>
        <span className="burger-button__line"></span>
        <span className="burger-button__line"></span>
      </button>
    </header>
  );
}

function MenuLink({ menu, scrollTo }) {
  console.log(menu);

  return (
    <li className="header__menu-item">
      <a className="header__menu-link" href={"#" + scrollTo}>
        {menu}
      </a>
    </li>
  );
}
