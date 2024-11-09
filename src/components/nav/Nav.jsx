import React, { useState } from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.menuItemContainer}>
          <NavLink to={"/"} className={styles.menuItem}>
            Home
          </NavLink>

          <NavLink to={"/tournaments"} className={styles.menuItem}>
            Tournaments
          </NavLink>

          <NavLink to={"/press-corner"} className={styles.menuItem}>
            Press Corner
          </NavLink>
        </div>

        <div className={styles.logoContainer}>
          <NavLink to={"/"}>
            <img src="/images/logo.png" className={styles.logoImage} alt="" />
          </NavLink>
        </div>
        <div onClick={() => setShowMenu(true)} className={styles.hamContainer}>
          <RxHamburgerMenu />
        </div>

        <div className={styles.menuItemContainer}>
          <NavLink to={"/initiatives"} className={styles.menuItem}>
            Initiatives
          </NavLink>

          <NavLink to={"/about-us"} className={styles.menuItem}>
            About Us
          </NavLink>

          <NavLink to={"/sign-in"} className={styles.menuItem}>
            Login
          </NavLink>
        </div>
      </div>

      <div
        className={`${styles.mobMenuContainer} ${
          !showMenu ? styles.hideMenu : ""
        }`}
      >
        <div className={styles.closeIconContainer}>
          <div className={styles.closeIcon}>
            <IoIosCloseCircleOutline onClick={() => setShowMenu(false)} />
          </div>
        </div>
        <NavLink to={"/"} className={styles.menuItem}>
          Home
        </NavLink>

        <NavLink to={"/tournaments"} className={styles.menuItem}>
          Tournaments
        </NavLink>

        <NavLink to={"/press-corner"} className={styles.menuItem}>
          Press Corner
        </NavLink>
        <NavLink to={"/initiatives"} className={styles.menuItem}>
          Initiatives
        </NavLink>

        <NavLink to={"/about-us"} className={styles.menuItem}>
          About Us
        </NavLink>

        <NavLink to={"/sign-in"} className={styles.menuItem}>
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
