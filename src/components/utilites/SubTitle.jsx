export default function SubTitle({ sectionTitle, title }) {
  return (
    <div className="flex flex-col gap-5 items-start w-fit">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10  bg-secondary-3 rounded" />
        <p className="font-semibold text-secondary-3">{sectionTitle}</p>
      </div>
      <h2 className="text-text-3 font-semibold font-inter text-4xl">
       {title}
      </h2>
    </div>
  );
}
