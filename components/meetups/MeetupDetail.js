export default function MeetupDetail({ image, title, address, description }) {
  return (
    <>
      <img src={image} alt={title} />

      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </>
  );
}
