import React from "react";
import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css'

export default function MeetupList(props) {
  return (
    <div className={classes.list}>
      {props.meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} meetup={meetup} />;
      })}
    </div>
  );
}
