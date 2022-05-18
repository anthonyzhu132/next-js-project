import NewMeetupForm from "../../components/meetups/NewMeetupForm";
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

  return <NewMeetupForm onAddMeetup={addMeetup} />;
}
