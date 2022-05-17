import MeetupList from "../components/meetups/MeetupList";
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
  return {
    //Props returned here are props for the component to use
    props: {
      meetups: data,
    },
    //Next JS will wait for 10 seconds before re-fetching the data
    revalidate: 10,
  };
}
