import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const addMeetup = (formData) => {
    console.log(formData);
  };

  return <NewMeetupForm onAddMeetup={addMeetup} />;
}
