import React, { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavouritesContext from "../../store/favourites-context";

export default function MeetupItem(props) {
  const favsContext = useContext(FavouritesContext);

  const toggleFavHandler = () => {
    if(favsContext.isFav(props.meetup.id)){
      favsContext.removeFav(props.meetup.id);
    }
    else{
      favsContext.addFav({
        id: props.meetup.id,
        title: props.meetup.title,
        image: props.meetup.image,
        address: props.meetup.address,
        description: props.meetup.description
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3> {props.meetup.title} </h3>
          <address> {props.meetup.address} </address>
          <p> {props.meetup.description} </p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavHandler}>{favsContext.isFav(props.meetup.id)? "Remove favourite" : "Add to favs"}</button>
        </div>
      </Card>
    </li>
  );
}
