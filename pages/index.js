import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

export default function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

//Renders data with server side code -- will fetch when there is change and not re-deploy
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //Fetch Data from API

//   return {
//     props: {
//       meetups: data,
//     },
//   };
// }

// Pre rendering process
// Never executed on the client side -- Only during the build process
export async function getStaticProps() {
  //Fetch Data from API
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.m29e0.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  const meetupMap = meetups.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    id: meetup._id.toString(),
  }));

  return {
    //Props returned here are props for the component to use
    props: {
      meetups: meetupMap,
    },
    //Next JS will wait for 10 seconds before re-fetching the data
    revalidate: 10,
  };
}
