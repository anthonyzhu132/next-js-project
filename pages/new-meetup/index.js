import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";
export default function NewMeetupPage() {
  const router = useRouter();
  const addMeetup = async (formData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>React Meetups with NextJs</title>
        <meta name="description" content="Browse Meetups with NextJs" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </>
  );
}
