import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourites-context";

export default function MainNavigation() {
  const favsContext = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="new-meetup">
              New meetup
              <span className={classes.badge}>{favsContext.totalFavourites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
