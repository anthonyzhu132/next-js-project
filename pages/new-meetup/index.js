import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
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
  };

  return <NewMeetupForm onAddMeetup={addMeetup} />;
}
