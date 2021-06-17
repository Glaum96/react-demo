import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetUpsPage() {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    fetch("https://react-meetups-refersh-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsloading(false);
        setMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All meetups page</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}
