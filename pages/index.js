import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
const data = [
  {
    id: "123",
    title: "123",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png",
    address: "123 Test Street",
    description: "123",
  },
  {
    id: "1234",
    title: "123",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png",
    address: "123 Test Street",
    description: "123",
  },
  {
    id: "12345",
    title: "123",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png",
    address: "123 Test Street",
    description: "123",
  },
];

export default function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {

    setLoadedMeetups(data)
    //get request to server
    //set state
  }, [])
  return <MeetupList meetups={loadedMeetups} />;
}
