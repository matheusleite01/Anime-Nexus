import React from "react";
import styles from "./Sidebar.module.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as MonitorIcon } from "../assets/monitor-icon.svg";
import { ReactComponent as Book } from "../assets/book-open.svg";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Film } from "../assets/film.svg";
import { ReactComponent as Help } from "../assets/help-circle.svg";
import { ReactComponent as Linkedin } from "../assets/LinkedIn svg.svg";
import { ReactComponent as Twitter } from "../assets/Twitter  svg.svg";
import { ReactComponent as Github } from "../assets/Github svg.svg";
import { ReactComponent as Close } from "../assets/close.svg";
import { Link, NavLink } from "react-router-dom";
import { GlobalContext } from "../UserContext";

const Sidebar = () => {
  const { isOpen, setIsOpen } = React.useContext(GlobalContext);

  return (
    <section
      className={`${styles.sidebar} ${isOpen ? styles.sidebarIsOpen : ""}`}
    >
      <div>
        <div className={styles.logo}>
          <Link to="/">
            <Logo />
            Anime Nexus
          </Link>
          {isOpen && (
            <Close
              onClick={() => setIsOpen(false)}
              className={styles.closeIcon}
            />
          )}
        </div>
        <div className={styles.start}>
          <p>Start Here</p>
          <nav>
            <ul onClick={() => setIsOpen(false)}>
              <li>
                <NavLink to="/" end>
                  <MonitorIcon />
                  Anime
                </NavLink>
              </li>
              <li>
                <NavLink to="/manga">
                  <Book />
                  Manga
                </NavLink>
              </li>
              <li>
                <NavLink to="/character">
                  <User />
                  Character
                </NavLink>
              </li>
              <li>
                <NavLink to="/producers">
                  <Film />
                  Producers
                </NavLink>
              </li>
              <li>
                <NavLink to="/info">
                  <Help />
                  Info
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/matheus-leite-02902319b/"
              target="blank"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/home" target="blank">
              <Twitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/matheusleite01" target="blank">
              <Github />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
