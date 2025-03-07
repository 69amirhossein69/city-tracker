import { NavLink } from "react-router-dom";
import Logo from "../components/Logo"
import styles from "./pageNav.module.css"

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo/>
      <ul>

        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>log in</NavLink>
        </li>
      </ul>
    </nav>
  );
}