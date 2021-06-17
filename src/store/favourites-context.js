import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFav: (favouriteItem) => {},
  removeFav: (meetupId) => {},
  isFav: (meetupId) => {}
});

export function FavouritesContextProvider(props) {
  const [favs, setFavs] = useState([]);

  function addFavouriteHandler(favouriteItem) {
    setFavs((prevFavs) => {
      return prevFavs.concat(favouriteItem);
    });
  }

  function removeFavouriteHandler(meetupId) {
    setFavs((prevFavs) => {
      return prevFavs.filter((meetup) => {
        return meetup.id !== meetupId;
      });
    });
  }

  function itemIsFavouriteHandler(meetupId) {
    return favs.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: favs,
    totalFavourites: favs.length,
    addFav: addFavouriteHandler,
    removeFav: removeFavouriteHandler,
    isFav: itemIsFavouriteHandler
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
