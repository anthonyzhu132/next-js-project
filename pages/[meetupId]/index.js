import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetailPage() {
  return (
    <MeetupDetail
      title="Test"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png"
      description="test"
    />
  );
}


//Need this in dynamic paths to be able to tell the parameters
export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      { params: {
        meetupId: '123'
      }},
      { params: {
        meetupId: '1235'
      }}
    ]
  }
}


export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "Test",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png",
        description: "Test",
        address: "Street 123, City, Province, Country",
      },
    },
  };
}
