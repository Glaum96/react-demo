import React, { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

export default function Favourites() {
  const favouritesCtx = useContext(FavouritesContext);

  return (
    <section>
      <h1>My favourites</h1>
      <MeetupList meetups={favouritesCtx.favourites}/>
      {favouritesCtx.totalFavourites === 0 && "No meetups selcted as favourites"}
    </section>
  );
}
