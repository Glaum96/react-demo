import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupsPage() {
    
    const history = useHistory();

    const postNewMeetup = (newMeetupData) => {
        console.log(newMeetupData);
        fetch('https://react-meetups-refersh-default-rtdb.firebaseio.com/meetups.json', 
        {
            method: 'POST',
            body: JSON.stringify(newMeetupData),
            headers: {
                'Content-type': 'application/json'
            }
        }
        ).then(() => {
            history.replace('/');
        });
    }

  return (
    <section>
      <div>New meetups page</div>
      <NewMeetupForm postNewMeetup={postNewMeetup}/> 
    </section>
  );
}
