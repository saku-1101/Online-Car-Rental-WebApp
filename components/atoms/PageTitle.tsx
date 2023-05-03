export default function PageTitle(props: { title: string }) {
  return (
    <>
      <p className="md:my-10 lg:my-20 text-2xl text-center">{props.title}</p>
    </>
  );
}
